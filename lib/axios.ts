// axiosInstance.ts

import axios from "axios";

// Get the token from environment variables.
// Make sure to prefix the env variable with NEXT_PUBLIC_ if you need it in the browser.
const token = process.env.NEXT_PUBLIC_AXIOS_TOKEN;

// Create an Axios instance with a base URL and default headers.
const axiosInstance = axios.create({
  baseURL:
    process.env.NEXT_PUBLIC_BASE_SERVER_URL || "http://localhost:1337/api",
  headers: {
    "Content-Type": "application/json",
    // Attach the token if available.
    ...(token && { Authorization: `Bearer ${token}` }),
  },
});

// Optional: Use an interceptor to attach headers before each request.
// This ensures that the token is always up to date.
axiosInstance.interceptors.request.use(
  (config) => {
    // If the token might change over time, you can retrieve it here.
    const updatedToken = process.env.NEXT_PUBLIC_AXIOS_TOKEN;
    if (updatedToken) {
      config.headers.Authorization = `Bearer ${updatedToken}`;
    }
    return config;
  },
  (error) => Promise.reject(error)
);

export default axiosInstance;
