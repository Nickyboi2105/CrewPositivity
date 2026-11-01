import { Navigation } from "@/components/navigation"
import { HeroSection } from "@/components/hero-section"
import { AboutSection } from "@/components/about-section"
import { PostcardGallery } from "@/components/postcard-gallery"
import { ImpactSection } from "@/components/impact-section"
import { InstagramFeed } from "@/components/instagram-feed"
import { ContactSection } from "@/components/contact-section"
import { NewsletterSection } from "@/components/newsletter-section"
import { Footer } from "@/components/footer"

export default function CampaignPage() {
  return (
    <main className="min-h-screen">
      <Navigation />
      <HeroSection />
      <AboutSection />
      <PostcardGallery />
      <ImpactSection />
      <InstagramFeed />
      <ContactSection />
      <NewsletterSection />
      <Footer />
    </main>
  )
}
