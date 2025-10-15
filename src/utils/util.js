import { Message } from "element-ui";
export const checkHttpCodeResponse = (code) => {
  return code === 200;
};

export const showError = (info) => {
  Message({
    message: info,
    type: "error",
    duration: 5 * 1000,
  });
};

export const showSuccess = (info) => {
  Message({
    message: info,
    type: "success",
    duration: 2 * 1000,
  });
};
