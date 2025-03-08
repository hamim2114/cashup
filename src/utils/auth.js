import axios from "axios";

const baseURL = "http://127.0.0.1:8000/";

export const refreshToken = async () => {
  try {
    const refresh = localStorage.getItem("refresh_token"); // Get refresh token

    if (!refresh) throw new Error("No refresh token found");

    const response = await axios.post(`${baseURL}auth/refresh/`, {
      refresh, // Send refresh token to get new access token
    });

    const newAccessToken = response.data.access;
    localStorage.setItem("access_token", newAccessToken); // Save new token

    return newAccessToken; // Return new token
  } catch (error) {
    console.error("Failed to refresh token:", error);
    return null;
  }
};
