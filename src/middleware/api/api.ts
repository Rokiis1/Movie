const API_URL = "https://api.themoviedb.org/3";

import axios from "axios";

export const api = axios.create({
  baseURL: API_URL,
});
