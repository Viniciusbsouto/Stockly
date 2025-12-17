"use server";

import { db } from "@/app/_lib/prisma";
import { revalidatePath } from "next/cache";
import { upsertProductSchema } from "./schema";

import { actionClient } from "@/app/_lib/safe-action";


export const upsertProduct = actionClient.schema(upsertProductSchema).action(async ({ parsedInput: data }) => {
   await db.product.upsert({
    where: { id: data.id || "" },
    update: data,
    create: data,
  });
  revalidatePath("/products");
})

