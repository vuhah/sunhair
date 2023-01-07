import axios from "axios";

const axiosInstance = axios.create({
  baseURL: "https://sunhair-x98n.vercel.app/api/",
  headers: {
    "Access-Control-Allow-Origin": "*",
    "Access-Control-Allow-Headers": "*",
    "Content-Type": "application/json",
    "Accept":"applicatio/json"
  },
});

export default axiosInstance;
