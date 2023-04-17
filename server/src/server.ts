import express, { Request, Response, NextFunction } from "express";

import morgan from "morgan";
import cors from "cors";
import router from "./router";

const app = express();

app.use(cors());
app.use(morgan("dev"));
app.use(express.json());
app.use(express.urlencoded({ extended: true }));

app.use("/", router);

app.use((err: Error, req: Request, res: Response, next: NextFunction) => {
  console.log(err);
  return res.json({ message: `had an error: ${err.message}` });
});

export default app;
