// components/header.tsx
"use client"

import { useState } from "react"
import Link from "next/link"
import { Button } from "@/components/ui/button"
import { Menu, X } from "lucide-react"
import Image from "next/image"
import { usePathname, useRouter } from "next/navigation"

const routes = [
  { href: "/", label: "Inicio" },
  { href: "/about", label: "Nosotros" },
  { href: "/discography", label: "Discografía" },
  { href: "/events", label: "Eventos" },
  { href: "/contact", label: "Contacto" },
]

export default function Header() {
  const [isOpen, setIsOpen] = useState(false)
  const pathname = usePathname()
  const router = useRouter()

  const handleNavigation = (href: string) => {
    setIsOpen(false)
    
    if (pathname === href) {
      window.scrollTo({ top: 0, behavior: 'smooth' })
    } else {
      router.push(href)
    }
  }

  return (
    <header className="sticky top-0 z-50 w-full border-b bg-background/80 backdrop-blur-sm">
      <div className="container flex h-16 items-center justify-between">
        <div 
          onClick={() => handleNavigation("/")}
          className="flex items-center space-x-2 cursor-pointer"
        >
          <Image src="/fhletras.png" alt="Fish Hook" className="rounded-full" width={64} height={64} />
        </div>

        <Button variant="ghost" className="md:hidden" onClick={() => setIsOpen(!isOpen)}>
          {isOpen ? <X className="h-6 w-6" /> : <Menu className="h-6 w-6" />}
          <span className="sr-only">Toggle menu</span>
        </Button>

        {/* Escritorio */}
        <nav className="hidden md:flex md:items-center md:space-x-6">
          {routes.map((route) => (
            <div
              key={route.href}
              onClick={() => handleNavigation(route.href)}
              className="text-sm font-medium transition-colors hover:text-primary cursor-pointer"
            >
              {route.label}
            </div>
          ))}

          <Link 
            href="https://open.spotify.com/intl-es/track/68zHxMbUuozcTv0cQuZbFp?si=747c99f7c75549c6" 
            target="_blank"
            onClick={() => setIsOpen(false)}
          >
            <Button size="sm" className="ml-4 cursor-pointer">
              Último lanzamiento
            </Button>
          </Link>
        </nav>
      </div>

      {/* Menú para teléfonos */}
      {isOpen && (
        <div className="container md:hidden">
          <nav className="flex flex-col space-y-4 py-4">
            {routes.map((route) => (
              <div
                key={route.href}
                onClick={() => handleNavigation(route.href)}
                className="text-sm font-medium transition-colors hover:text-primary cursor-pointer"
              >
                {route.label}
              </div>
            ))}
            <Button 
              size="sm" 
              className="w-full"
              onClick={() => setIsOpen(false)}
              asChild
            >
              <Link 
                href="https://open.spotify.com/intl-es/track/68zHxMbUuozcTv0cQuZbFp?si=747c99f7c75549c6" 
                target="_blank"
              >
                Último lanzamiento
              </Link>
            </Button>
          </nav>
        </div>
      )}
    </header>
  )
}