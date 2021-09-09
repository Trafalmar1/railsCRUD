import { Axios } from "./config/axios.config";

export type UserData = {
  id?: string;
  username: string;
  email: string;
  role: string;
};

export const getUsers = () => {
  return Axios.get("/users").then((res) => {
    return res;
  });
};

export const getOneUser = (id: string) => {
  return Axios.get(`/users/${id}`).then((res) => {
    return res;
  });
};

export const updateUser = (data: UserData) => {
  return Axios.put(`/users/${data.id}`, { ...data }).then((res) => {
    return res;
  });
};

export const deleteUser = (id: string) => {
  return Axios.delete(`/users/${id}`).then((res) => {
    return res;
  });
};

export const getDashboard = () => {
  return Axios.get("/dashboard").then((res) => {
    return res;
  });
};
