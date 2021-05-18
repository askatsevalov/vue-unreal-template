import { AxiosResponse } from "axios";

export default interface AuthRepository {
  signIn(credentials: LoginRequest): Promise<AxiosResponse>;
  refreshToken(refreshToken: string | undefined): Promise<AxiosResponse>;
  verify(): Promise<AxiosResponse>;
  invalidateToken(token: string | undefined): Promise<AxiosResponse>;
  invalidateAllTokens(): Promise<AxiosResponse>;
}
