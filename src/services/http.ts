import { AxiosInstance } from "axios";
import axios from "@/services/axios";

import AuthRepository from "@/api/interfaces/auth-repository";
import CrudRepository from "@/api/interfaces/crud-repository";

import createAuthRepository from "@/api/repositories/auth";
import createOrganizationRepository from "@/api/repositories/organization";

export class HttpService {
  constructor(axios: AxiosInstance) {
    this.auth = createAuthRepository(axios);
    this.organization = createOrganizationRepository(axios);
  }

  public auth: AuthRepository;
  public organization: CrudRepository;
}

export default new HttpService(axios);
