import { NextFunction, Request, Response } from "express";
import { ControllerRead } from "../../common/controller/controller-read.interface";
import { ControllerWrite } from "../../common/controller/controller-write.interface";
import { wrapToSendBackResponse } from "../../shared/wrap-to-send-back-response";
import { Progression } from "./progression.interface";
import { progressionService } from "./progression.service";

class ProgresssionController
  implements ControllerRead, ControllerWrite
{
  getAll(req: Request, res: Response, next: NextFunction): void {
    wrapToSendBackResponse<Progression[] | null>(
      progressionService.getAll(),
      res,
      next,
    );
  }

  getById(req: Request, res: Response, next: NextFunction): void {
    wrapToSendBackResponse<Progression | null>(
      progressionService.getById(req.params.userId),
      res,
      next,
    );
  }

  getProgressionByUser(
    req: Request,
    res: Response,
    next: NextFunction,
  ): void {
    wrapToSendBackResponse<Progression | null>(
      progressionService.getProgressionByUser(req.body),
      res,
      next,
    );
  }

  create(req: Request, res: Response, next: NextFunction): void {
    wrapToSendBackResponse<Progression>(
      progressionService.create(req.body),
      res,
      next,
    );
  }
  delete(req: Request, res: Response, next: NextFunction): void {
    wrapToSendBackResponse<boolean>(
      progressionService.delete(req.params.userId),
      res,
      next,
    );
  }

  update(req: Request, res: Response, next: NextFunction): void {
    wrapToSendBackResponse<Progression | null>(
      progressionService.update(req.body),
      res,
      next,
    );
  }
}

export const progressionController = new ProgresssionController();
