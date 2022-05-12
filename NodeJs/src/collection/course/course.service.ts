import { courseModel } from "./course.schema";
import { Course } from "./course.interface";

class CourseService {
  async getAll(): Promise<Course[] | null> {
    return courseModel.find().exec();
  }

  async create(item: Course): Promise<Course> {
    // delete item._id;
    return courseModel.create(item);
  }

  async getById(id: string): Promise<Course | null> {
    return courseModel.findById(id).exec();
  }

  async delete(id: string): Promise<boolean> {
    return courseModel.deleteOne({ _id: id }).then(() => true);
  }

  async update(item: Course): Promise<Course | null> {
    return courseModel
      .findByIdAndUpdate(item._id, item, { new: true })
      .exec();
  }
}

export const courseService = new CourseService();
