import http from "../../utils/request";
export const login = (data) => {
  return http.request({
    url: "/login/doLogin",
    method: "post",
    data,
  });
};
