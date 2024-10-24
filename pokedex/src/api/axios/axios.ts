import axios from "axios";
import { env } from "../../../env";

const username = env.VITE_API_USERNAME;
const password = env.VITE_API_PASSWORD;

export const api = axios.create({
  baseURL: env.VITE_API_URL,
  headers: {
    Authorization: `Basic ${btoa(`${username}:${password}`)}`, // Autenticação básica
    "Content-Type": "application/json",
  },
});
