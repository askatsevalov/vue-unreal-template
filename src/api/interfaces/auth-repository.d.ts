import { AxiosResponse } from "axios";

export default interface AuthRepository {
  signIn(credentials: LoginRequest): Promise<AxiosResponse>;
  refreshToken(refreshToken: string): Promise<AxiosResponse>;
  verify(): Promise<AxiosResponse>;
  invalidateToken(jwt: string): Promise<AxiosResponse>;
  invalidateAllTokens(): Promise<AxiosResponse>;
}
