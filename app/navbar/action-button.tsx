import React from "react";
import { Button } from "@/components/ui/button";
import {
  Sheet,
  SheetContent,
  SheetDescription,
  SheetHeader,
  SheetTitle,
  SheetTrigger,
} from "@/components/ui/sheet";

import { AlignJustify } from "lucide-react";
import Link from "next/link";

const ActionButton = () => {
  return (
    <div>
      <div className="md:hidden">
        <Sheet>
          <SheetTrigger>
            <AlignJustify />
          </SheetTrigger>

          <SheetContent>
            <SheetHeader>
              <SheetDescription>
                <div className="flex flex-col space-y-4 items-start w-full text-lg text-black mt-10">
                  <Link href={"/"}>Entrar</Link>
                  <Link href={"/"}>Cadastrar</Link>
                  <Link href={"/"}>Preço</Link>
                  <Link href={"/"}>Contato</Link>
                  <Link href={"/"}>Sobre</Link>
                </div>
              </SheetDescription>
            </SheetHeader>
          </SheetContent>
        </Sheet>
      </div>

      <div className="hidden md:flex md:space-x-4">
        <Button className="text-md" variant={"ghost"}>
          Entrar
        </Button>
        <Button className="text-md bg-emerald-600">
          Cadastrar
        </Button>
      </div>
    </div>
  );
};

export default ActionButton;
