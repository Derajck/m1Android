import * as mongoose from "mongoose";
import {
  contentSchema,
  imageSchema,
} from "../content/content.schema";
import { Course } from "./course.interface";

export interface CourseDocument extends Course, mongoose.Document {}

export const courseSchema = new mongoose.Schema({
  name: { type: String, required: false },
  rank: { type: String, required: false },
  logo: { type: [imageSchema], required: false },
  content: { type: [contentSchema], required: false },
});

export const courseModel = mongoose.model<CourseDocument>(
  "Course",
  courseSchema,
);
