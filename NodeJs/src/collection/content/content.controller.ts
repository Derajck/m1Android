import { NextFunction, Request, Response } from "express";
import { ControllerRead } from "../../common/controller/controller-read.interface";
import { ControllerWrite } from "../../common/controller/controller-write.interface";
import { wrapToSendBackResponse } from "../../shared/wrap-to-send-back-response";
import { Content } from "./content.interface";
import { contentService } from "./content.service";

class ContentController implements ControllerRead, ControllerWrite {
  getAll(req: Request, res: Response, next: NextFunction): void {
    wrapToSendBackResponse<Content[] | null>(
      contentService.getAll(),
      res,
      next,
    );
  }

  getById(req: Request, res: Response, next: NextFunction): void {
    wrapToSendBackResponse<Content | null>(
      contentService.getById(req.params.userId),
      res,
      next,
    );
  }

  create(req: Request, res: Response, next: NextFunction): void {
    wrapToSendBackResponse<Content>(
      contentService.create(req.body),
      res,
      next,
    );
  }
  delete(req: Request, res: Response, next: NextFunction): void {
    wrapToSendBackResponse<boolean>(
      contentService.delete(req.params.userId),
      res,
      next,
    );
  }

  update(req: Request, res: Response, next: NextFunction): void {
    wrapToSendBackResponse<Content | null>(
      contentService.update(req.body),
      res,
      next,
    );
  }
}

export const contentController = new ContentController();
