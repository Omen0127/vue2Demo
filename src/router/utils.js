import storage from "@/utils/storage";
import store from "@/store";
import LayoutView from "../views/layout/index.vue";
require.context("@/views", true, /\.vue$/);
export function bindBeforeEach(router) {
  router.beforeEach(async (to, from, next) => {
    if (to.path === "/login") {
      next();
    } else {
      if (storage.getItem("token")) {
        if (store.state.menus.routes && store.state.menus.routes.length <= 0) {
          const menus = await store.dispatch("menus/parseMenus");
          if (menus && menus.length > 0) {
            menus.forEach((menu) => {
              menu.component = loadView(menu.component);
            });
            const menu = {
              path: "/",
              name: "LayoutView",
              component: LayoutView,
              children: [...menus],
            };
            router.addRoute(menu);
          }
          next();
        } else {
          next();
        }
      } else {
        next("/login");
      }
    }
  });
}

export function parseRoutes(menus, routes = []) {
  menus.forEach((menu) => {
    if (menu.children && menu.children.length > 0) {
      parseRoutes(menu.children, routes);
    } else {
      routes.push(menu);
    }
  });
  return routes;
}

export function loadView(view) {
  return (resolve) => require([`@/views/${view}`], resolve);
}
