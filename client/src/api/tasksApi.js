import axios from "axios";

const tasksApi = axios.create({
  baseURL: "http://localhost:5000/api/tasks"
});

export const getAllTasks = async ({ titleFilter, sort }) => {
  if (titleFilter !== undefined) {
    const response = await tasksApi.get(`/?title=${titleFilter}`);
    return response.data;
  }
  if (sort !== undefined) {
    const response = await tasksApi.get(`/?sort=${sort}`);
    return response.data;
  }
  if (titleFilter !== undefined && sort !== undefined) {
    return response.data;
  }
  const response = await tasksApi.get("/");
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
