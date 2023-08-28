import axios from "axios";

const usersApi = axios.create({
  baseURL: "http://localhost:5000/api/users/"
});

export const createUser = async (body) => {
  const response = await axios.post("/", body);
  return response.data;
};
