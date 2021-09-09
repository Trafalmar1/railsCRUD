import { Axios } from "./config/axios.config";

export type ProfileData = {
  id?: string;
  name: string;
  birthday: string;
  city: string;
  gender: string;
  createdAt?: string;
};

export const getProfiles = () => {
  return Axios.get("/profiles").then((res) => {
    return res;
  });
};

export const createProfile = (data: ProfileData) => {
  return Axios.post("/profiles", { ...data }).then((res) => {
    return res;
  });
};

export const deleteProfile = (id: string) => {
  return Axios.delete(`/profiles/${id}`).then((res) => {
    return res;
  });
};

export const updateProfile = (data: ProfileData) => {
  return Axios.put(`/profiles/${data.id}`, { ...data }).then((res) => {
    return res;
  });
};
