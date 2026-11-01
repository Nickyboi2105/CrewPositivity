"use client"

import type React from "react"

import { useState } from "react"
import { Button } from "@/components/ui/button"
import { Input } from "@/components/ui/input"
import { Textarea } from "@/components/ui/textarea"
import { Mail, MapPin, Phone, Send, CheckCircle } from "lucide-react"

export function ContactSection() {
  const [isSubmitted, setIsSubmitted] = useState(false)

  const handleSubmit = (e: React.FormEvent<HTMLFormElement>) => {
    e.preventDefault()
    const form = e.currentTarget
    const firstName = (form.elements.namedItem("firstName") as HTMLInputElement).value
    const lastName = (form.elements.namedItem("lastName") as HTMLInputElement).value
    const email = (form.elements.namedItem("email") as HTMLInputElement).value
    const organization = (form.elements.namedItem("organization") as HTMLInputElement).value
    const role = (form.elements.namedItem("role") as HTMLInputElement).value
    const message = (form.elements.namedItem("message") as HTMLTextAreaElement).value

    const subject = encodeURIComponent(`Contact from ${firstName} ${lastName}`)
    const body = encodeURIComponent(
      `Name: ${firstName} ${lastName}\nEmail: ${email}\nOrganization: ${organization || "N/A"}\nRole: ${role || "N/A"}\n\nMessage:\n${message}`
    )

    window.location.href = `mailto:crewpositivity2026@gmail.com?subject=${subject}&body=${body}`
    setIsSubmitted(true)
    setTimeout(() => setIsSubmitted(false), 3000)
  }

  return (
    <section id="contact" className="py-24 bg-secondary/30">
      <div className="container mx-auto px-6">
        <div className="grid lg:grid-cols-2 gap-16">
          {/* Left - Contact Info */}
          <div>
            <span className="inline-block px-4 py-1 bg-primary/10 text-sm font-medium rounded-full mb-4 text-foreground">
              Contact
            </span>
            <h2 className="font-serif text-4xl md:text-5xl font-bold mb-6 text-balance text-primary-foreground">
              Ask us anything.
            </h2>
            <p className="text-muted-foreground mb-8 leading-relaxed">
              Are you a student seeking to get involved. Let&apos;s connect.
            </p>

            <div className="space-y-6">
              <div className="flex items-start gap-4">
                <div className="w-10 h-10 bg-primary/10 rounded-lg flex items-center justify-center shrink-0">
                  <Mail className="w-5 h-5 text-primary" />
                </div>
                <div>
                  <p className="font-medium text-foreground">Email</p>
                  <p className="text-muted-foreground">{"crewpositivity2026@gmail.com"}</p>
                </div>
              </div>
              <div className="flex items-start gap-4">
                
                <div>
                  
                  
                </div>
              </div>
              <div className="flex items-start gap-4">
                <div className="w-10 h-10 bg-primary/10 rounded-lg flex items-center justify-center shrink-0">
                  <MapPin className="w-5 h-5 text-primary" />
                </div>
                <div>
                  <p className="font-medium text-foreground">Location</p>
                  <p className="text-muted-foreground">3434 Silver Creek Rd, San Jose, CA 95121</p>
                </div>
              </div>
            </div>
          </div>

          {/* Right - Contact Form */}
          <div className="bg-card p-8 rounded-2xl border border-border shadow-lg">
            <h3 className="font-serif text-2xl font-semibold text-card-foreground mb-6">
              Ready to get involved? Let&apos;s start planning.
            </h3>

            {isSubmitted ? (
              <div className="flex flex-col items-center justify-center py-12 text-center">
                <CheckCircle className="w-16 h-16 text-primary mb-4" />
                <h4 className="font-serif text-xl font-semibold text-foreground mb-2">Message Sent!</h4>
                <p className="text-muted-foreground">Thank you for reaching out. We&apos;ll be in touch soon.</p>
              </div>
            ) : (
              <form onSubmit={handleSubmit} className="space-y-6">
                <div className="grid sm:grid-cols-2 gap-4">
                  <div className="space-y-2">
                    <label htmlFor="firstName" className="text-sm font-medium text-foreground">
                      First Name
                    </label>
                    <Input id="firstName" placeholder="Jane" required />
                  </div>
                  <div className="space-y-2">
                    <label htmlFor="lastName" className="text-sm font-medium text-foreground">
                      Last Name
                    </label>
                    <Input id="lastName" placeholder="Doe" required />
                  </div>
                </div>

                <div className="space-y-2">
                  <label htmlFor="email" className="text-sm font-medium text-foreground">
                    Email
                  </label>
                  <Input id="email" type="email" placeholder="jane@example.com" required />
                </div>

                <div className="grid sm:grid-cols-2 gap-4">
                  <div className="space-y-2">
                    <label htmlFor="organization" className="text-sm font-medium text-foreground">
                      Organization
                    </label>
                    <Input id="organization" placeholder="Optional" />
                  </div>
                  <div className="space-y-2">
                    <label htmlFor="role" className="text-sm font-medium text-foreground">
                      Role
                    </label>
                    <Input id="role" placeholder="Optional" />
                  </div>
                </div>

                <div className="space-y-2">
                  <label htmlFor="message" className="text-sm font-medium text-foreground">
                    Message
                  </label>
                  <Textarea id="message" placeholder="Tell us how you'd like to get involved..." rows={4} required />
                </div>

                <Button type="submit" className="w-full gap-2">
                  <Send className="w-4 h-4" />
                  Submit
                </Button>
              </form>
            )}
          </div>
        </div>
      </div>
    </section>
  )
}
