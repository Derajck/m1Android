import { NextFunction, Request, Response } from "express";
import { ControllerRead } from "../../common/controller/controller-read.interface";
import { ControllerWrite } from "../../common/controller/controller-write.interface";
import { wrapToSendBackResponse } from "../../shared/wrap-to-send-back-response";
import { Course } from "./course.interface";
import { courseService } from "./course.service";

class CourseController implements ControllerRead, ControllerWrite {
  getAll(req: Request, res: Response, next: NextFunction): void {
    wrapToSendBackResponse<Course[] | null>(
      courseService.getAll(),
      res,
      next,
    );
  }

  getById(req: Request, res: Response, next: NextFunction): void {
    wrapToSendBackResponse<Course | null>(
      courseService.getById(req.params.userId),
      res,
      next,
    );
  }

  create(req: Request, res: Response, next: NextFunction): void {
    wrapToSendBackResponse<Course>(
      courseService.create(req.body),
      res,
      next,
    );
  }
  delete(req: Request, res: Response, next: NextFunction): void {
    wrapToSendBackResponse<boolean>(
      courseService.delete(req.params.userId),
      res,
      next,
    );
  }

  update(req: Request, res: Response, next: NextFunction): void {
    wrapToSendBackResponse<Course | null>(
      courseService.update(req.body),
      res,
      next,
    );
  }
}

export const courseController = new CourseController();
