import { Request, Response, NextFunction } from "express";
import jwt from "jsonwebtoken";

export const protect = (req: Request, res: Response, next: NextFunction) => {
  // console.log("🚀 ⚡ file: protect.ts:5 ⚡ protect ⚡ req:", req);

  const bearer = req.headers.authorization;
  if (!bearer) {
    return res.status(401).json({ message: "not authorized" });
  }

  const [, token] = bearer.split(" ");
  if (!token) {
    return res.status(401).json({ message: "not valid token" });
  }

  try {
    const user = jwt.verify(token, process.env.SECRET_STRING!);

    req.body.user = user;
    next();
  } catch (err) {
    return res
      .status(401)
      .json({ message: "somethings wrong I can feel it. heres the error:", err });
  }
};
