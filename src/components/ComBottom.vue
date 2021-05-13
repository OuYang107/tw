<template>
  <div>
    <el-row>
      <el-col :span="10">
        <div class="grid-content bg-purple">
          <el-card class="box-card"><BamBoo></BamBoo></el-card>
        </div>
      </el-col>
      <el-col :span="14">
        <div class="grid-content bg-purple-light">
          <el-card class="box-card"> <Fan></Fan></el-card>
          <el-card class="box-card"
            ><div v-for="item in array" :key="item.ArticleId">
              {{ item.ArticleTitle }}
            </div>
          </el-card>
        </div>
      </el-col>
    </el-row>
  </div>
</template>

<script>
import BamBoo from "./echarst/BamBoo";
import Fan from "./echarst/Fan";

export default {
  components: {
    BamBoo,
    Fan
  },
  data() {
    return {
      array: ""
    };
  },
  mounted() {
    this.$axios({
      url: "http://123.207.32.32:8000/home/multidata",
      method: "get",
      params: { id: 123456 }
    }).then(res => {
      this.data = res;
      // console.log(this.data.request.status == 200);
      // if (this.data.request.status == 200) {
      //   console.log(111);
      // }
      // console.log(this.data);
      this.a = this.data.request.response;
      this.b = JSON.parse(this.a);
      console.log(this.b.data);

      // console.log(this.a);

      // console.log(this.b.success);

      // console.log(JSON.parse(this.a));
      // console.log(JSON.stringify(this.a));
      // console.log(typeof this.data.request.response);
      // this.b = JSON.parse(this.a);
      // console.log(JSON.parse(this.b));
      // console.log(this.data.request.JSON.parse());
    });

    this.$axios({
      method: "get",
      url: "https://api.gugudata.com/news/techblogs/demo",
      params: {
        info: "西安天气"
      },
      Headers: {}
    }).then(res => {
      this.datas = res;
      console.log(this.datas.data.Data);
      this.array = this.datas.data.Data;
      // this.arr = JSON.parse(this.datas);
      // console.log(this.arr);
      // this.arr = JSON.parse(this.datas);
      // console.log(this.arr);
    });
  }
};
</script>

<style>
.bg-purple {
  background: #d3dce6;
}
.bg-purple-light {
  background: #e5e9f2;
}
.grid-content {
  border-radius: 4px;
  min-height: 36px;
}
</style>
