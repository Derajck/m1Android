import { Content, Image } from "../content/content.interface";

export interface Course {
  _id?: any;
  name?: string;
  rank?: number;
  logo?: Image;
  content?: Content;
}
