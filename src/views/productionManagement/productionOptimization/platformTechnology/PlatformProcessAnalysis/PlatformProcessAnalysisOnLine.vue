<template>
  <div>
    <!--    标题-->
    <div class="title">
      <i class="el-icon-s-data"> 平台工艺分析</i>
    </div>
    <!--    分割线-->
    <el-divider></el-divider>
    <el-row class="buttonZone">
      <el-col :span="24">
        <div class="grid-content bg-purple-dark">
          <span>
            <el-button type="primary" round size="mini">在线模式</el-button>
            <el-button @click="ToOfflineModle" round size="mini">离线模式</el-button>
          </span>
        </div>
      </el-col>
    </el-row>
    <el-row>
      <div>
        <!--    下拉框选择区域-->
        <div class="selectZone">
          <span class="selectZoneTitle">请选择:</span>
          <el-select v-model="value1" filterable placeholder="作业公司" size="mini" class="selectlist">
            <el-option
                    v-for="item in operatingCompany"
                    :key="item.value"
                    :label="item.label"
                    :value="item.value">
            </el-option>
          </el-select>
          <el-select v-model="value2" filterable placeholder="区域类型" size="mini" class="selectlist">
            <el-option
                    v-for="item in areaType"
                    :key="item.value"
                    :label="item.label"
                    :value="item.value">
            </el-option>
          </el-select>
          <el-select v-model="value3" filterable placeholder="区块名称" size="mini" class="selectlist">
            <el-option
                    v-for="item in blockName"
                    :key="item.value"
                    :label="item.label"
                    :value="item.value">
            </el-option>
          </el-select>
          <el-select v-model="value4" filterable placeholder="平台名称" size="mini" class="selectlist">
            <el-option
                    v-for="item in platformName"
                    :key="item.value"
                    :label="item.label"
                    :value="item.value">
            </el-option>
          </el-select>
        </div>

        <el-row class="AnalysisValue">
          <el-col :span=spannum>
            <el-card class="box-card">
              <el-row>
                <el-col :span="12">
                  <p>气相流速比</p>
                  <span class="AnalysisValueNum">{{AnalysisValue.GasVelocityRatio}}</span><span> %</span>
                </el-col>
                <el-col :span="12">
                  <div id="myChart" :style="{width: '80px', height: '80px'}"></div>
                </el-col>
              </el-row>
            </el-card>
          </el-col>

          <el-col :span=spannum>
            <el-card class="box-card">
              <el-row>
                <el-col :span="12">
                  <p>液相流速比</p>
                  <span class="AnalysisValueNum">{{AnalysisValue.LiquidVelocityRatio}}</span><span> %</span>
                </el-col>
                <el-col :span="12">
                  <div id="myChart1" :style="{width: '80px', height: '80px'}"></div>
                </el-col>
              </el-row>
            </el-card>
          </el-col>

          <el-col :span=spannum>
            <el-card class="box-card">
              <el-row>
                <el-col :span="12">
                  <p>停留时间比</p>
                  <span class="AnalysisValueNum">{{AnalysisValue.ResidenceTimeRatio}}</span><span> %</span>
                </el-col>
                <el-col :span="12">
                  <div id="myChart2" :style="{width: '80px', height: '80px'}"></div>
                </el-col>
              </el-row>
            </el-card>
          </el-col>

          <el-col :span=spannum>
            <el-card class="box-card">
              <el-row>
                <el-col :span="12">
                  <p>油相控制阀开度</p>
                  <span class="AnalysisValueNum">{{AnalysisValue.OilPhaseControlValveOpening}}</span><span> %</span>
                </el-col>
                <el-col :span="12">
                  <div id="myChart3" :style="{width: '80px', height: '80px'}"></div>
                </el-col>
              </el-row>
            </el-card>
          </el-col>

          <el-col :span=spannum>
            <el-card class="box-card">
              <el-row>
                <el-col :span="12">
                  <p>气相控制阀开度</p>
                  <span class="AnalysisValueNum">{{AnalysisValue.GasPhaseControlValveOpening}}</span><span> %</span>
                </el-col>
                <el-col :span="12">
                  <div id="myChart4" :style="{width: '80px', height: '80px'}"></div>
                </el-col>
              </el-row>
            </el-card>
          </el-col>

          <el-col :span=spannum>
            <el-card class="box-card">
              <el-row>
                <el-col :span="12">
                  <p>气相流速比</p>
                  <span class="AnalysisValueNum">{{AnalysisValue.WaterPhaseControlValveOpening}}</span><span> %</span>
                </el-col>
                <el-col :span="12">
                  <div id="myChart5" :style="{width: '80px', height: '80px'}"></div>
                </el-col>
              </el-row>
            </el-card>
          </el-col>
        </el-row>
        <el-row>
          <el-col :span="24">
            <el-image id="image" :src="require('@/assets/u364.png')" class="ImageZone" usemap="#image-map"></el-image>
            <map name="image-map" id="image-map">
              <area target="" shape="rect" alt="" title="" @click="ToSeparatorAnalysis" v-bind:coords="coords">
            </map>
          </el-col>
        </el-row>

      </div>
    </el-row>
  </div>
</template>

<script>
export default {
name: "PlatformProcessAnalysis",
  data(){
    return {
      //自适应
      w : 0,
      h : 0,
      w_img : 0,
      h_img : 0,
      x0: 0,
      y0: 0,
      x1: 0,
      y1: 0,
      coords : "0,0,300,300",
      timer:null,
      //数据分析的宽度
      spannum:4,
      //下拉框数据
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
          label: 'H-I'
        },
        {
          value: 2,
          label: 'J-F'
        },
      ],
      AnalysisValue: {
        GasVelocityRatio: 92,
        LiquidVelocityRatio: 90,
        ResidenceTimeRatio:100,
        OilPhaseControlValveOpening:45,
        GasPhaseControlValveOpening:60,
        WaterPhaseControlValveOpening:55
      }
    }
  },
  mounted(){
    this.drawLine();
    window.addEventListener("resize",this.PictureAdaptation,true);
  },
  methods: {
    PictureAdaptation(){
      let img=document.getElementById("image");
      this.w = img.offsetWidth;     // 返回元素的总宽度
      this.h = img.offsetHeight;     // 返回元素的总高度
      this.w_img = 1831;
      this.h_img = 934;
      this.x0=Math.round(this.w*395/this.w_img);
      this.y0=Math.round(this.w*165/this.w_img);
      this.x1=Math.round(this.w*686/this.w_img);
      this.y1=Math.round(this.w*354/this.w_img);
      this.coords = this.x0+","+this.y0+","+this.x1+","+this.y1;
      console.log("PictureAdaptation函数已运行")
    },
    ToSeparatorAnalysis(){
      this.$router.push('/ProductionManagement/ProductionOptimization/SeparatorAnalysis/SeparatorAnalysisOnline')
    },
    drawLine() {
      // 基于准备好的dom，初始化echarts实例
      let myChart = this.$echarts.init(document.getElementById('myChart'))
      let myChart1 = this.$echarts.init(document.getElementById('myChart1'))
      let myChart2 = this.$echarts.init(document.getElementById('myChart2'))
      let myChart3 = this.$echarts.init(document.getElementById('myChart3'))
      let myChart4 = this.$echarts.init(document.getElementById('myChart4'))
      let myChart5 = this.$echarts.init(document.getElementById('myChart5'))
      // 绘制图表
      myChart.setOption({
        series: [
          {
            name: '访问来源',
            type: 'pie',
            radius: ['50%', '70%'],
            avoidLabelOverlap: false,
            label: {
              show: false,
              position: 'center'
            },
            emphasis: {
              label: {
                show: true,
                fontSize: '14',
                fontWeight: 'bold'
              }
            },
            labelLine: {
              show: false
            },
            data: [
              {value: this.AnalysisValue.GasVelocityRatio,
                name: this.AnalysisValue.GasVelocityRatio},
              {value: 100-this.AnalysisValue.GasVelocityRatio,
                name: 100-this.AnalysisValue.GasVelocityRatio},
            ]
          }
        ]
      })

      myChart1.setOption({
        series: [
          {
            name: '访问来源',
            type: 'pie',
            radius: ['50%', '70%'],
            avoidLabelOverlap: false,
            label: {
              show: false,
              position: 'center'
            },
            emphasis: {
              label: {
                show: true,
                fontSize: '14',
                fontWeight: 'bold'
              }
            },
            labelLine: {
              show: false
            },
            data: [
              {value: this.AnalysisValue.LiquidVelocityRatio,
                name: this.AnalysisValue.LiquidVelocityRatio},
              {value: 100-this.AnalysisValue.LiquidVelocityRatio,
                name: 100-this.AnalysisValue.LiquidVelocityRatio},
            ]
          }
        ]
      })

      myChart2.setOption({
        series: [
          {
            name: '访问来源',
            type: 'pie',
            radius: ['50%', '70%'],
            avoidLabelOverlap: false,
            label: {
              show: false,
              position: 'center'
            },
            emphasis: {
              label: {
                show: true,
                fontSize: '14',
                fontWeight: 'bold'
              }
            },
            labelLine: {
              show: false
            },
            data: [
              {value: this.AnalysisValue.ResidenceTimeRatio,
                name: this.AnalysisValue.ResidenceTimeRatio},
              {value: 100-this.AnalysisValue.ResidenceTimeRatio,
                name: 100-this.AnalysisValue.ResidenceTimeRatio},
            ]
          }
        ]
      })

      myChart3.setOption({
        series: [
          {
            name: '访问来源',
            type: 'pie',
            radius: ['50%', '70%'],
            avoidLabelOverlap: false,
            label: {
              show: false,
              position: 'center'
            },
            emphasis: {
              label: {
                show: true,
                fontSize: '14',
                fontWeight: 'bold'
              }
            },
            labelLine: {
              show: false
            },
            data: [
              {value: this.AnalysisValue.OilPhaseControlValveOpening,
                name: this.AnalysisValue.OilPhaseControlValveOpening},
              {value: 100-this.AnalysisValue.OilPhaseControlValveOpening,
                name: 100-this.AnalysisValue.OilPhaseControlValveOpening},
            ]
          }
        ]
      })

      myChart4.setOption({
        series: [
          {
            name: '访问来源',
            type: 'pie',
            radius: ['50%', '70%'],
            avoidLabelOverlap: false,
            label: {
              show: false,
              position: 'center'
            },
            emphasis: {
              label: {
                show: true,
                fontSize: '14',
                fontWeight: 'bold'
              }
            },
            labelLine: {
              show: false
            },
            data: [
              {value: this.AnalysisValue.GasPhaseControlValveOpening,
                name: this.AnalysisValue.GasPhaseControlValveOpening},
              {value: 100-this.AnalysisValue.GasPhaseControlValveOpening,
                name: 100-this.AnalysisValue.GasPhaseControlValveOpening},
            ]
          }
        ]
      })

      myChart5.setOption({
        series: [
          {
            name: '访问来源',
            type: 'pie',
            radius: ['50%', '70%'],
            avoidLabelOverlap: false,
            label: {
              show: false,
              position: 'center'
            },
            emphasis: {
              label: {
                show: true,
                fontSize: '14',
                fontWeight: 'bold'
              }
            },
            labelLine: {
              show: false
            },
            data: [
              {value: this.AnalysisValue.WaterPhaseControlValveOpening,
                name: this.AnalysisValue.WaterPhaseControlValveOpening},
              {value: 100-this.AnalysisValue.WaterPhaseControlValveOpening,
                name: 100-this.AnalysisValue.WaterPhaseControlValveOpening},
            ]
          }
        ]
      })
    },
    ToOfflineModle(){
      this.$router.push('/ProductionManagement/ProductionOptimization/PlatformProcessAnalysisOffLine')
    }
  },
  created() {
    this.$nextTick(() => {
      // 在此处执行你要执行的函数
      this.PictureAdaptation();
      console.log("created函数已运行")
    });
  },

}
</script>

<style>
  .title{
    font-size: 17px;
    font-family: "微软雅黑";
    color: #1f64f5;
    margin-top: 5px;
    margin-bottom: -10px;
  }
  .buttonZone{
    margin-top: -10px;
  }
</style>
