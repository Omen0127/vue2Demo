import { SET_USERNAME, SET_TOKEN } from "@/utils/constant";
import { login } from "@/api/login";
import storage from "@/utils/storage";
export default {
  namespaced: true,
  state: {
    user: {
      username: storage.getItem("username") || "",
    },
    token: storage.getItem("token") || "",
  },
  mutations: {
    [SET_USERNAME](state, username) {
      storage.setItem("username", username);
      state.username = username;
    },
    [SET_TOKEN](state, token) {
      storage.setItem("token", token);
      state.token = token;
    },
  },
  actions: {
    login({ commit }, data) {
      return new Promise((resolve, reject) => {
        login(data)
          .then((res) => {
            const { username } = res;
            commit(SET_USERNAME, username);
            commit(SET_TOKEN, res.token);
            resolve(res);
          })
          .catch((err) => {
            reject(err);
          });
      });
    },
  },
  getters: {},
};
