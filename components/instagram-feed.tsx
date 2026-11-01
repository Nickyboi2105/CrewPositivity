import { Instagram, ExternalLink } from "lucide-react"
import { Button } from "@/components/ui/button"
import Image from "next/image"

const instagramPosts = [
  {
    id: "1",
    image: "/B8413433-07AA-4F6B-960A-26B4EB923AB4.JPG",
    likes: 234,
  },
  {
    id: "2",
    image: "/01C58BFF-784E-4ED9-9828-6A901D3F66DE.JPG",
    likes: 189,
  },
  {
    id: "3",
    image: "/27C267C3-038D-4B17-9368-38F6D7D15888.JPG",
    likes: 312,
  },
  {
    id: "4",
    image: "/C75D80EE-9FA3-42BF-A959-513E254CC74A.JPG",
    likes: 456,
  },
]

export function InstagramFeed() {
  return (
    <section className="py-24">
      <div className="container mx-auto px-6">
        {/* Section Header */}
        <div className="flex flex-col md:flex-row md:items-end md:justify-between gap-6 mb-12">
          <div>
            <div className="flex items-center gap-3 mb-4">
              <Instagram className="w-6 h-6 text-primary" />
              <span className="text-sm font-medium text-muted-foreground uppercase tracking-wider">@crew.positivty</span>
            </div>
            <h2 className="font-serif text-3xl md:text-4xl font-bold text-balance text-primary-foreground">
              Follow Our Journey
            </h2>
          </div>
          <Button variant="outline" className="gap-2 w-fit bg-transparent" asChild>
            <a href="https://www.instagram.com/crew.positivity/" target="_blank" rel="noopener noreferrer">
              <ExternalLink className="w-4 h-4" />
              Visit Profile
            </a>
          </Button>
        </div>

        {/* Instagram Grid */}
        <div className="grid grid-cols-2 md:grid-cols-4 gap-4">
          {instagramPosts.map((post) => (
            <a
              key={post.id}
              href="https://www.instagram.com/crew.positivity/"
              target="_blank"
              rel="noopener noreferrer"
              className="relative aspect-square overflow-hidden rounded-xl group"
            >
              <Image
                src={post.image || "/placeholder.svg"}
                alt="Instagram post"
                fill
                className="object-cover transition-transform duration-500 group-hover:scale-110"
              />
              <div className="absolute inset-0 bg-foreground/0 group-hover:bg-foreground/60 transition-colors flex items-center justify-center">
                <span className="text-primary-foreground font-medium opacity-0 group-hover:opacity-100 transition-opacity">
                  ♥ {post.likes}
                </span>
              </div>
            </a>
          ))}
        </div>
      </div>
    </section>
  )
}
