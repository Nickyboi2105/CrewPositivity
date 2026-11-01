"use client"

import type React from "react"

import { useState } from "react"
import { Button } from "@/components/ui/button"
import { Input } from "@/components/ui/input"
import { CheckCircle } from "lucide-react"

export function NewsletterSection() {
  const [email, setEmail] = useState("")
  const [isSubscribed, setIsSubscribed] = useState(false)

  const handleSubmit = (e: React.FormEvent) => {
    e.preventDefault()
    setIsSubscribed(true)
    setEmail("")
  }

  return (
    <section className="py-16 border-t border-border">
      <div className="container mx-auto px-6">
        <div className="flex flex-col md:flex-row md:items-center md:justify-between gap-8">
          <div>
            <h3 className="font-serif text-2xl font-bold text-foreground mb-2">{""}</h3>
            <p className="text-muted-foreground">Get updates on events, stories, and ways to get involved.</p>
          </div>

          {isSubscribed ? (
            <div className="flex items-center gap-2 text-primary">
              <CheckCircle className="w-5 h-5" />
              <span className="font-medium">Thanks for subscribing!</span>
            </div>
          ) : (
            <form onSubmit={handleSubmit} className="flex gap-3 w-full md:w-auto">
              <Input
                type="email"
                placeholder="Enter email"
                value={email}
                onChange={(e) => setEmail(e.target.value)}
                required
                className="md:w-64"
              />
              <Button type="submit">Submit</Button>
            </form>
          )}
        </div>
      </div>
    </section>
  )
}
