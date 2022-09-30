import create from "zustand";
import { devtools } from "zustand/middleware";

export const useStore = create(
  devtools((set) => ({
    template: "",

    letter: {
      title: "",
      body: [],
      attachments: null,
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

    saveLetter: (title: string, body: string[], attachments: File) =>
      set(() => ({
        letter: {
          title: title,
          body: body,
          attachments: attachments,
        },
      })),
    resetLetter: () =>
      set(() => ({
        letter: {
          title: "",
          body: [],
          attatchments: null,
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
