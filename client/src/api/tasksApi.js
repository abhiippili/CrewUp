import axios from "axios";

const tasksApi = axios.create({
  baseURL: "http://localhost:5000/api/tasks"
});

export const getAllTasks = async ({ search, sort }) => {
  console.log("API : " + search + " " + sort);
  if (search !== "") {
    const response = await tasksApi.get(`/?title=${search}`);
    return response.data;
  }
  if (sort !== "") {
    const response = await tasksApi.get(`/?sort=${sort}`);
    return response.data;
  }
  if (search !== "" && sort !== "") {
    const response = await tasksApi.get(`/?title=${search}&sort=${sort}`);
    return response.data;
  }
  if (search === undefined || sort === undefined) {
    const response = await tasksApi.get("/");
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
      Authorization: "Bearer " + localStorage.getItem("token")
    }
  });
  return response.data;
};
