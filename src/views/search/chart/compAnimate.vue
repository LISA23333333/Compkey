<template>
    <div :class="className" :style="{height:height,width:width}" />
  </template>
  
  <script>
  import * as echarts from 'echarts/core';
  import { GraphicComponent } from 'echarts/components';
  import { CanvasRenderer } from 'echarts/renderers';

  echarts.use([GraphicComponent, CanvasRenderer]);
  
  export default {
    data(){
      return{
        animate: null,
      }
    },
    props: {
      className: {
        type: String,
        default: 'Animate'
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
        this.initAnimate()
      })
    },
    beforeDestroy() {
      if (!this.animate) {
        return
      }
      this.animate.dispose()
      this.animate = null
    },
    methods: {
      initAnimate() {
        this.animate = echarts.init(this.$el)
  
        this.animate.setOption({
            graphic: {
                elements: [
                {
                  type: 'text',
                  left: 'center',
                  top: 'center',
                  style: {
                  text: 'Compkey',
                  fontSize: 100,
                  fontWeight: 'bold',
                  lineDash: [0, 200],
                  lineDashOffset: 0,
                  fill: 'transparent',
                  stroke: '#1e90ff',
                  lineWidth: 1
                  },
                  keyframeAnimation: {
                    duration: 3000,
                    loop: false,
                    keyframes: [
                      {
                        percent: 0.4,
                        style: {
                            fill: 'transparent',
                            lineDashOffset: 200,
                            lineDash: [200, 0]
                        }
                      },
                      {
                        // Stop for a while.
                        percent: 0.7,
                        style: {
                          fill: 'transparent'
                        }
                      },
                      {
                        percent: 1,
                        style: {
                          fill: '#1e90ff'
                        }
                      }
                    ]
                  }
                }
              ]
            }
        })
      }
    }
  }
  </script>
  