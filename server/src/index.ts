import * as dotenv from "dotenv";
import app from "./server";

dotenv.config();
const PORT = process.env.PORT || 3000;

// connect to DB
