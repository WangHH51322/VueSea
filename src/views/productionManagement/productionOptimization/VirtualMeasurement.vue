<template>
    <div>
        <div class="titleVM">
            <i class="el-icon-s-data"> 虚拟计量</i>
        </div>
        <el-divider></el-divider>
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
        </div>
        <!--折线图-->
        <div class="chartZone">
            <el-row>
                <el-col :span="8" style="height:300px">
                    <span style="display: flex;align-items: center;justify-content: center;margin-bottom: 5px">
                        单井实时虚拟计量值
                    </span>
                    <ve-line :data="lineChartData1" :settings="this.lineChartSettings1" width="400px" height="320px"></ve-line>
                </el-col>
                <el-col :span="8" style="height:300px">
                    <span style="display: flex;align-items: center;justify-content: center;margin-bottom: 5px">
                        单井累计产量分析
                    </span>
                    <ve-line :data="lineChartData2" :settings="this.lineChartSettings2" width="450px" height="320px"></ve-line>
                </el-col>
                <el-col :span="8" style="height:300px">
                    <ve-gauge :data="dashboardData" :settings="this.dashboardSettings" width="400px" height="320px"></ve-gauge>
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
    </div>

</template>

<script>
  export default {
    name: "VirtualMeasurement",
    data(){
      /*折线图.表盘坐标轴设置*/
      this.dashboardSettings = {
        dataType: {
          '占比': 'percent'
        },
        seriesMap: {
          '占比': {
            min: 0,
            max: 1
          }
        }
      },
      this.lineChartSettings1 = {
        yAxisName: ['体积流量m³/d']
      },
      this.lineChartSettings2 = {
        yAxisName: ['体积流量m³/d']
      }

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

        /*折线图数据*/
        lineChartData1: {
          columns: ['时间', '油', '气', '水'],
          rows: [
            { '时间': '8:00', '油': 34, '气': 740, '水': 600 },
            { '时间': '8:30', '油': 36, '气': 701, '水': 673 },
            { '时间': '9:00', '油': 33, '气': 759, '水': 608 },
            { '时间': '9:30', '油': 34, '气': 703, '水': 672 },
            { '时间': '10:00', '油': 36, '气': 790, '水': 605 },
            { '时间': '10:30', '油': 33, '气': 707, '水': 669 },
            { '时间': '11:00', '油': 38, '气': 775, '水': 602 },
            { '时间': '11:30', '油': 31, '气': 705, '水': 662 },
            { '时间': '12:00', '油': 43, '气': 766, '水': 605 },
            { '时间': '12:30', '油': 33, '气': 706, '水': 675 },
            { '时间': '13:00', '油': 46, '气': 785, '水': 602 },
            { '时间': '13:30', '油': 36, '气': 715, '水': 682 },
            { '时间': '14:00', '油': 32, '气': 772, '水': 608 },
            { '时间': '14:30', '油': 42, '气': 702, '水': 678 },
            { '时间': '15:00', '油': 29, '气': 783, '水': 609 },
            { '时间': '15:30', '油': 39, '气': 703, '水': 689 },
            { '时间': '16:00', '油': 32, '气': 774, '水': 609 },
          ]
        },
        lineChartData2: {
          columns: ['时间', '油', '气', '水', '日报-油', '日报-气', '日报-水'],
          rows: [
            { '时间': '8:00', '油': 34, '气': 740, '水': 600 ,'日报-油': 34, '日报-气': 740, '日报-水': 600},
            { '时间': '8:30', '油': 70, '气': 1141, '水': 973 ,'日报-油': 74, '日报-气': 1480, '日报-水': 1273},
            { '时间': '9:00', '油': 103, '气': 2500, '水': 2181 ,'日报-油': 114, '日报-气': 2220, '日报-水': 1881},
            { '时间': '9:30', '油': 137, '气': 2603, '水': 2253 ,'日报-油': 154, '日报-气': 2960, '日报-水': 2553},
            { '时间': '10:00', '油': 173, '气': 3993, '水': 3458 ,'日报-油': 194, '日报-气': 3700, '日报-水': 3158},
            { '时间': '10:30', '油': 206, '气': 4100, '水': 3527 ,'日报-油': 234, '日报-气': 4400, '日报-水': 3827},
            { '时间': '11:00', '油': 244, '气': 5475, '水': 4729 ,'日报-油': 274, '日报-气': 5180, '日报-水': 4429},
            { '时间': '11:30', '油': 275, '气': 5580, '水': 4791 ,'日报-油': 314, '日报-气': 5900, '日报-水': 5091},
            { '时间': '12:00', '油': 318, '气': 6946, '水': 5996 ,'日报-油': 354, '日报-气': 6660, '日报-水': 5696},
            { '时间': '12:30', '油': 451, '气': 7052, '水': 6071 ,'日报-油': 394, '日报-气': 7400, '日报-水': 6371},
            { '时间': '13:00', '油': 497, '气': 8437, '水': 7273 ,'日报-油': 434, '日报-气': 8140, '日报-水': 6973},
            { '时间': '13:30', '油': 533, '气': 8552, '水': 7355 ,'日报-油': 474, '日报-气': 8880, '日报-水': 7655},
            { '时间': '14:00', '油': 565, '气': 9924, '水': 8563 ,'日报-油': 514, '日报-气': 9620, '日报-水': 8263},
            { '时间': '14:30', '油': 597, '气': 10526, '水': 8641 ,'日报-油': 554, '日报-气': 10360, '日报-水': 8941},
            { '时间': '15:00', '油': 616, '气': 10809, '水': 9850 ,'日报-油': 594, '日报-气': 11100, '日报-水': 9550},
            { '时间': '15:30', '油': 645, '气': 12100, '水': 9939 ,'日报-油': 634, '日报-气': 11840, '日报-水': 10239},
            { '时间': '16:00', '油': 677, '气': 12586, '水': 10848 ,'日报-油': 674, '日报-气': 12580, '日报-水': 10848},
          ]
        },
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
      }
    },
    methods: {
      handleSizeChange(val) {
        console.log(`每页 ${val} 条`);
      },
      handleCurrentChange(val) {
        console.log(`当前页: ${val}`);
      }
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
    .selectZone{
        width: 1300px;
        margin-top: -10px;
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