"use server";

import { db } from "@/app/_lib/prisma";
import { createSaleSchema } from "./schema";
import { revalidatePath } from "next/cache";

export const createSale = async (data: createSaleSchema) => {
  createSaleSchema.parse(data);
  await db.$transaction(async (trx) => {
    const sale = await trx.sale.create({
      data: {
        date: new Date(),
      },
    });

    for (const product of data.products) {
      const productFromDb = await db.product.findUnique({
        where: {
          id: product.id,
        },
      });
      if (!productFromDb) {
        throw new Error("Produto não encontrado");
      }
      const productIsOutOfStock = product.quantity > productFromDb.stock;
      if (productIsOutOfStock) {
        throw new Error(
          `Quantidade do produto ${productFromDb.name} excede o estoque disponível`,
        );
      }
      await trx.saleProduct.create({
        data: {
          saleId: sale.id,
          productId: product.id,
          quantity: product.quantity,
          unitPrice: productFromDb.price,
        },
      });
      await trx.product.update({
        where: {
          id: product.id,
        },
        data: {
          stock: { decrement: product.quantity },
        },
      });
    }
  });
  revalidatePath("/products");
  revalidatePath("/sales");
};
