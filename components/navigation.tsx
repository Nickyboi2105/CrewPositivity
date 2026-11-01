"use client"

import { useState } from "react"
import Link from "next/link"
import { CampaignLogoFull } from "./campaign-logo"
import { Button } from "@/components/ui/button"
import { Menu, X, Instagram } from "lucide-react"

const navLinks = [
  { href: "#about", label: "About" },
  { href: "#contact", label: "Contact" },
]

export function Navigation() {
  const [isOpen, setIsOpen] = useState(false)

  return (
    <header className="fixed top-0 left-0 right-0 z-50 bg-background/80 backdrop-blur-md border-b border-border">
      <nav className="container mx-auto px-6 py-4">
        <div className="flex items-center justify-between">
          <Link href="/">
            <CampaignLogoFull />
          </Link>

          {/* Desktop Navigation */}
          <div className="hidden md:flex items-center gap-8">
            {navLinks.map((link) => (
              <a
                key={link.href}
                href={link.href}
                onClick={(e) => {
                  e.preventDefault()
                  document.querySelector(link.href)?.scrollIntoView({ behavior: "smooth" })
                }}
                className="text-sm font-medium hover:text-foreground transition-colors text-foreground cursor-pointer"
              >
                {link.label}
              </a>
            ))}
            <a
              href="https://www.instagram.com/crew.positivity/"
              target="_blank"
              rel="noopener noreferrer"
              className="flex items-center gap-2 text-sm font-medium text-muted-foreground hover:text-foreground transition-colors"
            >
              <Instagram className="h-4 w-4 text-foreground" />
              <span className="text-foreground">Follow Us</span>
            </a>
            <Button className="text-foreground" size="sm">Join the Movement</Button>
          </div>

          {/* Mobile Menu Button */}
          <button className="md:hidden p-2" onClick={() => setIsOpen(!isOpen)} aria-label="Toggle menu">
            {isOpen ? <X className="h-6 w-6" /> : <Menu className="h-6 w-6" />}
          </button>
        </div>

        {/* Mobile Navigation */}
        {isOpen && (
          <div className="md:hidden mt-4 pb-4 flex flex-col gap-4">
            {navLinks.map((link) => (
              <a
                key={link.href}
                href={link.href}
                className="text-sm font-medium text-muted-foreground hover:text-foreground transition-colors cursor-pointer"
                onClick={(e) => {
                  e.preventDefault()
                  setIsOpen(false)
                  document.querySelector(link.href)?.scrollIntoView({ behavior: "smooth" })
                }}
              >
                {link.label}
              </a>
            ))}
            <a
              href="https://www.instagram.com/crew.positivity/"
              target="_blank"
              rel="noopener noreferrer"
              className="flex items-center gap-2 text-sm font-medium text-muted-foreground hover:text-foreground transition-colors"
            >
              <Instagram className="h-4 w-4" />
              <span>Follow Us</span>
            </a>
            <Button size="sm" className="w-fit">
              Join the Movement
            </Button>
          </div>
        )}
      </nav>
    </header>
  )
}
