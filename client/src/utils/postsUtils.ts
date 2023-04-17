import { SERVER_URL } from "../constants";
import { Post } from "../hooks/usePostsStore";

export async function getPosts(
  email: string
): Promise<{ data: { available_posts: Post[] } } | undefined> {
  try {
    const response = await fetch(`${SERVER_URL}/${email}`);
    const fetchedPosts = await response.json();

    return fetchedPosts;
  } catch (err) {
    console.log(err);
  }
}

export async function createPost(email: string, lekh: string) {
  try {
    const response = await fetch(`${SERVER_URL}/`, {
      method: "POST",
      headers: {
        "Content-Type": "application/json",
      },
      body: JSON.stringify({ email, lekh }),
    });
    const createdPost = await response.json();

    return createdPost;
  } catch (err) {
    console.log(err);
  }
}
