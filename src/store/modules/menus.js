import { getMenus } from "@/api/menu";
import { SET_MENUS, SET_ROUTES } from "@/utils/constant";
import { parseRoutes } from "@/router/utils";
export default {
  namespaced: true,
  state: {
    menus: [],
    routes: [],
  },
  mutations: {
    [SET_MENUS](state, menus) {
      state.menus = [
        {
          path: "/home",
          name: "Home",
          meta: {
            title: "首页",
          },
        },
        ...menus,
      ];
    },
    [SET_ROUTES](state, routes) {
      state.routes = routes;
    },
  },
  actions: {
    parseMenus({ commit }) {
      return new Promise((resolve, reject) => {
        getMenus()
          .then((res) => {
            const { data } = res;
            if (data && data.length > 0) {
              const routes = parseRoutes(data);
              commit(SET_ROUTES, routes);
              commit(SET_MENUS, data);
              resolve(routes);
            } else {
              resolve([]);
            }
          })
          .catch((error) => {
            reject(error);
          });
      });
    },
  },
  getters: {},
};
