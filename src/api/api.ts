import axios, { AxiosInstance } from "axios";

import apiInterceptor from "./apiInterceptor";

const createApiInstance = (): AxiosInstance => {
  const api = axios.create({
    // baseURL: process.env.NEXT_PUBLIC_API_BASE_URL,
    baseURL: "https://jsonplaceholder.typicode.com/users",
  });
  apiInterceptor(api);
  return api;
};
export default createApiInstance;
