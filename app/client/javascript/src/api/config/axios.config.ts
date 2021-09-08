import axios from "axios";

export const Axios = axios.create({ baseURL: "http://localhost:3000/api/v1" });
export const AuthAxios = axios.create({
  baseURL: "http://localhost:3000/users",
});

Axios.interceptors.request.use(function (config) {
  const token = localStorage.getItem("token");
  config.headers.Authorization = `Bearer ${token}`;
  return config;
});
