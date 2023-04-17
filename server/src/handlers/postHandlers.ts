import { Request, Response } from "express";
import { PostModel } from "../schema/postSchema";

export async function getPosts(req: Request, res: Response) {
  const { email } = req.params;
  try {
    const posts = await PostModel.find({ userEmail: email });

    return res.json({ data: { available_posts: posts } });
  } catch (err) {
    console.log(err);
  }
}

export async function createPost(req: Request, res: Response) {
  const { email, lekh } = req.body;
  try {
    const post = await PostModel.create({ lekh, userEmail: email });

    return res.json({ data: { post_created: post } });
  } catch (err) {
    console.log(err);
  }
}
