import { Schema, model } from "mongoose";

const postSchema = new Schema({
  lekh: { type: String, unique: true, required: true },
  userEmail: { type: String, required: true },
});

export const PostModel = model("Post", postSchema);
