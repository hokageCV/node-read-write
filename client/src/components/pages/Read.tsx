import { useEffect } from "react";
import { usePostsStore } from "../../hooks/usePostsStore";
import { useAuthStore } from "../../hooks/useAuthStore";
import TextCard from "../layouts/TextCard";
import { getPosts } from "../../utils/postsUtils";

export function Read() {
  const posts = usePostsStore((state) => state.posts);
  const userData = useAuthStore((state) => state.userData);
  const initializePosts = usePostsStore((state) => state.initializePosts);

  useEffect(() => {
    const getAndSetPosts = async () => {
      const receivedPosts = await getPosts(userData.email);
      if (!receivedPosts) return;

      // setPostsFromArray(receivedPosts.data.available_posts);
      initializePosts(receivedPosts.data.available_posts);
    };
    getAndSetPosts();
  }, []);
  return (
    <>
      <div className="flex justify-center content-center items-center flex-col w-8/12 mx-auto mt-10 ">
        <h1 className="text-2xl underline text-slate-800">Your Entered Texts</h1>
        {/* <div>
          <div className="card w-96 bg-[#A3BE8C] shadow-xl m-5    hover:transform hover:scale-105 transition-transform duration-200">
            <div className="card-body py-auto">
              <p className="text-slate-800">
                rasenganIf a dog chews shoes whose shoes does he choose?
              </p>
            </div>
          </div>
        </div> */}
        {posts &&
          posts.map((post) => {
            // console.log({ post });
            return <TextCard lekh={post.lekh} />;
          })}
        {!posts && <h1 className="text-2xl underline text-slate-800">No Posts Found</h1>}
      </div>
    </>
  );
}
