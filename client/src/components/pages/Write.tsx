import { useState } from "react";
import { createPost } from "../../utils/postsUtils";
import { useAuthStore } from "../../hooks/useAuthStore";

export function Write() {
  const [text, setText] = useState("");
  const userData = useAuthStore((state) => state.userData);

  const handleSubmit = async () => {
    await createPost(userData.email, text);
    setText("");
  };

  const handleChange = (e: any) => setText(e.target.value);

  return (
    <>
      <div className="flex justify-center content-center items-center flex-col w-8/12 mx-auto mt-10">
        <textarea
          className="textarea textarea-bordered border-black textarea-xs h-64 w-full max-w-xs p-4 bg-[#bfc9db] text-lg text-black shadow-lg"
          placeholder="Write something..."
          value={text}
          onChange={handleChange}
        />
        <button className="btn w-max mt-2 px-4 text-slate-100" onClick={handleSubmit}>
          Write
        </button>
      </div>
    </>
  );
}
