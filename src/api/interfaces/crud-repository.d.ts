import { AxiosResponse } from "axios";

export default interface CrudRepository {
  list(params): Promise<AxiosResponse>;
  get(id): Promise<AxiosResponse>;
  post(payload): Promise<AxiosResponse>;
  put(id, payload): Promise<AxiosResponse>;
  delete(id): Promise<AxiosResponse>;
}
