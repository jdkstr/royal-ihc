"use client"

import { useEffect, useState } from "react"
import Link from "next/link"
import { usePathname } from "next/navigation"
import { ChevronDown, Search, X } from "lucide-react"

import { Button } from "@/components/ui/button"
import {
  Sheet,
  SheetClose,
  SheetContent,
  SheetTitle,
  SheetTrigger,
} from "@/components/ui/sheet"
import {
  NavigationMenu,
  NavigationMenuContent,
  NavigationMenuItem,
  NavigationMenuLink,
  NavigationMenuList,
  NavigationMenuTrigger,
} from "@/components/ui/navigation-menu"
import { Logo } from "@/components/marketing/logo"
import { cn } from "@/lib/utils"
import {
  hamburgerNav,
  primaryNav,
  utilityNav,
} from "@/content/navigation"
import type { NavLink } from "@/content/types"

function MenuIcon({ className }: { className?: string }) {
  return (
    <svg
      className={className}
      width="30"
      height="16"
      viewBox="0 0 30 16"
      aria-hidden
    >
      <path
        fill="currentColor"
        d="M20 0a1 1 0 0 1 0 2H1a1 1 0 1 1 0-2h19Zm4 7a1 1 0 0 1 0 2H1a1 1 0 1 1 0-2h23Zm5 7a1 1 0 0 1 0 2H1a1 1 0 1 1 0-2h28Z"
      />
    </svg>
  )
}

function HamburgerTree({
  items,
  depth = 0,
}: {
  items: NavLink[]
  depth?: number
}) {
  const [open, setOpen] = useState<string | null>(null)

  return (
    <ul
      className={cn(
        depth === 0
          ? "space-y-1"
          : "mt-2 space-y-1 border-l border-white/20 pl-4"
      )}
    >
      {items.map((item) => {
        const id = `${depth}-${item.href}-${item.label}`
        if (item.children?.length) {
          const isOpen = open === id
          return (
            <li key={id}>
              <button
                type="button"
                className="flex w-full items-center justify-between py-2 text-left text-lg font-bold text-white"
                aria-expanded={isOpen}
                onClick={() => setOpen(isOpen ? null : id)}
              >
                {item.label}
                <ChevronDown
                  className={cn(
                    "size-4 transition-transform duration-200 [transition-timing-function:var(--ease-ihc)]",
                    isOpen && "rotate-180"
                  )}
                />
              </button>
              {isOpen ? (
                <HamburgerTree items={item.children} depth={depth + 1} />
              ) : null}
            </li>
          )
        }
        return (
          <li key={id}>
            <SheetClose
              render={
                <Link
                  href={item.href}
                  className={cn(
                    "block py-2 text-white no-underline hover:text-neutral-300",
                    depth === 0 ? "text-lg font-bold" : "text-base font-normal"
                  )}
                />
              }
            >
              {item.label}
            </SheetClose>
          </li>
        )
      })}
    </ul>
  )
}

function MenuTrigger({ className }: { className?: string }) {
  return (
    <SheetTrigger
      render={
        <Button
          variant="ghost"
          size="icon"
          className={cn("rounded-none hover:bg-transparent", className)}
        />
      }
    >
      <MenuIcon className="size-7" />
      <span className="sr-only">Menu</span>
    </SheetTrigger>
  )
}

export function SiteHeader() {
  const pathname = usePathname()
  const isHome = pathname === "/"
  const [scrolled, setScrolled] = useState(false)
  const [hidden, setHidden] = useState(false)
  const [menuOpen, setMenuOpen] = useState(false)

  useEffect(() => {
    let last = window.scrollY
    const onScroll = () => {
      const y = window.scrollY
      setScrolled(y > 40)
      if (y > last && y > 120) setHidden(true)
      else setHidden(false)
      last = y
    }
    onScroll()
    window.addEventListener("scroll", onScroll, { passive: true })
    return () => window.removeEventListener("scroll", onScroll)
  }, [])

  const onHero = isHome && !scrolled && !menuOpen

  return (
    <Sheet open={menuOpen} onOpenChange={setMenuOpen}>
      <div
        className={cn(
          "fixed inset-x-0 top-0 z-20 flex py-[18px] transition-all duration-300 [transition-timing-function:var(--ease-ihc)] min-[800px]:hidden",
          hidden && !menuOpen && "-translate-y-full",
          (scrolled || menuOpen || !isHome) && "bg-neutral-100",
          onHero && "bg-transparent"
        )}
      >
        <div className="container-site flex items-center">
          <MenuTrigger className={onHero ? "text-white" : "text-foreground"} />
          <Link
            href="/"
            className={cn("ml-1", onHero ? "text-white" : "text-foreground")}
          >
            <span className="sr-only">Royal IHC</span>
            <Logo className="w-[140px]" />
          </Link>
        </div>
      </div>

      <nav
        className={cn(
          "absolute inset-x-0 top-0 z-10 hidden min-[800px]:block",
          isHome ? "text-white" : "relative bg-neutral-100 text-foreground"
        )}
        aria-label="Primary"
      >
        <div className="container-site grid grid-cols-[auto_1fr] grid-rows-[auto_auto] items-center pb-10 pt-[18px]">
          <div className="col-start-1 row-start-2 flex items-center gap-5">
            <MenuTrigger
              className={isHome ? "text-white" : "text-foreground"}
            />
            <Link href="/" className={isHome ? "text-white" : "text-foreground"}>
              <span className="sr-only">Royal IHC</span>
              <Logo />
            </Link>
          </div>

          <ul className="col-start-2 row-start-1 mb-6 flex justify-end gap-6 text-[17px]">
            {utilityNav.map((item) => (
              <li key={item.href}>
                <Link
                  href={item.href}
                  className={cn(
                    "inline-flex items-center gap-1.5 no-underline transition-colors duration-200 [transition-timing-function:var(--ease-ihc)] hover:text-primary",
                    isHome ? "text-white/80 hover:text-white" : "text-neutral-700"
                  )}
                >
                  {item.label}
                  {item.label === "Search" ? (
                    <Search aria-hidden className="size-3.5" />
                  ) : null}
                </Link>
              </li>
            ))}
          </ul>

          <NavigationMenu className="col-start-2 row-start-2 justify-end">
            <NavigationMenuList className="gap-8">
              {primaryNav.map((item) =>
                item.children ? (
                  <NavigationMenuItem key={item.label}>
                    <NavigationMenuTrigger
                      className={cn(
                        "h-auto rounded-none bg-transparent px-0 py-1 text-base font-bold hover:bg-transparent focus:bg-transparent data-open:bg-transparent data-popup-open:bg-transparent [&>svg]:hidden",
                        isHome
                          ? "border-y-2 border-transparent text-white hover:border-b-white data-open:border-t-white data-open:border-b-transparent"
                          : "border-y-2 border-transparent text-foreground hover:border-b-foreground data-open:border-t-primary data-open:border-b-transparent"
                      )}
                    >
                      {item.label}
                    </NavigationMenuTrigger>
                    <NavigationMenuContent className="min-w-[18rem] bg-white p-2 text-foreground">
                      <ul className="space-y-1">
                        {item.children.map((child) => (
                          <li key={child.href}>
                            <NavigationMenuLink
                              render={
                                <Link
                                  href={child.href}
                                  className="block rounded-none px-2 py-2 text-base no-underline hover:bg-transparent hover:text-primary"
                                />
                              }
                            >
                              {child.label}
                            </NavigationMenuLink>
                          </li>
                        ))}
                      </ul>
                    </NavigationMenuContent>
                  </NavigationMenuItem>
                ) : (
                  <NavigationMenuItem key={item.label}>
                    <NavigationMenuLink
                      render={
                        <Link
                          href={item.href}
                          className={cn(
                            "rounded-none border-y-2 border-transparent px-0 py-1 text-base font-bold no-underline hover:border-b-current hover:bg-transparent",
                            isHome ? "text-white" : "text-foreground"
                          )}
                        />
                      }
                    >
                      {item.label}
                    </NavigationMenuLink>
                  </NavigationMenuItem>
                )
              )}
            </NavigationMenuList>
          </NavigationMenu>
        </div>
      </nav>

      <SheetContent
        side="left"
        showCloseButton={false}
        className="inset-0 h-full w-full max-w-none border-0 bg-black/80 p-0 text-white shadow-none duration-300 [transition-timing-function:var(--ease-ihc)] data-[side=left]:w-full data-[side=left]:sm:max-w-none"
      >
        <div className="flex h-full max-w-xl flex-col bg-black">
          <div className="flex items-center px-[5%] py-[18px] min-[800px]:px-8">
            <SheetClose
              render={
                <Button
                  variant="ghost"
                  size="icon"
                  className="mr-4 rounded-none text-white hover:bg-transparent hover:text-white"
                />
              }
            >
              <X className="size-8" />
              <span className="sr-only">Close</span>
            </SheetClose>
            <Link href="/" onClick={() => setMenuOpen(false)} className="text-white">
              <span className="sr-only">Royal IHC</span>
              <Logo className="w-[140px] min-[800px]:w-[158px]" />
            </Link>
            <SheetTitle className="sr-only">Menu</SheetTitle>
          </div>
          <nav className="flex-1 overflow-y-auto px-[5%] py-8 min-[800px]:px-8">
            <HamburgerTree items={hamburgerNav} />
          </nav>
        </div>
      </SheetContent>
    </Sheet>
  )
}
