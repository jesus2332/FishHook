"use client"
import Image from "next/image"
import Link from "next/link"
import { Button } from "@/components/ui/button"
import { Instagram} from "lucide-react"
import { bandMembers } from "@/lib/bandMembers"; 

export default function AboutPage() {
    return (
        <div className="min-h-screen bg-black text-white">

      <main className="">
        
        <section className="relative py-20 md:py-32 bg-gradient-to-b from-zinc-900 to-black">
          <div className="absolute inset-0 bg-[url('/placeholder.svg?height=1080&width=1920')] bg-cover bg-center opacity-20"></div>
          <div className="container px-4 relative z-10">
            <div className="max-w-3xl mx-auto text-center space-y-6">
              <h1 className="text-4xl md:text-6xl font-bold">¿Quienes somos?</h1>
              <p className="text-xl text-zinc-300">
                Conoce más acerca de nosotros
              </p>
            </div>
          </div>
        </section>

        {/* Historia */}
        <section className="py-20 bg-zinc-900">
          <div className="container px-4">
            <div className="grid md:grid-cols-2 gap-10 items-center">
              <div className="space-y-6">
                <h2 className="text-3xl md:text-4xl font-bold">Nuestra historia</h2>
                <div className="space-y-4 leading-relaxed text-justify  ">
                  <p >
                  <b>Fish Hook</b> surge en Chihuahua de la amistad de toda la vida entre Ossie Chacón y Alonso Vargas, quienes comenzaron a tocar juntos en la secundaria inspirados por el rock clásico que creció con ellos: <i> Led Zeppelin, Black Sabbath y Deep Purple </i>. Años más tarde, en la universidad, lo que empezó como un proyecto para un examen —con covers como Frankenstein de <i>Edgar Winter</i>— se convirtió en el germen de la banda.
                  </p>
                  <p>
                  Tras un hiatus por la pandemia, el grupo se reorganizó en 2021 con Ossie en la guitarra, Alonso en la batería, Manuel Calleros en los teclados y Daniel Vargas en el bajo. Su primer concierto oficial bajo el nombre Fish Hook fue el 25 de abril de 2021 en Naica, Chihuahua, marcando el inicio de una trayectoria que los ha llevado a escenarios de todo el estado, desde bares underground hasta festivales, e incluso a Monterrey, donde han compartido su sonido único: una fusión de rock progresivo, clásico y matices experimentales.
                  </p>
                  <p>
                  Actualmente son manejados por el Ing. Gerardo Vargas con presentaciones en vivo cargadas de energía y un repertorio que rinde homenaje a sus raíces mientras exploran nuevas fronteras, Fish Hook sigue consolidándose en la escena rockera del norte de México. A día de hoy, trabajan en su  material original, prometiendo llevar su música más allá de las fronteras locales.
                  </p>
                 
                </div>
                <div className="pt-4">
                  <Link href="/discography" >
                  <Button
                  //redirige a hre
                  className="bg-primary hover:bg-primary/90 cursor-pointer" >Escucha nuestra música</Button>
                  </Link>
                </div>
              </div>
              <div className="relative h-[500px] w-full rounded-lg overflow-hidden">
                <Image
                  src="/fishhook_crew.JPEG"
                  alt="Fish Hook members"
                  fill
                  className="object-cover"
                />
                <div className="absolute inset-0 bg-gradient-to-t from-black via-transparent to-transparent"></div>
              </div>
            </div>
          </div>
        </section>

        {/* Miembros */}
        <section className="py-20 bg-black">
          <div className="container px-4">
            <div className="text-center mb-16">
              <h2 className="text-3xl md:text-5xl font-bold mb-4">Miembros</h2>
              <p className="text-zinc-400 max-w-2xl mx-auto">
                Conoce a los integrantes de Fish Hook
              </p>
            </div>

            <div className="grid gap-10">
              {bandMembers.map((member, index) => (
                <div
                  key={member.name}
                  className={`grid md:grid-cols-2 gap-8 items-center ${index % 2 !== 0 ? "md:grid-flow-dense" : ""}`}
                >
                  <div
                    className={`relative h-[600px] w-full rounded-lg overflow-hidden ${index % 2 !== 0 ? "md:order-2" : ""}`}
                  >
                    <Image src={member.image || "/placeholder.svg"} alt={member.name} fill className="object-cover object-top" />
                    <div className="absolute inset-0 bg-gradient-to-t from-black via-transparent to-transparent"></div>
                  </div>

                  <div className="space-y-4">
                    <h3 className="text-2xl md:text-3xl font-bold">{member.name}</h3>
                    <p className="text-primary font-medium">{member.role}</p>
                    <p className="text-zinc-300">{member.desc}</p>
                    <div className="flex space-x-4 pt-2">
                      <Link
                        href={member.instagram}
                        className="text-zinc-400 hover:text-primary transition-colors"
                      >
                        <Instagram className="h-5 w-5" />
                      </Link>
                    
                    </div>
                  </div>
                </div>
              ))}
            </div>
          </div>
        </section>

        {/* Influencias */}
        <section className="py-20 bg-zinc-900">
          <div className="container px-4">
            <div className="text-center mb-12">
              <h2 className="text-3xl md:text-4xl font-bold mb-4">Nuestras influencias</h2>
              <p className="text-zinc-400 max-w-2xl mx-auto">Grupos y estilos que nos han marcado.</p>
            </div>

            <div className="grid grid-cols-2 md:grid-cols-4 gap-6">
              {[
                "Deep Purple",
                "Hard Rock",
                "Led Zeppelin",
                "Progressive rock",
                "Pink Floyd",
                "Pyschedelic rock",
                "Black Sabbath",
                "Pearl jam",
              ].map((influence) => (
                <div
                  key={influence}
                  className="bg-zinc-800/30 rounded-lg p-6 text-center hover:bg-primary/20 hover:border-primary/30 border border-transparent transition-colors"
                >
                  <span className="font-medium">{influence}</span>
                </div>
              ))}
            </div>
          </div>
        </section>

        {/* Linea de tiempo */}
      <section className="bg-black py-16">
                <div className="container">
                  <h2 className="mb-10 text-center text-3xl font-bold tracking-tight">Linea de tiempo</h2>


                  <div className="mx-auto max-w-3xl">
                        <div className="relative border-l border-primary pl-8">
                          <div className="mb-10">
                            <div className="absolute -left-3 h-6 w-6 rounded-full bg-primary"></div>
                            <h3 className="text-xl font-bold">2025</h3>
                            <ul className="list-disc">
                            <li className="mt-2 text-muted-foreground">
                              Lanzamiento oficial de los sencillos &quot;No More&quot; y &quot;April Rain&quot; en plataformas digitales.
                            </li>
                            </ul>
                          </div>
                          <div className="mb-10">
                            <div className="absolute -left-3 h-6 w-6 rounded-full bg-primary"></div>
                            <h3 className="text-xl font-bold">2024</h3>

                            <ul className="list-disc">
                            <li className="mt-2 text-muted-foreground">
                              Estreno de su primer material discográfico: los sencillos &quot;Diamond Heart&quot; y &quot;Modo Diablo&quot;, disponibles en las principales plataformas musicales.
                            </li>
                            <li className="text-muted-foreground">Presentación en el prestigioso Festival del Gordo en Monterrey, Nuevo León, marcando su primera aparición fuera de su estado natal.</li>
                            <li className="text-muted-foreground">Ganadores del concurso organizado por Radio EXA 100.9, obteniendo como premio la producción profesional de un sencillo.</li>
                            </ul>
                          </div>
                          <div className="mb-10">
                            <div className="absolute -left-3 h-6 w-6 rounded-full bg-primary"></div>
                            <h3 className="text-xl font-bold">2023</h3>

                            
                            <ul className="list-disc">
                            <li className="mt-2 text-muted-foreground">Consagración como ganadores absolutos de la Guerra de Bandas organizada por el reconocido Bar Fausto.</li>
                            <li className="text-muted-foreground">Participación destacada en importantes eventos como el Tour Cervecero de Chihuahua, Culinaria Festival, Festival Viva La Radio y las Rodadas Bikers.</li>


                            </ul>
                            
                          </div>
                          <div className="mb-10">
                            <div className="absolute -left-3 h-6 w-6 rounded-full bg-primary"></div>
                            <h3 className="text-xl font-bold">2022</h3>
                            <ul className="list-disc">
                            <li className="mt-2 text-muted-foreground">Debut oficial en Naica, Chihuahua, dando inicio a una serie de presentaciones en diversos establecimientos y eventos de la localidad.</li>
                            <li className="text-muted-foreground">Invitados especiales en la edición del Festival Kite de Chihuahua, consolidando su presencia en el circuito musical local.</li>
                            </ul>
                          </div>
                        </div>
        </div>

                </div>
      </section>


     

            




      </main>

      
    </div>



    )
}