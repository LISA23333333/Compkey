<template>
  <div :class="className" :style="{ height: height, width: width }" />
</template>

<script>
import 'echarts-wordcloud'
import * as echarts from 'echarts/core'
import store from "@/store";

export default {
  props: {
    className: {
      type: String,
      default: 'wordChart'
    },
    width: {
      type: String,
      default: '100%'
    },
    height: {
      type: String,
      default: '500%'
    }
  },
  data() {
    return {
      store,
      chart: null,
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
        tooltip: {},
        series: [
          {
            type: 'wordCloud',
            gridSize: 7,
            sizeRange: [18, 45],
            rotationRange: [-0, 0],
            shape: 'circle',
            width: '90%',
            height: '90%',
            drawOutOfBound: true,
            textStyle: {
              color: function() {
                return (
                  'rgb(' +
                  [
                    Math.round(Math.random() * 250),
                    Math.round(Math.random() * 220),
                    Math.round(Math.random() * 200)
                  ].join(',') +
                  ')'
                )
              }
            },
            emphasis: {
              textStyle: {
                shadowBlur: 20,
                shadowColor: '#333'
              }
            },
            data: [
              {
                name: store.keyword,
                value: 1,
                textStyle: {
                  color: 'pink'
                },
                emphasis: {
                  textStyle: {
                    color: 'red'
                  }
                }
              },
              {
                name: store.compWords[0][0],
                value: store.compWords[0][1],
              },
              {
                name: store.compWords[1][0],
             
                value: store.compWords[1][1],
              },
              {
                name: store.compWords[2][0],
             
                value: store.compWords[2][1],
              
              },
              {
                name: store.compWords[3][0],
              
                value: store.compWords[3][1],
              
              },
              {
                name: store.compWords[4][0],
              
                value: store.compWords[4][1]
              },
              {
                name: store.compWords[5][0],
              
                value: store.compWords[5][1]
              },
              {
                name: store.compWords[6][0],
              
                value: store.compWords[6][1],
              },
              {
                name: store.compWords[7][0],
              
                value: store.compWords[7][1]
              },
              {
                name: store.compWords[8][0],
              
                value: store.compWords[8][1]
              },
              {
                name: store.compWords[9][0],
                value: store.compWords[9][1]
              },
              {
                name: store.midComp[0],
                value: store.weight[0]
              },
              {
                name: store.midComp[1],
                value: store.weight[1]
              },
              {
                name: store.midComp[2],
                value: store.weight[2]
              },
              {
                name: store.midComp[3],
                value: store.weight[3]
              },
              {
                name: store.midComp[4],
                value: store.weight[4]
              },
              {
                name: store.midComp[5],
                value: store.weight[5]
              },
              {
                name: store.midComp[6],
                value: store.weight[6]
              },
              {
                name: store.midComp[7],
                value: store.weight[7]
              },
              {
                name: store.midComp[8],
                value: store.weight[8]
              },
              {
                name: store.midComp[9],
                value: store.weight[9]
              },
              {
                name: store.midComp[10],
                value: store.weight[10]
              },
              {
                name: store.midComp[11],
                value: store.weight[11]
              },
              {
                name: store.midComp[12],
                value: store.weight[12]
              },
              {
                name: store.midComp[13],
                value: store.weight[13]
              },
              {
                name: store.midComp[14],
                value: store.weight[14]
              },
              {
                name: store.midComp[15],
                value: store.weight[15]
              },
              {
                name: store.midComp[16],
                value: store.weight[16]
              },
              {
                name: store.midComp[17],
                value: store.weight[17]
              },
              {
                name: store.midComp[18],
                value: store.weight[18]
              },
              {
                name: store.midComp[19],
                value: store.weight[19]
              },
              {
                name: store.midWords[0][0],
                value: 0.002
              },
              {
                name: store.midWords[0][1],
                value: 0.002
              },
              {
                name: store.midWords[0][2],
                value: 0.002
              },
              {
                name: store.midWords[0][3],
                value: 0.002
              },
              {
                name: store.midWords[0][4],
                value: 0.002
              },
              {
                name: store.midWords[0][5],
                value: 0.002
              },
              {
                name: store.midWords[0][6],
                value: 0.002
              },
              {
                name: store.midWords[0][7],
                value: 0.002
              },
              {
                name: store.midWords[0][8],
                value: 0.002
              },
              {
                name: store.midWords[0][9],
                value: 0.002
              },
              {
                name: store.midWords[0][10],
                value: 0.002
              },
              {
                name: store.midWords[0][11],
                value: 0.002
              },
              {
                name: store.midWords[0][12],
                value: 0.002
              },
              {
                name: store.midWords[0][13],
                value: 0.002
              },
              {
                name: store.midWords[0][14],
                value: 0.002
              },
              {
                name: store.midWords[0][15],
                value: 0.002
              },
              {
                name: store.midWords[0][16],
                value: 0.002
              },
              {
                name: store.midWords[0][17],
                value: 0.002
              },
              {
                name: store.midWords[0][18],
                value: 0.002
              },
              {
                name: store.midWords[0][19],
                value: 0.002
              },
              {
                name: store.midWords[1][0],
                value: 0.002
              },
              {
                name: store.midWords[1][1],
                value: 0.002
              },
              {
                name: store.midWords[1][2],
                value: 0.002
              },
              {
                name: store.midWords[1][3],
                value: 0.002
              },
              {
                name: store.midWords[1][4],
                value: 0.002
              },
              {
                name: store.midWords[1][5],
                value: 0.002
              },
              {
                name: store.midWords[1][6],
                value: 0.002
              },
              {
                name: store.midWords[1][7],
                value: 0.002
              },
              {
                name: store.midWords[1][8],
                value: 0.002
              },
              {
                name: store.midWords[1][9],
                value: 0.002
              },
              {
                name: store.midWords[1][10],
                value: 0.002
              },
              {
                name: store.midWords[1][11],
                value: 0.002
              },
              {
                name: store.midWords[1][12],
                value: 0.002
              },
              {
                name: store.midWords[1][13],
                value: 0.002
              },
              {
                name: store.midWords[1][14],
                value: 0.002
              },
              {
                name: store.midWords[1][15],
                value: 0.006
              },
              {
                name: store.midWords[1][16],
                value: 0.002
              },
              {
                name: store.midWords[1][17],
                value: 0.002
              },
              {
                name: store.midWords[1][18],
                value: 0.006
              },
              {
                name: store.midWords[1][19],
                value: 0.002
              },
              {
                name: store.midWords[2][0],
                value: 0.006
              },
              {
                name: store.midWords[2][1],
                value: 0.002
              },
              {
                name: store.midWords[2][2],
                value: 0.002
              },
              {
                name: store.midWords[2][3],
                value: 0.002
              },
              {
                name: store.midWords[2][4],
                value: 0.006
              },
              {
                name: store.midWords[2][5],
                value: 0.002
              },
              {
                name: store.midWords[2][6],
                value: 0.002
              },
              {
                name: store.midWords[2][7],
                value: 0.002
              },
              {
                name: store.midWords[2][8],
                value: 0.002
              },
              {
                name: store.midWords[2][9],
                value: 0.002
              },
              {
                name: store.midWords[2][10],
                value: 0.009
              },
              {
                name: store.midWords[2][11],
                value: 0.002
              },
              {
                name: store.midWords[2][12],
                value: 0.002
              },
              {
                name: store.midWords[2][13],
                value: 0.002
              },
              {
                name: store.midWords[2][14],
                value: 0.009
              },
              {
                name: store.midWords[2][15],
                value: 0.002
              },
              {
                name: store.midWords[2][16],
                value: 0.002
              },
              {
                name: store.midWords[2][17],
                value: 0.009
              },
              {
                name: store.midWords[2][18],
                value: 0.002
              },
              {
                name: store.midWords[2][19],
                value: 0.005
              },
              {
                name: store.midWords[3][0],
                value: 0.002
              },
              {
                name: store.midWords[3][1],
                value: 0.002
              },
              {
                name: store.midWords[3][2],
                value: 0.002
              },
              {
                name: store.midWords[3][3],
                value: 0.002
              },
              {
                name: store.midWords[3][4],
                value: 0.009
              },
              {
                name: store.midWords[3][5],
                value: 0.002
              },
              {
                name: store.midWords[3][6],
                value: 0.006
              },
              {
                name: store.midWords[3][7],
                value: 0.002
              },
              {
                name: store.midWords[3][8],
                value: 0.002
              },
              {
                name: store.midWords[3][9],
                value: 0.003
              },
              {
                name: store.midWords[3][10],
                value: 0.002
              },
              {
                name: store.midWords[3][11],
                value: 0.002
              },
              {
                name: store.midWords[3][12],
                value: 0.002
              },
              {
                name: store.midWords[3][13],
                value: 0.005
              },
              {
                name: store.midWords[3][14],
                value: 0.002
              },
              {
                name: store.midWords[3][15],
                value: 0.002
              },
              {
                name: store.midWords[3][16],
                value: 0.006
              },
              {
                name: store.midWords[3][17],
                value: 0.002
              },
              {
                name: store.midWords[3][18],
                value: 0.002
              },
              {
                name: store.midWords[3][19],
                value: 0.004
              },
              {
                name: store.midWords[4][0],
                value: 0.002
              },
              {
                name: store.midWords[4][1],
                value: 0.006
              },
              {
                name: store.midWords[4][2],
                value: 0.002
              },
              {
                name: store.midWords[4][3],
                value: 0.002
              },
              {
                name: store.midWords[4][4],
                value: 0.002
              },
              {
                name: store.midWords[4][5],
                value: 0.006
              },
              {
                name: store.midWords[4][6],
                value: 0.002
              },
              {
                name: store.midWords[4][7],
                value: 0.002
              },
              {
                name: store.midWords[4][8],
                value: 0.005
              },
              {
                name: store.midWords[4][9],
                value: 0.002
              },
              {
                name: store.midWords[4][10],
                value: 0.002
              },
              {
                name: store.midWords[4][11],
                value: 0.002
              },
              {
                name: store.midWords[4][12],
                value: 0.002
              },
              {
                name: store.midWords[4][13],
                value: 0.002
              },
              {
                name: store.midWords[4][14],
                value: 0.005
              },
              {
                name: store.midWords[4][15],
                value: 0.002
              },
              {
                name: store.midWords[4][16],
                value: 0.002
              },
              {
                name: store.midWords[4][17],
                value: 0.0025
              },
              {
                name: store.midWords[4][18],
                value: 0.005
              },
              {
                name: store.midWords[4][19],
                value: 0.002
              },
            ]
          }
        ]
      })
    }
  }
}
</script>
