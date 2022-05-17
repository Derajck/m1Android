import { Router } from "express";
import { contentRoutes } from "../collection/content/content.route";
import { courseRoutes } from "../collection/course/course.route";
import { progressionRoutes } from "../collection/progression/progression.route";
import { userRoutes } from "../collection/user/user.route";
class AppRouter {
  router: Router;
  constructor() {
    this.router = Router();
    this.init();
  }

  init() {
    this.router.get("/api-status", (req, res) =>
      res.json({ status: "API is OK" }),
    );

    this.router.use("/user", userRoutes);
    this.router.use("/content", contentRoutes);
    this.router.use("/course", courseRoutes);
    this.router.use("/progression", progressionRoutes);
  }
}

const appRouter = new AppRouter();
export const appRoutes = appRouter.router;
