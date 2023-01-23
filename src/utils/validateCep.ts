import axios, { AxiosResponse } from "axios";

export default async function validateCEP(cep: string): Promise<AxiosResponse> {
  return axios.get(`https://viacep.com.br/ws/${cep}/json/`);
}
