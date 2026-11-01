import { Target, Users, Lightbulb, Heart } from "lucide-react"

const values = [
  {
    icon: Target,
    title: "Mission-Driven",
    description: "Every action we take is focused on creating measurable, positive change in students.",
  },
  {
    icon: Users,
    title: "Community First",
    description: "We believe in the power of collective action and bringing people together for a common cause.",
  },
  {
    icon: Lightbulb,
    title: "Innovation",
    description: "Finding ways to spread positivity through reels and physical items.",
  },
  {
    icon: Heart,
    title: "Compassion",
    description: "Leading with empathy and understanding, ensuring everyone feels welcome and valued.",
  },
]

export function AboutSection() {
  return (
    <section id="about" className="py-24">
      <div className="container mx-auto px-6">
        <div className="grid lg:grid-cols-2 gap-16 items-center">
          {/* Left Content */}
          <div>
            <span className="inline-block px-4 py-1 bg-primary/10 text-sm font-medium rounded-full mb-4 text-foreground">
              About Our Campaign
            </span>
            <h2 className="font-serif text-4xl md:text-5xl font-bold mb-6 text-balance text-primary-foreground">
              Dedicated to Kindness, Generosity & Happiness
            </h2>
            <p className="text-muted-foreground mb-6 leading-relaxed">
              Crew Positivity is an initiative founded by students who came together to spread positivity and generate a welcome environment to all students starting from Silver Creek High School's Campus                         
            </p>
            <p className="text-muted-foreground mb-8 leading-relaxed">
              We help foster joy and positive feelings through the handing of kindness notes, candy, and uploading promotional videos. Because everyone has their preference of kindness and we hope to reach all types of audience with our first being fellow students like our team.
            </p>

            {/* Signature Style Element */}
            <div className="flex items-center gap-4">
              <div className="h-px flex-1 bg-primary-foreground" />
              <span className="font-serif text-2xl italic text-primary-foreground">Crew Positivity</span>
              <div className="h-px flex-1 bg-primary-foreground" />
            </div>
          </div>

          {/* Right - Values Grid */}
          <div className="grid sm:grid-cols-2 gap-6">
            {values.map((value, index) => (
              <div
                key={value.title}
                className="p-6 bg-card rounded-xl border border-border hover:border-primary/30 hover:shadow-lg transition-all duration-300 group"
              >
                <div className="w-12 h-12 bg-primary/10 rounded-lg flex items-center justify-center mb-4 group-hover:bg-primary/20 transition-colors">
                  <value.icon className="w-6 h-6 text-primary" />
                </div>
                <h3 className="font-serif text-xl font-semibold text-card-foreground mb-2">{value.title}</h3>
                <p className="text-sm text-muted-foreground">{value.description}</p>
              </div>
            ))}
          </div>
        </div>
      </div>
    </section>
  )
}
