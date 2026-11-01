"use client"

import { useState } from "react"
import Image from "next/image"
import { Play, Heart, MessageCircle, Share2, ExternalLink } from "lucide-react"
import { Button } from "@/components/ui/button"
import { cn } from "@/lib/utils"

interface PostcardItem {
  id: string
  type: "image" | "video"
  src: string
  thumbnail?: string
  title: string
  description: string
  date: string
  likes: number
  comments: number
  instagramUrl?: string
}

const galleryItems: PostcardItem[] = [
  {
    id: "1",
    type: "image",
    src: "/IMG_6156.jpg",
    title: "Posivity video",
    description: "Our encouraging video about spreading positivity.",
    date: "Jan 21, 2026",
    likes: "♡︎  " + 36,
    comments: "💬  " + 14,
    instagramUrl: "https://www.instagram.com/p/DTy3LqeD_o-/",
  },
  {
    id: "2",
    type: "image",
    src: "/IMG_6184.jpg",
    thumbnail: "/IMG_6184.jpg",
    title: "Positive Skit",
    description: "Our promotional video showing how to spread kindness at school.",
    date: "Jan 21, 2026",
    likes: "♡︎  " + 286,
    comments: "💬  " + 41,
    instagramUrl: "https://www.instagram.com/crew.positivity/",
  },
  {
    id: "3",
    type: "image",
    src: "/ChelseaHand.jpg",
    title: "Teamwork",
    description: "Our team cheering each other up.",
    date: "Jan 23, 2026",
    instagramUrl: "https://drive.google.com/file/d/1a60yLBRzsyw2eWc6ZWIwZe3gAvQMMKVT/view?usp=sharing",

  },
  {
    id: "4",
    type: "image",
    src: "/Andy.png",
    title: "Making a student feel welcomed.",
    description: "By giving cards we made a student delighted on a school friday.",
    date: "Jan 23, 2026",
  },
  {
    id: "5",
    type: "image",
    src: "/Isaaac.JPG",
    title: "Giving cards",
    description: "Our founding members giving cards to kids in spanish class.",
    date: "Jan 23, 2025",
  },
  {
    id: "6",
    type: "image",
    src: "/Tuan.png",
    title: "Be Happy",
    description: "A happy student during lunch feeling the positive air.",
    date: "Jan 23, 2025",
  },
]

function PostcardCard({ item }: { item: PostcardItem }) {
  const [isHovered, setIsHovered] = useState(false)

  return (
    <div
      className="group relative bg-card rounded-lg overflow-hidden shadow-lg hover:shadow-2xl transition-all duration-500 transform hover:-rotate-1 hover:scale-[1.02]"
      onMouseEnter={() => setIsHovered(true)}
      onMouseLeave={() => setIsHovered(false)}
    >
      {/* Postcard Border Effect */}
      <div className="absolute inset-0 border-[6px] border-card rounded-lg z-10 pointer-events-none" />
      <div className="absolute inset-1 border border-border/50 rounded-md z-10 pointer-events-none" />

      {/* Image Container */}
      <div className="relative aspect-square overflow-hidden">
        <Image
          src={item.thumbnail || item.src}
          alt={item.title}
          fill
          className="object-cover transition-transform duration-500 group-hover:scale-110"
        />

        {/* Video Play Button */}
        {item.type === "video" && (
          <div className="absolute inset-0 flex items-center justify-center">
            <div className="w-16 h-16 bg-card/90 rounded-full flex items-center justify-center shadow-lg group-hover:scale-110 transition-transform">
              <Play className="w-6 h-6 text-foreground ml-1" fill="currentColor" />
            </div>
          </div>
        )}

        {/* Hover Overlay */}
        <div
          className={cn(
            "absolute inset-0 bg-foreground/80 flex flex-col items-center justify-center gap-4 transition-opacity duration-300",
            isHovered ? "opacity-100" : "opacity-0",
          )}
        >
          <div className="flex items-center gap-6 text-primary-foreground">
            <div className="flex items-center gap-2">
              
              <span className="font-medium">{item.likes}</span>
            </div>
            <div className="flex items-center gap-2">
              
              <span className="font-medium">{item.comments}</span>
            </div>
          </div>
          {item.instagramUrl && (
            <a
              href={item.instagramUrl}
              target="_blank"
              rel="noopener noreferrer"
              className="flex items-center gap-2 text-primary-foreground/80 hover:text-primary-foreground text-sm transition-colors"
            >
              <ExternalLink className="w-4 h-4" />
              View on Instagram
            </a>
          )}
        </div>
      </div>

      {/* Postcard Content - Stamp Style */}
      <div className="p-4 bg-card">
        {/* Postmark Style Date */}
        <div className="flex items-center justify-between mb-2">
          <span className="text-xs text-muted-foreground uppercase tracking-wider">{item.date}</span>
          <div className="w-8 h-8 rounded border-2 border-primary/30 flex items-center justify-center">
            <span className="text-xs font-bold text-primary">SC</span>
          </div>
        </div>

        <h3 className="font-serif text-lg font-semibold text-card-foreground mb-1 line-clamp-1">{item.title}</h3>
        <p className="text-sm text-muted-foreground line-clamp-2">{item.description}</p>

        {/* Postcard Footer Line */}
        <div className="mt-3 pt-3 border-t border-dashed border-border flex items-center justify-between">
          <div className="flex items-center gap-3">
            <button className="text-muted-foreground hover:text-foreground transition-colors">
              <Heart className="w-4 h-4" />
            </button>
            <button className="text-muted-foreground hover:text-foreground transition-colors">
              <Share2 className="w-4 h-4" />
            </button>
          </div>
          <span className="text-xs text-muted-foreground italic">
            {item.type === "video" ? "Watch story" : "View moment"}
          </span>
        </div>
      </div>
    </div>
  )
}

export function PostcardGallery() {
  return (
    <section id="gallery" className="py-24 bg-secondary/30">
      <div className="container mx-auto px-6">
        {/* Section Header */}
        <div className="text-center mb-16">
          <span className="inline-block px-4 py-1 bg-primary/10 text-sm font-medium rounded-full mb-4 text-foreground">
            Our Stories
          </span>
          <h2 className="font-serif text-4xl md:text-5xl font-bold mb-4 text-balance text-primary-foreground">
            Moments of Impact
          </h2>
          <p className="text-muted-foreground max-w-2xl mx-auto">
            Every photo and video tells a story of positive change. Follow our journey on Instagram and become part of our growing community.
          </p>
        </div>

        {/* Gallery Grid */}
        <div className="grid sm:grid-cols-2 lg:grid-cols-3 gap-8">
          {galleryItems.map((item) => (
            <PostcardCard key={item.id} item={item} />
          ))}
        </div>

        {/* CTA */}
        <div className="text-center mt-12">
          <Button variant="outline" size="lg" className="gap-2 bg-transparent" asChild>
            <a href="https://www.instagram.com/crew.positivity/" target="_blank" rel="noopener noreferrer">
              <svg className="w-5 h-5" fill="currentColor" viewBox="0 0 24 24">
                <path d="M12 2.163c3.204 0 3.584.012 4.85.07 3.252.148 4.771 1.691 4.919 4.919.058 1.265.069 1.645.069 4.849 0 3.205-.012 3.584-.069 4.849-.149 3.225-1.664 4.771-4.919 4.919-1.266.058-1.644.07-4.85.07-3.204 0-3.584-.012-4.849-.07-3.26-.149-4.771-1.699-4.919-4.92-.058-1.265-.07-1.644-.07-4.849 0-3.204.013-3.583.07-4.849.149-3.227 1.664-4.771 4.919-4.919 1.266-.057 1.645-.069 4.849-.069zm0-2.163c-3.259 0-3.667.014-4.947.072-4.358.2-6.78 2.618-6.98 6.98-.059 1.281-.073 1.689-.073 4.948 0 3.259.014 3.668.072 4.948.2 4.358 2.618 6.78 6.98 6.98 1.281.058 1.689.072 4.948.072 3.259 0 3.668-.014 4.948-.072 4.354-.2 6.782-2.618 6.979-6.98.059-1.28.073-1.689.073-4.948 0-3.259-.014-3.667-.072-4.947-.196-4.354-2.617-6.78-6.979-6.98-1.281-.059-1.69-.073-4.949-.073zm0 5.838c-3.403 0-6.162 2.759-6.162 6.162s2.759 6.163 6.162 6.163 6.162-2.759 6.162-6.163c0-3.403-2.759-6.162-6.162-6.162zm0 10.162c-2.209 0-4-1.79-4-4 0-2.209 1.791-4 4-4s4 1.791 4 4c0 2.21-1.791 4-4 4zm6.406-11.845c-.796 0-1.441.645-1.441 1.44s.645 1.44 1.441 1.44c.795 0 1.439-.645 1.439-1.44s-.644-1.44-1.439-1.44z" />
              </svg>
              See More on Instagram
            </a>
          </Button>
        </div>
      </div>
    </section>
  )
}
