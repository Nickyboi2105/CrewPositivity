import { Button } from "@/components/ui/button"
import { CampaignLogo } from "./campaign-logo"
import { ArrowRight, Instagram } from "lucide-react"

export function HeroSection() {
  return (
    <section className="relative min-h-screen flex items-center justify-center overflow-hidden pt-20">
      {/* Background Pattern */}
      <div className="absolute inset-0 opacity-30">
        <div className="absolute top-20 left-10 w-64 h-64 rounded-full bg-primary/20 blur-3xl" />
        <div className="absolute bottom-20 right-10 w-96 h-96 rounded-full bg-accent/20 blur-3xl" />
      </div>

      <div className="container mx-auto px-6 relative z-10">
        <div className="grid lg:grid-cols-2 gap-12 items-center">
          {/* Left Content */}
          <div className="flex flex-col gap-8">
            

            <h1 className="font-serif text-5xl md:text-7xl font-bold leading-tight text-balance text-primary-foreground">
              Creating Positive Change, Together
            </h1>

            <p className="text-lg text-muted-foreground max-w-lg leading-relaxed">
              Join our student-driven campaign to make a lasting impact. By spreading positivity across the Silver Creek Campus, we&apos;re building a brighter future for everyone. As of now we have sent 34 cards and have recieved so many smile from younger and older students alike! 
            </p>

            <div className="flex flex-wrap gap-4">
              <Button size="lg" className="gap-2 text-foreground">
                Get Involved
                <ArrowRight className="h-4 w-4" />
              </Button>
              
            </div>

            {/* Stats */}
            <div className="flex gap-8 pt-8 border-t border-border">
              <div>
                <p className="font-serif text-3xl font-bold text-foreground">{"10+"}</p>
                <p className="text-sm text-muted-foreground">Community Members</p>
              </div>
              <div>
                <p className="font-serif text-3xl font-bold text-foreground">{"30+"}</p>
                <p className="text-sm text-muted-foreground">Cards sent </p>
              </div>
              <div>
                <p className="font-serif text-3xl font-bold text-foreground">{"25"}</p>
                <p className="text-sm text-muted-foreground">followers </p>
              </div>
            </div>
          </div>

          {/* Right Visual */}
          <div className="relative flex items-center justify-center">
            <div className="relative w-80 h-80 md:w-96 md:h-96">
              {/* Decorative Circles */}
              <div
                className="absolute inset-0 rounded-full border-2 border-dashed border-primary/30 animate-spin"
                style={{ animationDuration: "30s" }}
              />
              <div
                className="absolute inset-4 rounded-full border-2 border-dashed border-accent/30 animate-spin"
                style={{ animationDuration: "25s", animationDirection: "reverse" }}
              />

              {/* Center Logo */}
              <div className="absolute inset-8 bg-card rounded-full shadow-2xl flex items-center justify-center">
                <CampaignLogo className="w-32 h-32 md:w-40 md:h-40" />
              </div>

              {/* Floating Elements */}
              <div
                className="absolute -top-4 right-8 bg-card p-3 rounded-xl shadow-lg animate-bounce"
                style={{ animationDuration: "3s" }}
              >
                <span className="text-2xl">{"☺️"}</span>
              </div>
              <div
                className="absolute bottom-8 -left-4 bg-card p-3 rounded-xl shadow-lg animate-bounce"
                style={{ animationDuration: "3.5s" }}
              >
                <span className="text-2xl">{"💞"}</span>
              </div>
              <div
                className="absolute top-1/2 -right-4 bg-card p-3 rounded-xl shadow-lg animate-bounce"
                style={{ animationDuration: "4s" }}
              >
                <span className="text-2xl">✨</span>
              </div>
            </div>
          </div>
        </div>
      </div>

      {/* Scrolling Marquee */}
      <div className="absolute bottom-0 left-0 right-0 py-4 bg-primary overflow-hidden">
        <div className="flex animate-marquee whitespace-nowrap">
          {[...Array(3)].map((_, i) => (
            <div key={i} className="flex items-center gap-8 mx-8">
              <span className="text-primary-foreground font-medium">COMMUNITY</span>
              <span className="text-primary-foreground/60">•••</span>
              <span className="text-primary-foreground font-medium">CHANGE</span>
              <span className="text-primary-foreground/60">•••</span>
              <span className="text-primary-foreground font-medium">CONNECTION</span>
              <span className="text-primary-foreground/60">•••</span>
              <span className="text-primary-foreground font-medium">GROWTH</span>
              <span className="text-primary-foreground/60">•••</span>
            </div>
          ))}
        </div>
      </div>
    </section>
  )
}
