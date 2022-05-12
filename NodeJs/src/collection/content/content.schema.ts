import * as mongoose from "mongoose";
import { Content } from "./content.interface";

export interface ContentDocument extends Content, mongoose.Document {}

export const imageSchema = new mongoose.Schema({
  title: { type: String, required: true },
  sourceLink: { type: String, required: true },
});

export const videoSchema = new mongoose.Schema({
  title: { type: String, required: true },
  sourceLink: { type: String, required: true },
});

export const contentSchema = new mongoose.Schema({
  description: { type: String, required: false },
  images: { type: [imageSchema], required: false },
  video: { type: [videoSchema], required: true },
});

export const contentModel = mongoose.model<ContentDocument>(
  "Content",
  contentSchema,
);
