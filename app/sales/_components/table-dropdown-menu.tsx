import { Button } from "@/app/_components/ui/button";
import {
  DropdownMenu,
  DropdownMenuTrigger,
  DropdownMenuContent,
  DropdownMenuLabel,
  DropdownMenuSeparator,
  DropdownMenuItem,
} from "@/app/_components/ui/dropdown-menu";
import { Product } from "@prisma/client";
import {
  MoreHorizontalIcon,
  ClipboardCopyIcon,
  Trash2Icon,
} from "lucide-react";

interface SalesTableDropdownMenuProps {
  product: Pick<Product, "id">;
  onDelete: (productId: string) => void;
}

const SalesTableDropdownMenu = ({
  product,
  onDelete,
}: SalesTableDropdownMenuProps) => {
  return (
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
        <DropdownMenuItem
          className="gap-1.5"
          onClick={() => onDelete(product.id)}
        >
          <Trash2Icon size={16} />
          Deletar
        </DropdownMenuItem>
      </DropdownMenuContent>
    </DropdownMenu>
  );
};

export default SalesTableDropdownMenu;
