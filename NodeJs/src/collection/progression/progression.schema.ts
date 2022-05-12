import * as mongoose from "mongoose";
import { userSchema } from "../user/user.schema";
import { Progression } from "./progression.interface";

export interface ProgressionDocument
  extends Progression,
    mongoose.Document {}

export const progressionSchema = new mongoose.Schema({
  user: { type: userSchema, required: false },
  currentRank: { type: Number, required: false },
});

export const progressionModel = mongoose.model<ProgressionDocument>(
  "Progression",
  progressionSchema,
);
