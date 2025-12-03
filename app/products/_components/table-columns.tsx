"use client";

import { Badge } from "@/app/_components/ui/badge";
import { Product } from "@prisma/client";
import { ColumnDef } from "@tanstack/react-table";

// Status será derivado de `stock` (stock > 0 => "Em estoque")

export const productTableColumns: ColumnDef<Product>[] = [
  {
    accessorKey: "name",
    header: "Produto",
  },
  {
    accessorKey: "price",
    header: "Valor unitário",
  },
  {
    accessorKey: "stock",
    header: "Estoque",
  },
  {
    id: "status",
    header: "Status",
    cell: (row) => {
      const product = row.row.original;
      const inStock = product.stock > 0;
      const label = inStock ? "Em estoque" : "Fora de estoque";
      return <Badge variant={inStock ? "default" : "outline"}>{label}</Badge>;
    },
  },
];
