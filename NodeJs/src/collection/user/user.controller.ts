import { NextFunction, Request, Response } from "express";
import { ControllerRead } from "../../common/controller/controller-read.interface";
import { ControllerWrite } from "../../common/controller/controller-write.interface";
import { wrapToSendBackResponse } from "../../shared/wrap-to-send-back-response";
import { AuthenticationResponse, User } from "./user.interface";
import { userService } from "./user.service";

class UserController implements ControllerRead, ControllerWrite {
  getAll(req: Request, res: Response, next: NextFunction): void {
    wrapToSendBackResponse<User[] | null>(
      userService.getAll(),
      res,
      next,
    );
  }

  getById(req: Request, res: Response, next: NextFunction): void {
    wrapToSendBackResponse<User | null>(
      userService.getById(req.params.userId),
      res,
      next,
    );
  }

  create(req: Request, res: Response, next: NextFunction): void {
    wrapToSendBackResponse<User>(
      userService.create(req.body),
      res,
      next,
    );
  }

  signUp(req: Request, res: Response, next: NextFunction): void {
    wrapToSendBackResponse<AuthenticationResponse>(
      userService.signUp(req.body),
      res,
      next,
    );
  }

  sign_Up(req: Request, res: Response, next: NextFunction): void {
    wrapToSendBackResponse<AuthenticationResponse>(
      userService.sign_Up(req.body),
      res,
      next,
    );
  }

  login(req: Request, res: Response, next: NextFunction): void {
    wrapToSendBackResponse<AuthenticationResponse>(
      userService.login(req.body),
      res,
      next,
    );
  }

  delete(req: Request, res: Response, next: NextFunction): void {
    wrapToSendBackResponse<boolean>(
      userService.delete(req.params.userId),
      res,
      next,
    );
  }

  update(req: Request, res: Response, next: NextFunction): void {
    wrapToSendBackResponse<User | null>(
      userService.update(req.body),
      res,
      next,
    );
  }

  specificUpdate(
    req: Request,
    res: Response,
    next: NextFunction,
  ): void {
    wrapToSendBackResponse<User | null>(
      userService.specificUpdate(req.body),
      res,
      next,
    );
  }

  getDeliverers(
    req: Request,
    res: Response,
    next: NextFunction,
  ): void {
    wrapToSendBackResponse<User[] | null>(
      userService.getDeliverers(),
      res,
      next,
    );
  }
}

export const userController = new UserController();
