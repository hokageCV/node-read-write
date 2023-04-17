import { create } from "zustand";

export type AuthStoreData = {
  name: string;
  email: string;
  token: string;
};

type State = {
  userData: AuthStoreData;
  setUserData: (userData: AuthStoreData) => void;
};

export const emptyUserData: AuthStoreData = { name: "", email: "", token: "" };

export const useAuthStore = create<State>((set) => ({
  userData: emptyUserData,

  setUserData: (objToUpdate) =>
    set((prevState) => ({
      userData: { ...prevState.userData, ...objToUpdate },
    })),
}));
