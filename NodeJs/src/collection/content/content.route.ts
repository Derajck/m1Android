import { Router } from "express";
import passport from "passport";
import { contentController } from "./content.controller";

class ContentRouter {
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
        contentController.getAll.bind(contentController),
      )
      .put(
        passport.authenticate("jwt", { session: false }),
        contentController.update.bind(contentController),
      );
    this.router
      .route("/:contentId")
      .get(
        passport.authenticate("jwt", { session: false }),
        contentController.getById.bind(contentController),
      )
      .delete(
        passport.authenticate("jwt", { session: false }),
        contentController.delete.bind(contentController),
      );
  }
}

const contentRouter = new ContentRouter();

export const contentRoutes = contentRouter.router;
