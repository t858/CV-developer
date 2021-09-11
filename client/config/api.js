import axios from "axios";

const API = axios.create({ baseURL: "https://cv-maker-api.herokuapp.com/" });

export const postUserData = (data) => API.post("user",data);
export const getUsers = (currentPage=1,search="") => API.get(`user?page=${currentPage}${search}`);
export const getAllUser = () => API.get("user/all");
export const getUser = (id) => API.get("user/"+id);