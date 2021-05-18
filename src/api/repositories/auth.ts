import { AxiosInstance } from "axios";
import LoginRequest from "../dto/auth";
import AuthRepository from "../interfaces/auth-repository";

export enum AuthUrl {
  SignIn = "/auth/sign-in",
  RefreshToken = "/auth/refreshToken",
  Verify = "/auth/verify",
  InvalidateToken = "/auth/invalidateToken",
  InvalidateAllTokens = "/auth/invalidateAllTokens",
}

export default (axios: AxiosInstance): AuthRepository => ({
  signIn(credentials: LoginRequest) {
    return axios.post(AuthUrl.SignIn, credentials);
  },
  refreshToken(refreshToken: string | undefined) {
    return axios.post(AuthUrl.SignIn, { refreshToken });
  },
  verify() {
    return axios.post(AuthUrl.Verify);
  },
  invalidateToken(token: string | undefined) {
    return axios.post(AuthUrl.InvalidateToken, { token });
  },
  invalidateAllTokens() {
    return axios.post(AuthUrl.InvalidateAllTokens);
  },
});
