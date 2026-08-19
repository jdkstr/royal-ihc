"use client"

import { useEffect, useRef, useState } from "react"
import Image from "next/image"

import { cn } from "@/lib/utils"

type DoubleVideoProps = {
  introSrc: string
  loopSrc: string
  poster: string
  className?: string
}

export function DoubleVideo({
  introSrc,
  loopSrc,
  poster,
  className,
}: DoubleVideoProps) {
  const introRef = useRef<HTMLVideoElement>(null)
  const loopRef = useRef<HTMLVideoElement>(null)
  const [showLoop, setShowLoop] = useState(false)
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
    const intro = introRef.current
    const loop = loopRef.current
    if (!intro || !loop) return

    const playIntro = async () => {
      try {
        await intro.play()
      } catch {
        setShowLoop(true)
        void loop.play().catch(() => undefined)
      }
    }

    const onEnded = () => {
      setShowLoop(true)
      void loop.play().catch(() => undefined)
    }

    intro.addEventListener("ended", onEnded)
    void playIntro()
    return () => intro.removeEventListener("ended", onEnded)
  }, [reducedMotion, introSrc, loopSrc])

  if (reducedMotion) {
    return (
      <div className={cn("relative size-full", className)}>
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
    <div className={cn("relative size-full", className)}>
      <video
        ref={introRef}
        className={cn(
          "absolute inset-0 size-full object-cover transition-opacity duration-[2000ms]",
          showLoop ? "opacity-0" : "opacity-100"
        )}
        src={introSrc}
        poster={poster}
        muted
        playsInline
        preload="auto"
        aria-hidden
      />
      <video
        ref={loopRef}
        className={cn(
          "absolute inset-0 size-full object-cover transition-opacity duration-[2000ms]",
          showLoop ? "opacity-100" : "opacity-0"
        )}
        src={loopSrc}
        muted
        playsInline
        loop
        preload="auto"
        aria-hidden
      />
    </div>
  )
}
