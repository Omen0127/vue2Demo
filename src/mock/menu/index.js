import Mock from "mockjs";
import { StatusCode } from "../../utils/enum";
Mock.mock("/menu/getMenus", "post", () => {
  return {
    code: StatusCode.SUCCESS,
    data: [
      {
        id: 1,
        name: "系统管理",
        icon: "el-icon-setting",
        path: "/system",
        meta: {
          title: "系统管理",
        },
        children: [
          {
            id: 2,
            name: "用户管理",
            icon: "el-icon-user",
            path: "/system/user",
            meta: {
              title: "用户管理",
            },
            children: [
              {
                id: 3,
                name: "机构用户管理",
                component: "system/user/org/index",
                path: "/system/user/org",
                meta: {
                  title: "机构用户管理",
                },
              },
            ],
          },
        ],
      },
    ],
  };
});
