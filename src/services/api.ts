import axios from "axios";

const api = axios.create({
  baseURL: " https://projeto-front-end-json-server.herokuapp.com",
});

export default api;
