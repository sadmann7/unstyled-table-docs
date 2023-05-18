import { docsConfig } from "@/config/docs"
import { Combobox } from "@/components/combobox"
import { MainNav } from "@/components/layouts/main-nav"
import { MobileNav } from "@/components/layouts/mobile-nav"
import { ThemeToggle } from "@/components/layouts/theme-toggle"

export function SiteHeader() {
  return (
    <header className="sticky top-0 z-40 w-full bg-background">
      <div className="container flex h-16 items-center border-b">
        <MainNav items={docsConfig.mainNav} />
        <MobileNav
          mainNavItems={docsConfig.mainNav}
          sidebarNavItems={docsConfig.sidebarNav}
        />
        <div className="flex flex-1 items-center justify-end space-x-4">
          <nav className="flex items-center space-x-1">
            <Combobox />
            <ThemeToggle />
          </nav>
        </div>
      </div>
    </header>
  )
}
