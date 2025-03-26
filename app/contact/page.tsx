
"use client"
import { useState, useEffect } from "react"
import { Button } from "@/components/ui/button"
import { Card, CardContent } from "@/components/ui/card"
import { Phone, Facebook, Instagram, Youtube, ExternalLink} from "lucide-react"
import Link from "next/link"
import { FaTiktok, FaSpotify } from "react-icons/fa";


export default function ContactPage() {
    const [isVisible, setIsVisible] = useState(false)
  const [hoveredCard, setHoveredCard] = useState<number | null>(null)

  useEffect(() => {
    setIsVisible(true)
  }, [])

  const socialMediaPlatforms = [
    {
      name: "Facebook",
      icon: <Facebook className="h-8 w-8 text-blue-600" />,
      description: "Siguenos para enterarte de nuestras actualizaciones y eventos",
      color: "bg-blue-600",
      hoverColor: "hover:bg-blue-700",
      textColor: "text-blue-600",
      link: "https://www.facebook.com/FishHookCuu",
    },
    {
      name: "Instagram",
      icon: <Instagram className="h-8 w-8 text-pink-600" />,
      description: "Dale un vistazo a nuestras fotos y videos",
      color: "bg-pink-600",
      hoverColor: "hover:bg-pink-700",
      textColor: "text-pink-600",
      link: "https://www.instagram.com/fishhookbandmx/",
    },
    {
      name: "YouTube",
      icon: <Youtube className="h-8 w-8 text-red-600" />,
      description: "Escucha nuestros covers y canciones originales en Youtube",
      color: "bg-red-600",
      hoverColor: "hover:bg-red-700",
      textColor: "text-red-600",
      link: "https://www.youtube.com/@FishHookBandMx",
    },
    {
      name: "Tik Tok",
      icon: <FaTiktok className="h-8 w-8 text-indigo-600" />,
      description: "Ríete un rato con nosotros en Tik Tok",
      color: "bg-indigo-600",
      hoverColor: "hover:bg-indigo-700",
      textColor: "text-indigo-600",
      link: "https://www.tiktok.com/@fishhookband",},
    {
      name: "Spotify",
      icon: <FaSpotify className="h-8 w-8 text-green-600" />,
      description: "Escucha nuestra música original en Spotify",
      color: "bg-green-600",
      hoverColor: "hover:bg-green-700",
      textColor: "text-green-600",
      link: "https://open.spotify.com/intl-es/artist/5We27ylV1cDCHbBbeCcN5j?si=Sdnpf7vVTOa24SRL74aRbw",}
  ]

  return (
    <div className="flex flex-col">
      <section className="bg-muted py-16 md:py-24">
        <div className="container">
          <div
            className={`mx-auto max-w-3xl text-center transition-all duration-1000 ${
              isVisible ? "translate-y-0 opacity-100" : "translate-y-10 opacity-0"
            }`}
          >
            <h1 className="text-3xl font-bold tracking-tight sm:text-4xl md:text-5xl">Conecta con nosotros</h1>
            <p className="mt-4 text-lg text-muted-foreground">
              Siguenos en nuestras redes sociales y contactanos para cualquier consulta.
            </p>
          </div>
        </div>
      </section>

     {/* Links para redes sociales */}
     <section className="py-16">
        <div className="container">
          <div className="mx-auto max-w-4xl">
            <h2 className="mb-8 text-center text-3xl font-bold">Siguenos en nuestras redes sociales</h2>

            <div className="grid grid-cols-1 gap-6 sm:grid-cols-2 lg:grid-cols-5">
              {socialMediaPlatforms.map((platform, index) => (
                <Card
                  key={index}
                  className={`h-full flex flex-col overflow-hidden transition-all duration-300 ${
                    hoveredCard === index ? "transform -translate-y-2 shadow-lg" : ""
                  }`}
                  onMouseEnter={() => setHoveredCard(index)}
                  onMouseLeave={() => setHoveredCard(null)}
                >
                  <div className={`h-2 ${platform.color}`}></div>
                  <CardContent className="p-6 flex flex-col flex-grow">
                    <div className="flex flex-col items-center text-center h-full">
                      <div
                        className={`mb-4 rounded-full ${platform.color.replace("bg-", "bg-")}/10 p-4 transition-transform duration-300 ${
                          hoveredCard === index ? "scale-110" : ""
                        }`}
                      >
                        {platform.icon}
                      </div>
                      
                      <h3 className="text-xl font-bold mb-2">{platform.name}</h3>
                      
                      <div className="min-h-[72px] mb-4 flex items-center">
                        <p className="text-sm text-muted-foreground">
                          {platform.description}
                        </p>
                      </div>
                      
                      <div className="mt-auto w-full">
                        <Button
                          className={`w-full ${platform.color} ${platform.hoverColor} transition-all duration-300 ${
                            hoveredCard === index ? "scale-105" : ""
                          }`}
                          asChild
                        >
                          <Link href={platform.link} target="_blank">
                            <ExternalLink className={`mr-2 h-4 w-4 ${hoveredCard === index ? "animate-pulse" : ""}`} />
                            Seguir
                          </Link>
                        </Button>
                      </div>
                    </div>
                  </CardContent>
                </Card>
              ))}
            </div>
          </div>
        </div>
      </section>


      {/* Contrataciones */}
      <section className="py-16 bg-gradient-to-b from-black to-gray-900">
        <div className="container">
          <div
            className={`mx-auto max-w-3xl text-center transition-all duration-1000 ${
              isVisible ? "translate-y-0 opacity-100" : "translate-y-10 opacity-0"
            }`}
          >
            <h2 className="text-3xl font-bold mb-6">¡Tocamos en tu evento!</h2>
            <p className="text-muted-foreground mb-8">
              ¿Te interesa que Fish Hook toque en tu evento, fiesta o establecimiento? Contáctanos directamente para más información
            </p>

            <div className="relative bg-background rounded-lg p-8 shadow-xl overflow-hidden">
              <div className="absolute top-0 left-0 w-full h-full overflow-hidden">
                <div className="absolute top-0 left-0 w-20 h-20 rounded-full bg-primary/5 animate-pulse"></div>
                <div
                  className="absolute bottom-0 right-0 w-32 h-32 rounded-full bg-primary/5 animate-pulse"
                  style={{ animationDelay: "1s" }}
                ></div>
                <div
                  className="absolute top-1/2 right-10 w-16 h-16 rounded-full bg-primary/5 animate-pulse"
                  style={{ animationDelay: "0.5s" }}
                ></div>
              </div>

              <div className="relative z-10 flex flex-col items-center space-y-8">
                <div
                  className="rounded-full bg-primary/10 p-6 shadow-lg animate-bounce"
                  style={{ animationDuration: "3s" }}
                >
                  <Phone className="h-12 w-12 text-primary" />
                </div>

                <div className="text-center">
                  <p className="text-lg mb-3 font-medium">Contrataciones e información:</p>
                  <div className="relative inline-block">
                    <p className="text-4xl font-bold text-primary mb-1 transition-all duration-300 hover:scale-105 hover:text-primary/90">
                      +52 (614) 136-1754
                    </p>
                    <div className="h-1 w-0 bg-primary mx-auto transition-all duration-700 group-hover:w-full"></div>
                  </div>
                  <p className="mt-3 text-sm text-muted-foreground">Ing. Gerardo Vargas</p>
                </div>

                <div className="flex flex-col w-full sm:flex-row gap-4  max-w-md justify-center">
                  <Link href="https://wa.me/526141361754" target="_blank">
                    <Button
                      size="lg"
                      className="flex-1 bg-primary hover:bg-primary/90 transition-all duration-300 hover:scale-105 group cursor-pointer"
                    >
                      <Phone className="mr-2 h-5 w-5 group-hover:animate-pulse" />
                      <span>WhatsApp </span>
                    </Button>
                  </Link>

                
                </div>

              
              </div>
            </div>
          </div>
        </div>
      </section>

      
    </div>
  )
}