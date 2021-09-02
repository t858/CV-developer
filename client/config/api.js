import axios from "axios";

const API = axios.create({ baseURL: "http://localhost:5000" });

export const postUserData = (data) => API.post("/user",data);
export const getUsers = () => API.get("/user");
export const getUser = (id) => API.get("/user/"+id);