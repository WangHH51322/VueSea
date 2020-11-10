<!-- 相分率图 -->
<template>
  <div>
    <div
      id="phaseFractionChart"
      :style="{ width: '100%', height: '200px' }"
    ></div>
  </div>
</template>

<script>
export default {
  data () {
    return {}
  },
  // 生命周期 - 创建完成（访问当前this实例）
  created () {},
  methods: {
    drawLine () {
      // 基于准备好的dom，初始化echarts实例
      let myChart = this.$echarts.init(
        document.getElementById('phaseFractionChart')
      )
      // 绘制图表
      var colors = [
        'rgba(210, 105, 30, 0.75);',
        'rgba(72, 118, 255, 0.75)',
        'rgb(238, 0, 0)',
        'rgb(0, 205, 0)',
        'rgb(160, 82, 45)'
      ]
      myChart.setOption({
        tooltip: {
          trigger: 'axis',
          axisPointer: {
            type: 'cross',
            label: {
              backgroundColor: '#6a7985'
            }
          }
        },
        legend: {
          data: ['油相', '气相', '水相']
        },
        toolbox: {
          feature: {
            saveAsImage: {}
          }
        },
        grid: {
          show: false
        },
        xAxis: [
          {
            type: 'value',
            name: '里程，m',
            nameLocation: 'middle',
            nameGap: 30,
            min: 0,
            max: 3350,
            axisTick: {
              alignWithLabel: true
            },
            position: 'bottom'
          }
        ],
        yAxis: [
          {
            type: 'value',
            name: '相分率',
            position: 'left',
            nameLocation: 'middle',
            nameGap: 30,
            min: 0,
            max: 1
          }
        ],
        series: [
          {
            name: '油相',
            type: 'line',
            stack: '总量',
            areaStyle: {},
            data: [
              [0, 0.02],
              [3310.19, 0.02]
            ]
          },
          {
            name: '气相',
            type: 'line',
            stack: '总量',
            areaStyle: {},
            data: [
              [0, 0],
              [3310.19, 0]
            ]
          },
          {
            name: '水相',
            type: 'line',
            stack: '总量',
            areaStyle: {},
            data: [
              [0, 0.97],
              [3310.19, 0.97]
            ]
          }
        ]
      })
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
