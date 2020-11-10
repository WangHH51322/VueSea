<template>
    <div>
        <div class="titleVM">
            <i class="el-icon-s-data"> 虚拟计量</i>
        </div>
        <el-divider></el-divider>
        <!--在线、离线模式选择-->
        <div class="modelSelectZone">
            <el-button round size="mini" @click="goToRealTimeModel">实时模式</el-button>
            <el-button type="primary" round size="mini">历史模式</el-button>
        </div>
        <!--下拉框选择区-->
        <div class="selectZone">
            <span class="selectZoneTitle">请选择:</span>
            <el-select v-model="value1" filterable placeholder="作业公司" size="mini" style="width: 125px;margin-right: 10px">
                <el-option
                        v-for="item in operatingCompany"
                        :key="item.value"
                        :label="item.label"
                        :value="item.value">
                </el-option>
            </el-select>
            <el-select v-model="value2" filterable placeholder="区域类型" size="mini" style="width: 125px;margin-right: 10px">
                <el-option
                        v-for="item in areaType"
                        :key="item.value"
                        :label="item.label"
                        :value="item.value">
                </el-option>
            </el-select>
            <el-select v-model="value3" filterable placeholder="区块名称" size="mini" style="width: 125px;margin-right: 10px">
                <el-option
                        v-for="item in blockName"
                        :key="item.value"
                        :label="item.label"
                        :value="item.value">
                </el-option>
            </el-select>
            <el-select v-model="value4" filterable placeholder="平台名称" size="mini" style="width: 125px;margin-right: 10px">
                <el-option
                        v-for="item in platformName"
                        :key="item.value"
                        :label="item.label"
                        :value="item.value">
                </el-option>
            </el-select>
            <el-select v-model="value5" filterable placeholder="井" size="mini" style="width: 125px;margin-right: 10px">
                <el-option
                        v-for="item in wellName"
                        :key="item.value"
                        :label="item.label"
                        :value="item.value">
                </el-option>
            </el-select>
            <el-button size="mini" style="width: 125px;margin-right: 10px" @click="dialogVisible1 = true">请选择时间</el-button>
        </div>
        <!--折线图-->
        <div class="chartZone">
            <el-row>
                <el-col :span="8" style="height:340px">
                    <span style="display: flex;align-items: center;justify-content: center;margin-bottom: 5px">
                        单井实时虚拟计量值
                    </span>
                    <div id="myChart" :style="{width:'450px',height: '320px'}"></div>
                </el-col>
                <el-col :span="9" style="height:340px">
                    <span style="display: flex;align-items: center;justify-content: center;margin-bottom: 5px">
                        单井累计产量分析
                    </span>
                    <div id="myChart2" :style="{width:'500px',height: '320px'}"></div>
                </el-col>
                <el-col :span="3.5" style="height:340px">
                    <el-row>
                        <div id="myChart3" :style="{width:'150px',height: '150px'}"></div>
                        <span style="display: flex;align-items: center;justify-content: center">
                            油相偏差
                        </span>
                    </el-row>
                    <el-row>
                        <div id="myChart4" :style="{width:'150px',height: '150px'}"></div>
                        <span style="display: flex;align-items: center;justify-content: center">
                            水相偏差
                        </span>
                    </el-row>
                </el-col>
                <el-col :span="3.5" style="height:340px;margin-left: 15px">
                    <el-row>
                        <div id="myChart5" :style="{width:'150px',height: '150px'}"></div>
                        <span style="display: flex;align-items: center;justify-content: center">
                            气相偏差
                        </span>
                    </el-row>
                </el-col>
            </el-row>
        </div>
        <!--每页数据数目-->
        <div class="block">
            <el-col :span="20" style="height:35px">
                <el-pagination
                        @size-change="handleSizeChange"
                        @current-change="handleCurrentChange"
                        :page-sizes="[10, 20, 50, 100]"
                        :page-size="10"
                        layout="sizes, pager">
                </el-pagination>
            </el-col>
            <el-col :span="4" style="height:35px">
                <el-form>
                    <el-form-item label="Search:">
                        <el-input placeholder="请输入关键字" style="width: 120px" size="mini"></el-input>
                    </el-form-item>
                </el-form>
            </el-col>
        </div>
        <!--表格-->
        <div class="tableZone">
            <el-table
                    :data="tableData"
                    height="200"
                    style="width: 100%"
                    :header-row-style="{height:'35px'}"
                    :header-cell-style="{padding:'0 0'}"
                    :row-style="{height:'35px'}"
                    :cell-style="{padding:'0 0'}"
                    :default-sort = "{prop: 'date', order: 'descending'}"
            >
                <el-table-column
                        prop="wellNumb"
                        label="井号"
                        sortable
                        width="75">
                </el-table-column>
                <el-table-column
                        prop="state"
                        label="状态"
                        sortable
                        width="75">
                </el-table-column>
                <el-table-column
                        prop="workTime"
                        label="生产时间"
                        sortable
                        width="100">
                </el-table-column>
                <el-table-column
                        prop="oilNozzle"
                        label="油嘴"
                        sortable
                        width="75">
                </el-table-column>
                <el-table-column
                        prop="liquid"
                        label="液m³/s"
                        sortable
                        width="100">
                </el-table-column>
                <el-table-column
                        prop="oil"
                        label="油m³/s"
                        sortable
                        width="100">
                </el-table-column>
                <el-table-column
                        prop="gas"
                        label="气m³/s"
                        sortable
                        width="100">
                </el-table-column>
                <el-table-column
                        prop="water"
                        label="水m³/s"
                        sortable
                        width="100">
                </el-table-column>
                <el-table-column
                        prop="gor"
                        label="GOR"
                        sortable
                        width="80">
                </el-table-column>
                <el-table-column
                        prop="inPressure"
                        label="入口压力MPa"
                        sortable
                        width="135">
                </el-table-column>
                <el-table-column
                        prop="outPressure"
                        label="出口压力MPa"
                        sortable
                        width="135">
                </el-table-column>
                <el-table-column
                        prop="wellPressure"
                        label="井口油压MPa"
                        sortable
                        width="135">
                </el-table-column>
                <el-table-column
                        prop="inTemperature"
                        label="入口温度℃"
                        sortable
                        width="135">
                </el-table-column>

            </el-table>
        </div>
        <!--翻页-->
        <div class="block">
            <el-pagination
                    @size-change="handleSizeChange"
                    @current-change="handleCurrentChange"
                    :current-page.sync="currentPage"
                    :page-size="10"
                    layout="total,prev, pager, next, jumper"
                    :total="12">
            </el-pagination>
        </div>
        <!--对话框-->
        <el-dialog
                title="提示"
                :visible.sync="dialogVisible1"
                width="30%"
                :before-close="handleClose">
            <el-form ref="form" v-model="form" label-width="80px">
                <el-form-item label="开始时间">
                    <el-col :span="11">
                        <el-date-picker type="date" placeholder="选择日期" v-model="form.date1" style="width: 100%;"></el-date-picker>
                    </el-col>
                    <el-col class="line" :span="2">-</el-col>
                    <el-col :span="11">
                        <el-time-picker placeholder="选择时间" v-model="form.date2" style="width: 100%;"></el-time-picker>
                    </el-col>
                </el-form-item>
            </el-form>
            <span slot="footer" class="dialog-footer">
                <el-button @click="dialogVisible1 = false">取 消</el-button>
                <el-button type="primary" @click="dialogVisible1 = false">确 定</el-button>
            </span>
        </el-dialog>
    </div>

</template>

<script>
  export default {
    name: "VirtualMeasurement",
    data(){
      return{
        /*下拉框数据*/
        value1: '',
        value2: '',
        value3: '',
        value4: '',
        value5: '',
        operatingCompany: [{
          value: 1,
          label: '秦皇岛32-6作业公司'
        }],
        areaType: [
          {
            value: 1,
            label: '作业区'
          },
          {
            value: 2,
            label: '油田群'
          },
          {
            value: 3,
            label: '区块'
          },
          {
            value: 4,
            label: '平台'
          },
        ],
        blockName: [
          {
            value: 1,
            label: 'CEPI区块'
          },
          {
            value: 2,
            label: 'CEPJ区块'
          },
          {
            value: 3,
            label: 'FPSO区块'
          },
          {
            value: 4,
            label: '所有区块'
          },
        ],
        platformName: [
          {
            value: 1,
            label: 'CEPI平台'
          },
          {
            value: 2,
            label: 'WHPB平台'
          },
          {
            value: 3,
            label: 'WHPC平台'
          },
          {
            value: 4,
            label: 'WHPG平台'
          },
          {
            value: 5,
            label: 'WHPH平台'
          },
          {
            value: 6,
            label: '所有平台'
          },
        ],
        wellName: [
          {
            value: 1,
            label: 'A1井'
          },
          {
            value: 2,
            label: 'A2井'
          },
          {
            value: 3,
            label: 'A3井'
          },
          {
            value: 4,
            label: 'A4井'
          },
          {
            value: 5,
            label: 'A5井'
          },
          {
            value: 6,
            label: 'A6井'
          },
        ],
        /*表盘数据*/
        dashboardData: {
          columns: ['type', 'value'],
          rows: [
            { type: '占比', value: 0.8 }
          ]
        },
        /*表格数据*/
        tableData: [
          {
            wellNumb: 'I01H',
            state: 'VSD',
            workTime: '24',
            oilNozzle: '30.24',
            liquid: '1889.372',
            oil: '93.972',
            gas: '982.6',
            water: '1798.4',
            gor: '10.45',
            inPressure: '2.02',
            outPressure: '13.11',
            wellPressure: '1.90',
            inTemperature: '63.79',
          }, {
            wellNumb: 'I01H',
            state: 'VSD',
            workTime: '24',
            oilNozzle: '30.24',
            liquid: '1889.372',
            oil: '93.972',
            gas: '982.6',
            water: '1798.4',
            gor: '10.45',
            inPressure: '2.02',
            outPressure: '13.11',
            wellPressure: '1.90',
            inTemperature: '63.79',
          },{
            wellNumb: 'I01H',
            state: 'VSD',
            workTime: '24',
            oilNozzle: '30.24',
            liquid: '1889.372',
            oil: '93.972',
            gas: '982.6',
            water: '1798.4',
            gor: '10.45',
            inPressure: '2.02',
            outPressure: '13.11',
            wellPressure: '1.90',
            inTemperature: '63.79',
          },{
            wellNumb: 'I01H',
            state: 'VSD',
            workTime: '24',
            oilNozzle: '30.24',
            liquid: '1889.372',
            oil: '93.972',
            gas: '982.6',
            water: '1798.4',
            gor: '10.45',
            inPressure: '2.02',
            outPressure: '13.11',
            wellPressure: '1.90',
            inTemperature: '63.79',
          },{
            wellNumb: 'I01H',
            state: 'VSD',
            workTime: '24',
            oilNozzle: '30.24',
            liquid: '1889.372',
            oil: '93.972',
            gas: '982.6',
            water: '1798.4',
            gor: '10.45',
            inPressure: '2.02',
            outPressure: '13.11',
            wellPressure: '1.90',
            inTemperature: '63.79',
          },{
            wellNumb: 'I01H',
            state: 'VSD',
            workTime: '24',
            oilNozzle: '30.24',
            liquid: '1889.372',
            oil: '93.972',
            gas: '982.6',
            water: '1798.4',
            gor: '10.45',
            inPressure: '2.02',
            outPressure: '13.11',
            wellPressure: '1.90',
            inTemperature: '63.79',
          },{
            wellNumb: 'I01H',
            state: 'VSD',
            workTime: '24',
            oilNozzle: '30.24',
            liquid: '1889.372',
            oil: '93.972',
            gas: '982.6',
            water: '1798.4',
            gor: '10.45',
            inPressure: '2.02',
            outPressure: '13.11',
            wellPressure: '1.90',
            inTemperature: '63.79',
          },{
            wellNumb: 'I01H',
            state: 'VSD',
            workTime: '24',
            oilNozzle: '30.24',
            liquid: '1889.372',
            oil: '93.972',
            gas: '982.6',
            water: '1798.4',
            gor: '10.45',
            inPressure: '2.02',
            outPressure: '13.11',
            wellPressure: '1.90',
            inTemperature: '63.79',
          },{
            wellNumb: 'I01H',
            state: 'VSD',
            workTime: '24',
            oilNozzle: '30.24',
            liquid: '1889.372',
            oil: '93.972',
            gas: '982.6',
            water: '1798.4',
            gor: '10.45',
            inPressure: '2.02',
            outPressure: '13.11',
            wellPressure: '1.90',
            inTemperature: '63.79',
          },{
            wellNumb: 'I01H',
            state: 'VSD',
            workTime: '24',
            oilNozzle: '30.24',
            liquid: '1889.372',
            oil: '93.972',
            gas: '982.6',
            water: '1798.4',
            gor: '10.45',
            inPressure: '2.02',
            outPressure: '13.11',
            wellPressure: '1.90',
            inTemperature: '63.79',
          },{
            wellNumb: 'I01H',
            state: 'VSD',
            workTime: '24',
            oilNozzle: '30.24',
            liquid: '1889.372',
            oil: '93.972',
            gas: '982.6',
            water: '1798.4',
            gor: '10.45',
            inPressure: '2.02',
            outPressure: '13.11',
            wellPressure: '1.90',
            inTemperature: '63.79',
          },{
            wellNumb: 'I01H',
            state: 'VSD',
            workTime: '24',
            oilNozzle: '30.24',
            liquid: '1889.372',
            oil: '93.972',
            gas: '982.6',
            water: '1798.4',
            gor: '10.45',
            inPressure: '2.02',
            outPressure: '13.11',
            wellPressure: '1.90',
            inTemperature: '63.79',
          },
        ],
        currentPage: 1,
        dialogVisible1:false,
        form: {
          name: '',
          region: '',
          date1: '',
          date2: '',
          delivery: false,
          type: [],
          resource: '',
          desc: ''
        },
      }
    },
    mounted(){
      this.drawLine();
    },
    methods: {
      drawLine(){
        // 基于准备好的dom，初始化echarts实例
        let myChart = this.$echarts.init(document.getElementById('myChart'))
        let myChart2 = this.$echarts.init(document.getElementById('myChart2'))
        let myChart3 = this.$echarts.init(document.getElementById('myChart3'))
        let myChart4 = this.$echarts.init(document.getElementById('myChart4'))
        let myChart5 = this.$echarts.init(document.getElementById('myChart5'))
        // 绘制图表
        myChart.setOption({
          backgroundColor: '#FFFFFF',
          tooltip: {
            trigger: 'axis'
          },
          legend: {
            data: ['油', '气', '水'],
            left: 'center'
          },
          grid: {
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
            data: ['8:00:00', '8:10:00', '8:20:00', '8:30:00', '8:40:00', '8:50:00', '9:00:00', '9:10:00', '9:20:00', '9:30:00', '9:40:00', '9:50:00', '10:00:00', '10:10:00', '10:20:00', '10:30:00', '10:40:00', '10:50:00', '11:00:00', '11:10:00', '11:20:00', '11:30:00', '11:40:00', '11:50:00', '12:00:00', '12:10:00', '12:20:00', '12:30:00', '12:40:00', '12:50:00', '13:00:00', '13:10:00', '13:20:00', '13:30:00', '13:40:00', '13:50:00', '14:00:00', '14:10:00', '14:20:00', '14:30:00', '14:40:00', '14:50:00', '15:00:00', '15:10:00', '15:20:00', '15:30:00', '15:40:00', '15:50:00', '16:00:00'],
            name: '时间',
            axisLabel: {
              show: true,
              textStyle: {
                //color: '#c3dbff',  //更改坐标轴文字颜色
                fontSize: 12      //更改坐标轴文字大小
              }
            },
          },
          yAxis: {
            type: 'value',
            show: true,
            name: '体积流量 m3/d'
          },
          series: [{
            name: '油',
            smooth: true,
            type: 'line',
            itemStyle: {
              normal: {
                color: '#409EFF', //改变折线点的颜色
                lineStyle: {
                  color: '#409EFF' //改变折线颜色
                }
              }
            },
            data: [34, 31, 40, 36, 34, 38, 39, 37, 40, 30, 36, 31, 39, 33, 37, 36, 38, 30, 34, 36, 40, 40, 31, 40, 40, 35, 38, 38, 30, 40, 40, 34, 39, 36, 33, 38, 38, 32, 38, 37, 32, 34, 31, 35, 36, 32, 34, 35, 36]
          }, {
            name: '气',
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
            data: [740, 710, 707, 743, 777, 717, 711, 793, 773, 711, 759, 740, 719, 700, 780, 772, 768, 704, 743, 736, 726, 785, 777, 742, 781, 764, 724, 712, 700, 706, 738, 791, 700, 746, 713, 711, 702, 791, 719, 793, 796, 743, 786, 750, 777, 797, 720, 735, 753]
          }, {
            name: '水',
            type: 'line',
            smooth: true,
            data: [673, 653, 633, 601, 612, 605, 692, 672, 640, 613, 613, 678, 626, 623, 679, 645, 655, 644, 609, 690, 609, 638, 668, 619, 642, 609, 615, 628, 673, 636, 652, 657, 635, 674, 650, 686, 655, 664, 610, 619, 658, 616, 618, 664, 619, 618, 682, 622, 689]
          }]
        });
        myChart2.setOption({
          backgroundColor: '#FFFFFF',
          tooltip: {
            trigger: 'axis'
          },
          legend: {
            data: ['油', '气', '水', '日报-油', '日报-气', '日报-水'],
            left: 'center'
          },
          grid: {
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
            data: ['8:00:00', '8:10:00', '8:20:00', '8:30:00', '8:40:00', '8:50:00', '9:00:00', '9:10:00', '9:20:00', '9:30:00', '9:40:00', '9:50:00', '10:00:00', '10:10:00', '10:20:00', '10:30:00', '10:40:00', '10:50:00', '11:00:00', '11:10:00', '11:20:00', '11:30:00', '11:40:00', '11:50:00', '12:00:00', '12:10:00', '12:20:00', '12:30:00', '12:40:00', '12:50:00', '13:00:00', '13:10:00', '13:20:00', '13:30:00', '13:40:00', '13:50:00', '14:00:00', '14:10:00', '14:20:00', '14:30:00', '14:40:00', '14:50:00', '15:00:00', '15:10:00', '15:20:00', '15:30:00', '15:40:00', '15:50:00', '16:00:00'],
            name: '时间',
            axisLabel: {
              show: true,
              textStyle: {
                //color: '#c3dbff',  //更改坐标轴文字颜色
                fontSize: 12      //更改坐标轴文字大小
              }
            },

          },
          yAxis: {
            type: 'value',
            show: true,
            name: '体积流量 m3/d'

          },
          series: [{
            name: '油',
            smooth: true,
            type: 'line',
            itemStyle: {
              normal: {
                color: '#409EFF', //改变折线点的颜色
                lineStyle: {
                  color: '#409EFF' //改变折线颜色
                }
              }
            },
            data: [34, 65, 105, 141, 175, 213, 252, 289, 329, 359, 395, 426, 465, 498, 535, 571, 609, 639, 673, 709, 749, 789, 820, 860, 900, 935, 973, 1011, 1041, 1081, 1121, 1155, 1194, 1230, 1263, 1301, 1339, 1371, 1409, 1446, 1478, 1512, 1543, 1578, 1614, 1646, 1680, 1715, 1751]
          },
            {
              name: '气',
              type: 'line',
              smooth: true,
              itemStyle: {
                normal: {
                  color: '#F56C6C', //改变折线点的颜色
                  lineStyle: {
                    color: '#F56C6C' //改变折线颜色
                  }
                }
              },
              data: [740, 1450, 2157, 2900, 3677, 4394, 5105, 5898, 6671, 7382, 8141, 8881, 9600, 10300, 11080, 11852, 12620, 13324, 14067, 14803, 15529, 16314, 17091, 17833, 18614, 19378, 20102, 20814, 21514, 22220, 22958, 23749, 24449, 25195, 25908, 26619, 27321, 28112, 28831, 29624, 30420, 31163, 31949, 32699, 33476, 34273, 34993, 35728, 36481]
            },
            {
              name: '水',
              type: 'line',
              smooth: true,
              itemStyle: {
                normal: {
                  color: '#606266', //改变折线点的颜色
                  lineStyle: {
                    color: '#606266' //改变折线颜色
                  }
                }
              },
              data: [673, 1326, 1959, 2560, 3172, 3777, 4469, 5141, 5781, 6394, 7007, 7685, 8311, 8934, 9613, 10258, 10913, 11557, 12166, 12856, 13465, 14103, 14771, 15390, 16032, 16641, 17256, 17884, 18557, 19193, 19845, 20502, 21137, 21811, 22461, 23147, 23802, 24466, 25076, 25695, 26353, 26969, 27587, 28251, 28870, 29488, 30170, 30792, 31481]
            },
            {
              name: '日报-油',
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
              data: [34.68, 67.6, 107.1, 146.64, 166.25, 206.61, 259.56, 294.78, 338.87, 351.82, 395, 434.52, 488.25, 517.92, 524.3, 565.29, 584.64, 626.22, 706.65, 680.64, 778.96, 757.44, 803.6, 834.2, 936, 897.6, 982.73, 990.78, 1030.59, 1135.05, 1121, 1155, 1170.12, 1254.6, 1263, 1287.99, 1392.56, 1343.58, 1352.64, 1417.08, 1463.22, 1542.24, 1496.71, 1625.34, 1678.56, 1695.38, 1730.4, 1715, 1803.53]
            },
            {
              name: '日报-气',
              type: 'line',
              smooth: true,
              itemStyle: {
                normal: {
                  color: 'red', //改变折线点的颜色
                  lineStyle: {
                    color: 'red' //改变折线颜色
                  }
                }
              },
              data: [740, 1479, 2264.85, 2987, 3529.92, 4218.24, 4900.8, 6015.96, 7004.55, 7012.9, 8141, 8525.76, 9792, 9785, 11080, 11970.52, 12746.2, 13190.76, 13504.32, 14803, 15063.13, 16640.28, 17091, 16941.35, 18055.58, 18409.1, 20906.08, 19773.3, 21514, 22886.6, 22498.84, 22799.04, 25182.47, 25446.95, 24871.68, 26885.19, 27047.79, 28955.36, 30272.55, 28439.04, 31941, 31474.63, 31310.02, 31718.03, 33810.76, 32559.35, 34643.07, 36799.84, 36845.81]
            },
            {
              name: '日报-水',
              type: 'line',
              smooth: true,
              itemStyle: {
                normal: {
                  color: '#303133', //改变折线点的颜色
                  lineStyle: {
                    color: '#303133' //改变折线颜色
                  }
                }
              },
              data: [639.35, 1326, 1861.05, 2508.8, 3203.72, 3701.46, 4603.07, 5295.23, 5607.57, 6330.06, 7287.28, 7915.55, 8394.11, 9291.36, 9709.13, 10360.58, 11240.39, 11672.57, 12044.34, 13370.24, 12926.4, 14244.03, 15509.55, 15082.2, 15551.04, 16141.77, 16393.2, 17705.16, 18742.57, 19001.07, 19051.2, 20707.02, 21982.48, 21592.89, 22011.78, 22684.06, 23325.96, 24955.32, 25828.28, 24410.25, 25825.94, 26429.62, 26207.65, 27685.98, 28581.3, 29488, 28963.2, 31099.92, 29906.95]
            }]
        });
        var option = {
          tooltip: {
            // a 系列名称  b  数据项名称  c  数值
            formatter: "{a} <br/>{c} {b}"
          },
          series: [
            {
              name: "精度",
              type: "gauge",
              // 定义居于上层，否则会被覆盖
              z: 3,
              min: 0,
              max: 100,
              // 分成多少等份
              splitNumber: 10,
              // 半径
              radius: '100%',
              axisLine: {
                lineStyle: {
                  width: 10,
                  color: [[0.1, 'green'], [0.2, 'yellow'],[0.3, 'orange'],[0.4,'#db555e'],[0.5,'#ba3779'],[1.1,'#881326'] ]
                }
              },
              axisTick: {
                // 坐标轴小标记
                length: 15, // 属性length控制线长
                lineStyle: {
                  // 属性lineStyle控制线条样式
                  color: "auto"
                }
              },
              splitLine: {
                // 分隔线
                length: 20, // 属性length控制线长
                lineStyle: {
                  // 属性lineStyle（详见lineStyle）控制线条样式
                  color: "auto"
                }
              },
              // 仪表盘内刻度提示显示样式
              axisLabel: {
                fontWeight:'bold',
                fontSize:10,
                color: '#0e0d0d',
              },
              // 仪表盘内 单位 样式 %
              title: {
                // 其余属性默认使用全局文本样式，详见TEXTSTYLE
                fontWeight: "bolder",
                fontSize: 12,
                // 文字倾斜样式
                fontStyle: "italic"
              },
              //
              detail: {
                // 其余属性默认使用全局文本样式，详见TEXTSTYLE
                // 设置内容提示格式
                formatter: function (value) {
                  return value;
                },
                // 内容文字粗细
                borderRadius: 5,
                fontSize:12,
                width: 40,
                color: 'white',
                rich: {}
              },
              // 当前的 值 和 单位
              data: [{ value: 40, name: "%" }]
            },
          ]
        };

        setInterval(function() {
          option.series[0].data[0].value = (Math.random() * 100).toFixed(2) - 0;
          myChart3.setOption(option, true);
          myChart4.setOption(option, true);
          myChart5.setOption(option, true);
        }, 2000);
      },
      goToRealTimeModel(){
        this.$router.push({ path:'/ProductionManagement/ProductionOptimization/VirtualMeasurementOnLine'})
      },
      handleSizeChange(val) {
        console.log(`每页 ${val} 条`);
      },
      handleCurrentChange(val) {
        console.log(`当前页: ${val}`);
      },
      handleClose(done) {
        this.$confirm('确认关闭？')
          .then(_ => {
            done();
          })
          .catch(_ => {});
      },
    },
  }
</script>

<style>
    .titleVM{
        font-size: 17px;
        font-family: "微软雅黑";
        color: #1f64f5;
        margin-top: 5px;
        margin-bottom: -10px;
    }
    .modelSelectZone{
        width: 1300px;
        margin-top: -15px;
    }
    .selectZone{
        width: 1300px;
        margin-top: 5px;
    }
    .selectZone .selectZoneTitle{
        font-size: 15px;
        font-family: "微软雅黑";
        margin-right: 10px;
    }
    .chartZone{
        margin-top: 5px;
    }

</style>
