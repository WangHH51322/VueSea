<!-- 百分比仪表盘 -->
<template>
  <div style="margin-left:50px">
    <div style="display:flex">
    <gaugeChart gaugeName="输量百分比" :gaugeValue="qPropotion" fatherId="board1"></gaugeChart>
      <gaugeChart gaugeName="流速百分比" :gaugeValue="vPropotion" fatherId="board2"></gaugeChart></div>
       <div style="display:flex;margin-top:30px">
      <gaugeChart gaugeName="压力百分比" :gaugeValue="pPropotion" fatherId="board3"></gaugeChart>
      <gaugeChart gaugeName="温度百分比" :gaugeValue="tPropotion" fatherId="board4"></gaugeChart></div>

  </div>
</template>

<script>
import gaugeChart from '@/components/gaugeChart.vue'
export default {
  components: {'gaugeChart': gaugeChart},
  data () {
    return {
      qPropotion: 40,
      vPropotion: 60,
      pPropotion: 80,
      tPropotion: 90
    }
  },
  // 生命周期 - 创建完成（访问当前this实例）
  created () {},
  methods: {
    drawLine () {
      // 基于准备好的dom，初始化echarts实例
      let myChart = this.$echarts.init(document.getElementById('board1'))
      // 绘制图表
      myChart.setOption({
        tooltip: {
          formatter: '{a} <br/>{b} : {c}%'
        },
        toolbox: {
          feature: {
            restore: {},
            saveAsImage: {}
          }
        },
        series: [
          {
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
            data: [
              {
                value: 40
              }
            ],
            title: {
              show: true,
              offsetCenter: [0, '130%'],
              fontFamily: 'Arial',
              fontWeight: 'bold'
            }
          }
        ]
      })
    }
  },
  // 生命周期 - 挂载完成（访问DOM元素）
  mounted () {
    // this.drawLine();
  }
}
</script>
<style scoped>
/* @import url(); 引入css类 */
</style>
