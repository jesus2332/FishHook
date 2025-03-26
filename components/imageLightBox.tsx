"use client"

import { useEffect } from "react"
import Image from "next/image"
import { X } from "lucide-react"
import { Button } from "@/components/ui/button"

interface ImageLightboxProps {
  isOpen: boolean
  onClose: () => void
  imageSrc: string
  alt: string
}

export default function ImageLightbox({ isOpen, onClose, imageSrc, alt }: ImageLightboxProps) {
  useEffect(() => {
    if (isOpen) {
      document.body.style.overflow = "hidden"
    } else {
      document.body.style.overflow = ""
    }

    return () => {
      document.body.style.overflow = ""
    }
  }, [isOpen])

  useEffect(() => {
    const handleEsc = (event: KeyboardEvent) => {
      if (event.key === "Escape") onClose()
    }

    if (isOpen) {
      document.addEventListener("keydown", handleEsc)
    }

    return () => {
      document.removeEventListener("keydown", handleEsc)
    }
  }, [isOpen, onClose])

  if (!isOpen) return null

  return (
    <div
      className="fixed inset-0 z-[100] flex items-center justify-center bg-black/90 p-4"
      onClick={onClose}
      role="dialog"
      aria-modal="true"
      aria-labelledby="lightbox-title"
    >
      <div className="relative max-h-[90vh] max-w-[90vw]">
        <div className="absolute -top-12 right-0 z-10">
          <Button
            variant="secondary"
            size="icon"
            onClick={(e) => {
              e.stopPropagation()
              onClose()
            }}
            aria-label="Close lightbox"
            className="rounded-full bg-background/80 backdrop-blur hover:bg-background"
          >
            <X className="h-5 w-5" />
          </Button>
        </div>

        <div className="overflow-hidden rounded-lg">
          <Image
            src={imageSrc || "/placeholder.svg"}
            alt={alt}
            width={1200}
            height={800}
            className="max-h-[85vh] w-auto object-contain"
            priority
            id="lightbox-title"
          />
        </div>
      </div>
    </div>
  )
}

