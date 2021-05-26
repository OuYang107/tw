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
        title: {
          text: "关停成功率",
          left: "center"
        },
        tooltip: {
          trigger: "item"
        },
        legend: {
          orient: "vertical",
          left: "left"
        },
        series: [
          {
            name: "关停成功率",
            type: "pie",
            radius: "50%",
            center: ["50%", "60%"], //饼图的位置
            data: [
              { value: 45, name: "当天" },
              { value: 735, name: "本月累计" },
              { value: 1580, name: "本年累计" }
            ],
            emphasis: {
              itemStyle: {
                shadowBlur: 10,
                shadowOffsetX: 0,
                shadowColor: "rgba(0, 0, 0, 0.5)"
              }
            },
            normal: {
              labelLine: { show: true }
            },
            label: {
              fontWeight: 300,
              fontSize: 12,
              show: true,
              formatter: "{b}({d}%)",
              position: "inside"
            }
          }
        ]
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
