import axios from "axios";
import dotenv from "dotenv";
dotenv.config();

export const api = axios.create({
  baseURL: process.env.B81_BASE_API_URL,
  headers: {
    origin: process.env.API_ORIGIN,
    referer: process.env.API_REFERER,
    "user-agent": process.env.API_USER_AGENT,
  },
});
