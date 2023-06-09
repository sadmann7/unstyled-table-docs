"use client"

import * as React from "react"
import { useRouter } from "next/navigation"
import { useTheme } from "next-themes"

import { docsConfig } from "@/config/docs"
import { cn } from "@/lib/utils"
import { Button } from "@/components/ui/button"
import {
  CommandDialogFixed,
  CommandEmpty,
  CommandGroup,
  CommandInput,
  CommandItem,
  CommandList,
  CommandSeparator,
} from "@/components/ui/command"
import { Icons } from "@/components/icons"

export function Combobox() {
  const router = useRouter()
  const { setTheme } = useTheme()

  const [isOpen, setIsOpen] = React.useState(false)

  React.useEffect(() => {
    const handleKeyDown = (e: KeyboardEvent) => {
      if (e.key === "k" && (e.metaKey || e.ctrlKey)) {
        e.preventDefault()
        setIsOpen((isOpen) => !isOpen)
      }
    }
    window.addEventListener("keydown", handleKeyDown)
    return () => window.removeEventListener("keydown", handleKeyDown)
  }, [])

  const handleSelect = React.useCallback((callback: () => unknown) => {
    setIsOpen(false)
    callback()
  }, [])

  return (
    <>
      <Button
        variant="outline"
        className="relative h-9 w-9 p-0 lg:h-10 lg:w-44 lg:justify-start lg:px-3 lg:py-2"
        onClick={() => setIsOpen(true)}
      >
        <Icons.search className="h-4 w-4 lg:mr-2" aria-hidden="true" />
        <span className="hidden lg:inline-flex">Search...</span>
        <span className="sr-only">Search</span>
        <kbd className="pointer-events-none absolute right-1.5 top-2 hidden h-6 select-none items-center gap-1 rounded border bg-muted px-1.5 font-mono text-[10px] font-medium opacity-100 lg:flex">
          <span className="text-xs">Ctrl</span>K
        </kbd>
      </Button>
      <CommandDialogFixed open={isOpen} onOpenChange={setIsOpen}>
        <CommandInput placeholder="Search..." />
        <CommandList>
          <CommandEmpty>No item found.</CommandEmpty>
          <CommandGroup heading="Menu">
            {docsConfig.mainNav
              .filter((navItem) => !navItem.external && !navItem.disabled)
              .map((navItem) => (
                <CommandItem
                  key={navItem.title}
                  className={cn(
                    navItem.disabled && "pointer-events-none opacity-50"
                  )}
                  onSelect={() => {
                    handleSelect(() => router.push(navItem.href ?? "/"))
                  }}
                >
                  <Icons.link className="mr-2 h-4 w-4" aria-hidden="true" />
                  {navItem.title}
                </CommandItem>
              ))}
          </CommandGroup>
          <CommandSeparator />
          {docsConfig.sidebarNav.map((group) => (
            <React.Fragment key={group.title}>
              <CommandGroup heading={group.title}>
                {group.items
                  .filter((navItem) => !navItem.external && !navItem.disabled)
                  .map((navItem) => (
                    <CommandItem
                      key={navItem.title}
                      onSelect={() => {
                        handleSelect(() => router.push(navItem.href ?? "/"))
                      }}
                    >
                      {group.title === "Getting Started" ? (
                        <Icons.file
                          className="mr-2 h-4 w-4"
                          aria-hidden="true"
                        />
                      ) : group.title === "Renderers" ? (
                        <Icons.gamepad
                          className="mr-2 h-4 w-4"
                          aria-hidden="true"
                        />
                      ) : (
                        <Icons.logo
                          className="mr-2 h-4 w-4"
                          aria-hidden="true"
                        />
                      )}
                      {navItem.title}
                      <span className="absolute opacity-0">{navItem.href}</span>
                    </CommandItem>
                  ))}
              </CommandGroup>
              <CommandSeparator />
            </React.Fragment>
          ))}
          <CommandGroup heading="Theme">
            <CommandItem
              onSelect={() => {
                handleSelect(() => setTheme("light"))
              }}
            >
              <Icons.sun className="mr-2 h-4 w-4" aria-hidden="true" />
              Light
            </CommandItem>
            <CommandItem
              onSelect={() => {
                handleSelect(() => setTheme("dark"))
              }}
            >
              <Icons.moon className="mr-2 h-4 w-4" aria-hidden="true" />
              Dark
            </CommandItem>
          </CommandGroup>
        </CommandList>
      </CommandDialogFixed>
    </>
  )
}
