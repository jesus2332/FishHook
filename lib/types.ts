

export type Single = {
    id: string;
    title: string;
    releaseDate: string;
    cover: string;
    description: string;
    streamingLinks: {
      spotify: string;
      apple: string;
      youtube: string;
      amazon: string;
    };
  }



export type Event = {
    id: string;
    title: string;
    date: string;
    time: string;
    location: string;
    image: string;
    description: string;
  }