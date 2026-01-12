"use client";

import Link from "next/link";
import { usePathname } from "next/navigation";
import { useState } from "react";
import { Menu, X, ChevronDown, ExternalLink, Brain, Target, MessageSquare, Truck, Image as ImageIcon, Building } from "lucide-react";
import { cn } from "@/lib/utils";
import { systems } from "@/lib/systems";

const navigation = [
  { name: "Inicio", href: "/" },
  {
    name: "Soluciones",
    href: "#",
    children: systems.map((s) => ({
      name: s.name,
      href: `/${s.id}`,
      description: s.tagline,
    })),
  },
  { name: "Integraciones", href: "/integraciones" },
  { name: "Contacto", href: "/contacto" },
];

const clientSystems = [
  { name: "Nano ERP", url: "https://erp.shomels.com", icon: Brain, color: "text-accent-blue", description: "Facturación, inventario y contabilidad" },
  { name: "NanoCRM", url: "https://crm.shomels.com", icon: Target, color: "text-accent-cyan", description: "Leads, pedidos y analytics" },
  { name: "LlamadIA", url: "https://llamadia.shomels.com", icon: MessageSquare, color: "text-accent-green", description: "Agentes WhatsApp con IA" },
  { name: "Logistics", url: "https://logistics.shomels.com", icon: Truck, color: "text-accent-amber", description: "Tracking y entregas COD" },
  { name: "AssetsOrg", url: "https://assetsorg-frontend-749189194942.us-central1.run.app", icon: ImageIcon, color: "text-accent-purple", description: "DAM con IA generativa" },
  { name: "EdificioApp", url: "https://edificioapp.shomels.com", icon: Building, color: "text-accent-rose", description: "Gestión de edificios" },
];

export function Navigation() {
  const pathname = usePathname();
  const [mobileMenuOpen, setMobileMenuOpen] = useState(false);
  const [dropdownOpen, setDropdownOpen] = useState(false);
  const [clientDropdownOpen, setClientDropdownOpen] = useState(false);

  return (
    <header className="fixed top-0 left-0 right-0 z-50">
      <div className="mx-auto max-w-7xl px-4 sm:px-6 lg:px-8">
        <nav className="flex items-center justify-between py-4">
          {/* Logo */}
          <Link href="/" className="flex items-center gap-2">
            <div className="flex h-10 w-10 items-center justify-center rounded-xl bg-gradient-to-br from-accent-green to-accent-blue">
              <span className="text-xl font-bold text-black">S</span>
            </div>
            <span className="text-xl font-bold text-white">Shomels</span>
          </Link>

          {/* Desktop Navigation */}
          <div className="hidden md:flex md:items-center md:gap-1">
            {navigation.map((item) =>
              item.children ? (
                <div
                  key={item.name}
                  className="relative"
                  onMouseEnter={() => setDropdownOpen(true)}
                  onMouseLeave={() => setDropdownOpen(false)}
                >
                  <button
                    className={cn(
                      "nav-link flex items-center gap-1",
                      pathname.startsWith("/nano") ||
                        pathname.startsWith("/llamadia") ||
                        pathname.startsWith("/logistics") ||
                        pathname.startsWith("/assetsorg") ||
                        pathname.startsWith("/edificioapp")
                        ? "active"
                        : ""
                    )}
                  >
                    {item.name}
                    <ChevronDown className="h-4 w-4" />
                  </button>

                  {dropdownOpen && (
                    <div className="absolute left-0 top-full pt-2">
                      <div className="glass-card w-72 p-2">
                        {item.children.map((child) => (
                          <Link
                            key={child.name}
                            href={child.href}
                            className="flex items-center gap-3 rounded-lg px-3 py-2 transition-colors hover:bg-white/5"
                          >
                            <div>
                              <div className="font-medium text-white">
                                {child.name}
                              </div>
                              <div className="text-sm text-muted-foreground">
                                {child.description}
                              </div>
                            </div>
                          </Link>
                        ))}
                      </div>
                    </div>
                  )}
                </div>
              ) : (
                <Link
                  key={item.name}
                  href={item.href}
                  className={cn(
                    "nav-link",
                    pathname === item.href ? "active" : ""
                  )}
                >
                  {item.name}
                </Link>
              )
            )}
          </div>

          {/* CTA Buttons */}
          <div className="hidden md:flex md:items-center md:gap-3">
            <Link href="/contacto" className="btn-secondary text-sm">
              Ver Demo
            </Link>
            <div
              className="relative"
              onMouseEnter={() => setClientDropdownOpen(true)}
              onMouseLeave={() => setClientDropdownOpen(false)}
            >
              <button className="btn-primary text-sm flex items-center gap-1">
                Acceso Clientes
                <ChevronDown className={cn("h-4 w-4 transition-transform duration-200", clientDropdownOpen && "rotate-180")} />
              </button>

              {clientDropdownOpen && (
                <div className="absolute right-0 top-full pt-2 animate-fade-down" style={{ animationDuration: '0.2s' }}>
                  <div className="glass-card w-80 p-3 shadow-2xl">
                    <div className="text-xs text-muted-foreground mb-2 px-2">Accede a tus sistemas</div>
                    {clientSystems.map((system) => {
                      const Icon = system.icon;
                      return (
                        <a
                          key={system.name}
                          href={system.url}
                          target="_blank"
                          rel="noopener noreferrer"
                          className="flex items-center gap-3 rounded-lg px-3 py-2.5 transition-all hover:bg-white/5 group"
                        >
                          <div className={cn("flex h-9 w-9 items-center justify-center rounded-lg bg-white/5", system.color)}>
                            <Icon className="h-4 w-4" />
                          </div>
                          <div className="flex-1">
                            <div className="font-medium text-white text-sm flex items-center gap-1">
                              {system.name}
                              <ExternalLink className="h-3 w-3 opacity-0 group-hover:opacity-100 transition-opacity" />
                            </div>
                            <div className="text-xs text-muted-foreground">{system.description}</div>
                          </div>
                        </a>
                      );
                    })}
                    <div className="border-t border-white/10 mt-2 pt-2 px-2">
                      <p className="text-xs text-muted-foreground">
                        ¿No tienes cuenta? <Link href="/contacto" className="text-accent-green hover:underline">Solicita acceso</Link>
                      </p>
                    </div>
                  </div>
                </div>
              )}
            </div>
          </div>

          {/* Mobile menu button */}
          <button
            type="button"
            className="md:hidden rounded-lg p-2 text-white hover:bg-white/10"
            onClick={() => setMobileMenuOpen(!mobileMenuOpen)}
          >
            {mobileMenuOpen ? (
              <X className="h-6 w-6" />
            ) : (
              <Menu className="h-6 w-6" />
            )}
          </button>
        </nav>
      </div>

      {/* Mobile menu */}
      {mobileMenuOpen && (
        <div className="md:hidden glass-card mx-4 mb-4 p-4">
          <div className="space-y-1">
            {navigation.map((item) =>
              item.children ? (
                <div key={item.name} className="space-y-1">
                  <div className="px-3 py-2 text-sm font-medium text-muted-foreground">
                    {item.name}
                  </div>
                  {item.children.map((child) => (
                    <Link
                      key={child.name}
                      href={child.href}
                      className="block rounded-lg px-3 py-2 pl-6 text-white hover:bg-white/5"
                      onClick={() => setMobileMenuOpen(false)}
                    >
                      {child.name}
                    </Link>
                  ))}
                </div>
              ) : (
                <Link
                  key={item.name}
                  href={item.href}
                  className="block rounded-lg px-3 py-2 text-white hover:bg-white/5"
                  onClick={() => setMobileMenuOpen(false)}
                >
                  {item.name}
                </Link>
              )
            )}
          </div>
          <div className="mt-4 space-y-3">
            <Link
              href="/contacto"
              className="btn-secondary justify-center text-sm w-full"
              onClick={() => setMobileMenuOpen(false)}
            >
              Ver Demo
            </Link>
            <div className="border-t border-white/10 pt-3">
              <div className="text-xs text-muted-foreground mb-2 px-1">Acceso Clientes</div>
              <div className="grid grid-cols-2 gap-2">
                {clientSystems.map((system) => {
                  const Icon = system.icon;
                  return (
                    <a
                      key={system.name}
                      href={system.url}
                      target="_blank"
                      rel="noopener noreferrer"
                      className="flex items-center gap-2 rounded-lg bg-white/5 px-3 py-2 hover:bg-white/10 transition-colors"
                    >
                      <Icon className={cn("h-4 w-4", system.color)} />
                      <span className="text-sm text-white">{system.name}</span>
                    </a>
                  );
                })}
              </div>
            </div>
          </div>
        </div>
      )}
    </header>
  );
}
