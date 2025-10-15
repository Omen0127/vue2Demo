<template>
  <el-menu unique-opened :collapse="asideCollapse" router>
    <template v-for="menu in menus">
      <SubMenu
        v-if="menu.children && menu.children.length > 0"
        :subMenu="menu"
        :key="menu.path"
      ></SubMenu>
      <el-menu-item :index="menu.path" v-else :key="`item-${menu.path}`">
        <i class="el-icon-menu"></i>
        <span slot="title">{{ menu.meta.title }}</span>
      </el-menu-item>
    </template>
  </el-menu>
</template>

<script>
import { mapState } from "vuex";
import SubMenu from "./subMenu.vue";
export default {
  name: "AsideMenu",
  components: {
    SubMenu,
  },
  data() {
    return {
      isCollapse: false,
    };
  },
  computed: {
    ...mapState("menus", ["menus"]),
    ...mapState("app", ["asideCollapse"]),
  },
};
</script>

<style lang="scss" scoped></style>
