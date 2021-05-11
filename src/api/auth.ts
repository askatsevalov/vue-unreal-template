import { AxiosInstance } from "axios";
import LoginRequest from "./dto/auth";
import AuthRepository from "./interfaces/auth-repository";

export enum AuthUrl {
  SignIn = "/auth/sign-in",
  RefreshToken = "/auth/refreshToken",
  Verify = "/auth/verify",
  InvalidateToken = "/auth/invalidateToken",
  InvalidateAllTokens = "/auth/invalidateAllTokens"
}

export default (axios: AxiosInstance): AuthRepository => ({
  signIn(credentials: LoginRequest) {
    return axios.post(AuthUrl.SignIn, credentials);
  },
  refreshToken(refreshToken: string) {
    return axios.post(AuthUrl.SignIn, { refreshToken });
  },
  verify() {
    return axios.post(AuthUrl.Verify);
  },
  invalidateToken(jwt: string) {
    return axios.post(AuthUrl.InvalidateToken, { jwt });
  },
  invalidateAllTokens() {
    return axios.post(AuthUrl.InvalidateAllTokens);
  }
});
