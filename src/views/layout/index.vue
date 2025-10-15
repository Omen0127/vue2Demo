<template>
  <div class="layout">
    <HeaderView></HeaderView>
    <div class="container">
      <div class="containerAside" :class="{ collapse: asideCollapse }">
        <AsideMenu></AsideMenu>
        <div class="fold">
          <i
            class="foldBtn"
            :class="asideCollapse ? 'el-icon-s-unfold' : 'el-icon-s-fold'"
            @click="toggleCollapse"
          ></i>
        </div>
      </div>

      <div class="containerContent">
        <router-view></router-view>
      </div>
    </div>
  </div>
</template>
<script>
import { mapActions, mapState } from "vuex";
import AsideMenu from "./asideMenu/index.vue";
import HeaderView from "./header/index.vue";
export default {
  name: "LayoutComponent",
  components: {
    AsideMenu,
    HeaderView,
  },
  data() {
    return {};
  },
  computed: {
    ...mapState("app", ["asideCollapse"]),
  },
  mounted() {},
  methods: {
    ...mapActions("app", ["toggleCollapse"]),
  },
};
</script>
<style lang="scss" scoped>
@import "../../assets/styles/layout.scss";
</style>
