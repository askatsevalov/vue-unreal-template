import { MutationTree } from "vuex";
import { AuthState, User } from "./index";

export const mutations: MutationTree<AuthState> = {
  SET_ACCESS_TOKEN(state, token: string) {
    state.accessToken = token;
  },
  SET_REFRESH_TOKEN(state, token: string) {
    state.refreshToken = token;
  },
  SET_USER(state, user: User) {
    state.loggedIn = true;
    state.user = user;
  },
  LOGOUT(state) {
    state.loggedIn = false;
    state.refreshToken = undefined;
    state.accessToken = undefined;
    state.user = undefined;
  },
};
