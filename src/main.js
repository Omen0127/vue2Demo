import Vue from "vue";
import App from "./App.vue";
// import "./registerServiceWorker";
import router from "./router";
import store from "./store";
import "./mock/index";
import ElementUI from "element-ui";
import "./assets/styles/element-variables.scss";
Vue.use(ElementUI);
import "./assets/styles/index.scss";

Vue.config.productionTip = false;

new Vue({
  router,
  store,
  render: (h) => h(App),
}).$mount("#app");
