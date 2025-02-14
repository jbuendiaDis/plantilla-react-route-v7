import axios from 'axios';
import type { 
  InternalAxiosRequestConfig,
  AxiosResponse, 
  AxiosError 
} from 'axios';
import { getToken } from '../services/session/session.server';

const api = axios.create({
  baseURL: process.env.API_URL || 'http://localhost:3000/api',
  timeout: 10000,
  headers: {
    'Content-Type': 'application/json',
  }
});

api.interceptors.request.use(
  async (config: InternalAxiosRequestConfig) => {
    const token = await getToken();
    
    if (token && config.headers) {
      config.headers.Authorization = `Bearer ${token}`;
    }

    if (config.headers) {
      config.headers['Accept'] = 'application/json';
      config.headers['X-Requested-With'] = 'XMLHttpRequest';
    }

    return config;
  },
  (error: AxiosError) => {
    return Promise.reject(error);
  }
);

api.interceptors.response.use(
  (response: AxiosResponse) => {
    return response;
  },
  (error: AxiosError) => {
    if (error.response) {
      switch (error.response.status) {
        case 401:
          break;
        case 403:
          break;
        case 404:
          break;
        case 500:
          break;
      }
    }
    return Promise.reject(error);
  }
);

export const fetchApi = {
  get: <T>(url: string, config?: InternalAxiosRequestConfig) => 
    api.get<T>(url, config).then((response: AxiosResponse<T>) => response.data),
    
  post: <T>(url: string, data?: any, config?: InternalAxiosRequestConfig) =>
    api.post<T>(url, data, config).then((response: AxiosResponse<T>) => response.data),
    
  put: <T>(url: string, data?: any, config?: InternalAxiosRequestConfig) =>
    api.put<T>(url, data, config).then((response: AxiosResponse<T>) => response.data),
    
  delete: <T>(url: string, config?: InternalAxiosRequestConfig) =>
    api.delete<T>(url, config).then((response: AxiosResponse<T>) => response.data),
    
  patch: <T>(url: string, data?: any, config?: InternalAxiosRequestConfig) =>
    api.patch<T>(url, data, config).then((response: AxiosResponse<T>) => response.data)
};

export default fetchApi;
