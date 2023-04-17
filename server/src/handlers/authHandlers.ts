import { Request, Response } from "express";
import { UserModel } from "../schema/user";
import { hashPassword, createJWT, comparePasswords } from "../utils/authUtils";

export async function signUp(req: Request, res: Response) {
  const { name, email, password } = req.body;

  try {
    const hashedPassword = await hashPassword(password);

    const user = await UserModel.create({ name, email, password: hashedPassword });

    const token = createJWT(user.id, user.email);

    return res.json({ data: { name, email, token } });
  } catch (err) {
    console.log(err);
  }
}

export async function signIn(req: Request, res: Response) {
  const { email, password } = req.body;

  try {
    const user = await UserModel.findOne({ email });

    if (!user) {
      return res.status(400).json({ error: "User doesn't exits" });
    }
    const { name } = user;

    const passwordMatch = await comparePasswords(password, user.password);

    if (!passwordMatch) {
      return res.status(400).json({ error: "Invalid password" });
    }

    const token = createJWT(user.id, user.email);

    return res.json({ data: { name, email, token } });
  } catch (err) {
    console.log(err);
  }
}
