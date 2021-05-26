<template>
  <div id="mains" style="height: 300px,width: 500px;"></div>
</template>

<script>
let echarts = require("echarts");
export default {
  data() {
    return {
      mun: 22
    };
  },
  mounted() {
    // console.log(11);
    this.draws();
  },
  methods: {
    draws() {
      // console.log(1111);
      let myCharttow = echarts.init(document.getElementById("mains"));
      //   console.log(myChart);
      // 指定图表的配置项和数据
      let option = {
        tooltip: {
          trigger: "axis",
          axisPointer: {
            type: "shadow",
            left: "right",
            top: "center"
          }
        },

        legend: {
          orient: "horizontal",
          top: "centen"
        },
        toolbox: {
          show: true,
          orient: "vertical"
        },
        xAxis: [
          {
            type: "category",
            // axisTick: { show: false },
            data: ["人工经验导入量", "关停量"]
          }
        ],
        yAxis: [
          {
            type: "value"
          }
        ],
        series: [
          {
            name: "当天",
            type: "bar",
            data: [320, 332]
          },
          {
            name: "本月累计",
            type: "bar",
            data: [220, 182]
          },
          {
            name: "本年累计",
            type: "bar",
            data: [150, 232]
          }
        ]
      };
      let labelOption = {
        //   fontWeight: 300,
        //   fontSize: 12,
        show: true,
        formatter: "{c}",
        //   verticalAlign: "middle",
        //   position: "inside"
        rotate: 90,
        align: "center",
        verticalAlign: "middle"
      };
      option.series.forEach(item => {
        item.label = labelOption;
      });

      myCharttow.setOption(option);
      window.addEventListener("resize", () => {
        myCharttow.resize();
      });
      // 使用刚指定的配置项和数据显示图表。
      // myChart.setOption(option);
    }
  }
};
</script>

<style>
#mains {
  height: 300px;
  width: 400px;
}
.box-card {
  width: 500px;
}
</style>
