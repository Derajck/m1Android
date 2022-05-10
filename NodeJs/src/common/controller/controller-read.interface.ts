import { NextFunction, Request, Response } from "express";

export interface ControllerRead {
  getAll(req: Request, res: Response, next: NextFunction): void;
  getById(req: Request, res: Response, next: NextFunction): void;
}
