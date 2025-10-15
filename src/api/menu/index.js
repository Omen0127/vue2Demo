import http from "../../utils/request";
export const getMenus = (data) => {
  return http.request({
    url: "/menu/getMenus",
    method: "post",
    data,
  });
};
