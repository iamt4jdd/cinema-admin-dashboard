import axios from "axios";

const BASE_URL = "http://cinema.pantech.vn:5555"

export default axios.create({
  baseURL: BASE_URL,
});