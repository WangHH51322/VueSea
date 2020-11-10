<template>
    <div style="overflow: hidden">
      <div class="titleVM">
        <i class="el-icon-s-data"> 优化概况</i>
      </div>
      <el-divider></el-divider>
      <div class="abc" style="padding-top: 100px">
        <produce-graph></produce-graph>
      </div>
      <div class="summary" style="margin-top: -100px;height: 300px">
        <div id="main" class="Echarts" style="width: 580px;;float: left;padding-left:-100px;">
        </div>
        <div id="mains" class="Echarts" style="width: 610px;;margin-left:590px;;"></div>
      </div>
    </div>
</template>
<router-view></router-view>
<script type="text/javascript">
import produceGraph  from "@/components/produceGraph";

  export default {
    name: "ProductionOverview",
    components:{
      "produce-graph":produceGraph,

    },
    data() {
      return {
      }
    },

    methods: {
      myEcharts1 () {
        // 基于准备好的dom，初始化echarts实例
        var myChart = this.$echarts.init(document.getElementById('main'));

        // 指定图表的配置项和数据
        var option = {
          backgroundColor: '#FFFFFF',
          title: {
            show: true,
            text: '平台实时虚拟计量',
            left: 'center',
            top:-3
          },
          tooltip: {
            trigger: 'axis'
          },
          legend: {
            data: ['WHPH', 'WHPC', 'CEPI'],
            type: 'scroll',
            top:26
          },
          grid: {
            top:'18%',
            left: '3%',
            bottom: '3%',
            containLabel: true
          },

          toolbox: {
            show: false,
// left: 10,
            feature: {
              dataZoom: {
                yAxisIndex: 'none'
              },
              dataView: {readOnly: false},
              restore: {},
              saveAsImage: {}
            }
          },

          xAxis: {
            type: 'category',
            boundaryGap: false,
            name: '时间',
            data: ['12:00:00', '12:10:00', '12:20:00', '12:30:00', '12:40:00', '12:50:00', '13:00:00', '13:10:00', '13:20:00', '13:30:00', '13:40:00', '13:50:00', '14:00:00', '14:10:00', '14:20:00', '14:30:00', '14:40:00', '14:50:00', '15:00:00', '15:10:00', '15:20:00', '15:30:00', '15:40:00', '15:50:00', '16:00:00', '16:10:00', '16:20:00', '16:30:00', '16:40:00', '16:50:00', '17:00:00', '17:10:00', '17:20:00', '17:30:00', '17:40:00', '17:50:00', '18:00:00', '18:10:00', '18:20:00', '18:30:00', '18:40:00', '18:50:00', '19:00:00', '19:10:00', '19:20:00', '19:30:00', '19:40:00', '19:50:00', '20:00:00'],

            axisLabel: {
              show: true,
              onZero: false,
              textStyle: {
//color: '#c3dbff'
// fontSize: 12
              }
            },
          },
          yAxis: {
            type: 'value',
            show: true,
            name: '产油量 m3/d'
          },
          series: [{
            name: 'WHPH',
            type: 'line',
            itemStyle: {
              normal: {
                color: '#409EFF',
                lineStyle: {
                  color: '#409EFF'
                }
              }
            },
            data: [643, 647, 587, 604, 646, 552, 587, 620, 603, 640, 562, 594, 598, 623, 601, 589, 570, 604, 590, 551, 628, 594, 641, 602, 555, 602, 561, 614, 613, 642, 624, 584, 613, 579, 553, 550, 603, 641, 603, 644, 599, 565, 570, 631, 640, 566, 565, 649, 608]
          },
            {
              name: 'WHPC',
              type: 'line',
              itemStyle: {
                normal: {
                  color: '#67C23A',
                  lineStyle: {
                    color: '#67C23A'
                  }
                }
              },
              data: [814, 833, 814, 826, 885, 826, 830, 900, 828, 807, 887, 804, 877, 819, 833, 852, 892, 880, 867, 894, 823, 888, 807, 874, 882, 819, 872, 840, 821, 888, 803, 849, 814, 815, 822, 862, 800, 842, 879, 851, 888, 824, 801, 868, 870, 868, 889, 801, 859]
            },
            {
              name: 'CEPI',
              type: 'line',
              data: [1231, 1219, 1272, 1266, 1281, 1295, 1290, 1264, 1252, 1291, 1254, 1251, 1288, 1259, 1237, 1258, 1281, 1255, 1218, 1252, 1205, 1240, 1252, 1241, 1289, 1258, 1276, 1257, 1237, 1300, 1225, 1218, 1232, 1259, 1293, 1233, 1264, 1241, 1207, 1276, 1295, 1206, 1242, 1279, 1252, 1298, 1214, 1241, 1279]
            },
          ]
        };

        // 使用刚指定的配置项和数据显示图表。
        myChart.setOption(option);
      },
      myEcharts2 () {
        // 基于准备好的dom，初始化echarts实例
        var myChart = this.$echarts.init(document.getElementById('mains'));
        var data_1 = [
          [63.6, 2.9],
          [63.8, 2.5],
          [62.6, 2.4],
          [62.2, 2.9],
          [63.5, 2.2],
          [63, 1.9],
          [62, 1.2],
          [63.7, 2.3],
          [62.6, 2.7],
          [62, 1.9]
        ];
        var data_2 = [
          [68.2, 1.5],
          [69, 2.3],
          [68.7, 2.4],
          [68.7, 1.2],
          [67.2, 1],
          [68.1, 1.1],
          [68.7, 1.1],
          [68.8, 1.5],
          [68.2, 2],
          [68, 1.2]
        ];
        // 指定图表的配置项和数据
        var option = {
          backgroundColor: '#FFFFFF',
          title: {
            show: true,
            text: '海管工作区实时模拟',
            left: 'center',
            top: -3
          },
          tooltip: {
            trigger: 'axis'
          },
          legend: {
            data: ['H-I', 'I-H', 'QL=500 m3/d', 'QL=1000 m3/d', 'QL=1500 m3/d', 'QL=2000 m3/d'],
            type: 'scroll',
            top: 27,
            left:1
// <!-- left:'center' -->
// <!-- orient: 'vertical', -->
          },
          grid: {
            left: '3%',
            top:'30%',
            bottom: '2%',
            containLabel: true
          },

          toolbox: {
            show: false,
// left: 10,
            feature: {
              dataZoom: {
                yAxisIndex: 'none'
              },
              dataView: {readOnly: false},
              restore: {},
              saveAsImage: {}
            }
          },


          xAxis: {
            name: '温度 ℃',
            type: 'value',
// splitLine: {
//     lineStyle: {
//         type: 'dashed'
//     }
// },
// splitNumber: 10,
            min: 40,
            axisLine: {onZero: false},
            boundaryGap: false,
          },
          yAxis: {
            type: 'value',
            show: true,
            name: '压力 MPa'
          },
          series: [
            {
              name: 'QL=500 m3/d',
              type: 'line',
              smooth: true,
              itemStyle: {
                normal: {
                  color: '#409EFF', //改变折线点的颜色
                  lineStyle: {
                    color: '#409EFF' //改变折线颜色
                  }
                }
              },
              data: [[40, 15.63534738], [50, 15.47672191], [60, 15.44639314], [70, 15.2975505], [80, 15.08251494]]
            },
            {
              name: 'QL=1000 m3/d',
              type: 'line',
              smooth: true,
              itemStyle: {
                normal: {
                  color: '#67C23A', //改变折线点的颜色
                  lineStyle: {
                    color: '#67C23A' //改变折线颜色
                  }
                }
              },
              data: [[40, 14.54138953], [50, 13.90688765], [60, 13.78557256], [70, 13.19020199], [80, 12.33005975]]
            },
            {
              name: 'QL=1500 m3/d',
              type: 'line',
              smooth: true,
              data: [[40, 12.71812644], [50, 11.2904972], [60, 11.01753827], [70, 9.677954485], [80, 7.74263443]]
            },
            {
              name: 'QL=2000 m3/d',
              type: 'line',
              smooth: true,
              data: [[40, 10.16555812], [50, 7.627550583], [60, 7.142290249], [70, 4.760807974], [80, 1.320238987]]
            },
            {
              name: 'H-I',
              type: 'scatter',
              itemStyle: {
                color: '#67C23A'
              },
              emphasis: {
                label: {
                  show: true,
                  position: 'right',
                  color: '#67C23A',
                  fontSize: 16
                }
              },
              data: data_1
            },
            {
              name: 'I-H',
              type: 'scatter',
              itemStyle: {
                color: 'blue'
              },
              emphasis: {
                label: {
                  show: true,
                  position: 'right',
//color: 'blue',
                  fontSize: 16
                }
              },
              data: data_2
            },
          ]
        };

        // 使用刚指定的配置项和数据显示图表。
        myChart.setOption(option);
      },

    },
    mounted () {
      this.myEcharts1();
      this.myEcharts2();
    }

  }
</script>

<style scoped>
.abc {
  width: 1000px;
 left: 0px;
}


.summary{
  height: 420px;
}
#mains{
  height: 90%;
}
#main{
  height: 90%;
}
.titleVM{
  font-size: 17px;
  font-family: "微软雅黑";
  color: #1f64f5;
  margin-top: 7px;
  margin-bottom: -15px;
}
</style>
