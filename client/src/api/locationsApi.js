import axios from "axios";

const locationsApi = axios.create({
  baseURL: "http://localhost:5000/api/locations"
});

export const getLocations = async () => {
  const response = await locationsApi.get("/");
  return response.data;
};

export const getLocationNearMe = async (latitude, longitude) => {
  const response = await locationsApi.get(
    `/nearme?latitude=${latitude}&longitude=${longitude}`
  );
  return response.data;
};
