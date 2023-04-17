import { create } from "zustand";

export type Post = {
  lekh: string;
  userEmail: string;
};

type State = {
  posts: Post[];
  addPost: (post: Post) => void;
  addPosts: (posts: Post[]) => void;
  initializePosts: (posts: Post[]) => void;
};

export const emptyPosts: Post[] = [];

export const usePostsStore = create<State>((set) => ({
  posts: emptyPosts,
  addPost: (data: Post) => set((state) => ({ posts: [...state.posts, data] })),
  addPosts: (data: Post[]) => {
    set((state) => ({ posts: [...state.posts, ...data] }));
  },
  initializePosts: (data: Post[]) => set(() => ({ posts: data })),
}));
