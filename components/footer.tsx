import Link from "next/link"
import { Instagram, Twitter, Facebook } from "lucide-react"

const footerLinks = {
  social: [
    { label: "Instagram", href: "https://instagram.com", icon: Instagram }
  ],
}

export function Footer() {
  return (
    <footer className="py-16 bg-muted/50">
      <div className="container mx-auto px-6">
        <div className="grid md:grid-cols-3 gap-12 mb-12">
          {/* Links */}
          

          {/* Contact */}
          <div>
            <h4 className="text-sm font-semibold text-muted-foreground uppercase tracking-wider mb-4">Contact</h4>
            <p className="text-foreground mb-2">Get in touch</p>
            <p className="text-muted-foreground mb-4">{"crewpositivity2026@gmail.com"}</p>
            <p className="text-sm text-muted-foreground">
              Get valuable updates, stories, and insights straight to your inbox.
            </p>
          </div>

          {/* Social */}
          <div>
            
            <div className="flex gap-4">
              {footerLinks.social.map((social) => (
                null
              ))}
            </div>
          </div>
        </div>

        {/* Large Logo */}
        <div className="border-t border-border pt-12">
          <div className="flex flex-col items-center">
            <div className="font-serif text-6xl md:text-8xl font-bold tracking-tight text-primary-foreground">Crew Positivity</div>
            <div className="flex flex-col md:flex-row md:items-center md:justify-between w-full mt-8 gap-4">
              <p className="text-sm text-muted-foreground">© 2026 All Rights Reserved.</p>
              
            </div>
          </div>
        </div>
      </div>
    </footer>
  )
}
