"use client"
import Image from "next/image"
import { Button } from "@/components/ui/button"
import { Play, Calendar, Music, Phone } from "lucide-react"
import { Vortex } from '../components/ui/vortex'
import { TextGenerateEffect } from "@/components/ui/text-generate-effect"
import { Card, CardContent } from "@/components/ui/card"
import Carousel from "@/components/ui/carousel"
import { motion } from "motion/react"
import Link from "next/link"
import { bandMembers } from "@/lib/bandMembers"

const container = {
  hidden: { opacity: 0 },
  visible: {
    opacity: 1,
    transition: {
      staggerChildren: 0.1
    }
  }
}

const item = {
  hidden: { y: 20, opacity: 0 },
  visible: {
    y: 0,
    opacity: 1,
    transition: {
      duration: 0.5
    }
  }
}

const fadeIn = {
  hidden: { opacity: 0 },
  visible: { opacity: 1, transition: { duration: 0.8 } }
}



export default function Home() {
  const slideData = [
    { src: "/fishhook_slides_1.jpg" },
    { src: "/fishhook_slides_2.jpg" },
    { src: "/fishhook_slides_5.jpg" },
    { src: "/fishhook_slides_4.jpg" },
  ]



  return (
    <div className="flex flex-col">
      <section className="bg-black relative flex min-h-[91vh] flex-col items-center justify-center text-center overflow-hidden">
        <div className="absolute inset-0 z-0">
          <Vortex
            particleCount={500}
            rangeY={800}
            baseHue={350}
            backgroundColor="transparent"
          />
        </div>

        <motion.div
          initial="hidden"
          animate="visible"
          variants={container}
          className="container space-y-6 relative z-20"
        >
          <motion.div variants={item} className="mx-auto mb-2 z-10">
            <Image
              src="/fhlogo.png"
              alt="Fish Hook Logo"
              width={450}
              height={450}
              className="mx-auto"
              priority
            />
          </motion.div>

          <motion.div variants={item}>
            <TextGenerateEffect words="Encendiendo la escena del rock en México" />
          </motion.div>

          <motion.div 
            variants={container}
            className="flex flex-col items-center justify-center space-y-4 sm:flex-row sm:space-x-4 sm:space-y-0 mb-10"
          >
            <motion.div variants={item}>
              <Link href="/discography">
                <Button size="lg" className="group cursor-pointer">
                  <Play className="mr-2 h-4 w-4 group-hover:scale-110 transition-transform" />
                  Escúchanos ahora
                </Button>
              </Link>
            </motion.div>
            
            <motion.div variants={item}>
              <Link href="/events">
                <Button size="lg" variant="outline" className="cursor-pointer">
                  <Calendar className="mr-2 h-4 w-4" />
                  Próximos eventos
                </Button>
              </Link>
            </motion.div>
          </motion.div>
        </motion.div>

        <div className="absolute bottom-0 left-0 right-0 h-1 bg-primary animate-pulse-glow z-30"></div>
        
      </section>

      {/* Último Lanzamiento */}
      <motion.section
        initial={{ opacity: 0, y: 50 }}
        whileInView={{ opacity: 1, y: 0 }}
        viewport={{ once: true }}
        transition={{ duration: 0.8 }}
        className="py-16"
      >
        <div className="container">
          <motion.div 
            variants={fadeIn}
            initial="hidden"
            whileInView="visible"
            viewport={{ once: true }}
            className="mb-10 text-center"
          >
            <h2 className="text-3xl font-bold tracking-tight sm:text-4xl">Último lanzamiento</h2>
            <p className="mt-4 text-muted-foreground">Nuevo sencillo</p>
          </motion.div>

          <motion.div
            initial={{ opacity: 0, scale: 0.95 }}
            whileInView={{ opacity: 1, scale: 1 }}
            viewport={{ once: true }}
            transition={{ duration: 0.6 }}
          >
            <Card className="grid grid-cols-1 gap-8 md:grid-cols-2 bg-primary/10">
              <div className="flex items-center justify-center">
                <motion.div
                  whileHover={{ scale: 1.02 }}
                  transition={{ type: "spring", stiffness: 400, damping: 10 }}
                >
                  <Image
                    src="/fh_display.jpg"
                    alt="April Rain Cover"
                    width={500}
                    height={500}
                    className="rounded-lg shadow-lg aspect-square object-cover"
                  />
                </motion.div>
              </div>

              <div className="flex flex-col justify-center space-y-6 px-4 py-6">
                <motion.h3 
                  initial={{ x: -20, opacity: 0 }}
                  animate={{ x: 0, opacity: 1 }}
                  transition={{ delay: 0.2 }}
                  className="text-2xl font-bold"
                >
                  April Rain
                </motion.h3>
                
                <motion.p
                  initial={{ opacity: 0 }}
                  animate={{ opacity: 1 }}
                  transition={{ delay: 0.3 }}
                  className="text-muted-foreground"
                >
                  Escucha nuestro último lanzamiento, &quot;April Rain&quot;. Un sencillo con tintes celtas que te transportará.
                </motion.p>

                <motion.div 
                  initial={{ opacity: 0 }}
                  animate={{ opacity: 1 }}
                  transition={{ delay: 0.4 }}
                  className="space-y-2"
                >
                  <div className="flex items-center">
                    <Music className="mr-2 h-4 w-4 text-primary" />
                    <span>Sencillo</span>
                  </div>
                  <div className="flex items-center">
                    <Calendar className="mr-2 h-4 w-4 text-primary" />
                    <span>Lanzamiento: Enero 2025</span>
                  </div>
                </motion.div>

                <motion.div
                  initial={{ opacity: 0 }}
                  animate={{ opacity: 1 }}
                  transition={{ delay: 0.5 }}
                  className="w-full"
                >
                  <iframe
                    title="Spotify Embed"
                    src="https://open.spotify.com/embed/track/68zHxMbUuozcTv0cQuZbFp?utm_source=generator"
                    width="100%"
                    height="152"
                    frameBorder="0"
                    allow="autoplay; clipboard-write; encrypted-media; fullscreen; picture-in-picture"
                    loading="lazy"
                    className="rounded-lg shadow-sm"
                  />
                </motion.div>

                <motion.div
                  initial={{ opacity: 0 }}
                  animate={{ opacity: 1 }}
                  transition={{ delay: 0.6 }}
                  className="flex flex-col space-y-4 sm:flex-row sm:space-x-4 sm:space-y-0 pt-2"
                >
                  <Button asChild>
                    <Link href="/discography">Ver discografía</Link>
                  </Button>
                  <Button variant="outline" asChild>
                    <Link href="https://open.spotify.com/track/68zHxMbUuozcTv0cQuZbFp" target="_blank">
                      Abrir en Spotify
                    </Link>
                  </Button>
                </motion.div>
              </div>
            </Card>
          </motion.div>
        </div>
      </motion.section>

      {/* IBreve info de los integrantes de la banda */}
      <motion.section
        initial={{ opacity: 0 }}
        whileInView={{ opacity: 1 }}
        viewport={{ once: true }}
        transition={{ duration: 0.8 }}
        className="py-16 bg-muted"
      >
        <div className="container">
          <motion.div
            variants={fadeIn}
            initial="hidden"
            whileInView="visible"
            viewport={{ once: true }}
            className="text-center mb-10"
          >
            <h2 className="text-3xl font-bold tracking-tight sm:text-4xl">Meet Fish Hook</h2>
            <p className="mt-4 text-muted-foreground">Conoce a los talentosos integrantes</p>
          </motion.div>

          <motion.div
            variants={container}
            initial="hidden"
            whileInView="visible"
            viewport={{ once: true }}
            className="grid gap-8 sm:grid-cols-2 lg:grid-cols-4 mb-12"
          >
            {bandMembers.map((member, index) => (
              <motion.div key={index} variants={item}>
                <Card className="band-member-card overflow-hidden border-0 bg-card shadow-lg p-0">
                  <div className="relative h-96 w-full overflow-hidden">
                    <Image
                      src={member.image}
                      alt={member.name}
                      fill
                      sizes="(max-width: 768px) 100vw, (max-width: 1200px) 50vw, 25vw"
                      className="object-cover transition-transform duration-300 hover:scale-105 object-top"
                    />
                  </div>
                  <CardContent className="pt-0 pb-4 px-4">
                    <div className="mb-2 flex items-center">
                      <div className="mr-2 rounded-full bg-primary/10 p-1 text-primary">
                        <member.icon className="w-5 h-5" />
                      </div>
                      <span className="text-sm font-medium text-muted-foreground">{member.role}</span>
                    </div>
                    <h3 className="text-lg font-bold">{member.name}</h3>
                  </CardContent>
                </Card>
              </motion.div>
            ))}
          </motion.div>

          <motion.div
            whileHover={{ scale: 1.05 }}
            whileTap={{ scale: 0.95 }}
            className="text-center"
          >
            <Button size="lg" asChild>
              <Link href="/about">
                Conoce más
              </Link>
            </Button>
          </motion.div>
        </div>
      </motion.section>

      {/* Galería */}
      <motion.section
        initial={{ opacity: 0 }}
        whileInView={{ opacity: 1 }}
        viewport={{ once: true }}
        transition={{ duration: 0.8 }}
      >
        <div className="bg-muted relative overflow-hidden w-full h-full py-20">
          <Carousel slides={slideData} />
        </div>
      </motion.section>

      {/* Enlaces rapidos */}
      <motion.section
        initial={{ opacity: 0 }}
        whileInView={{ opacity: 1 }}
        viewport={{ once: true }}
        transition={{ duration: 0.8 }}
        className="bg-muted py-16"
      >
        <div className="container">
          <motion.div
            variants={container}
            initial="hidden"
            whileInView="visible"
            viewport={{ once: true }}
            className="grid grid-cols-1 gap-6 sm:grid-cols-2 lg:grid-cols-3"
          >
            <motion.div variants={item}>
              <Card className="border-2 border-primary/20 bg-card/50 backdrop-blur hover:border-primary transition-all">
                <CardContent className="flex flex-col items-center p-6 text-center">
                  <div className="mb-4 rounded-full bg-primary/10 p-3">
                    <Music className="h-6 w-6 text-primary" />
                  </div>
                  <h3 className="mb-2 text-xl font-bold">Nuestra música</h3>
                  <p className="mb-4 text-sm text-muted-foreground">
                    Explora nuestra discografía
                  </p>
                  <Link href="/discography" className="text-primary hover:underline">
                    Ver Discografía
                  </Link>
                </CardContent>
              </Card>
            </motion.div>

            <motion.div variants={item}>
              <Card className="border-2 border-primary/20 bg-card/50 backdrop-blur hover:border-primary transition-all">
                <CardContent className="flex flex-col items-center p-6 text-center">
                  <div className="mb-4 rounded-full bg-primary/10 p-3">
                    <Calendar className="h-6 w-6 text-primary" />
                  </div>
                  <h3 className="mb-2 text-xl font-bold">Eventos</h3>
                  <p className="mb-4 text-sm text-muted-foreground">
                    Próximos shows
                  </p>
                  <Link href="/events" className="text-primary hover:underline">
                    Ver Calendario
                  </Link>
                </CardContent>
              </Card>
            </motion.div>

            <motion.div variants={item}>
              <Card className="border-2 border-primary/20 bg-card/50 backdrop-blur hover:border-primary transition-all">
                <CardContent className="flex flex-col items-center p-6 text-center">
                  <div className="mb-4 rounded-full bg-primary/10 p-3">
                    <Phone className="h-6 w-6 text-primary" />
                  </div>
                  <h3 className="mb-2 text-xl font-bold">Contacto</h3>
                  <p className="mb-4 text-sm text-muted-foreground">
                    Contrátanos
                  </p>
                  <Link href="/contact" className="text-primary hover:underline">
                    Contáctanos
                  </Link>
                </CardContent>
              </Card>
            </motion.div>
          </motion.div>
        </div>
      </motion.section>
    </div>
  )
}