"use client"

import Image from "next/image"
import Link from "next/link"
import { Menu, Search, X } from "lucide-react"

import {
  Accordion,
  AccordionContent,
  AccordionItem,
  AccordionTrigger,
} from "@/components/ui/accordion"
import { Button, buttonVariants } from "@/components/ui/button"
import {
  NavigationMenu,
  NavigationMenuContent,
  NavigationMenuItem,
  NavigationMenuList,
  NavigationMenuTrigger,
  navigationMenuTriggerStyle,
} from "@/components/ui/navigation-menu"
import { Separator } from "@/components/ui/separator"
import {
  Sheet,
  SheetClose,
  SheetContent,
  SheetTitle,
  SheetTrigger,
} from "@/components/ui/sheet"
import { Logo } from "@/components/marketing/logo"
import {
  CompanyMega,
  ProductMega,
  ResourcesMega,
  SolutionsMega,
  resources,
  solutions,
} from "@/components/proposal/mega-menu"
import { cn } from "@/lib/utils"
import { aboutLinks } from "@/content/navigation"
import { redesignHome } from "@/content/redesign"

const triggerClass = cn(
  navigationMenuTriggerStyle(),
  "h-8 rounded-md bg-transparent px-2.5 text-[13px] font-medium"
)

export function ProposalHeader() {
  return (
    <header className="sticky top-0 z-40 border-b border-black/8 bg-white/80 backdrop-blur-md">
      <div className="container-site relative flex h-14 items-center">
        <Sheet>
          <SheetTrigger
            render={
              <Button
                variant="ghost"
                size="icon"
                className="mr-2 rounded-md hover:bg-muted min-[900px]:hidden"
              />
            }
          >
            <Menu className="size-5" />
            <span className="sr-only">Menu</span>
          </SheetTrigger>
          <SheetContent
            side="right"
            showCloseButton={false}
            className="w-full max-w-sm gap-0 border-l bg-white p-0 sm:max-w-sm"
          >
            <div className="flex items-center justify-between border-b px-4 py-3">
              <Logo className="w-[120px] text-foreground" />
              <SheetClose
                render={
                  <Button variant="ghost" size="icon" className="rounded-md" />
                }
              >
                <X className="size-5" />
                <span className="sr-only">Close</span>
              </SheetClose>
              <SheetTitle className="sr-only">Menu</SheetTitle>
            </div>
            <nav className="flex-1 overflow-y-auto px-4 py-2">
              <Accordion className="w-full">
                <AccordionItem value="product">
                  <AccordionTrigger className="rounded-md px-1 text-[15px] hover:no-underline">
                    Product
                  </AccordionTrigger>
                  <AccordionContent className="[&_a]:no-underline">
                    <ul className="pb-2">
                      {redesignHome.markets.map((market) => (
                        <li key={market.href}>
                          <SheetClose
                            render={
                              <Link
                                href={market.href}
                                className="flex items-center gap-3 rounded-md px-1 py-2"
                              />
                            }
                          >
                            <span className="relative size-10 overflow-hidden rounded-sm">
                              <Image
                                src={market.image}
                                alt=""
                                fill
                                className="object-cover"
                                sizes="40px"
                              />
                            </span>
                            <span>
                              <span className="block text-sm font-medium">
                                {market.label}
                              </span>
                              <span className="block text-xs text-muted-foreground">
                                {market.headline}
                              </span>
                            </span>
                          </SheetClose>
                        </li>
                      ))}
                    </ul>
                  </AccordionContent>
                </AccordionItem>
                <AccordionItem value="solutions">
                  <AccordionTrigger className="rounded-md px-1 text-[15px] hover:no-underline">
                    Solutions
                  </AccordionTrigger>
                  <AccordionContent className="[&_a]:no-underline">
                    <ul className="pb-2">
                      {solutions.map((item) => (
                        <li key={item.href}>
                          <SheetClose
                            render={
                              <Link
                                href={item.href}
                                className="block rounded-md px-1 py-2 text-sm"
                              />
                            }
                          >
                            {item.title}
                          </SheetClose>
                        </li>
                      ))}
                    </ul>
                  </AccordionContent>
                </AccordionItem>
                <AccordionItem value="resources">
                  <AccordionTrigger className="rounded-md px-1 text-[15px] hover:no-underline">
                    Resources
                  </AccordionTrigger>
                  <AccordionContent className="[&_a]:no-underline">
                    <ul className="pb-2">
                      {resources.map((item) => (
                        <li key={item.href}>
                          <SheetClose
                            render={
                              <Link
                                href={item.href}
                                className="block rounded-md px-1 py-2 text-sm"
                              />
                            }
                          >
                            {item.title}
                          </SheetClose>
                        </li>
                      ))}
                    </ul>
                  </AccordionContent>
                </AccordionItem>
                <AccordionItem value="company">
                  <AccordionTrigger className="rounded-md px-1 text-[15px] hover:no-underline">
                    Company
                  </AccordionTrigger>
                  <AccordionContent className="[&_a]:no-underline">
                    <ul className="pb-2">
                      {aboutLinks.map((item) => (
                        <li key={item.href}>
                          <SheetClose
                            render={
                              <Link
                                href={item.href}
                                className="block rounded-md px-1 py-2 text-sm"
                              />
                            }
                          >
                            {item.label}
                          </SheetClose>
                        </li>
                      ))}
                    </ul>
                  </AccordionContent>
                </AccordionItem>
              </Accordion>
            </nav>
            <Separator />
            <div className="flex flex-col gap-2 p-4">
              <SheetClose
                render={
                  <Link
                    href="/corporate/my-ihc-digital-gateway-your-assets"
                    className={cn(
                      buttonVariants({ variant: "ihcOutline", size: "lg" }),
                      "h-10 rounded-sm"
                    )}
                  />
                }
              >
                My IHC
              </SheetClose>
              <SheetClose
                render={
                  <Link
                    href="/contact"
                    className={cn(
                      buttonVariants({ variant: "ihc", size: "lg" }),
                      "h-10 rounded-sm"
                    )}
                  />
                }
              >
                Contact
              </SheetClose>
            </div>
          </SheetContent>
        </Sheet>

        <Link href="/" className="text-foreground">
          <span className="sr-only">Royal IHC</span>
          <Logo className="w-[120px] min-[900px]:w-[132px]" />
        </Link>

        <NavigationMenu
          align="center"
          sideOffset={8}
          className="absolute top-1/2 left-1/2 hidden max-w-none -translate-x-1/2 -translate-y-1/2 min-[900px]:flex"
          popupClassName="rounded-md data-starting-style:scale-100 data-ending-style:scale-100"
        >
          <NavigationMenuList className="gap-0.5">
            <NavigationMenuItem>
              <NavigationMenuTrigger className={triggerClass}>
                Product
              </NavigationMenuTrigger>
              <NavigationMenuContent className="w-auto p-0">
                <ProductMega />
              </NavigationMenuContent>
            </NavigationMenuItem>
            <NavigationMenuItem>
              <NavigationMenuTrigger className={triggerClass}>
                Solutions
              </NavigationMenuTrigger>
              <NavigationMenuContent className="w-auto p-0">
                <SolutionsMega />
              </NavigationMenuContent>
            </NavigationMenuItem>
            <NavigationMenuItem>
              <NavigationMenuTrigger className={triggerClass}>
                Resources
              </NavigationMenuTrigger>
              <NavigationMenuContent className="w-auto p-0">
                <ResourcesMega />
              </NavigationMenuContent>
            </NavigationMenuItem>
            <NavigationMenuItem>
              <NavigationMenuTrigger className={triggerClass}>
                Company
              </NavigationMenuTrigger>
              <NavigationMenuContent className="w-auto p-0">
                <CompanyMega />
              </NavigationMenuContent>
            </NavigationMenuItem>
          </NavigationMenuList>
        </NavigationMenu>

        <div className="ml-auto flex items-center gap-1 min-[900px]:gap-2">
          <Link
            href="/search"
            className={cn(
              navigationMenuTriggerStyle(),
              "size-8 rounded-md bg-transparent p-0"
            )}
            aria-label="Search"
          >
            <Search className="size-4" />
          </Link>
          <Link
            href="/corporate/my-ihc-digital-gateway-your-assets"
            className={cn(triggerClass, "hidden min-[900px]:inline-flex")}
          >
            My IHC
          </Link>
          <Link
            href="/contact"
            className={cn(
              buttonVariants({ variant: "ihc", size: "sm" }),
              "h-8 rounded-md px-3 text-[13px]"
            )}
          >
            Contact
          </Link>
        </div>
      </div>
    </header>
  )
}
