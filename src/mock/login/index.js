import Mock from "mockjs";
import { StatusCode } from "../../utils/enum";
import { USERNAME, PASSWORD, TOKEN } from "../../utils/constant";
Mock.mock("/login/doLogin", "post", (options) => {
  console.log(options);
  const { body } = options;
  if (body) {
    try {
      const { username, password } = JSON.parse(body);
      if (username === USERNAME && password === PASSWORD) {
        return {
          code: StatusCode.SUCCESS,
          message: "登录成功",
          token: TOKEN,
        };
      } else {
        return {
          code: StatusCode.ERROR,
          message: "用户名或密码错误",
        };
      }
    } catch (e) {
      return {
        code: StatusCode.ERROR,
        message: e.message,
      };
    }
  } else {
    return {
      code: StatusCode.ERROR,
      message: "cannot find username or password",
    };
  }
});
