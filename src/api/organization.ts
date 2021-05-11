import { AxiosInstance, AxiosResponse } from "axios";
import CrudRepository from "./interfaces/crud-repository";
import Organization from "./dto/organization";

export const organizationUrl = "/organization/";

interface ListParameters {
  page: number;
  pageSize: number;
  searchQuery: string;
}

export default (axios: AxiosInstance): CrudRepository => ({
  list(params: ListParameters): Promise<AxiosResponse> {
    return axios.get(organizationUrl, { params });
  },
  get(id: string): Promise<AxiosResponse> {
    return axios.get(`${organizationUrl}/${id}`);
  },
  post(payload: Organization): Promise<AxiosResponse> {
    return axios.post(organizationUrl, payload);
  },
  put(id: string, payload: Organization): Promise<AxiosResponse> {
    return axios.put(`${organizationUrl}/${id}`, payload);
  },
  delete(id: string): Promise<AxiosResponse> {
    return axios.delete(`${organizationUrl}/${id}`);
  }
});
