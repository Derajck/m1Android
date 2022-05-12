import { Router } from "express";
import passport from "passport";
import { courseController } from "./course.controller";

class CourseRouter {
  router: Router;

  constructor() {
    this.router = Router();
    this.init();
  }

  private init() {
    this.router
      .route("/")
      .get(
        passport.authenticate("jwt", { session: false }),
        courseController.getAll.bind(courseController),
      )
      .put(
        passport.authenticate("jwt", { session: false }),
        courseController.update.bind(courseController),
      );
    this.router
      .route("/:courseId")
      .get(
        passport.authenticate("jwt", { session: false }),
        courseController.getById.bind(courseController),
      )
      .delete(
        passport.authenticate("jwt", { session: false }),
        courseController.delete.bind(courseController),
      );
  }
}

const courseRouter = new CourseRouter();

export const courseRoutes = courseRouter.router;
