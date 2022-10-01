import create from "zustand";
import { devtools } from "zustand/middleware";

export const useStore = create(
  devtools((set) => ({

    userToken: "temp",

    template: "",

    letter: {
      title: "",
      body: [],
    },

    additional: {
      receiver: "",
      departCountry: "",
      departCity: "",
      arriveCountry: "",
      arriveCity: "",
      transportation: "",
    },

    saveTemplate: (template: string) => set(() => ({ template: template })),

    saveUserToken: (userToken: string) => set(() => ({ userToken: userToken })),

    resetUserToken: () => set(() => ({ userToken: "temp" })),

    saveLetter: (title: string, body: string[]) =>
      set(() => ({
        letter: {
          title: title,
          body: body,
        },
      })),
    resetLetter: () =>
      set(() => ({
        letter: {
          title: "",
          body: [],
        },
      })),

    saveAdditional: (
      receiver: string,
      departCountry: string,
      departCity: string,
      arriveCountry: string,
      arriveCity: string,
      transportation: string
    ) =>
      set(() => ({
        additional: {
          receiver: receiver,
          departCountry: departCountry,
          departCity: departCity,
          arriveCountry: arriveCountry,
          arriveCity: arriveCity,
          transportation: transportation,
        },
      })),
  }))
);
