"use client";

import { Badge } from "@/app/_components/ui/badge";
import { ColumnDef } from "@tanstack/react-table";
import ProductTableDropdownMenu from "./table-dropdown-menu";
import { ProductDto } from "@/app/_data-access/product/get-products";

// Status será derivado de `stock` (stock > 0 => "Em estoque")

export const productTableColumns: ColumnDef<ProductDto>[] = [
  {
    accessorKey: "name",
    header: "Produto",
  },
  {
    accessorKey: "price",
    header: "Valor unitário",
    cell: (row) => {
      const product = row.row.original;
      return Intl.NumberFormat("pt-BR", {
        style: "currency",
        currency: "BRL",
      }).format(Number(product.price));
    },
  },
  {
    accessorKey: "stock",
    header: "Estoque",
  },
  {
    accessorKey: "status",
    header: "Status",
    cell: (row) => {
      const product = row.row.original;
      const inStock = product.stock > 0;
      const label = inStock ? "Em estoque" : "Fora de estoque";
      return <Badge variant={inStock ? "default" : "outline"}>{label}</Badge>;
    },
  },
  {
    accessorKey: "actions",
    header: "Ações",
    cell: (row) => {
      return <ProductTableDropdownMenu product={row.row.original} />;
    },
  },
];
