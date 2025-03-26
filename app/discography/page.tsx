"use client"

import { useState } from "react"
import Image from "next/image"
import { Button } from "@/components/ui/button"
import { Card, CardContent } from "@/components/ui/card"
import { Tabs, TabsContent, TabsList, TabsTrigger } from "@/components/ui/tabs"
import { Calendar, Music, Play, Headphones } from "lucide-react"
import Link from "next/link"
import { Single } from "@/lib/types"
import { FaSpotify, FaDeezer } from "react-icons/fa";
import { SiYoutubemusic, SiAmazonmusic, SiTidal, SiApplemusic} from "react-icons/si";




const singles : Single[] = [
  {
    id: "diamond-heart",
    title: "Diamond Heart",
    releaseDate: "2024-05-21",
    cover: "/fh_display.jpg",
    description:
      "Un tema enérgico que explora los sentimientos de amor y la pasión.",
    streamingLinks: {
      spotify: "https://open.spotify.com/intl-es/track/6k96hqc0wX6mlZUaLA5VBy?si=453effffcf0f49c5",
      apple: "https://music.apple.com/mx/album/diamond-heart-single/1744389847",
      youtube: "https://music.youtube.com/watch?v=iT4-HJeSqss&si=LmQJgHwsofXXTGB8",
      amazon: "https://music.amazon.com.mx/albums/B0D343WB15?marketplaceId=ART4WZ8MWBX2Y&musicTerritory=MX&ref=dm_sh_mTEMZFfVl9giQMDAnlDHqtTBY",
    },
  },
  {
    id: "modo-diablo",
    title: "Modo Diablo",
    releaseDate: "2024-09-14",
    cover: "/fh_display.jpg",
    description:
      "Una canción en español acerca de las mamas :)",
    streamingLinks: {
      spotify: "https://open.spotify.com/intl-es/track/50coQeGA2QZaSkdhVsUTHK?si=41c480a061704486",
      apple: "https://music.apple.com/mx/album/modo-diablo-single/1768632358",
      youtube: "https://music.youtube.com/watch?v=HRYIMqkdKoI&si=oRM0ZrVswIXj5IWi",
      amazon: "https://music.amazon.com.mx/albums/B0DH26B7GG?marketplaceId=ART4WZ8MWBX2Y&musicTerritory=MX&ref=dm_sh_jZ4kcyFWnNPrMzzca9IGcgPvo",
    },
  },
 
  {
    id: "the-fisherman",
    title: "The Fisherman",
    releaseDate: "2024-03-20",
    cover: "/fh_display.jpg",
    description:
      "Pieza instrumental para guitarra",
    streamingLinks: {
      spotify: "https://open.spotify.com/intl-es/track/4EGARJy2XAWZ8Xw5BY00pn?si=3e6293a6b51f44d1",
      apple: "https://music.apple.com/mx/album/the-fisherman-single/1763749060",
      youtube: "https://music.youtube.com/watch?v=viHDGbrzD6Q&si=_LGnBROpekDGCzbN",
      amazon: "https://music.amazon.com.mx/albums/B0DDJ12FRQ?marketplaceId=ART4WZ8MWBX2Y&musicTerritory=MX&ref=dm_sh_qKykPFHcQtl3LwO0vgPrCdt5t",  
    },
    

  },
 
  {
    id: "no-more",
    title: "No More",
    releaseDate: "2025-01-07",
    cover: "/fh_display.jpg",
    description:
      "Una canción con estilo rockero indie que refleja la fuerza y la pasión de nuestro grupo",
    streamingLinks: {
      spotify: "https://open.spotify.com/intl-es/track/2RFWqmewfGOHwCNLudgEtN?si=1e164375ffa64123",
      apple: "https://music.apple.com/mx/album/no-more-single/1789671930",
      youtube: "https://music.youtube.com/watch?v=8h1e8x9L__Q&si=2tH_rPaueO0waUfC",
      amazon: "https://music.amazon.com.mx/albums/B0DSGYDKJ1?marketplaceId=ART4WZ8MWBX2Y&musicTerritory=MX&ref=dm_sh_jour6vUztJ3KJhyNhBoHe8dJX",
    },
  },
  {
    id: "april-rain",
    title: "April Rain",
    releaseDate: "2025-01-20",
    cover: "/fh_display.jpg",
    description:
      "Sencillo con tintes celticos ",
    streamingLinks: {
      spotify: "https://open.spotify.com/intl-es/track/68zHxMbUuozcTv0cQuZbFp?si=aaf551b757a74eb1",
      apple: "https://music.apple.com/mx/album/april-rain-single/1791838113",
      youtube: "https://music.youtube.com/watch?v=tkdYolSrRrs&si=tveQoXVDdnJhy26V",
      amazon: "https://music.amazon.com.mx/albums/B0DTHKKBDV?marketplaceId=ART4WZ8MWBX2Y&musicTerritory=MX&ref=dm_sh_ydNpN3Lyk7ffW907LJprs5Lw8",
    },
  },
]

// Agrupar sencillos por año
const groupSinglesByYear = (singles: Single[]) => {
  const grouped: Record<string, typeof singles> = {}

  singles.forEach((single) => {
    const year = new Date(single.releaseDate).getFullYear().toString()

    if (!grouped[year]) {
      grouped[year] = []
    }

    grouped[year].push(single)
  })

  // Ordenar los años de más reciente a más antiguo
  return Object.fromEntries(
    Object.entries(grouped).sort(([yearA], [yearB]) => Number.parseInt(yearB) - Number.parseInt(yearA)),
  )
}

export default function DiscographyPage() {
  const [selectedSingle, setSelectedSingle] = useState<(typeof singles)[0] | null>(null)

  const groupedSingles = groupSinglesByYear(singles)
  const years = Object.keys(groupedSingles)

  return (
    <div className="flex flex-col">
    p
      <section className="bg-muted py-16 md:py-24">
        <div className="container">
          <div className="mx-auto max-w-3xl text-center">
            <h1 className="text-3xl font-bold tracking-tight sm:text-4xl md:text-5xl">Nuestra Discografía</h1>
            <p className="mt-4 text-lg text-muted-foreground">
              Explora nuestros sencillos y descubre nuestra evolución musical a través del tiempo.
            </p>
          </div>
        </div>
      </section>

      {/* SSencillos */}
      <section className="py-16">
        <div className="container">
          <Tabs defaultValue={years[years.length - 1]} className="w-full">
            <div className="mb-8">
              <h2 className="text-2xl font-bold mb-4">Sencillos por Año</h2>
              <TabsList className="grid w-full grid-cols-2 md:grid-cols-4 lg:grid-cols-6">
              {years.sort((a, b) => Number(b) - Number(a)).map((year) => (
                <TabsTrigger key={year} value={year} className="text-sm">
                  {year}
                </TabsTrigger>
              ))}
            </TabsList>
            </div>

            {years.map((year) => (
              <TabsContent key={year} value={year} className="mt-0 animate-in fade-in-50 duration-500">
                <div className="grid gap-8 sm:grid-cols-2 lg:grid-cols-3">
                  {groupedSingles[year].map((single) => (
                    <Card
                      key={single.id}
                      className="overflow-hidden transition-all duration-300 hover:shadow-lg hover:shadow-primary/20 hover:-translate-y-1"
                    >
                      <div className="relative aspect-square w-full overflow-hidden group">
                        <Image
                          src={single.cover || "/placeholder.svg"}
                          alt={`Portada - ${single.title}`}
                          fill
                          className="object-cover transition-transform duration-500 group-hover:scale-105"
                        />
                        <div className="absolute inset-0 bg-gradient-to-t from-black/80 to-transparent opacity-0 group-hover:opacity-100 transition-opacity duration-300 flex items-end">
                          <div className="p-4 w-full">
                            <Button
                              variant="secondary"
                              size="sm"
                              className="w-full gap-2"
                              onClick={() => setSelectedSingle(single)}
                            >
                              <Headphones className="h-4 w-4" />
                              <span>Escuchar Ahora</span>
                            </Button>
                          </div>
                        </div>
                      </div>
                      <CardContent className="p-4">
                        <h3
                          className="text-xl font-bold mb-1 cursor-pointer hover:text-primary transition-colors"
                          onClick={() => setSelectedSingle(single)}
                        >
                          {single.title}
                        </h3>
                        <div className="flex items-center mb-3 text-sm text-muted-foreground">
                          <Calendar className="h-4 w-4 mr-1" />
                          <span>
                            {new Date(single.releaseDate).toLocaleDateString("es-ES", {
                              day: "numeric",
                              month: "long",
                              year: "numeric",
                            })}
                          </span>
                        </div>
                        <p className="text-sm text-muted-foreground mb-4 line-clamp-3">{single.description}</p>
                        <div className="flex justify-between items-center">
                          <div className="flex space-x-2">
                            <Button variant="ghost" size="icon" className="h-8 w-8" asChild>
                              <Link href={single.streamingLinks.spotify} target="_blank">
                                <FaSpotify className="h-4 w-4" />
                                <span className="sr-only">Spotify</span>
                              </Link>
                            </Button>
                            <Button variant="ghost" size="icon" className="h-8 w-8" asChild>
                              <Link href={single.streamingLinks.youtube} target="_blank">
                                <SiYoutubemusic className="h-4 w-4" />
                                <span className="sr-only">YouTube</span>
                              </Link>
                            </Button>
                          </div>
                          <Button
                            variant="outline"
                            size="sm"
                            className="text-xs"
                            onClick={() => setSelectedSingle(single)}
                          >
                            Ver Detalles
                          </Button>
                        </div>
                      </CardContent>
                    </Card>
                  ))}
                </div>
              </TabsContent>
            ))}
          </Tabs>
        </div>
      </section>

      {/* Video Musical */}
      <section className="py-16 bg-muted">
        <div className="container">
          <div className="mx-auto max-w-3xl text-center mb-8">
            <h2 className="text-3xl font-bold mb-4">Video Musical</h2>
            <p className="text-muted-foreground">Disfruta de nuestro video musical de &quot;Diamond Heart&quot;</p>
          </div>
        
          <div className="mx-auto max-w-4xl">
            <div className="relative aspect-video rounded-lg overflow-hidden shadow-xl">
              <iframe
                className="absolute inset-0 w-full h-full"
                src="https://www.youtube.com/embed/M0NsFtZuDr8?si=CGgTcQQA-C-GM-Yd"
                title="Video musical de Fuego Eterno"
                allow="accelerometer; autoplay; clipboard-write; encrypted-media; gyroscope; picture-in-picture"
                allowFullScreen
              ></iframe>
            </div>
          </div>
        </div>
      </section>

      {/* Detalles de los sencillos */}
      {selectedSingle && (
        <div className="fixed inset-0 z-50 flex items-center justify-center bg-black/50 p-4 animate-in fade-in duration-300">
          <div className="max-h-[90vh] w-full max-w-3xl overflow-auto rounded-lg bg-background p-6 animate-in slide-in-from-bottom-10 duration-500">
            <div className="mb-6 flex items-start justify-between">
              <h3 className="text-2xl font-bold">{selectedSingle.title}</h3>
              <Button variant="ghost" size="sm" onClick={() => setSelectedSingle(null)} aria-label="Cerrar detalles">
                ✕
              </Button>
            </div>

            <div className="grid gap-6 md:grid-cols-2">
              <div className="relative aspect-square overflow-hidden rounded-lg">
                <Image
                  src={selectedSingle.cover || "/placeholder.svg"}
                  alt={`Portada - ${selectedSingle.title}`}
                  fill
                  className="object-cover"
                />
              </div>

              <div className="space-y-4">
                <div className="flex items-center text-sm text-muted-foreground">
                  <Calendar className="h-4 w-4 mr-2" />
                  <span>
                    Lanzado el{" "}
                    {new Date(selectedSingle.releaseDate).toLocaleDateString("es-ES", {
                      day: "numeric",
                      month: "long",
                      year: "numeric",
                    })}
                  </span>
                </div>

                <div className="space-y-2">
                  <h4 className="font-medium">Sobre este sencillo</h4>
                  <p>{selectedSingle.description} </p>
                </div>

                <div className="space-y-2">
                  <h4 className="font-medium">Escuchar en</h4>
                  <div className="grid grid-cols-2 gap-2">
                    <Button className="w-full justify-start gap-2" asChild>
                      <Link href={selectedSingle.streamingLinks.spotify} target="_blank">
                        <Music className="h-4 w-4" />
                        <span>Spotify</span>
                      </Link>
                    </Button>
                    <Button className="w-full justify-start gap-2" asChild>
                      <Link href={selectedSingle.streamingLinks.apple} target="_blank">
                        <Music className="h-4 w-4" />
                        <span>Apple Music</span>
                      </Link>
                    </Button>
                    <Button className="w-full justify-start gap-2" asChild>
                      <Link href={selectedSingle.streamingLinks.youtube} target="_blank">
                        <Play className="h-4 w-4" />
                        <span>YouTube Music</span>
                      </Link>
                    </Button>
                    <Button className="w-full justify-start gap-2" asChild>
                      <Link href={selectedSingle.streamingLinks.amazon} target="_blank">
                        <Music className="h-4 w-4" />
                        <span>Amazon Music</span>
                      </Link>
                    </Button>
                  </div>
                </div>

             
              </div>
            </div>
          </div>
        </div>
      )}

      {/* Plataformas de streaming */}
      <section className="bg-black py-16">
  <div className="container">
    <div className="mx-auto max-w-3xl text-center">
      <h2 className="text-3xl font-bold tracking-tight">Escúchanos en Todas Partes</h2>
      <p className="mt-4 text-muted-foreground">
        Nuestra música está disponible en todas las principales plataformas de streaming. Síguenos para estar al
        día con nuestros últimos lanzamientos.
      </p>

      <div className="mt-8 grid grid-cols-2 gap-4 sm:grid-cols-3 md:grid-cols-6">
        {[
          { name: "Spotify", icon: <FaSpotify className="h-6 w-6 text-[#1DB954]" />, link: "https://open.spotify.com/intl-es/artist/5We27ylV1cDCHbBbeCcN5j?si=G32wphLNQXuebqeJ23aVMg" },
          { name: "Apple Music", icon: <SiApplemusic className="h-6 w-6 text-[#FC3C44]" />, link: "https://music.apple.com/mx/artist/fish-hook/1736924157" },
          { name: "YouTube Music", icon: <SiYoutubemusic className="h-6 w-6 text-[#FF0000]" />, link: "https://music.youtube.com/channel/UCoiClL7XyquecpHQHYFLuHA?si=eiEh_duSleqSFQOI" },
          { name: "Amazon Music", icon: <SiAmazonmusic className="h-6 w-6 text-[#00A8E1]" />, link: "https://music.amazon.com.mx/artists/B001VQS3NS/fish-hook" },
          { name: "Deezer", icon: <FaDeezer className="h-6 w-6 text-[#00C7F2]" />, link: "https://www.deezer.com/es/artist/5498632" },
          { name: "Tidal", icon: <SiTidal className="h-6 w-6 text-[#00FFFF]" />, link: "https://listen.tidal.com/artist/5884257" }
        ].map((platform, index) => (
          <Card
            key={platform.name}
            className="bg-card/50 backdrop-blur hover:bg-card/70 transition-all duration-300 animate-in fade-in"
            style={{ animationDelay: `${index * 0.1}s` }}
          >
            <Link href={platform.link} target="_blank" rel="noopener noreferrer">
              <CardContent className="flex flex-col items-center justify-center p-4 hover:cursor-pointer">
                <div className="mb-2 h-12 w-12 rounded-full bg-muted/80 flex items-center justify-center hover:bg-muted transition-colors">
                  {platform.icon}
                </div>
                <span className="text-sm">{platform.name}</span>
              </CardContent>
            </Link>
          </Card>
        ))}
      </div>
    </div>
  </div>
</section>
      {/* Próximos Lanzamientos */}
      <section className="py-16">
        <div className="container">
          <div className="mx-auto max-w-3xl text-center">
            <h2 className="text-3xl font-bold mb-4">Próximos Lanzamientos</h2>
            <p className="text-muted-foreground mb-8">
              Estamos trabajando en nueva música. ¡Mantente atento a nuestros próximos sencillos y proyectos!
            </p>

            <Card className="bg-muted/50 border-dashed">
              <CardContent className="p-8 flex flex-col items-center">
                <div className="w-16 h-16 rounded-full bg-primary/10 flex items-center justify-center mb-4">
                  <Music className="h-8 w-8 text-primary" />
                </div>
                <h3 className="text-xl font-bold mb-2">Nuevo Sencillo en Camino</h3>
                
              </CardContent>
            </Card>
          </div>
        </div>
      </section>
    </div>
  )
}
