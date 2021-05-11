import { ActionTree } from "vuex";
import { AuthState } from "./index";
import { RootState } from "../index";
import http from "@/services/http";
import LoginRequest from "@/api/dto/auth";

export const actions: ActionTree<AuthState, RootState> = {
  async login({ commit }, credentials: LoginRequest): Promise<void> {
    const response = await http.auth.signIn(credentials);
    if (response.status === 200) {
      const { data } = response;
      commit("SET_ACCESS_TOKEN", data.accessToken);
      commit("SET_REFRESH_TOKEN", data.refreshToken);
      commit("SET_USER", data.user);
    }
  },
  async refreshToken({ state, commit }): Promise<string> {
    const refreshToken = state.refreshToken;
    const response = await http.auth.refreshToken(refreshToken!);
    if (response.status === 200) {
      const { data } = response;
      commit("SET_ACCESS_TOKEN", data.accessToken);
      commit("SET_REFRESH_TOKEN", data.refreshToken);
      commit("SET_USER", data.user);
      return data.accessToken;
    }
    return "";
  },
  async logout({ commit }): Promise<void> {
    commit("LOGOUT");
  }
};
