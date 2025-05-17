import axios from "axios";

const baseUrl = axios.create({
  baseURL: "https://localhost:7291/Api/"
});

export default baseUrl;