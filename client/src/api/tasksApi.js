import axios from "axios";

const tasksApi = axios.create({
  baseURL: "http://localhost:5000/api/tasks"
});

export const getAllTasks = async () => {
  const response = await tasksApi.get("/");
  return response.data;
};

export const postTask = async (body) => {
  const response = await tasksApi.post("/", body, {
    headers: {
      Authorization: "Bearer" + localStorage.getItem("token")
    }
  });
  return response.data;
};
