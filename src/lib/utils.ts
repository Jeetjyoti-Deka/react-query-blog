import axios from "axios";
import { SERVER_URL } from "./constants";

export const getUsers = () => {
  return axios.get(`${SERVER_URL}/users`);
};
