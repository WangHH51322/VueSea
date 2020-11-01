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
                    <ve-line :data="lineChartData" width="400px" height="320px"></ve-line>
                </el-col>
                <el-col :span="8" style="height:300px">
                    <span style="display: flex;align-items: center;justify-content: center;margin-bottom: 5px">
                        单井累计产量分析
                    </span>
                    <ve-line :data="lineChartData" width="400px" height="320px"></ve-line>
                </el-col>
                <el-col :span="8" style="height:300px">
                    <ve-gauge :data="dashboardData" :settings="this.chartSettings" width="400px" height="320px"></ve-gauge>
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
                    :default-sort = "{prop: 'date', order: 'descending'}"
            >
                <el-table-column
                        prop="date"
                        label="日期"
                        sortable
                        width="180">
                </el-table-column>
                <el-table-column
                        prop="name"
                        label="姓名"
                        sortable
                        width="180">
                </el-table-column>
                <el-table-column
                        prop="address"
                        label="地址"
                        :formatter="formatter">
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
                    :total="100">
            </el-pagination>
        </div>
    </div>

</template>

<script>
  export default {
    name: "VirtualMeasurement",
    data(){
      this.chartSettings = {
        dataType: {
          '占比': 'percent'
        },
        seriesMap: {
          '占比': {
            min: 0,
            max: 1
          }
        }
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
        lineChartSettings:'',
        lineChartData: {
          columns: ['日期', '访问用户', '下单用户', '下单率'],
          rows: [
            { '日期': '1/1', '访问用户': 1393, '下单用户': 1093, '下单率': 0.32 },
            { '日期': '1/2', '访问用户': 3530, '下单用户': 3230, '下单率': 0.26 },
            { '日期': '1/3', '访问用户': 2923, '下单用户': 2623, '下单率': 0.76 },
            { '日期': '1/4', '访问用户': 1723, '下单用户': 1423, '下单率': 0.49 },
            { '日期': '1/5', '访问用户': 3792, '下单用户': 3492, '下单率': 0.323 },
            { '日期': '1/6', '访问用户': 4593, '下单用户': 4293, '下单率': 0.78 }
          ]
        },

        dashboardData: {
          columns: ['type', 'value'],
          rows: [
            { type: '占比', value: 0.8 }
          ]
        },

        tableData: [{
          date: '2016-05-02',
          name: '王小虎',
          address: '上海市普陀区金沙江路 1518 弄'
        }, {
          date: '2016-05-04',
          name: '王小虎',
          address: '上海市普陀区金沙江路 1517 弄'
        }, {
          date: '2016-05-01',
          name: '王小虎',
          address: '上海市普陀区金沙江路 1519 弄'
        }, {
          date: '2016-05-03',
          name: '王小虎',
          address: '上海市普陀区金沙江路 1516 弄'
        }],
        currentPage: 1,
      }
    },
    methods: {
      formatter(row, column) {
        return row.address;
      },
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