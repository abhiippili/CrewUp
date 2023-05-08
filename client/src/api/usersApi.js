import axios from "axios";

const usersApi = axios.create({
  baseURL: "http://localhost:5000/api/users/"
});

export const signUp = async (body) => {
  const response = await usersApi.post("/", body);
  return response.data;
};
