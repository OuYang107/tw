<template>
  <div class="chartDiv" id="chartDiv_h">
    <div id="bar" ref="chart" class="chang"></div>
  </div>
</template>

<script>
let echarts = require("echarts");
export default {
  //   data() {
  //     return {
  //       msg: ""
  //     };
  //   },
  mounted() {
    this.drawLine();
  },
  methods: {
    drawLine() {
      //var bar_dv = document.getElementById('bar_dv');
      let bar = this.$refs.chart;
      //   console.log(bar);
      let myChart = echarts.init(bar);
      let option = {
        xAxis: {
          data: ["衬衫", "羊毛衫", "雪纺衫", "裤子", "高跟鞋", "袜子"]
        },
        yAxis: {},
        series: [
          {
            name: "销量",
            type: "bar",
            data: [5, 20, 36, 10, 10, 20]
          }
        ],
        legend: { orient: "horizontal" }
      };
      // setTimeout(function() {
      //   window.onresize = function() {
      //     myChart.resize();
      //   };
      // }, 20);

      myChart.setOption(option);
      window.addEventListener("resize", () => {
        myChart.resize();
      });
    }
  }
};
</script>

<style scoped>
.chang {
  width: 100%;
  height: 50vh;
}
.chartDiv {
  margin: 0 auto;
}
</style>
