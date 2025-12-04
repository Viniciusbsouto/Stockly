import { Dialog, DialogTrigger } from "@/app/_components/ui/dialog";
import UpsertProductDialogContent from "./upsert-dialog-content";
import {
  AlertDialog,
  AlertDialogTrigger,
} from "@/app/_components/ui/alert-dialog";
import { Button } from "@/app/_components/ui/button";
import {
  DropdownMenu,
  DropdownMenuTrigger,
  DropdownMenuContent,
  DropdownMenuLabel,
  DropdownMenuSeparator,
  DropdownMenuItem,
} from "@/app/_components/ui/dropdown-menu";
import {
  MoreHorizontalIcon,
  ClipboardCopyIcon,
  EditIcon,
  Trash2Icon,
} from "lucide-react";
import { useState } from "react";
import DeleteProductDialogContent from "./delete-dialog-content";
import { Product } from "@prisma/client";

interface ProductTableDropdownMenuProps {
  product: Product;
}

const ProductTableDropdownMenu = ({product} : ProductTableDropdownMenuProps) => {
  const [editDialogIsOpen, setEditDialogIsOpen] = useState(false);

  return (
    <Dialog open={editDialogIsOpen} onOpenChange={setEditDialogIsOpen}>
      <AlertDialog>
        <DropdownMenu>
          <DropdownMenuTrigger asChild>
            <Button variant="ghost">
              <MoreHorizontalIcon size={16} />
            </Button>
          </DropdownMenuTrigger>
          <DropdownMenuContent>
            <DropdownMenuLabel>Ações</DropdownMenuLabel>
            <DropdownMenuSeparator />
            <DropdownMenuItem
              className="gap-1.5"
              onClick={() => navigator.clipboard.writeText(product.id)}
            >
              <ClipboardCopyIcon size={16} />
              Copiar ID
            </DropdownMenuItem>
            <DialogTrigger asChild>
              <DropdownMenuItem>
                <EditIcon size={16} className="gap-1.5" />
                Editar
              </DropdownMenuItem>
            </DialogTrigger>
            <AlertDialogTrigger asChild>
              <DropdownMenuItem className="gap-1.5">
                <Trash2Icon size={16} />
                Deletar
              </DropdownMenuItem>
            </AlertDialogTrigger>
          </DropdownMenuContent>
        </DropdownMenu>
        <DeleteProductDialogContent productId={product.id} />
      </AlertDialog>
      <UpsertProductDialogContent
        defaultValues={{
          id: product.id,
          name: product.name,
          price: Number(product.price),
          stock: product.stock,
        }}
        onSuccess={() => setEditDialogIsOpen(false)}
      />
    </Dialog>
  );
};

export default ProductTableDropdownMenu;
