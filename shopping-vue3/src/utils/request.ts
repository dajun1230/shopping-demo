import axios from 'axios';
import type { AxiosInstance, AxiosRequestConfig, AxiosResponse, AxiosPromise } from 'axios';

const instance: AxiosInstance = axios.create({
  baseURL: "http://localhost:10010",
  timeout: 3000
});

instance.interceptors.request.use((config: AxiosRequestConfig<any>) => {
  // const token = localStorage.getItem("token") as string;
  // if (token) {
  //   config.headers!.Authorization = token;
  // }
  return config;
}, (error) => {
  return Promise.reject(error);
})

instance.interceptors.response.use((response: AxiosResponse<any, any>) => {
  return response.data;
}, (error) => {
  return Promise.reject(error.response);
})

interface HttpRequest {
  get: (url: string, params?: any) => AxiosPromise<any>,
  post: (url: string, data?: any) => AxiosPromise<any>,
}

const http: HttpRequest = {
  get: (url: string, params: any) => {
    const config: AxiosRequestConfig<any> = {
      method: 'get',
      url
    };
    if (params) {
      config.params = params;
    }
    return instance(config);
  },
  post: (url: string, data: any) => {
    const config: AxiosRequestConfig<any> = {
      method: 'post',
      url
    };
    if (data) {
      config.data = data;
    }
    return instance(config);
  }
}

export default http;
