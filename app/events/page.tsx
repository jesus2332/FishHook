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
const floatingBackground =
  "bg-gradient-to-r from-muted via-muted/50 to-muted bg-[length:200%_100%]";

const events = [
  {
    id: 1,
    title: "Tocada en Sold Out Bar",
    date: "2025-04-11",
    time: "10:30 PM",
    location: "Sold Out Bar, Chihuahua",
    image: "/events/11abril.jpg",
    description: "Disfruta del rock clásico en Sold Out Bar junto a Fish Hook",
    ticketLink: "",
    soldOut: false,
  },
];

const groupEventsByMonth = (events: Event[]) => {
  const grouped: Record<string, typeof events> = {};

  events.forEach((event) => {
    const date = new Date(`${event.date}T12:00:00`);
    const monthYear = `${date.toLocaleString("es-ES", {
      month: "long",
    })} ${date.getFullYear()}`;
    if (!grouped[monthYear]) {
      grouped[monthYear] = [];
    }
    grouped[monthYear].push(event);
  });

  return grouped;
};

export default function EventsPage() {
  const [selectedEvent, setSelectedEvent] = useState<(typeof events)[0] | null>(
    null
  );
  const [lightboxOpen, setLightboxOpen] = useState(false);
  const [lightboxImage, setLightboxImage] = useState({ src: "", alt: "" });

  const groupedEvents = groupEventsByMonth(events);
  const months = Object.keys(groupedEvents);

  const openLightbox = (src: string, alt: string) => {
    setLightboxImage({ src, alt });
    setLightboxOpen(true);
  };

  return (
    <div className="flex flex-col">
      <motion.section
        initial={{ opacity: 0 }}
        animate={{ opacity: 1 }}
        transition={{ duration: 0.5 }}
        className={`${floatingBackground} py-16 md:py-24`}
        style={{ animation: "floatingBg 15s ease infinite" }}
      >
        <div className="container">
          <motion.div
            initial={{ y: -20 }}
            animate={{ y: 0 }}
            transition={{ duration: 0.5 }}
            className="mx-auto max-w-3xl text-center"
          >
            <h1 className="text-3xl font-bold tracking-tight sm:text-4xl md:text-5xl">
              Próximos eventos
            </h1>
            <motion.p
              initial={{ opacity: 0 }}
              animate={{ opacity: 1 }}
              transition={{ delay: 0.2 }}
              className="mt-4 text-lg text-muted-foreground"
            >
              Mantente al tanto de nuestros próximos shows
            </motion.p>
          </motion.div>
        </div>
      </motion.section>

      <motion.section
        initial={{ opacity: 0 }}
        whileInView={{ opacity: 1 }}
        viewport={{ once: true }}
        transition={{ duration: 0.5 }}
        className="py-16"
      >
        <div className="container">
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
                <h3 className="mb-6 text-xl font-bold">{month}</h3>
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
                  {groupedEvents[month].map((event) => (
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

                          {event.soldOut && (
                            <div className="absolute right-0 top-0 bg-destructive px-3 py-1 text-xs font-bold text-white">
                              AGOTADO
                            </div>
                          )}
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
                                {new Date(
                                  `${event.date}T12:00:00`
                                ).toLocaleDateString("es-ES", {
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

          {selectedEvent && (
            <motion.div
              initial={{ opacity: 0 }}
              animate={{ opacity: 1 }}
              exit={{ opacity: 0 }}
              className="fixed inset-0 z-50 flex items-center justify-center bg-black/50 p-4"
            >
              <motion.div
                initial={{ y: 50, opacity: 0 }}
                animate={{ y: 0, opacity: 1 }}
                exit={{ y: 50, opacity: 0 }}
                className="max-h-[90vh] w-full max-w-3xl overflow-auto rounded-lg bg-background p-6"
              >
                <div className="mb-6 flex items-start justify-between">
                  <h3 className="text-2xl font-bold">{selectedEvent.title}</h3>
                  <Button
                    variant="ghost"
                    size="sm"
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
                          {new Date(
                            `${selectedEvent.date}T12:00:00`
                          ).toLocaleDateString("es-ES", {
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

                    <p>{selectedEvent.description}</p>
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
    </div>
  );
}
