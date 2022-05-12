import { contentModel } from "./content.schema";
import { Content } from "./content.interface";

class ContentService {
  async getAll(): Promise<Content[] | null> {
    return contentModel.find().exec();
  }

  async create(item: Content): Promise<Content> {
    // delete item._id;
    return contentModel.create(item);
  }

  async getById(id: string): Promise<Content | null> {
    return contentModel.findById(id).exec();
  }

  async delete(id: string): Promise<boolean> {
    return contentModel.deleteOne({ _id: id }).then(() => true);
  }

  async update(item: Content): Promise<Content | null> {
    return contentModel
      .findByIdAndUpdate(item._id, item, { new: true })
      .exec();
  }
}

export const contentService = new ContentService();
