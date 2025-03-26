import Link from "next/link"
import { Facebook, Instagram, Youtube,  } from "lucide-react"
import { FaTiktok, FaSpotify } from "react-icons/fa";

export default function Footer() {
  return (
    <footer className="border-t bg-background">
      <div className="container py-8 md:py-12">
        <div className="grid grid-cols-1 gap-8 md:grid-cols-3">
          <div className="space-y-4">
            <h3 className="text-lg font-bold">Fish Hook</h3>
            <p className="text-sm text-muted-foreground">
              Banda de Rock integrada por Ossie Chacón, Alonso Vargas, Manuel Calleros y Daniel Vargas nacida en Chihuahua, Chihuahua México con un estilo de rock clásico y progresivo.
            </p>
          </div>
          <div className="space-y-4">
            <h3 className="text-lg font-bold">Enlaces</h3>
            <nav className="flex flex-col space-y-2">
              <Link href="/" className="text-sm hover:text-primary">
                Inicio
              </Link>
              <Link href="/about" className="text-sm hover:text-primary">
                Nosotros
              </Link>
              <Link href="/discography" className="text-sm hover:text-primary">
                Discografía
              </Link>
              <Link href="/events" className="text-sm hover:text-primary">
                Eventos
              </Link>
            
              <Link href="/contact" className="text-sm hover:text-primary">
                Contacto
              </Link>
            </nav>
          </div>
          <div className="space-y-4">
            <h3 className="text-lg font-bold">Nuestras redes</h3>
            <div className="flex space-x-4">
              <Link href="https://www.facebook.com/FishHookCuu" target="_blank" className="text-muted-foreground hover:text-primary">
                <Facebook className="h-5 w-5" />
                <span className="sr-only">Facebook</span>
              </Link>
              <Link href="https://www.instagram.com/fishhookbandmx/" target="_blank" className="text-muted-foreground hover:text-primary">
                <Instagram className="h-5 w-5" />
                <span className="sr-only">Instagram</span>
              </Link>
              <Link href="https://www.tiktok.com/@fishhookband" target="_blank" className="text-muted-foreground hover:text-primary">
                <FaTiktok className="h-5 w-5" />
                <span className="sr-only">Tiktok</span>
              </Link>
              <Link href="https://www.youtube.com/@FishHookBandMx" target="_blank" className="text-muted-foreground hover:text-primary">
                <Youtube className="h-5 w-5" />
                <span className="sr-only">YouTube</span>
              </Link>
              <Link href="https://open.spotify.com/intl-es/artist/5We27ylV1cDCHbBbeCcN5j?si=Sdnpf7vVTOa24SRL74aRbw" target="_blank" className="text-muted-foreground hover:text-primary">
                <FaSpotify className="h-5 w-5" />
                <span className="sr-only">Spotify</span>
              </Link>
            </div>
          </div>
        </div>
        <div className="mt-8 border-t pt-8 text-center">
          <p className="text-xs text-muted-foreground">
            &copy; {new Date().getFullYear()} Fish Hook. Derechos reservados.
          </p>
        </div>
      </div>
    </footer>
  )
}

