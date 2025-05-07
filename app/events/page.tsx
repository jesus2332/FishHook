// app/events/page.tsx
import { AlertTriangle } from "lucide-react"; 
import { Event } from "@/lib/types";
import { getAllEvents, mapContentfulEventToEvent, ContentfulEvent } from "@/lib/contentfulClient";
import EventListClient from "./EventListClient"; 
// Configuración de Incremental Static Regeneration (ISR)
// Revalida esta página como máximo una vez cada 3600 segundos (1 hora)
export const revalidate = 10800;


const groupEventsByMonth = (events: Event[]) => {
  const grouped: Record<string, Event[]> = {};
  events.forEach((event) => {
    const date = new Date(event.date);
    const monthYear = `${date.toLocaleString("es-ES", { month: "long", year: "numeric" })}`;
    if (!grouped[monthYear]) {
      grouped[monthYear] = [];
    }
    grouped[monthYear].push(event);
  });
  const sortedMonths = Object.keys(grouped).sort((a, b) => {
    const firstEventDateA = new Date(grouped[a][0].date);
    const firstEventDateB = new Date(grouped[b][0].date);
    return firstEventDateA.getTime() - firstEventDateB.getTime();
  });
  const orderedGrouped: Record<string, Event[]> = {};
  sortedMonths.forEach(month => {
    orderedGrouped[month] = grouped[month];
  });
  return orderedGrouped;
};


export default async function EventsPage() {
  let allEvents: Event[] = [];
  let error: string | null = null;

  try {
    const contentfulEntries = await getAllEvents();
    // eslint-disable-next-line @typescript-eslint/no-explicit-any
    const mappedEvents = (contentfulEntries as any[]).map(entry =>
      mapContentfulEventToEvent(entry as ContentfulEvent)
    );
    mappedEvents.sort((a, b) => new Date(b.date).getTime() - new Date(a.date).getTime());
    allEvents = mappedEvents;
  } catch (e) {
    console.error("Failed to fetch events during server-side generation:", e);
  
    error = "No se pudieron cargar los eventos. Por favor, inténtalo de nuevo más tarde.";
  }

  if (error && allEvents.length === 0) { // Solo mostrar error si no hay eventos y ocurrió un error
    return (
      <div className="container py-16 text-center min-h-[calc(100vh-var(--header-height,10rem))] flex flex-col justify-center items-center">
        <AlertTriangle className="mx-auto h-12 w-12 text-destructive mb-4" />
        <h2 className="text-2xl font-bold mb-2">Ocurrió un error</h2>
        <p className="text-muted-foreground">{error}</p>
      </div>
    );
  }



  const groupedEvents = allEvents.length > 0 ? groupEventsByMonth(allEvents) : {};

  return (
    <div className="flex flex-col">
   
      <section
        // className={`${floatingBackground} py-16 md:py-24`} 
        className="bg-gradient-to-r from-muted via-muted/50 to-muted bg-[length:200%_100%] py-16 md:py-24"
        style={{ animation: "floatingBg 15s ease infinite" }} 
      >
        <div className="container">
          <div
            className="mx-auto max-w-3xl text-center"
          >
            <h1 className="text-3xl font-bold tracking-tight sm:text-4xl md:text-5xl">
              Próximos eventos
            </h1>
            <p
              className="mt-4 text-lg text-muted-foreground"
            >
              Mantente al tanto de nuestros próximos shows
            </p>
          </div>
        </div>
      </section>

      <EventListClient initialEvents={allEvents} initialGroupedEvents={groupedEvents} />
    </div>
  );
}