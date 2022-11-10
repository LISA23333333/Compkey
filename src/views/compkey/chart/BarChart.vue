<template>
  <div :class="className" :style="{height:height,width:width}" />
</template>

<script>
import * as echarts from 'echarts/core';
// 引入柱状图图表，图表后缀都为 Chart
import { BarChart, LineChart} from 'echarts/charts';
// 引入提示框，标题，直角坐标系，数据集，内置数据转换器组件，组件后缀都为 Component
import {
  TooltipComponent,
  GridComponent,
  ToolboxComponent,
  LegendComponent
} from 'echarts/components';
// 标签自动布局，全局过渡动画等特性
import { UniversalTransition } from 'echarts/features';
// 引入 Canvas 渲染器，注意引入 CanvasRenderer 或者 SVGRenderer 是必须的一步
import { CanvasRenderer } from 'echarts/renderers';
// 注册必须的组件
echarts.use([
  ToolboxComponent,
  TooltipComponent,
  GridComponent,
  LegendComponent,
  BarChart,
  LineChart,
  UniversalTransition,
  CanvasRenderer
]);


const animationDuration = 4000

export default {
  data(){
    return{
      chart: null,
      words:{
        w1:"1",
        w2:"2",
        w3:"3",
        w4:"4",
        w5:"5",
        w6:"6",
        w7:"7",
        w8:"8",
        w9:"9",
        w10:"10",
      },
      count:{
        c1:80,
        c2:180,
        c3:50,
        c4:280,
        c5:60,
        c6:90,
        c7:148,
        c8:380,
        c9:98,
        c10:80,
      },
      comp:{
        c1:0.8,
        c2:0.18,
        c3:0.50,
        c4:0.28,
        c5:0.60,
        c6:0.90,
        c7:0.18,
        c8:0.38,
        c9:0.98,
        c10:0.80,
      },
      weight:{
        w1:0.1,
        w2:0.01,
        w3:0.05,
        w4:0.08,
        w5:0.09,
        w6:0.18,
        w7:0.29,
        w8:0.36,
        w9:0.89,
        w10:0.05,
      }
    }
  },
  props: {
    className: {
      type: String,
      default: 'BLChart'
    },
    width: {
      type: String,
      default: '100%'
    },
    height: {
      type: String,
      default: '100%'
    }
  },
  mounted() {
    this.$nextTick(() => {
      this.initChart()
    })
  },
  beforeDestroy() {
    if (!this.chart) {
      return
    }
    this.chart.dispose()
    this.chart = null
  },
  methods: {
    initChart() {
      this.chart = echarts.init(this.$el, 'macarons')

      this.chart.setOption({
        tooltip: {
          trigger: 'axis',
          axisPointer: { // 坐标轴指示器，坐标轴触发有效
            type: 'cross', // 默认为直线，可选为：'line' | 'shadow'
            crossStyle: {
              color: '#999'
            }
          }
        },
        grid: {
          left: '5%',
          bottom: '8%'
        },
        toolbox: {
          feature: {
            dataView: { show: true, readOnly: false },
            magicType: { show: true, type: ['line', 'bar'] },
            restore: { show: true },
            saveAsImage: { show: true }
          }
        },
        legend: {
          data: ['词频', '竞争度', "权重" ]
        },
        xAxis: [{
          type: 'category',
          data: [this.words.w1, this.words.w2, this.words.w3, this.words.w4, this.words.w5, this.words.w6, this.words.w7, this.words.w8, this.words.w9, this.words.w10],
          axisPointer: {
            type: 'shadow'
          }
        }],
        yAxis: [{
          type: 'value',
          name: '词频',
          min: 0,
          max: 600,
          interval: 60,
          axisLine: {
            show: true,
            lineStyle: {
              color: '#5470C6'
            }
          },
          axisLabel: {
            formatter: '{value} 次'
          }
        },
        {
          type: 'value',
          name: '竞争度',
          min: 0,
          max: 1,
          interval: 0.1,
          axisLine: {
            show: true,
            lineStyle: {
              color: '#91CC75'
            }
          },
          axisLabel: {
            formatter: '{value}'
          }
        },
        {
          type: 'value',
          name: '权重',
          min: 0,
          max: 0.1,
          interval: 0.01,
          offset: 66,
          axisLine: {
            show: true,
            lineStyle: {
              color: '#fac858'
            }
          },
          axisLabel: {
            formatter: '{value} '
          }
        }
        ],
        series: [{
          name: '词频',
          type: 'bar',
          tooltip: {
            valueFormatter: function (value) {
              return value + ' 次';
            }
          },
          data: [this.count.c1,this.count.c2,this.count.c3,this.count.c4,this.count.c5,this.count.c6,this.count.c7,this.count.c8,this.count.c9,this.count.c10],
          animationDuration
        }
        , {
          name: '竞争度',
          type: 'line',
          yAxisIndex: 1,
          tooltip: {
            valueFormatter: function (value) {
              return value ;
            }
          },
          data: [this.comp.c1,this.comp.c2,this.comp.c3,this.comp.c4,this.comp.c5,this.comp.c6,this.comp.c7,this.comp.c8,this.comp.c9,this.comp.c10],
          animationDuration
        }, 
        , {
          name: '权重',
          type: 'line',
          yAxisIndex: 1,
          tooltip: {
            valueFormatter: function (value) {
              return value ;
            }
          },
          data: [this.weight.w1,this.weight.w2,this.weight.w3,this.weight.w4,this.weight.w5,this.weight.w6,this.weight.w7,this.weight.w8,this.weight.w9,this.weight.w10],
          animationDuration
        }
       
      ]
      })
    }
  }
}
</script>
