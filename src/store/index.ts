import { ActionTree, createStore, MutationTree } from "vuex";
import authPersistedState from "vuex-persistedstate";
import localePersistedState from "vuex-persistedstate";
import { auth, AuthState } from "./auth";
import SecureLS from "secure-ls";

export type RootState = {
  version: string;
  locale?: string;
  auth?: AuthState;
};

export const state: RootState = {
  version: "0.1.0",
  locale: process.env.VUE_APP_I18N_LOCALE || "ru",
};

const mutations: MutationTree<RootState> = {
  UPDATE_LOCALE(state: RootState, locale: string) {
    state.locale = locale;
  },
};

const actions: ActionTree<RootState, RootState> = {
  updateLocale({ commit }, locale: string) {
    commit("UPDATE_LOCALE", locale);
  },
};

const secureLocalStorage = new SecureLS({ isCompression: false });
const storage = {
  // eslint-disable-next-line @typescript-eslint/no-explicit-any
  setItem: (key: string, value: any) => secureLocalStorage.set(key, value),
  getItem: (key: string) => secureLocalStorage.get(key),
  removeItem: (key: string) => secureLocalStorage.remove(key),
};

export default createStore({
  state,
  actions,
  mutations,
  modules: {
    auth,
  },
  plugins: [
    authPersistedState({
      key: "ueam-auth",
      paths: ["auth"],
      storage,
    }),
    localePersistedState({
      key: "ueam-locale",
      paths: ["locale"],
      storage,
    }),
  ],
});
