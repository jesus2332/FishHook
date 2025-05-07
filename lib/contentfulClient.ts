
import { createClient } from 'contentful';

export type ContentfulImage = {
  fields: {
    file: {
      url: string;
      details: {
        image: {
          width: number;
          height: number;
        };
      };
    };
    title: string;
  };
};

export type ContentfulEvent = {
  sys: {
    id: string;
    createdAt: string;
    updatedAt: string;
  };
  fields: {
    title: string;
    date: string;
    time: string;
    location: string;
    description: string;
    image: ContentfulImage;
  };
};

const client = createClient({
  space: process.env.NEXT_PUBLIC_CONTENTFUL_SPACE_ID || '',
  accessToken: process.env.NEXT_PUBLIC_CONTENTFUL_ACCESS_TOKEN || '',
  environment: process.env.NEXT_PUBLIC_CONTENTFUL_ENVIRONMENT || 'master',
});

// Función para obtener todos los eventos
export async function getAllEvents() {
  const entries = await client.getEntries({
    content_type: 'event',
  });

  return entries.items;
}

// Función para obtener un evento específico por ID
export async function getEventById(id: string) {
  const entry = await client.getEntry(id);
  return entry;
}

export function mapContentfulEventToEvent(contentfulEvent: ContentfulEvent) {
  return {
    id: contentfulEvent.sys.id,
    title: contentfulEvent.fields.title,
    date: contentfulEvent.fields.date,
    time: contentfulEvent.fields.time,
    location: contentfulEvent.fields.location,
    image: `https:${contentfulEvent.fields.image.fields.file.url}`,
    description: contentfulEvent.fields.description,
  };
}

export default client;