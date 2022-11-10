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
        default: 'waveAnimate'
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
                  type: 'group',
                  left: 'center',
                  top: 'center',
                  children: new Array(25).fill(0).map((val, i) => ({
                    type: 'rect',
                    x: i * 40,
                    shape: {
                      x: 0,
                      y: -55,
                      width: 20,
                      height: 110
                    },
                    style: {
                      fill: '#9bc7f4'
                    },
                    keyframeAnimation: {
                      duration: 8000,
                      delay: i * 180,
                      loop: true,
                      keyframes: [
                        {
                          style: {
                          fill: '#ffa07a'
                        },
                          percent: 0.5,
                          scaleY: 0.03,
                          easing: 'cubicIn'
                        },
                        {
                          percent: 1,
                          scaleY: 1,
                          easing: 'cubicOut',
                          style: {
                            fill: '#9bc7f4'
                          },
                        }
                      ]
                    }
                  }))
                }
                ]
            }
        })
      }
    }
  }
  </script>
  