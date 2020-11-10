<!-- 里程参数折线图 -->
<template>
<div >
    <div id="myChart" :style="{width: '110%', height: '400px'}"></div>
</div>
</template>

<script>

export default {
  name: 'xcharts',
  data () {
    return {

    }
  },
  // 生命周期 - 创建完成（访问当前this实例）
  created () {

  },
  methods: {
    drawLine () {
      // 基于准备好的dom，初始化echarts实例
      let myChart = this.$echarts.init(document.getElementById('myChart'))
      // 绘制图表
      var colors = ['rgb(122, 122, 122)', 'rgba(72, 118, 255, 0.75)', 'rgb(238, 0, 0)', 'rgb(0, 205, 0)', 'rgb(160, 82, 45)']
      myChart.setOption({
        color: colors,

        tooltip: {
          trigger: 'axis',
          axisPointer: {
            type: 'line'
          }
        },
        grid: {
          right: '30%'
        },
        toolbox: {
          feature: {
            dataView: {show: true, readOnly: false},
            restore: {show: true},
            saveAsImage: {show: true}
          }
        },
        legend: {
          data: ['高程', '压力', '温度', '流速', '腐蚀速率']
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
            name: '高程, m',
            nameLocation: 'middle',
            nameGap: 40,
            min: -69,
            max: -82,
            position: 'left',
            axisLine: {
              lineStyle: {
                color: colors[0]
              }
            },
            axisLabel: {
              formatter: '{value} '
            }
          },
          {
            type: 'value',
            name: '压力,kPa',
            nameLocation: 'center',
            nameRotate: 270,
            nameGap: 35,
            min: 2390,
            max: 2440,
            position: 'right',
            axisLine: {
              lineStyle: {
                color: colors[1]
              }
            },
            axisLabel: {
              formatter: '{value}'
            }
          },
          {
            type: 'value',
            name: '温度,°C',
            nameLocation: 'center',
            nameRotate: 270,
            nameGap: 40,
            min: 0,
            max: 120,
            position: 'right',
            offset: 60,
            axisLine: {
              lineStyle: {
                color: colors[2]
              }
            },
            axisLabel: {
              formatter: '{value}'
            }
          },
          {
            type: 'value',
            name: '流速,m/s',
            nameLocation: 'center',
            nameRotate: 270,
            nameGap: 30,
            min: 2.4,
            max: 3.4,
            offset: 120,
            position: 'right',
            axisLine: {
              lineStyle: {
                color: colors[3]
              }
            },
            axisLabel: {
              formatter: '{value} '
            }
          },
          {
            type: 'value',
            name: '腐蚀速率,mm/a',
            nameLocation: 'center',
            nameRotate: 270,
            nameGap: 30,
            min: 4.8,
            max: 8.8,
            offset: 180,
            position: 'right',
            axisLine: {
              lineStyle: {
                color: colors[4]
              }
            },
            axisLabel: {
              formatter: '{value} '
            }
          }
        ],
        series: [
          {
            name: '高程',
            type: 'line',
            data: [[0, -77], [876.4, -77.42], [1688.02, -76.73], [2165.68, -74.71], [2285.71, -79.42], [2860.57, -76.76], [3130.72, -78.37], [3310.19, -78.14]]
          },
          {
            name: '压力',
            type: 'line',
            yAxisIndex: 1,
            smooth: true,
            data: [[0, 2437.81], [2185.59, 2412.88], [2285.71, 2414], [2841.27, 2405.4], [3170.6, 2402.24], [3310.19, 2400.28]]
          },
          {
            name: '温度',
            type: 'line',
            yAxisIndex: 2,
            smooth: true,
            data: [[0, 77.51], [1410.88, 42.13], [3310.19, 26.08]]
          },
          {
            name: '流速',
            type: 'line',
            yAxisIndex: 3,
            smooth: true,
            data: [[0, 3.32], [1430.68, 2.83], [3310.19, 2.63]]
          },
          {
            name: '腐蚀速率',
            type: 'line',
            yAxisIndex: 4,
            data: [2.0, 2.2, 3.3, 4.5, 6.3, 10.2, 20.3, 23.4, 23.0, 16.5, 12.0, 6.2]
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
