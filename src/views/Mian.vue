<template>
  <el-container>
    <el-aside class="aside" width="200px"><Com-top></Com-top></el-aside>
    <el-container>
      <el-header class="header"><Com-left></Com-left></el-header>
      <el-main>
        <!-- <router-view></router-view> -->
        <!-- <ComBottom> </ComBottom> -->
        <router-view />
      </el-main>
    </el-container>
  </el-container>
</template>

<script>
import ComTop from "../components/ComTop";
import ComLeft from "../components/ComLeft";
// import ComBottom from "../components/ComBottom";
export default {
  data() {
    return {};
  },
  components: {
    ComTop,
    ComLeft
    // ComBottom
  }
};
</script>

<style>
* {
  padding: 0;
  margin: 0;
}
.aside {
  height: 100vh;
  color: aliceblue;
  /* background: darkcyan; */
}
/* element.style {
  color: aliceblue;
} */
/* .header {
  color: aliceblue;
  background: rgb(28, 43, 32);
} */
.el-header {
  background: rgb(26, 46, 59);
  line-height: 60px;
  color: aliceblue;
}
.el-breadcrumb__inner .is-link {
  color: aliceblue;
  font-weight: 400;
}
.el-breadcrumb {
  color: aliceblue;
}
</style>
