import { progressionModel } from "./progression.schema";
import { Progression } from "./progression.interface";
import { User } from "../user/user.interface";

class ProgressionService {
  async getAll(): Promise<Progression[] | null> {
    return progressionModel.find().exec();
  }

  async create(item: Progression): Promise<Progression> {
    // delete item._id;
    return progressionModel.create(item);
  }

  async getById(id: string): Promise<Progression | null> {
    return progressionModel.findById(id).exec();
  }

  async getProgressionByUser(
    user: User,
  ): Promise<Progression | null> {
    return progressionModel.findOne({ "user._id": user._id }).exec();
  }

  async delete(id: string): Promise<boolean> {
    return progressionModel.deleteOne({ _id: id }).then(() => true);
  }

  async update(item: Progression): Promise<Progression | null> {
    return progressionModel
      .findByIdAndUpdate(item._id, item, { new: true })
      .exec();
  }
}

export const progressionService = new ProgressionService();
