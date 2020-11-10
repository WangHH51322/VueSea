<template>
    <!-- 主要内容 -->
    <div>
        <div>
            <span><i class="el-icon-s-data topMargin" style="width: 20px"></i>
        <h1 style="width: 200px; display: inline">海管分析</h1></span>
        </div>
        <div class="borderStyle"></div>
        <div style="padding: 10px 0 0 30px">
            <el-button size="small" type="primary" plain round>在线模式</el-button>
            <el-button size="small" type="primary" plain round>离线模式</el-button>
            <div style="margin-top: 15px">
                请选择：
                <el-select v-model="value1" placeholder="请选择">
                    <el-option
                            v-for="item in options1"
                            :key="item.value"
                            :label="item.label"
                            :value="item.value"
                    >
                    </el-option>
                </el-select>
                <el-select v-model="value2" placeholder="请选择">
                    <el-option
                            v-for="item in options2"
                            :key="item.value"
                            :label="item.label"
                            :value="item.value"
                    >
                    </el-option>
                </el-select>
                <el-select v-model="value3" placeholder="请选择">
                    <el-option
                            v-for="item in options3"
                            :key="item.value"
                            :label="item.label"
                            :value="item.value"
                    >
                    </el-option>
                </el-select>
                <el-select v-model="value4" placeholder="请选择">
                    <el-option
                            v-for="item in options4"
                            :key="item.value"
                            :label="item.label"
                            :value="item.value"
                    >
                    </el-option>
                </el-select>
            </div>
            <!-- charts -->

            <div style="margin-top: 10px">
                <el-row>
                    <el-col :span="16">
                        <!-- 里程-参数图 -->

                        <div style="height: 400px;margin-left:-40px">
                            <xcharts></xcharts>
                        </div>
                    </el-col>
                    <el-col :span="8" >
                        <!-- 右侧百分比仪表 -->
                        <div style="height: 400px;">
                            <proportion-board></proportion-board>
                        </div>
                    </el-col>
                </el-row>
            </div>
            <div>
                <el-row>
                    <el-col :span="16">
                        <!-- 里程-相分率图 -->
                        <div style="height: 200px; ">
                            <phase-fraction></phase-fraction>
                        </div>
                        <!-- 海管表格 -->
                        <div style="height: 200px;">
                            <pipe-list></pipe-list>
                        </div>
                    </el-col>
                    <el-col :span="8">
                        <!-- 流型参数 -->
                        <div style="height: 400px; ">
                            <flow-pattern></flow-pattern>
                        </div>
                    </el-col>
                </el-row>
            </div>
        </div>
    </div>
</template>

<script>
  import xcharts from '@/components/xcharts'
  import proportionBoard from '@/components/proportionBoard'
  import phaseFraction from '@/components/phaseFraction'
  import pipeList from '@/components/pipeList'
  import flowPattern from '@/components/flowPattern'
  export default {
    name: "AnalysisOfSubmarinePipeline",
    components: {
      'xcharts': xcharts,
      'proportion-board': proportionBoard,
      'phase-fraction': phaseFraction,
      'pipe-list': pipeList,
      'flow-pattern': flowPattern
    },
    data () {
      return {
        options1: [
          {
            value: '选项1',
            label: '秦皇岛32-6作业公司'
          }
        ],
        value1: '选项1',
        /** ************ */
        options2: [
          {
            value: '选项1',
            label: '作业区'
          },
          {
            value: '选项2',
            label: '油田群'
          },
          {
            value: '选项3',
            label: '区块'
          },
          {
            value: '选项4',
            label: '平台'
          }
        ],
        value2: '选项3',
        /** ******* */
        options3: [
          {
            value: '选项1',
            label: 'CEPI区块'
          },
          {
            value: '选项2',
            label: 'CEPJ区块'
          },
          {
            value: '选项3',
            label: 'FPSO区块'
          },
          {
            value: '选项4',
            label: '所有区块'
          }
        ],
        value3: '选项1',
        /** *********** */
        options4: [
          {
            value: '选项1',
            label: 'H-I'
          },
          {
            value: '选项2',
            label: 'J-H'
          }
        ],
        value4: '选项1'
      }
    },
    computed: {},
    created () {},
    mounted () {},
    watch: {},
    methods: {}

  }
</script>

<style>
    .topMargin {
        margin-top: 20px;
    }
    .borderStyle {
        height: 5px;
        border-bottom: 1px solid #dcdfe6;
    }
    .el-button {
        size: small;
    }
</style>

