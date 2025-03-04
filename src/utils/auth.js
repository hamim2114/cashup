// auth.js
// import axiosInstance from './axiosInstance';

// export const validateToken = async () => {
//   try {
//     const response = await axiosInstance.get('/auth/refresh/');
//     return response.data;
//   } catch (error) {
//     console.error('Token validation failed:', error);
//     return null;
//   }
// };




export const refreshToken = async () => {
  try {
    const refresh_token = localStorage.getItem('refresh_token');
    const response = await axiosInstance.post('auth/refresh/', {
      refresh: refresh_token,
    });
    localStorage.setItem('access_token', response.data.access);
    localStorage.setItem('refresh_token', response.data.refresh);
    console.log(response.data)
    return response.data.access;
  } catch (error) {
    console.error('Token refresh failed:', error);
    return null;
  }
};