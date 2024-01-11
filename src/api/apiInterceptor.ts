import axios, {
  AxiosError,
  AxiosInstance,
  AxiosRequestConfig,
  AxiosResponse,
} from "axios";
const apiInterceptor = (api: AxiosInstance) => {
  api.interceptors.request.use(
    (config: AxiosRequestConfig) => {
      const sanitizedConfig = {
        ...config,
        headers: {
          ...config.headers,
          Authorization: "***FILTERED***",
        },
      };
      console.log("Starting Request", sanitizedConfig);
      return config;
    },
    (error: AxiosError) => {
      console.error("Request Error", error);
      return Promise.reject(error);
    }
  );
  api.interceptors.response.use(
    (response: AxiosResponse) => {
      const sanitizedResponse = {
        ...response,
        config: {
          ...response.config,
          headers: {
            ...response.config.headers,
            Authorization: "***FILTERED***",
          },
        },
      };
      console.log("Response Received", sanitizedResponse);
      return response;
    },
    (error: AxiosError) => {
      console.error("Response Error", error);
      return Promise.reject(error);
    }
  );
};
export default apiInterceptor;
