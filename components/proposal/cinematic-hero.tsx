"use client"

import { useEffect, useRef, useState } from "react"
import Image from "next/image"

import { cn } from "@/lib/utils"

type CinematicHeroProps = {
  src: string
  poster: string
  className?: string
}

export function CinematicHero({ src, poster, className }: CinematicHeroProps) {
  const videoRef = useRef<HTMLVideoElement>(null)
  const [reducedMotion, setReducedMotion] = useState(false)

  useEffect(() => {
    const media = window.matchMedia("(prefers-reduced-motion: reduce)")
    const update = () => setReducedMotion(media.matches)
    update()
    media.addEventListener("change", update)
    return () => media.removeEventListener("change", update)
  }, [])

  useEffect(() => {
    if (reducedMotion) return
    const video = videoRef.current
    if (!video) return
    void video.play().catch(() => undefined)
  }, [reducedMotion, src])

  if (reducedMotion) {
    return (
      <div className={cn("absolute inset-0", className)}>
        <Image
          src={poster}
          alt=""
          fill
          className="object-cover"
          sizes="100vw"
          priority
        />
      </div>
    )
  }

  return (
    <div className={cn("pointer-events-none absolute inset-0", className)}>
      <video
        ref={videoRef}
        className="absolute inset-0 size-full object-cover"
        src={src}
        poster={poster}
        muted
        playsInline
        loop
        preload="auto"
        aria-hidden
      />
    </div>
  )
}
