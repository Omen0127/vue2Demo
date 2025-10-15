import { TOGGLE_COLLAPSE } from "@/utils/constant";
export default {
  namespaced: true,
  state: {
    asideCollapse: false,
  },
  mutations: {
    [TOGGLE_COLLAPSE](state) {
      state.asideCollapse = !state.asideCollapse;
    },
  },
  actions: {
    toggleCollapse({ commit }) {
      commit(TOGGLE_COLLAPSE);
    },
  },
  getters: {},
};
