import { AuthUrl } from "@/api/auth";
import router from "@/router";
import store from "@/store";
import axios, { AxiosRequestConfig, AxiosResponse } from "axios";

export interface AxiosConfig {
  baseURL: string;
}

const service = axios.create({
  baseURL: process.env.VUE_APP_API_URL
});

service.interceptors.request.use(
  (request): AxiosRequestConfig => {
    const token = store.state.auth?.accessToken;
    if (token) {
      request.headers.Authorization = `Bearer ${token}`;
    }
    return request;
  }
);

service.interceptors.response.use(
  (response): Promise<AxiosResponse> => {
    return Promise.resolve(response);
  },
  async error => {
    console.error(error);

    if (error.response.status !== 401) {
      return Promise.reject(error);
    }

    if (error.config.url === AuthUrl.RefreshToken) {
      await store.dispatch("auth/logout");
      router.push("/");

      return Promise.reject(error);
    }

    const newToken = await store.dispatch("auth/refreshToken");
    const config = error.config;
    config.headers.Authorization = `Bearer ${newToken}`;

    return new Promise((resolve, reject) => {
      axios
        .request(config)
        .then(response => {
          resolve(response);
        })
        .catch(error => {
          reject(error);
        });
    });
  }
);

export default service;
