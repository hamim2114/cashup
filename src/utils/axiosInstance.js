import axios from "axios";
import { refreshToken } from './auth';


// Environment-based API URL
const baseURL =
  import.meta.env.VITE_API_URL || "https://test-app-project.onrender.com/";

// Create an Axios instance
const apiReq = axios.create({
  baseURL,
  withCredentials: true,
});

// Request Interceptor: Attach token dynamically
apiReq.interceptors.request.use(
  (config) => {
    const token = localStorage.getItem("access_token");
    if (token) {
      config.headers.Authorization = `Bearer ${token}`;
    }
    return config;
  },
  (error) => Promise.reject(error)
);

const publicRoutes = ["/login", "/register", "/forgot-password"];

// Response Interceptor: Handle errors globally
apiReq.interceptors.response.use(
  (response) => response,
  (error) => {
    if (error.response) {
      const { status } = error.response;

      if (status === 401) {
        localStorage.removeItem("access_token");

        // Get the current path
        const currentPath = window.location.pathname;

        // Only redirect if the user is on a protected route (not a public one)
        if (!publicRoutes.includes(currentPath)) {
          window.location.href = "/login";
        }
      }

      return Promise.reject(error.response.data);
    } else if (error.request) {
      console.error("No response received from server:", error.request);
    } else {
      console.error("Axios request error:", error.message);
    }
    return Promise.reject(error);
  }
);

export default apiReq;



// const apiReq = axios.create({
//   baseURL: baseURL,
//   headers: {
//     "Content-Type": "application/json",
//   },
// });

// apiReq.interceptors.request.use(
//   config => {
//     const access_token = localStorage.getItem("access_token");
//     if (access_token) {
//       config.headers["Authorization"] = `Bearer ${access_token}`;
//     }
//     return config;
//   },
//   error => {
//     return Promise.reject(error);
//   }
// );

// apiReq.interceptors.response.use(
//   response => response,
//   async error => {
//     const originalRequest = error.config;
//     if (error.response.status === 401 && !originalRequest._retry) {
//       originalRequest._retry = true;
//       const newAccessToken = await refreshToken();
//       if (newAccessToken) {
//         originalRequest.headers['Authorization'] = `Bearer ${newAccessToken}`;
//         return apiReq(originalRequest);
//       }
//     }
//     return Promise.reject(error);
//   }
// );


// const axiosInstance = axios.create({
//   baseURL: baseURL,
//   headers: {
//     "Content-Type": "application/json",
//   },
// });


// axiosInstance.interceptors.request.use(
//   config => {
//     const access_token = localStorage.getItem("access_token");
//     if (access_token) {
//       config.headers["Authorization"] = `Bearer ${access_token}`;
//     }
//     // console.log(config.headers);
//     return config;
//   },
//   error => {
//     return Promise.reject(error);
//   }
// );

// export default axiosInstance;















