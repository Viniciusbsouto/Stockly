"use client";

import { Button } from "@/app/_components/ui/button";
import { Sheet, SheetTrigger } from "@/app/_components/ui/sheet";
import UpsertSheetContent from "./upsert-sheet-content";
import { ProductDto } from "@/app/_data-access/product/get-products";
import { ComboboxOption } from "@/app/_components/ui/combobox";
import { useState } from "react";
import { PlusIcon } from "lucide-react";

interface UpsertSaleButtonProps {
  products: ProductDto[];
  productOptions: ComboboxOption[];
}

const UpsertSaleButton = (props: UpsertSaleButtonProps) => {
  const [sheetIsOpen, setSheetIsOpen] = useState(false);
  return (
    <Sheet open={sheetIsOpen} onOpenChange={setSheetIsOpen}>
      <SheetTrigger asChild>
        <Button className="gap-2">
          <PlusIcon size={20} />
          Nova venda
        </Button>
      </SheetTrigger>
      <UpsertSheetContent
        setSheetIsOpen={setSheetIsOpen}
        {...props}
        isOpen={sheetIsOpen}
      />
    </Sheet>
  );
};

export default UpsertSaleButton;
