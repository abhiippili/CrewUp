import axios from "axios";

const usersApi = axios.create({
  baseURL: "http://localhost:5000/api/users/"
});

export const getMyProfile = async () => {
  const response = await usersApi.get("/myprofile");
};
