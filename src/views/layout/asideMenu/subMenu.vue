<template>
  <el-submenu :index="subMenu.path">
    <template slot="title">
      <i class="el-icon-menu"></i>
      <span slot="title">{{ subMenu?.meta?.title }}</span>
    </template>
    <el-menu-item-group v-for="(menu, index) in subMenu.children" :key="index">
      <!-- <template slot="title">
        <i class="el-icon-menu"></i>
        <span slot="title">{{ menu?.meta?.title }}</span>
      </template> -->
      <SubMenu
        v-if="menu.children && menu.children.length > 0"
        :subMenu="menu"
        :key="menu.path"
      ></SubMenu>
      <el-menu-item :index="menu.path" v-else :key="`item-${menu.path}`">
        <i class="el-icon-menu"></i>
        <span slot="title">{{ menu.meta.title }}</span>
      </el-menu-item>
    </el-menu-item-group>
  </el-submenu>
</template>

<script>
export default {
  name: "SubMenu",
  props: {
    subMenu: {
      type: Object,
      default: () => {},
    },
  },
  data() {
    return {};
  },
};
</script>

<style lang="scss" scoped></style>
