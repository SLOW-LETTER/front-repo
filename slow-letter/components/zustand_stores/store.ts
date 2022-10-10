import create from "zustand";
import { devtools } from "zustand/middleware";

export const useStore = create(
  devtools((set) => ({
    userToken: "",
    saveUserToken: (userToken: string) => set(() => ({ userToken: userToken })),
    resetUserToken: () => set(() => ({ userToken: "" })),

    template: {
      templateUrl: "",
      templateId: 0,
    },
    saveTemplate: (templateUrl: string, templateId: number) =>
      set(() => ({
        template: { templateUrl: templateUrl, templateId: templateId },
      })),
    resetTemplate: () =>
      set(() => ({ template: { templateUrl: "", templateId: 0 } })),

    letter: {
      title: "",
      body: [],
      file: {},
    },

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

    additional: {
      sender: "",
      receiver: "",
      departCountry: "",
      departCity: "",
      arriveCountry: "",
      arriveCity: "",
      transportation: "",
    },

    saveAdditional: (
      sender: string,
      receiver: string,
      departCountry: string,
      departCity: string,
      arriveCountry: string,
      arriveCity: string,
      transportation: string
    ) =>
      set(() => ({
        additional: {
          sender: sender,
          receiver: receiver,
          departCountry: departCountry,
          departCity: departCity,
          arriveCountry: arriveCountry,
          arriveCity: arriveCity,
          transportation: transportation,
        },
      })),
    resetAdditional: () =>
      set(() => ({
        additional: {
          sender: "",
          receiver: "",
          departCountry: "",
          departCity: "",
          arriveCountry: "",
          arriveCity: "",
          transportation: "",
        },
      })),

    profile: {
      name: "",
      phone: "",
      bio: "",
    },

    changeProfile: (name: string, phone: string, bio: string) =>
      set(() => ({
        profile: {
          name: name,
          phone: phone,
          bio: bio,
        },
      })),

    changePassword: {
      newPsw: "",
    },

    changePsw: (newPsw: string) =>
      set(() => ({
        changePassword: {
          newPsw: newPsw,
        },
      })),
  }))
);
