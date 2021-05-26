<template>
  <div>
    <div class="mun">不良信用数： <span>0</span></div>
    <!-- <div>

      <el-tabs v-model="activeName" @tab-click="handleClick">
        <el-tab-pane label="当天" name="first">当天</el-tab-pane>
        <el-tab-pane label="本月累计" name="second">本月累计</el-tab-pane>
        <el-tab-pane label="本年累计" name="third">本年累计</el-tab-pane>
      </el-tabs>
    </div> -->
    <div class="page">
      <el-card class="box-card"> <Coumn></Coumn></el-card>
      <el-card class="box-card"> <Coumntow></Coumntow> </el-card>
      <el-card class="box-card"> <Sector></Sector></el-card>
      <!-- <el-card class="box-card"> <Sector></Sector></el-card> -->
    </div>
  </div>
</template>

<script>
import Coumn from "../components/Coumn";
import Coumntow from "../components/Coumntow";
import Sector from "../components/Sector";
export default {
  components: {
    Coumn,
    Coumntow,
    Sector
  },
  data() {
    return {
      activeName: ""
    };
  },
  methods: {
    handleClick(tab, event) {
      console.log(tab, event);
    }
  }
};
</script>

<style lang="scss" scoped>
.page {
  text-align: center;
  line-height: 400px;
  display: flex;
  flex-wrap: nowrap;
  margin: 10px auto;
  justify-content: space-between;
  /deep/ .box-card {
    margin: 5px;
    width: 440px;
    height: 300px;
    // zoom: 0.8;
    // transform: scale(0.8);
  }
}
.mun {
  //   border: 1px solid #333;
  border-radius: 5px;
  //   width: 220px;
  //   height: 20px;
  display: flex;
  align-items: center;
  padding: 10px;
  font-size: 20px;
  color: red;
  span {
    font-size: 24px;
  }
}
</style>
