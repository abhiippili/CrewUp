import axios from "axios";

const authApi = axios.create({
  baseURL: "http://localhost:5000/api/users"
});

export const signUp = async (body) => {
  const response = await authApi.post("/signup", body);
  return response.data;
};

export const signin = async (body) => {
  const response = await authApi.post("/signin", body);
  return response;
};
