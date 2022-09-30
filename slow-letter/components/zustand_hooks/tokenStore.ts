import create from "zustand";
import { devtools, persist } from "zustand/middleware";

export const useTokenStore = create(
  devtools(
    persist((set) => ({
      userToken: "temp",
      saveUserToken: (userToken: string) =>
        set(() => ({ userToken: userToken })),
      resetUserToken: () => set(() => ({ userToken: "temp" })),
    }), {
      name: "user-token",
      getStorage: () => localStorage
    })
  )
);
