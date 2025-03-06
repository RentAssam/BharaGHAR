import { cn } from "@/lib/utils"
import Script from "next/script"

interface AdBannerProps {
  className?: string
  size?: "horizontal" | "vertical" | "square"
}

export default function AdBanner({ className, size = "horizontal" }: AdBannerProps) {
  // Determine dimensions based on size
  let dimensions = "h-[90px] w-full"
  let text = "Advertisement (728×90)"

  if (size === "vertical") {
    dimensions = "h-[600px] w-[160px]"
    text = "Advertisement (160×600)"
  } else if (size === "square") {
    dimensions = "h-[250px] w-[300px]"
    text = "Advertisement (300×250)"
  }

  return (
    <>
      <Script
        async
        src="https://pagead2.googlesyndication.com/pagead/js/adsbygoogle.js?client=ca-pub-YOUR_CLIENT_ID"
        crossOrigin="anonymous"
      />
      <ins
        className={cn("adsbygoogle", dimensions, className)}
        style={{ display: "block" }}
        data-ad-client="ca-pub-YOUR_CLIENT_ID"
        data-ad-slot="YOUR_AD_SLOT_ID"
        data-ad-format="auto"
        data-full-width-responsive="true"
      />
      <Script id={`ad-${size}`}>{`(adsbygoogle = window.adsbygoogle || []).push({});`}</Script>
    </>
  )
}

