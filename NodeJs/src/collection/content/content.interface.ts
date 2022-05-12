export interface Content {
  _id?: any;
  description?: string;
  images?: Image[];
  video?: Video[];
}

export interface Image {
  title: string;
  sourceLink: string;
}

export interface Video {
  title: string;
  sourceLink: string;
}