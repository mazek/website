"use client"

import BitropyLogo from "@/components/ui/BitropyLogo"
import { Button } from "@/components/ui/button"
import { Drawer, DrawerContent, DrawerTitle, DrawerTrigger } from "@/components/ui/drawer"
import { Menu } from "lucide-react"
import Link from "next/link"
import { useState } from "react"

interface HeaderProps {
  currentPage?: "home" | "about" | "privacy" | "articles" | "contact"
}

export default function Header({ currentPage = "home" }: HeaderProps) {
  const [isOpen, setIsOpen] = useState(false)

  const handleNavClick = (e: React.MouseEvent<HTMLAnchorElement>, href: string) => {
    e.preventDefault()
    setIsOpen(false)
    
    // Wait for drawer to close, then navigate
    setTimeout(() => {
      if (href.startsWith('/#')) {
        const id = href.replace('/#', '')
        const element = document.getElementById(id)
        if (element) {
          element.scrollIntoView({ behavior: 'smooth' })
        }
      } else {
        window.location.href = href
      }
    }, 300)
  }
  
  return (
    <header className="sticky top-0 z-50 w-full border-b border-gray-200 bg-white/95 backdrop-blur supports-[backdrop-filter]:bg-white/80">
      <div className="w-full max-w-6xl mx-auto flex h-20 items-center justify-between px-6 md:px-8">
        <Link href="/" className="flex items-center space-x-3">
          <BitropyLogo className="h-12 w-auto" variant="light" />
        </Link>

        <nav className="hidden md:flex items-center space-x-8">
          <Link
            href="/#services"
            className={`text-base font-semibold transition-colors text-gray-700 hover:text-purple-600`}
          >
            Services
          </Link>
          <Link
            href="/#expertise"
            className={`text-base font-semibold transition-colors text-gray-700 hover:text-purple-600`}
          >
            Why Bitropy
          </Link>
          <Link
            href="/#testimonials"
            className={`text-base font-semibold transition-colors text-gray-700 hover:text-purple-600`}
          >
            Case Studies
          </Link>
          <Link
            href={`/about`}
            className={`text-base font-semibold transition-colors ${currentPage === "about" ? "text-purple-600" : "text-gray-700 hover:text-purple-600"
              }`}
          >
            About
          </Link>
        </nav>

        <div className="flex items-center space-x-4">
          <Button
            asChild
            className="hidden md:inline-flex bg-purple-600 hover:bg-purple-700 text-white text-sm px-4 py-2"
          >
            <Link href={`/contact`}>
              Get in touch
            </Link>
          </Button>
          <Drawer open={isOpen} onOpenChange={setIsOpen}>
            <DrawerTrigger asChild>
              <Button variant="ghost" size="icon" className="md:hidden text-gray-600 hover:text-gray-900">
                <Menu className="h-6 w-6" aria-label="Open menu" />
              </Button>
            </DrawerTrigger>
            <DrawerContent className="p-6 md:hidden bg-white text-gray-900 border-gray-200">
              <DrawerTitle className="sr-only">Main Menu</DrawerTitle>
              <nav className="flex flex-col space-y-6 mt-4">
                <Link 
                  href="/#services" 
                  onClick={(e) => handleNavClick(e, '/#services')}
                  className="text-lg font-medium text-gray-900 hover:text-gray-700 transition-colors"
                >
                  Services
                </Link>
                <Link 
                  href="/#expertise" 
                  onClick={(e) => handleNavClick(e, '/#expertise')}
                  className="text-lg font-medium text-gray-900 hover:text-gray-700 transition-colors"
                >
                  Why Bitropy
                </Link>
                <Link 
                  href="/#testimonials" 
                  onClick={(e) => handleNavClick(e, '/#testimonials')}
                  className="text-lg font-medium text-gray-900 hover:text-gray-700 transition-colors"
                >
                  Case Studies
                </Link>
                <Link 
                  href="/about" 
                  onClick={(e) => handleNavClick(e, '/about')}
                  className="text-lg font-medium text-gray-900 hover:text-gray-700 transition-colors"
                >
                  About
                </Link>
                <div className="pt-4 border-t border-gray-200">
                  <Button
                    variant="default"
                    className="w-full bg-purple-600 text-white hover:bg-purple-700"
                    onClick={() => {
                      setIsOpen(false)
                      setTimeout(() => {
                        window.location.href = '/contact'
                      }, 300)
                    }}
                  >
                    Get in touch
                  </Button>
                </div>
              </nav>
            </DrawerContent>
          </Drawer>
        </div>
      </div>
    </header>
  )
} 