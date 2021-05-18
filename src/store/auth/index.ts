import { actions } from "./actions";
import { mutations } from "./mutations";
import { Module } from "vuex";
import { RootState } from "../index";

export interface AuthState {
  loggedIn: boolean;
  user?: User;
  accessToken?: string;
  refreshToken?: string;
}

export interface User {
  email: string;
  name: string;
  avatar: string;
}

export const state: AuthState = {
  loggedIn: false,
};

export const auth: Module<AuthState, RootState> = {
  namespaced: true,
  state,
  mutations,
  actions,
};
