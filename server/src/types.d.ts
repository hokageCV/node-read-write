import { Request, Response, NextFunction } from "express";

declare global {
  namespace Express {
    interface Request {
      user?: any;
    }
  }
}

export type ExpressAPIHandler = (req: Request, res: Response, next: NextFunction) => any;
