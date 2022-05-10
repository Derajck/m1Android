import { Router } from "express";
import passport from "passport";
import { userController } from "./user.controller";

class UserRouter {
  router: Router;

  constructor() {
    this.router = Router();
    this.init();
  }

  private init() {
    this.router
      .route("/profile/:userId")
      .put(userController.update.bind(userController));

    this.router
      .route("/signup")
      .post(userController.signUp.bind(userController));

    this.router
      .route("/sign_up")
      .post(userController.sign_Up.bind(userController));

    this.router
      .route("/login")
      .post(
        passport.authenticate("local", { session: false }),
        userController.login.bind(userController),
      );

    this.router
      .route("/deliverer")
      .get(
        passport.authenticate("jwt", { session: false }),
        userController.getDeliverers.bind(userController),
      );

    this.router
      .route("/")
      .get(
        passport.authenticate("jwt", { session: false }),
        userController.getAll.bind(userController),
      )
      .put(
        passport.authenticate("jwt", { session: false }),
        userController.update.bind(userController),
      );
    this.router
      .route("/specificUpdate")
      .put(
        passport.authenticate("jwt", { session: false }),
        userController.specificUpdate.bind(userController),
      );
    this.router
      .route("/:userId")
      .get(
        passport.authenticate("jwt", { session: false }),
        userController.getById.bind(userController),
      )
      .delete(
        passport.authenticate("jwt", { session: false }),
        userController.delete.bind(userController),
      );
  }
}

const userRouter = new UserRouter();

export const userRoutes = userRouter.router;
