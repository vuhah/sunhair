import axios from "axios";

const axiosInstance = axios.create({
  baseURL: "https://sunhair-t9y8.vercel.app/api/",
  headers: {
    "Access-Control-Allow-Origin": "*",
    "Access-Control-Allow-Headers": "*",
    "Content-Type": "application/json",
    "Accept":"application/json"
  },
});

export default axiosInstance;
