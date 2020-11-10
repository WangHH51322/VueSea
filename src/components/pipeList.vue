<!-- 海管列表 -->
<template>
  <div>
    <div style="float: right">
      Search:
      <el-input
        v-model="searchItem"
        size="small"
        style="width: 180px"
      ></el-input>
    </div>
    <el-table
      size="small"
      fit
      :data="tableData"
      style="width: 100%"
      :default-sort="{ prop: 'pipeNum', order: 'descending' }"
      stripe
      :header-cell-style="headerCellStyle"
      :cell-style="cellStyle"
    >
      <el-table-column prop="pipeNum" label="海管" sortable> </el-table-column>
      <el-table-column prop="startPressure" label="起点压力  kPa" sortable width="70">
      </el-table-column>
      <el-table-column prop="startTemperature" label="起点温度 ℃" sortable>
      </el-table-column>
      <el-table-column prop="endPressure" label="终点压力 kPa" sortable width="70">
      </el-table-column>
      <el-table-column prop="endTemperature" label="终点温度 ℃" sortable>
      </el-table-column>
      <el-table-column prop="oilQuantity" label="输油量m3/d" sortable width="70">
      </el-table-column>
      <el-table-column prop="gasQuantity" label="输气量m3/d" sortable width="70">
      </el-table-column>
      <el-table-column prop="waterQuantity" label="输水量 m3/d" sortable width="70">
      </el-table-column>
      <el-table-column prop="liquidQuantity" label="输液量 m3/d" sortable width="70">
      </el-table-column>
      <el-table-column prop="designQuantity" label="设计输量 m3/d" sortable>
      </el-table-column>
      <el-table-column prop="remainQuantity" label="海管余量 m3/d" sortable>
      </el-table-column>
      <el-table-column prop="designTemperature" label="设计温度 ℃" sortable>
      </el-table-column>
      <el-table-column prop="designPressure" label="设计压力 MPa" sortable>
      </el-table-column>
    </el-table>

    <div style="display: flex; align-items: center; width: auto">
      <div>show entries</div>

      <el-pagination
        @size-change="handleSizeChange"
        @current-change="handleCurrentChange"
        :current-page.sync="currentPage2"
        :page-sizes="[100, 200, 300, 400]"
        :page-size="100"
        layout="sizes, prev, pager, next"
        :total="1000"
      >
      </el-pagination>
    </div>
  </div>
</template>

<script>
export default {
  data () {
    return {
      searchItem: null,
      currentPage2: 5,
      tableData: [
        {
          pipeNum: 'H-I',
          startPressure: 1569,
          startTemperature: 62.5,
          endPressure: 1323,
          endTemperature: 61.7,
          oilQuantity: 10858.64,
          gasQuantity: 884.2,
          waterQuantity: 35759.4,
          liquidQuantity: 11742.9,
          designQuantity: 15375,
          remainQuantity: 3632.0,
          designTemperature: 70,
          designPressure: 2.051
        },
        {
          pipeNum: 'J-F',
          startPressure: 809,
          startTemperature: 63.2,
          endPressure: 711,
          endTemperature: 65.4,
          oilQuantity: 3227.93,
          gasQuantity: 2468.65,
          waterQuantity: 16665.3,
          liquidQuantity: 5696.59,
          designQuantity: 10900,
          remainQuantity: 5203.4,
          designTemperature: 71,
          designPressure: 1.351
        }
      ]
    }
  },
  methods: {
    headerCellStyle () {
      return 'color:black; font-size:12px;width:auto'
    },
    // 每个小表格css
    cellStyle () {
      return 'color:black; font-size:12px;width:auto '
    },
    handleSizeChange (val) {
      console.log(`每页 ${val} 条`)
    },
    handleCurrentChange (val) {
      console.log(`当前页: ${val}`)
    }
  },
  // 生命周期 - 创建完成（访问当前this实例）
  created () {},
  // 生命周期 - 挂载完成（访问DOM元素）
  mounted () {}
}
</script>
<style scoped>
/* @import url(); 引入css类 */
</style>
