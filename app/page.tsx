"use client"
import { useState, useEffect } from "react"
import Image from "next/image"
import { Button } from "@/components/ui/button"
import { Play, Calendar, Music, Phone } from "lucide-react"
import { Vortex } from '../components/ui/vortex';
import { TextGenerateEffect } from "@/components/ui/text-generate-effect"
import {Card, CardContent} from "@/components/ui/card"
import Carousel from "@/components/ui/carousel";

import Link from "next/link"
import { bandMembers } from "@/lib/bandMembers"; 


export default function Home() {

  const slideData = [
    {
      src: "/fishhook_slides_1.jpg",},
    {
      src: "/fishhook_slides_2.jpg",},
    {
      src: "/fishhook_slides_3.JPG",},
    {
      src: "/fishhook_slides_4.jpg",},
  ]



  const [isVisible, setIsVisible] = useState(false)

  useEffect(() => {
    setIsVisible(true)
  }, [])


  
  return (
    <div className="flex flex-col">
    
  
      <section className="hero-gradient relative flex min-h-[91vh] flex-col items-center justify-center text-center overflow-hidden">
        <div className="absolute inset-0 z-0">
          <Vortex
            particleCount={500}
            rangeY={800}
            baseHue={350}
            backgroundColor="transparent"
          />
        </div>

        <div 

          className={`container space-y-6 transition-opacity duration-1000 ${isVisible ? "opacity-100" : "opacity-0"} relative z-20`}
          
        >
          <div className="mx-auto mb-2 z-10">
            <Image
              src="/fhlogo.png"
              alt="Fuego Salvaje Logo"
              width={450}
              height={450}
              className="mx-auto" 
            />
          </div>

          <TextGenerateEffect className="mt-0" words={'Encendiendo la escena del rock en México'}/>
          
          <div className="flex flex-col items-center justify-center space-x-4 space-y-4 sm:flex-row sm:space-x-4 sm:space-y-0 mb-10">
            <Link href="/discography" >
              <Button size="lg" className="group cursor-pointer">
                <Play className="mr-2 h-4 w-4 transition-transform group-hover:scale-110" />
                Escuchalos ahora
              </Button>
            </Link>
           
           <Link href="/events">
            <Button size="lg" variant="outline" className="cursor-pointer">
                <Calendar className="mr-2 h-4 w-4" />
                Proximos eventos
              </Button>
            
           </Link>
            
          </div>
        </div>

        <div className="absolute bottom-0 left-0 right-0 h-1 bg-primary animate-pulse-glow z-30"></div>
      </section>










      {/* Ultimo lanzamiento (ultimo sencillo/album) */}
      <section className="py-16">
        <div className="container">
          <div className="mb-10 text-center">
            <h2 className="text-3xl font-bold tracking-tight sm:text-4xl">Último lanzamiento</h2>
            <p className="mt-4 text-muted-foreground">Nuevo sencillo</p>
          </div>

          <Card className="grid grid-cols-1 gap-8 md:grid-cols-2 bg-primary/10 z-40" color="#262626">
            <div className="flex items-center justify-center"> 
              <div> 
                <Image
                  src="/fh_display.jpg"
                  alt="Cover-April Rain"
                  width={500}
                  height={500}
                  className="object-cover aspect-square w-full max-w-md overflow-hidden rounded-lg shadow-lg transition-all hover:shadow-xl z-10"  
                />
              </div>
            </div>

            <div className="flex flex-col justify-center space-y-6 z-20 px-4">
              <h3 className="text-2xl font-bold">April Rain</h3>
              <p className="text-muted-foreground">
                Escucha nuestro último lanzamiento, &quot;April Rain&quot;. Un sencillo con tintes celtas que te transportará.
              </p>
              <div className="space-y-2">
                <div className="flex items-center">
                  <Music className="mr-2 h-4 w-4 text-primary" />
                  <span>Sencillo</span>
                </div>
                <div className="flex items-center">
                  <Calendar className="mr-2 h-4 w-4 text-primary" />
                  <span>Lanzamiento: Enero 2025</span>
                </div>
              </div>
              
              {/* Reproductor Spotify compacto */}
              <div className="mt-4 w-full">
                <iframe 
                  title="April Rain"
                  style={{borderRadius: "12px"}} 
                  src="https://open.spotify.com/embed/track/68zHxMbUuozcTv0cQuZbFp?utm_source=generator" 
                  width="100%" 
                  height="152" 
                  
                  frameBorder="0" 
                  allowFullScreen 
                  allow="autoplay; clipboard-write; encrypted-media; fullscreen; picture-in-picture" 
                  loading="lazy"
                  className="shadow-sm"
                ></iframe>
              </div>

              <div className="flex flex-col space-y-4 sm:flex-row sm:space-x-4 sm:space-y-0 pt-2">
                <Button asChild>
                  <Link href="/discography">Ver discografía</Link>
                </Button>
                <Button variant="outline" asChild>
                  <Link href="https://open.spotify.com/track/68zHxMbUuozcTv0cQuZbFp" target="_blank">
                    Abrir en Spotify
                  </Link>
                </Button>
              </div>
            </div>
          </Card>
        </div>
      </section>

      {/* Breve informacion sobre los integrantes de la banda */}
      <section className="py-16 bg-muted">
        <div className="container">
          <div className="text-center mb-10">
            <h2 className="text-3xl font-bold tracking-tight sm:text-4xl">Meet Fish Hook</h2>
            <p className="mt-4 text-muted-foreground">Conoce a los talentosos integrantes de la banda</p>
          </div>

          <div className="grid gap-8 sm:grid-cols-2 lg:grid-cols-4 mb-12">
            {bandMembers.map((member, index) => {
              const IconComponent = member.icon; 

              return (
                <Card key={index} className="band-member-card overflow-hidden border-0 bg-card shadow-lg p-0">
            
                  <div className="relative h-96 w-full overflow-hidden "> 
                    <Image
                      src={member.image}
                      alt={member.name}
                      fill
                      sizes="(max-width: 768px) 100vw, (max-width: 1200px) 50vw, 25vw"
                      className="object-cover transition-transform duration-300 hover:scale-105 md:object-top object-top"
                    />
                  </div>
                  <CardContent className="pt-0 pb-4 px-4">
                    <div className="mb-2 flex items-center">
                      <div className="mr-2 rounded-full bg-primary/10 p-1 text-primary">
                        <IconComponent className="w-5 h-5" /> 
                      </div>
                      <span className="text-sm font-medium text-muted-foreground">{member.role}</span>
                    </div>
                    <h3 className="text-lg font-bold">{member.name}</h3>
                  </CardContent>
                </Card>
              );
            })}
          </div>

          <div className="text-center">
            <Button size="lg" asChild>
              <Link href="/about">
                Conoce más acerca de la banda
              </Link>
            </Button>
          </div>
        </div>
      </section>


      {/* Galeria */}
      <section>

        <div className=" bg-muted relative overflow-hidden w-full h-full py-20">
         <Carousel slides={slideData} />
        </div>
      </section>


       {/* Enlaces */}
       <section className="bg-muted py-16">
        <div className="container">
          <div className="grid grid-cols-1 gap-6 sm:grid-cols-2 lg:grid-cols-3">
            <Card className="border-2 border-primary/20 bg-card/50 backdrop-blur transition-all hover:-translate-y-1 hover:border-primary">
              <CardContent className="flex flex-col items-center p-6 text-center">
                <div className="mb-4 rounded-full bg-primary/10 p-3">
                  <Music className="h-6 w-6 text-primary" />
                </div>
                <h3 className="mb-2 text-xl font-bold">Nuestra música</h3>
                <p className="mb-4 text-sm text-muted-foreground">
                  Explora nuestra discografía y escucha nuestros sencillos.
                </p>
                <Link href="/discography" className="text-primary hover:underline">
                  Ver Discografía
                </Link>
              </CardContent>
            </Card>

            <Card className="border-2 border-primary/20 bg-card/50 backdrop-blur transition-all hover:-translate-y-1 hover:border-primary">
              <CardContent className="flex flex-col items-center p-6 text-center">
                <div className="mb-4 rounded-full bg-primary/10 p-3">
                  <Calendar className="h-6 w-6 text-primary" />
                </div>
                <h3 className="mb-2 text-xl font-bold">Live Shows</h3>
                <p className="mb-4 text-sm text-muted-foreground">
                  Consulta los próximos shows de la banda en distintos lugares.
                </p>
                <Link href="/events" className="text-primary hover:underline">
                  Ver Eventos
                </Link>
              </CardContent>
            </Card>

            <Card className="border-2 border-primary/20 bg-card/50 backdrop-blur transition-all hover:-translate-y-1 hover:border-primary sm:col-span-2 lg:col-span-1">
              <CardContent className="flex flex-col items-center p-6 text-center">
                <div className="mb-4 rounded-full bg-primary/10 p-3">
                  <Phone className="h-6 w-6 text-primary" />
                </div>
                <h3 className="mb-2 text-xl font-bold">Contacto</h3>
                <p className="mb-4 text-sm text-muted-foreground">
                  Contactanos para eventos y colaboraciones
                </p>
                <Link href="/merch" className="text-primary hover:underline">
                  Contactanos ahora
                </Link>
              </CardContent>
            </Card>
          </div>
        </div>
      </section>










    </div>

      

  )
}