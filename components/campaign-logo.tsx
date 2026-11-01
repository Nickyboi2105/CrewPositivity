export function CampaignLogo({ className = "" }: { className?: string }) {
  return (
    <svg viewBox="0 0 48 48" fill="none" xmlns="http://www.w3.org/2000/svg" className={className}>
      {/* Organic leaf/sprout shape representing growth and positive change */}
      <circle cx="24" cy="24" r="22" className="fill-primary" />
      <path
        d="M24 12C24 12 16 18 16 26C16 30 19 34 24 36C29 34 32 30 32 26C32 18 24 12 24 12Z"
        className="fill-primary-foreground"
      />
      <path d="M24 18V32" className="stroke-primary" strokeWidth="2" strokeLinecap="round" />
      <path d="M20 24C20 24 22 22 24 22" className="stroke-primary" strokeWidth="2" strokeLinecap="round" />
      <path d="M28 26C28 26 26 24 24 24" className="stroke-primary" strokeWidth="2" strokeLinecap="round" />
    </svg>
  )
}

export function CampaignLogoFull({ className = "" }: { className?: string }) {
  return (
    <div className={`flex items-center gap-3 ${className}`}>
      <CampaignLogo className="h-10 w-10" />
      <div className="flex flex-col">
        <span className="font-serif text-xl font-bold tracking-tight text-primary-foreground">Crew Positivity </span>
        <span className="text-xs uppercase tracking-widest text-foreground">Community Campaign</span>
      </div>
    </div>
  )
}
