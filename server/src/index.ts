import * as dotenv from "dotenv";
import app from "./server";
import mongoose from "mongoose";

dotenv.config();
const PORT = process.env.PORT || 4000;

// connect to DB
mongoose
  .connect(process.env.DATABASE_URL!)
  .then(() => {
    app.listen(PORT, () => {
      console.log(`listenting on port ${PORT}👂👂 `);
    });
  })
  .catch((err: any) => {
    console.log(err);
  });
