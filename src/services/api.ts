import axios, { AxiosRequestConfig } from 'axios';

export const makeApi = (axiosOptions?: AxiosRequestConfig) => {
  const client = axios.create({
    ...(axiosOptions ?? {}),
    baseURL: process.env.NEXT_PUBLIC_API_URL,
    headers: {
      ...(axiosOptions?.headers ?? {}),
    },
  });

  client.interceptors.request.use(
    (config: AxiosRequestConfig) => {
      config.params = {
        ...config.params,
        api_key: process.env.NEXT_PUBLIC_API_BASE_TOKEN,
      };

      return config;
    },
    error => error,
  );

  return client;
};

export const api = makeApi();
