<template>
  <div>
<!--    标题-->
    <div class="title">
      <i class="el-icon-s-data"> 分离器分析</i>
    </div>
<!--    分割线-->
    <el-divider></el-divider>
    <el-row class="buttonZone">
      <el-col :span="24"> <div class="grid-content bg-purple-dark">
        <span>
          <el-button type="primary" @click="ToOnlineModle" round size="mini">在线模式</el-button>
          <el-button type="primary" @click="ToOfflineModle" round size="mini">离线模式</el-button>
        </span>
      </div>
      </el-col>
    </el-row>
    <div>
      <router-view></router-view>
    </div>
  </div>
</template>

<script>
export default {
  name: "SeparatorAnalysis",
  data(){
    return{

    }
  },
  methods:{
    ToOnlineModle(){
      this.$router.push('/ProductionManagement/ProductionOptimization/SeparatorAnalysis/SeparatorAnalysisOnline')
    },
    ToOfflineModle(){
      this.$router.push('/ProductionManagement/ProductionOptimization/SeparatorAnalysis/SeparatorAnalysisOffline')
    }
  }

}
</script>

<style scoped>
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
