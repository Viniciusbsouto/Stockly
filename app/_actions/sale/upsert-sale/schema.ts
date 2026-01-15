import z from "zod";

export const upsertSaleSchema = z.object({
  id: z.string().uuid().optional(),
  products: z.array(
    z.object({
      id: z.string().uuid(),
      quantity: z.number().int().positive(),
    }),
  ),
});

export type upsertSaleSchema = z.infer<typeof upsertSaleSchema>;
