import { Router } from "express";
import { createPost, getPosts } from "./handlers/postHandlers";
import { signIn, signUp } from "./handlers/authHandlers";
import { protect } from "./middleware/protect";
import { Validate } from "./middleware/validate";
import { authDetails } from "./schema/authInput";

const router = Router();

// =========  text  =========

router.get("/:email", getPosts);
router.post("/", createPost);

// =========  auth  =========

router.post("/signup", signUp);
router.post("/signin", signIn);
// ==================

export default router;
