import { create } from "zustand";

type Store = {
  query: string;
  limit: number;
  skip: number;
  setQuery: (query: string) => void;
  setLimit: (limit: number) => void;
  setSkip: (skip: number) => void;
};

export const testApiContext = create<Store>()((set) => ({
  query: "New Post",
  limit: 2,
  skip: 1,
  setQuery: (state) => set(() => ({ query: state })),
  setLimit: (state) => set(() => ({ limit: state })),
  setSkip: (state) => set(() => ({ skip: state })),
}));
