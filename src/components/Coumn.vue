<template>
  <div class="pages">
    <div id="main"></div>
  </div>
</template>

<script>
let echarts = require("echarts");
export default {
  data() {
    return {};
  },
  mounted() {
    this.draw();
  },
  methods: {
    draw() {
      // console.log(1111);
      let myChart = echarts.init(document.getElementById("main"));
      console.log(myChart);
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

        toolbox: {
          show: true,
          orient: "vertical",
          left: "right",
          top: "center"
          // feature: {
          //   mark: { show: true },
          //   dataView: { show: true, readOnly: false },
          //   magicType: { show: true, type: ["line", "bar", "stack", "tiled"] },
          //   restore: { show: true },
          //   saveAsImage: { show: true }
          // }
        },
        label: {
          //   fontWeight: 300,
          //   fontSize: 12,
          show: true,
          formatter: "{c}",
          position: "inside"
        },
        legend: {
          orient: "horizontal",
          top: "centen"
        },
        xAxis: [
          {
            type: "category",
            axisTick: { show: false },
            data: ["公安举报数", "12321举报数", "模型识别量"]
          }
        ],
        yAxis: [
          {
            // type: "value"
          }
        ],
        series: [
          {
            name: "当天",
            type: "bar",
            barGap: 0,
            emphasis: {
              focus: "series"
            },
            data: [320, 332, 211]
          },
          {
            name: "本月累计",
            type: "bar",
            emphasis: {
              focus: "series"
            },
            data: [220, 182, 290]
          }
          // {
          //   name: "指标",
          //   type: "bar",
          //   emphasis: {
          //     focus: "series"
          //   },
          //   data: [150, 232, 201, 154, 190]
          // },
          // {
          //   name: "其他",
          //   type: "bar",
          //   emphasis: {
          //     focus: "series"
          //   },
          // data: [98, 77, 101, 99, 40]
          // }
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

      myChart.setOption(option);
      window.addEventListener("resize", () => {
        myChart.resize();
      });
      // 使用刚指定的配置项和数据显示图表。
      // myChart.setOption(option);
    }
  }
};
</script>

<style>
.pages {
  /* background: deepskyblue; */
}
#main {
  height: 300px;
  width: 400px;
}
.box-card {
  width: 400px;
}
</style>
