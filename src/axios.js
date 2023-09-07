import axios from "axios";
import { BASE_URL } from "./config";
const https = axios.create({
  baseURL: BASE_URL,
  // withCredentials: false,
  // headers: {
  //   "Access-Control-Allow-Origin": "*",
  //   "Access-Control-Allow-Methods": "GET,PUT,POST,DELETE,PATCH,OPTIONS",
  // },
});

https.interceptors.response.use((response) => {
  const { data } = response;
  return response.data;
});

export default https;
