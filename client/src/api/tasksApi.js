import axios from "axios";

const tasksApi = axios.create({
  baseURL: "http://localhost:5000/api/tasks"
});

export const getAllTasks = async ({ titleFilter, sort }) => {
  console.log(`title=${titleFilter}&sort=${sort}`);
  const response = await tasksApi.get(`/?title=${titleFilter}&sort=${sort}`);
  return response.data;
};

export const getMyTasks = async () => {
  const response = await tasksApi.get("/mytasks", {
    headers: {
      Authorization: "Bearer " + localStorage.getItem("token")
    }
  });
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
