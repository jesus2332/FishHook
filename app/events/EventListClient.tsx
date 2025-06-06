"use client";

import { useState } from "react";
import { motion } from "motion/react";
import Image from "next/image";
import { Button } from "@/components/ui/button";
import { Card, CardContent } from "@/components/ui/card";
import { Calendar, MapPin, Clock, ZoomIn, X } from "lucide-react";
import ImageLightbox from "@/components/imageLightBox";
import { Event } from "@/lib/types";

const eventCardAnimation =
  "transition-all duration-300 hover:shadow-lg hover:shadow-primary/20 hover:-translate-y-2";
interface EventListClientProps {
  initialEvents: Event[];
  initialGroupedEvents: Record<string, Event[]>;
}

export default function EventListClient({ initialEvents, initialGroupedEvents }: EventListClientProps) {

  const [selectedEvent, setSelectedEvent] = useState<Event | null>(null);
  const [lightboxOpen, setLightboxOpen] = useState(false);
  const [lightboxImage, setLightboxImage] = useState({ src: "", alt: "" });

  const months = Object.keys(initialGroupedEvents);

  const openLightbox = (src: string, alt: string) => {
    setLightboxImage({ src, alt });
    setLightboxOpen(true);
  };

  return (
    <>
      <motion.section
        initial={{ opacity: 0 }}
        whileInView={{ opacity: 1 }}
        viewport={{ once: true }}
        transition={{ duration: 0.5 }}
        className="py-16"
      >
        <div className="container">
          {initialEvents.length === 0 ? (
            <motion.div
              initial={{ opacity: 0, y: 20 }}
              animate={{ opacity: 1, y: 0 }}
              className="text-center py-10"
            >
              <h2 className="text-2xl font-semibold mb-2">No hay eventos próximos</h2>
              <p className="text-muted-foreground">
                Por favor, revisa más tarde o síguenos en nuestras redes sociales para actualizaciones.
              </p>
            </motion.div>
          ) : (
            <>
              <motion.h2
                initial={{ y: 20, opacity: 0 }}
                whileInView={{ y: 0, opacity: 1 }}
                viewport={{ once: true }}
                className="mb-8 text-2xl font-bold"
              >
                Eventos
              </motion.h2>
              <div className="space-y-12">
                {months.map((month) => (
                  <motion.div
                    key={month}
                    initial={{ opacity: 0 }}
                    whileInView={{ opacity: 1 }}
                    viewport={{ once: true }}
                    transition={{ duration: 0.5 }}
                  >
                    <h3 className="mb-6 text-xl font-bold capitalize">{month}</h3>
                    <motion.div
                      initial="hidden"
                      whileInView="visible"
                      viewport={{ once: true }}
                      variants={{
                        visible: {
                          transition: {
                            staggerChildren: 0.1,
                          },
                        },
                      }}
                      className="grid gap-6 md:grid-cols-2 lg:grid-cols-3"
                    >
                      {initialGroupedEvents[month].map((event) => (
                        <motion.div
                          key={event.id}
                          variants={{
                            hidden: { opacity: 0, y: 20 },
                            visible: { opacity: 1, y: 0 },
                          }}
                          whileHover={{ scale: 1.02 }}
                        >
                          <Card className={`overflow-hidden ${eventCardAnimation}`}>
                            <div
                              className="relative aspect-video overflow-hidden group"
                              onClick={() => openLightbox(event.image, event.title)}
                            >
                              <Image
                                src={event.image || "/placeholder.svg"}
                                alt={event.title}
                                fill
                                sizes="(max-width: 768px) 100vw, (max-width: 1200px) 50vw, 33vw"
                                className="object-cover transition-transform duration-300 group-hover:scale-105 cursor-pointer"
                              />
                              <div className="absolute inset-0 flex items-center justify-center bg-black/30 opacity-0 group-hover:opacity-100 transition-opacity duration-300">
                                <Button
                                  variant="secondary"
                                  size="sm"
                                  className="gap-1"
                                >
                                  <ZoomIn className="h-4 w-4" />
                                  <span>Ver imagen</span>
                                </Button>
                              </div>
                            </div>
                            <CardContent
                              className="p-4"
                              onClick={() => setSelectedEvent(event)}
                            >
                              <h4 className="mb-2 text-lg font-bold cursor-pointer hover:text-primary transition-colors">
                                {event.title}
                              </h4>
                              <div className="mb-4 space-y-2 text-sm">
                                <div className="flex items-center">
                                  <Calendar className="mr-2 h-4 w-4 text-primary" />
                                  <span>
                                    {new Date(event.date).toLocaleDateString("es-ES", {
                                      weekday: "long",
                                      month: "long",
                                      day: "numeric",
                                      year: "numeric",
                                    })}
                                  </span>
                                </div>
                                <div className="flex items-center">
                                  <Clock className="mr-2 h-4 w-4 text-primary" />
                                  <span>{event.time}</span>
                                </div>
                                <div className="flex items-center">
                                  <MapPin className="mr-2 h-4 w-4 text-primary" />
                                  <span>{event.location}</span>
                                </div>
                              </div>
                            </CardContent>
                          </Card>
                        </motion.div>
                      ))}
                    </motion.div>
                  </motion.div>
                ))}
              </div>
            </>
          )}

          {selectedEvent && (
            <motion.div
              initial={{ opacity: 0 }}
              animate={{ opacity: 1 }}
              exit={{ opacity: 0 }}
              className="fixed inset-0 z-50 flex items-center justify-center bg-black/50 p-4"
              onClick={() => setSelectedEvent(null)}
            >
              <motion.div
                initial={{ y: 50, opacity: 0 }}
                animate={{ y: 0, opacity: 1 }}
                exit={{ y: 50, opacity: 0 }}
                className="max-h-[90vh] w-full max-w-3xl overflow-auto rounded-lg bg-background p-6"
                onClick={(e) => e.stopPropagation()}
              >
                <div className="mb-6 flex items-start justify-between">
                  <h3 className="text-2xl font-bold">{selectedEvent.title}</h3>
                  <Button
                    variant="ghost"
                    size="icon"
                    onClick={() => setSelectedEvent(null)}
                    aria-label="Cerrar detalles"
                  >
                    <X className="h-5 w-5" />
                  </Button>
                </div>

                <div className="grid gap-6 md:grid-cols-2">
                  <motion.div
                    whileHover={{ scale: 1.02 }}
                    className="relative aspect-video overflow-hidden rounded-lg group cursor-pointer"
                    onClick={() =>
                      openLightbox(selectedEvent.image, selectedEvent.title)
                    }
                  >
                    <Image
                      src={selectedEvent.image || "/placeholder.svg"}
                      alt={selectedEvent.title}
                      fill
                      sizes="(max-width: 768px) 100vw, (max-width: 1200px) 50vw, 33vw"
                      className="object-cover transition-transform duration-300 group-hover:scale-105"
                    />
                    <div className="absolute inset-0 flex items-center justify-center bg-black/30 opacity-0 group-hover:opacity-100 transition-opacity duration-300">
                      <Button variant="secondary" size="sm" className="gap-1">
                        <ZoomIn className="h-4 w-4" />
                        <span>Ver imagen completa</span>
                      </Button>
                    </div>
                  </motion.div>

                  <div className="space-y-4">
                    <div className="space-y-2">
                      <div className="flex items-center">
                        <Calendar className="mr-2 h-4 w-4 text-primary" />
                        <span>
                          {new Date(selectedEvent.date).toLocaleDateString("es-ES", {
                            weekday: "long",
                            month: "long",
                            day: "numeric",
                            year: "numeric",
                          })}
                        </span>
                      </div>
                      <div className="flex items-center">
                        <Clock className="mr-2 h-4 w-4 text-primary" />
                        <span>{selectedEvent.time}</span>
                      </div>
                      <div className="flex items-center">
                        <MapPin className="mr-2 h-4 w-4 text-primary" />
                        <span>{selectedEvent.location}</span>
                      </div>
                    </div>
                    <p className="text-muted-foreground whitespace-pre-wrap">{selectedEvent.description}</p>
                  </div>
                </div>
              </motion.div>
            </motion.div>
          )}

          <ImageLightbox
            isOpen={lightboxOpen}
            onClose={() => setLightboxOpen(false)}
            imageSrc={lightboxImage.src}
            alt={lightboxImage.alt}
          />
        </div>
      </motion.section>
    </>
  );
}