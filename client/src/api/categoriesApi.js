import axios from "axios";

const categoriesApi = axios.create({
  baseURL: "http://localhost:5000/api/categories/"
});

export const getCategories = async () => {
  const response = await categoriesApi.get("/");
  return response.data;
};
