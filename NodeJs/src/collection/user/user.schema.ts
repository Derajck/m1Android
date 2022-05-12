import * as mongoose from "mongoose";
import { User } from "./user.interface";

export interface UserDocument extends User, mongoose.Document {}

export const userSchema = new mongoose.Schema({
  firstName: { type: String, required: false },
  lastName: { type: String, required: false },
  login: { type: String, required: true },
  password: { type: String, required: false },
});

export const userModel = mongoose.model<UserDocument>(
  "User",
  userSchema,
);
