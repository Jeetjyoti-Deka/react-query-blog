import axios from "axios";
import { SERVER_URL } from "./constants";
import { User } from "./types";

export const getUsers = () => {
  return axios.get(`${SERVER_URL}/users`);
};

export const createUser = (user: User) => {
  return axios.post(`${SERVER_URL}/users`, { ...user });
};
