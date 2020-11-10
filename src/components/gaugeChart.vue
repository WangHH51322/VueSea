<!-- 百分比仪表盘 -->
<template>
  <div>
    <!-- background-color:blue -->
    <div style="width: 160px; height: 180px">
      <div :id="fatherId" :style="{ width: '160px', height: '160px' }"></div>
      <div
        style="
          position: relative;
          width: 130px;
          height: 130px;
          padding: 0;
          top: -145.5px;
          left: 13.5px;
          border-radius: 50%;
          background: #ebeef5;
          z-index: -1;
          border: 1px solid #dcdfe6;
        "
      >
        <h3 style="margin-top: 150px; text-align: center">{{ gaugeName }}</h3>
      </div>
    </div>
  </div>
</template>

<script>
export default {
  name: 'gaugeChart',
  props: {
    gaugeName: String,
    fatherId: String,
    gaugeValue: Number
  },
  data () {
    return {
      //   name: "输量百分比",
      option: {
        tooltip: {
          formatter: '{a} <br/>{b} : {c}%'
        },
        toolbox: {

        },
        series: [
          {
            data: [
              {
                value: 0
              }
            ],
            type: 'gauge',
            axisLine: {
              lineStyle: {
                width: 12, // 这个是修改宽度的属性
                color: [
                  // 表盘颜色
                  [0.6, '#20AE51'], // 0-60%处的颜色
                  [0.8, '#FFED44'], // 60%-80%处的颜色
                  [1, '#DA462C'] // 80%-100%处的颜色
                ]
              }
            },
            axisTick: {
              // 刻度线样式（短线样式）
              length: 6
            },
            axisLabel: {
              // 文字样式（及“10”、“20”等文字样式）
              distance: 4, // 文字离表盘的距离
              fontSize: 8
            },
            splitLine: {
              // 分割线样式（及10、20等长线样式）
              length: 12,
              lineStyle: {
                // 属性lineStyle控制线条样式
                width: 2
              }
            },
            pointer: {
              show: true,
              width: 3, // 指针宽度
              length: '90%' // 指针长度
            },
            detail: {
              formatter: '{score|{value}%}',
              offsetCenter: [0, '60%'],

              height: 0,
              rich: {
                score: {
                  fontFamily: '微软雅黑',
                  backgroundColor: 'rgba(235, 233, 233, 1)',
                  fontSize: 15
                }
              }
            },

            title: {
              show: true,
              offsetCenter: [0, '130%'],
              fontFamily: 'Arial',
              fontWeight: 'bold'
            }
          }
        ]
      }
    }
  },
  // 生命周期 - 创建完成（访问当前this实例）
  created () {},
  methods: {
    drawLine () {
      // 基于准备好的dom，初始化echarts实例
      let myChart = this.$echarts.init(document.getElementById(this.fatherId))
      this.option.series[0].data[0].value = this.gaugeValue
      // 绘制图表
      myChart.setOption(this.option)
    }
  },
  // 生命周期 - 挂载完成（访问DOM元素）
  mounted () {
    this.drawLine()
  }
}
</script>
<style scoped>
/* @import url(); 引入css类 */
</style>
