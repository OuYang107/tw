<template>
  <div class="chart_box">
    <div id="twChart" class="twChart"></div>
  </div>
</template>
<script>
let echarts = require("echarts");
export default {
  mounted() {
    this.fan();
  },
  methods: {
    fan() {
      let option = {
        title: {},
        tooltip: {
          trigger: "axis"
        },
        legend: {
          data: ["反馈", "已审核", "已上报"]
        },
        grid: {
          left: "3%",
          right: "4%",
          bottom: "3%",
          containLabel: true
        },
        toolbox: {
          feature: {
            saveAsImage: {}
          }
        },
        xAxis: {
          type: "category",
          boundaryGap: false,
          data: ["1月", "2月", "3月", "4月", "5月"]
        },
        yAxis: {
          type: "value"
        },
        series: [
          {
            name: "反馈",
            type: "line",
            stack: "总量",
            data: [120, 132, 101, 134, 90]
          },
          {
            name: "已审核",
            type: "line",
            stack: "总量",
            data: [220, 182, 191, 234, 290]
          },
          {
            name: "已上报",
            type: "line",
            stack: "总量",
            data: [150, 232, 201, 154, 190]
          }
        ]
      };
      var twChart = echarts.init(document.getElementById("twChart"));
      twChart.setOption(option);
      // setTimeout(function() {
      //   window.onresize = function() {
      //     twChart.resize();
      //   };
      // }, 200);
      window.addEventListener("resize", () => {
        twChart.resize();
      });
    }
  }
};
</script>
<style scoped>
.twChart {
  width: 100%;
  height: 50vh;
}
</style>
