"use client";

import React from "react";
import Link from "next/link";
import { cn } from "@/lib/utils";
import {
  NavigationMenu,
  NavigationMenuContent,
  NavigationMenuItem,
  NavigationMenuLink,
  NavigationMenuList,
  NavigationMenuTrigger,
} from "@/components/ui/navigation-menu";
import Logo from "./logo";

const components: { title: string; description: string }[] = [
  {
    title: "Congelado",

    description:
      "Template recomendado para a maioria dos casos de uso. Inclui todos os componentes necessários para começar.",
  },
  {
    title: "Rápido",

    description:
      "Um template com um conjunto mínimo de componentes. Use este template se você quiser construir seus próprios componentes.",
  },
  {
    title: "Toscana",

    description:
      "Template avançado com mais componentes e recursos. Use este template se você quiser construir uma UI complexa.",
  },
  {
    title: "Âmbar",

    description:
      "Ótimo para construir uma página de marketing ou landing page.",
  },
  {
    title: "Maré",

    description:
      "Template em camadas com uma navegação lateral. Ótimo para construir um painel de controle ou administração.",
  },
  {
    title: "Menta",

    description:
      "Template agradável para construir um blog ou um site rico em conteúdo.",
  },
];

export function NavigationMenuBar() {
  return (
    <NavigationMenu>
      <NavigationMenuList className="hidden md:flex md:space-x-4">
        <NavigationMenuItem>
          <NavigationMenuTrigger>Começando</NavigationMenuTrigger>
          <NavigationMenuContent>
            <ul className="grid gap-3 p-6 md:w-[400px] lg:w-[500px] lg:grid-cols-[.75fr_1fr]">
              <li className="row-span-3">
                <NavigationMenuLink asChild>
                  <a
                    className="flex h-full w-full select-none flex-col justify-end rounded-md bg-gradient-to-b from-muted/50 to-muted p-6 no-underline outline-none focus:shadow-md"
                    href="/"
                  >
                    <Logo />
                    <div className="mb-2 mt-4 text-lg font-medium">
                      Software Ipsum
                    </div>
                    <p className="text-sm leading-tight text-muted-foreground">
                      Plataforma de eCommerce para venda de produtos digitais.
                    </p>
                  </a>
                </NavigationMenuLink>
              </li>
              <ListItem title="Introdução">
                Aprenda sobre os fundamentos do Ipsum.
              </ListItem>
              <ListItem title="Demonstração">
                Como construir uma loja em 60 segundos com Ipsum
              </ListItem>
              <ListItem title="Comunidade">
                Junte-se à comunidade e obtenha ajuda ou suporte.
              </ListItem>
            </ul>
          </NavigationMenuContent>
        </NavigationMenuItem>
        <NavigationMenuItem>
          <NavigationMenuTrigger>Templates</NavigationMenuTrigger>
          <NavigationMenuContent>
            <ul className="grid w-[400px] gap-3 p-4 md:w-[500px] md:grid-cols-2 lg:w-[600px] ">
              {components.map((component) => (
                <ListItem key={component.title} title={component.title}>
                  {component.description}
                </ListItem>
              ))}
            </ul>
          </NavigationMenuContent>
        </NavigationMenuItem>
        <NavigationMenuItem>
          <Link href="/" legacyBehavior passHref>
            <NavigationMenuLink className="font-medium">
              Documentação
            </NavigationMenuLink>
          </Link>
        </NavigationMenuItem>

        <NavigationMenuItem>
          <Link href="/" legacyBehavior passHref>
            <NavigationMenuLink
              className="
            font-medium"
            >
              Preços
            </NavigationMenuLink>
          </Link>
        </NavigationMenuItem>
      </NavigationMenuList>
    </NavigationMenu>
  );
}

const ListItem = React.forwardRef<
  React.ElementRef<"a">,
  React.ComponentPropsWithoutRef<"a">
>(({ className, title, children, ...props }, ref) => {
  return (
    <li>
      <NavigationMenuLink asChild>
        <a
          ref={ref}
          className={cn(
            "block select-none space-y-1 rounded-md p-3 leading-none no-underline outline-none transition-colors hover:bg-accent hover:text-accent-foreground focus:bg-accent focus:text-accent-foreground",
            className
          )}
          {...props}
        >
          <div className="text-sm font-medium leading-none">{title}</div>
          <p className="line-clamp-2 text-sm leading-snug text-muted-foreground">
            {children}
          </p>
        </a>
      </NavigationMenuLink>
    </li>
  );
});
ListItem.displayName = "ListItem";
