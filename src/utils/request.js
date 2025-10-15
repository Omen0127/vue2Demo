import axios from "axios";
import storage from "./storage";
import { checkHttpCodeResponse, showError } from "./util";
const instance = axios.create({
  baseURL: "/",
  timeout: 6000,
  headers: {
    "Content-Type": "application/json; charset=utf-8",
  },
});

instance.interceptors.request.use((config) => {
  config.headers.Authorization = "Bearer " + storage.getItem("token");
  return config;
});

instance.interceptors.response.use(
  (response) => {
    console.log(response);
    const { data } = response;
    const { code, message } = data;
    if (checkHttpCodeResponse(code)) {
      return response.data;
    } else {
      showError(message);
      return Promise.reject(message);
    }
  },
  function (error) {
    showError(error.message);
    // 对响应错误做点什么
    return Promise.reject(error);
  }
);

export default instance;
