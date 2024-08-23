import axios, { AxiosInstance } from "axios";



let BASE_URL = process.env.NODE_ENV == "development"
  ? 'https://dummyjson.com/'
  : "http://localhost:9999/api/";


  const axiosInterceptorInstance: AxiosInstance = axios.create({
    baseURL: BASE_URL, // API base URL
  });
// Add a request interceptor
axiosInterceptorInstance.interceptors.request.use(function (config) {
  // Do something before request is sent
  config.headers.Authorization = "Bearer Token"
  return config;
}, function (error) {
  // Do something with request error
  return Promise.reject(error);
});

// Add a response interceptor
axiosInterceptorInstance.interceptors.response.use(function (response) {
  // Any status code that lie within the range of 2xx cause this function to trigger
  // Do something with response data
  return response;
}, function (error) {
  // Any status codes that falls outside the range of 2xx cause this function to trigger
  // Do something with response error
  return Promise.reject(error);
});