import { User } from "../user/user.interface";

export interface Progression {
  _id?: any;
  user?: User;
  currentRank?: number;
}
