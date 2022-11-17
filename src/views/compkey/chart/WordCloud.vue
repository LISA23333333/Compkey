<template>
  <div :class="className" :style="{ height: height, width: width }" />
</template>

<script>
import 'echarts-wordcloud'
import * as echarts from 'echarts/core'

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
      chart: null,
      words: {
        w1: '歌曲',
        w2: '歌词',
        w3: '未闻花名',
        w4: '本间芽衣子',
        w5: 'secret base',
        w6: '剧场版',
        w7: '大结局',
        w8: '夏末',
        w9: '再见',
        w10: '秘密基地'
      },
      comp: {
        c1: 0.8,
        c2: 0.18,
        c3: 0.5,
        c4: 0.28,
        c5: 0.6,
        c6: 0.9,
        c7: 0.18,
        c8: 0.38,
        c9: 0.98,
        c10: 0.8
      }
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
            gridSize: 6,
            sizeRange: [18, 45],
            rotationRange: [-0, 0],
            shape: 'circle',
            width: '100%',
            height: '100%',
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
                name: '未聞花名',
                value: 10,
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
                name: this.words.w2,
                value: this.comp.c2
              },
              {
                name: this.words.w3,
                value: this.comp.c3
              },
              {
                name: this.words.w4,
                value: this.comp.c4
              },
              {
                name: this.words.w5,
                value: this.comp.c5
              },
              {
                name: this.words.w6,
                value: this.comp.c6
              },
              {
                name: this.words.w7,
                value: this.comp.c7
              },
              {
                name: this.words.w8,
                value: this.comp.c8
              },
              {
                name: this.words.w9,
                value: this.comp.c9
              },
              {
                name: this.words.w10,
                value: this.comp.c10
              },
              {
                name: this.words.w2,
                value: this.comp.c2
              },
              {
                name: this.words.w3,
                value: this.comp.c3
              },
              {
                name: this.words.w4,
                value: this.comp.c4
              },
              {
                name: this.words.w5,
                value: this.comp.c5
              },
              {
                name: this.words.w6,
                value: this.comp.c6
              },
              {
                name: this.words.w7,
                value: this.comp.c7
              },
              {
                name: this.words.w8,
                value: this.comp.c8
              },
              {
                name: this.words.w9,
                value: this.comp.c9
              },
              {
                name: this.words.w10,
                value: this.comp.c10
              },
              {
                name: this.words.w2,
                value: this.comp.c2
              },
              {
                name: this.words.w3,
                value: this.comp.c3
              },
              {
                name: this.words.w4,
                value: this.comp.c4
              },
              {
                name: this.words.w5,
                value: this.comp.c5
              },
              {
                name: this.words.w6,
                value: this.comp.c6
              },
              {
                name: this.words.w7,
                value: this.comp.c7
              },
              {
                name: this.words.w8,
                value: this.comp.c8
              },
              {
                name: this.words.w9,
                value: this.comp.c9
              },
              {
                name: this.words.w10,
                value: this.comp.c10
              },
              {
                name: this.words.w2,
                value: this.comp.c2
              },
              {
                name: this.words.w3,
                value: this.comp.c3
              },
              {
                name: this.words.w4,
                value: this.comp.c4
              },
              {
                name: this.words.w5,
                value: this.comp.c5
              },
              {
                name: this.words.w6,
                value: this.comp.c6
              },
              {
                name: this.words.w7,
                value: this.comp.c7
              },
              {
                name: this.words.w8,
                value: this.comp.c8
              },
              {
                name: this.words.w9,
                value: this.comp.c9
              },
              {
                name: this.words.w10,
                value: this.comp.c10
              },
              {
                name: this.words.w2,
                value: this.comp.c2
              },
              {
                name: this.words.w3,
                value: this.comp.c3
              },
              {
                name: this.words.w4,
                value: this.comp.c4
              },
              {
                name: this.words.w5,
                value: this.comp.c5
              },
              {
                name: this.words.w6,
                value: this.comp.c6
              },
              {
                name: this.words.w7,
                value: this.comp.c7
              },
              {
                name: this.words.w8,
                value: this.comp.c8
              },
              {
                name: this.words.w9,
                value: this.comp.c9
              },
              {
                name: this.words.w10,
                value: this.comp.c10
              },
              {
                name: this.words.w2,
                value: this.comp.c2
              },
              {
                name: this.words.w3,
                value: this.comp.c3
              },
              {
                name: this.words.w4,
                value: this.comp.c4
              },
              {
                name: this.words.w5,
                value: this.comp.c5
              },
              {
                name: this.words.w6,
                value: this.comp.c6
              },
              {
                name: this.words.w7,
                value: this.comp.c7
              },
              {
                name: this.words.w8,
                value: this.comp.c8
              },
              {
                name: this.words.w9,
                value: this.comp.c9
              },
              {
                name: this.words.w10,
                value: this.comp.c10
              }
            ]
          }
        ]
      })
    }
  }
}
</script>
