<template>
  <div :class="className" :style="{ height: height, width: width }" >
    {{}}
  </div>
</template>

<script>
import store from "@/store";
import * as echarts from "echarts/core";
// 引入柱状图图表，图表后缀都为 Chart
import { BarChart, LineChart } from "echarts/charts";
// 引入提示框，标题，直角坐标系，数据集，内置数据转换器组件，组件后缀都为 Component
import {
  TooltipComponent,
  GridComponent,
  ToolboxComponent,
  LegendComponent,
} from "echarts/components";
// 标签自动布局，全局过渡动画等特性
import { UniversalTransition } from "echarts/features";
// 引入 Canvas 渲染器，注意引入 CanvasRenderer 或者 SVGRenderer 是必须的一步
import { CanvasRenderer } from "echarts/renderers";
// 注册必须的组件
echarts.use([
  ToolboxComponent,
  TooltipComponent,
  GridComponent,
  LegendComponent,
  BarChart,
  LineChart,
  UniversalTransition,
  CanvasRenderer,
]);

const animationDuration = 4000;

export default {
  props: {
    className: {
      type: String,
      default: "BLChart",
    },
    width: {
      type: String,
      default: "100%",
    },
    height: {
      type: String,
      default: "100%",
    },
  },
  data() {
    return {
      store,
      xMax: Math.max(store.wordCount),
      xInterval: Math.max(store.wordCount)/10,
      yMax: Math.max(store.compWords[0][1]),
      yInterval: Math.max(store.compWords[0][1])/10,
      chart: null,
    };
  },
  mounted() {
    this.$nextTick(() => {
      this.initChart();
    });
  },
  beforeDestroy() {
    if (!this.chart) {
      return;
    }
    this.chart.dispose();
    this.chart = null;
  },
  methods: {
    initChart() {
      this.chart = echarts.init(this.$el, "macarons");

      this.chart.setOption({
        tooltip: {
          trigger: "axis",
          axisPointer: {
            // 坐标轴指示器，坐标轴触发有效
            type: "cross", // 默认为直线，可选为：'line' | 'shadow'
            crossStyle: {
              color: "#999",
            },
          },
        },
        grid: {
          top: "20%",
          left: "6%",
          right: "6%",
          bottom: "8%",
        },
        toolbox: {
          feature: {
            dataView: { show: true, readOnly: false },
            magicType: { show: true, type: ["line", "bar"] },
            restore: { show: true },
            saveAsImage: { show: true },
          },
        },
        legend: {
          data: ["词频", "竞争度"],
        },
        xAxis: [
          {
            type: "category",
            data: [
              store.compWords[0][0],
              store.compWords[1][0],
              store.compWords[2][0],
              store.compWords[3][0],
              store.compWords[4][0],
              store.compWords[5][0],
              store.compWords[6][0],
              store.compWords[7][0],
              store.compWords[8][0],
              store.compWords[9][0],
            ],
            axisPointer: {
              type: "shadow",
            },
          },
        ],
        yAxis: [
          {
            type: "value",
            name: "词频",
            min: 0,
            max: 30000,
            interval: 3000,
            axisLine: {
              show: true,
              lineStyle: {
                color: "#5470C6",
              },
            },
            axisLabel: {
              formatter: "{value} 次",
            },
          },
          {
            type: "value",
            name: "竞争度",
            min: 0,
            max: this.yMax,
            interval: this.yInterval,
            axisLine: {
              show: true,
              lineStyle: {
                color: "#91CC75",
              },
            },
            axisLabel: {
              formatter: "{value}",
            },
          },
        ],
        series: [
          {
            name: "词频",
            type: "bar",
            tooltip: {
              valueFormatter: function (value) {
                return value + " 次";
              },
            },
            data: [
              store.wordCount[0],
              store.wordCount[1],
              store.wordCount[2],
              store.wordCount[3],
              store.wordCount[4],
              store.wordCount[5],
              store.wordCount[6],
              store.wordCount[7],
              store.wordCount[8],
              store.wordCount[9],
            ],
            animationDuration,
          },
          {
            name: "竞争度",
            type: "line",
            yAxisIndex: 1,
            tooltip: {
              valueFormatter: function (value) {
                return value;
              },
            },
            data: [
              store.compWords[0][1],
              store.compWords[1][1],
              store.compWords[2][1],
              store.compWords[3][1],
              store.compWords[4][1],
              store.compWords[5][1],
              store.compWords[6][1],
              store.compWords[7][1],
              store.compWords[8][1],
              store.compWords[9][1],
            ],
            animationDuration,
          },
        ],
      });
    },
  },
};
</script>
