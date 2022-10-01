import create from "zustand";
import { devtools } from "zustand/middleware";

export const useStore = create(
  devtools((set) => ({
    template: {
      templateUrl: "",
      templateId: 0,
    },

    letter: {
      title: "",
      body: [],
      file: {},
    },

    additional: {
      receiver: "",
      departCountry: "",
      departCity: "",
      arriveCountry: "",
      arriveCity: "",
      transportation: "",
    },

    saveTemplate: (templateUrl: string, templateId: number) =>
      set(() => ({
        template: { templateUrl: templateUrl, templateId: templateId },
      })),
    resetTemplate: () =>
      set(() => ({ template: { templateUrl: "", templateId: 0 } })),

    saveLetter: (title: string, body: string[], file: File) =>
      set(() => ({
        letter: {
          title: title,
          body: body,
          file: file,
        },
      })),
    resetLetter: () =>
      set(() => ({
        letter: {
          title: "",
          body: [],
          file: {},
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