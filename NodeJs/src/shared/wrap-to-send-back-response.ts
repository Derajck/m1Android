import { NextFunction, Response } from "express";

export const wrapToSendBackResponse = <T>(
  p: Promise<T>,
  res: Response,
  next: NextFunction,
): void => {
  p.then((response) =>
    res.status(200).json({ data: response }),
  ).catch((err) => next(err));
};
