<template>
  <div class="menu-top">
    <!-- <el-button type="primary" icon="el-icon-menu" size="mini"></el-button> -->
    <div>
      <i class="el-icon-menu" style="#fff"></i>
    </div>
    <el-breadcrumb class="drawmenu" separator-class="el-icon-arrow-right">
      <!--菜单栏伸缩按钮-->

      <!-- <el-breadcrumb-item :to="{ path: '/home' }"> </el-breadcrumb-item> -->
      <el-breadcrumb-item class="el-breadcrumb__inner" :to="{ path: '/home' }"
        >首页</el-breadcrumb-item
      >
      <el-breadcrumb-item v-if="current">
        <router-link :to="current.path" v-if="current.path != undefined">
          {{ current.lable }}
        </router-link>
      </el-breadcrumb-item>
      <!-- <el-breadcrumb-item>活动列表</el-breadcrumb-item>
    <el-breadcrumb-item>活动详情</el-breadcrumb-item> -->
    </el-breadcrumb>
  </div>
</template>

<script>
import { mapState } from "vuex";
export default {
  computed: {
    ...mapState({
      current: state => state.tab.currentMenu
      //获取vueX中 mapState（辅助函数）里currentMenu的值
      // console.log(current)
    })
  }
};
</script>

<style scoped>
.drawmenu {
  display: flex;
  align-items: center;
}
.drawmenu .el-button {
  /*面包屑跟 菜单按钮的间距*/
  margin-right: 20px;
}
/* .header {

} */

.drawmenu {
  /* background: #545c64; */
  margin-left: -10px;
  margin-top: 15px;
}
.el-breadcrumb__item:last-child .el-breadcrumb__inner a {
  color: aliceblue;
}

.el-breadcrumb__item:last-child .el-breadcrumb__inner router-link {
  color: aliceblue;
  cursor: pointer;
}
element.style {
  color: rgba(253, 250, 250, 0.932);
}
.el-header header {
  background: #545c64;
}
.el-breadcrumb__inner {
  /* color: aqua; */
  cursor: pointer;
}
.menu-top {
  display: flex;
}
.menu-top .drawmenu {
  margin-top: 0;
  margin-left: 15px;
  color: #fff;
}
.el-breadcrumb {
  color: aliceblue;
}
.el-breadcrumb__inner {
  color: aliceblue;
}
/* .el-breadcrumb__inner; */
</style>
