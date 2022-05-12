import { Router } from "express";
import passport from "passport";
import { progressionController } from "./progression.controller";

class ProgressionRouter {
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
        progressionController.getAll.bind(progressionController),
      )
      .put(
        passport.authenticate("jwt", { session: false }),
        progressionController.update.bind(progressionController),
      );
    this.router
      .route("/:progressionId")
      .get(
        passport.authenticate("jwt", { session: false }),
        progressionController.getById.bind(progressionController),
      )
      .delete(
        passport.authenticate("jwt", { session: false }),
        progressionController.delete.bind(progressionController),
      );

    this.router
      .route("/progression")
      .get(
        passport.authenticate("jwt", { session: false }),
        progressionController.getProgressionByUser.bind(
          progressionController,
        ),
      );
  }
}

const progressionRouter = new ProgressionRouter();

export const progressionRoutes = progressionRouter.router;
