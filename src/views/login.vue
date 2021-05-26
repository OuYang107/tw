<template>
  <div class="box">
    <div class="page-wrapper">
      <div class="imgs">login</div>
      <span class="nametext"> 账号:</span>
      <div class="el-inputOne">
        <el-input placeholder="请输入内容" clearable></el-input>
      </div>

      <div class="el-inputTow">
        <span class="wordtext"> 密码：</span>
        <el-input placeholder="请输入内容" clearable> </el-input>
      </div>
    </div>
  </div>
</template>

<script>
export default {
  data() {
    return {
      input1: "",
      input2: ""
    };
  }
};
</script>

<style lang="scss" scoped>
.box {
  background: rgb(61, 61, 61);
  height: 100vh;
  width: 100wv;
  display: flex;
  justify-content: center;
  align-items: center;
  .page-wrapper {
    color: white;
    position: relative;
    height: 250px;
    width: 300px;
    // display: flex
    // justify-content: flex-end;
    // align-items: baseline;
    border: 1px solid white;
    border-radius: 15px;

    //
    .imgs {
      top: -85px;
      left: 50%;
      margin-left: -75px;
      position: absolute;
      line-height: 150px;
      text-align: center;
      z-index: 10;
      overflow: hidden;
      background: chartreuse;
      height: 150px;
      width: 150px;
      border-radius: 50%;
    }
    .nametext {
      position: absolute;
      left: 20px;
      top: 70px;
    }
    .wordtext {
      position: absolute;
      left: -20px;
      top: 70px;
    }
    .el-inputOne {
      position: absolute;
      width: 200px;
      right: 5px;
      height: 150px;
      top: 70px;
    }
    .el-inputTow {
      width: 200px;
      height: 150px;
      top: 120px;
      right: 5px;
      position: absolute;
    }
  }
}
</style>
