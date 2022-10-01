import create from "zustand";
import { devtools, persist } from "zustand/middleware";

export const useTokenStore = create(
  devtools(
    persist((set) => ({
      userToken: "",
      saveUserToken: (userToken: string) =>
        set(() => ({ userToken: userToken })),
      resetUserToken: () => set(() => ({ userToken: "" })),
    }), {
      name: "user-token",
      getStorage: () => sessionStorage
    })
  )
);
