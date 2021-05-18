import { createStore } from "vuex";
import createPersistedState from "vuex-persistedstate";
import { auth, AuthState } from "./auth";
import SecureLS from "secure-ls";

const secureLocalStorage = new SecureLS({ isCompression: false });

export type RootState = {
  version: string;
  auth?: AuthState;
};

export const state: RootState = {
  version: "0.1.0",
};

export default createStore({
  state,
  modules: {
    auth,
  },
  plugins: [
    createPersistedState({
      key: "ueam-auth",
      paths: ["auth"],
      storage: {
        getItem: (key) => secureLocalStorage.get(key),
        setItem: (key, value) => secureLocalStorage.set(key, value),
        removeItem: (key) => secureLocalStorage.remove(key),
      },
    }),
  ],
});
