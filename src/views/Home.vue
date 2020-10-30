<template>
    <div>
        <el-container>
            <el-header class="homeHeader">
                <el-col :span="6">
                    <div class="title">智能油田管理平台</div>
                </el-col>
                <el-col :span="1.5" >
                    <el-button type="primary" round>首页</el-button>
                </el-col>
                <el-col :span="1.5" >
                    <el-button type="primary" round @click="$router.push({ path:'/RemoteMonitoring'})">远程监控</el-button>
                </el-col>
                <el-col :span="1.5" >
                    <el-button type="primary" round @click="$router.push({ path:'/ProductionManagement'})">生产管理</el-button>
                </el-col>
                <el-col :span="1.5" >
                    <el-button type="primary" round>油藏管理</el-button>
                </el-col>
                <el-col :span="1.5" >
                    <el-button type="primary" round>注采管理</el-button>
                </el-col>
                <el-col :span="1.5" >
                    <el-button type="primary" round>设备设施管理</el-button>
                </el-col>
                <el-col :span="1.5" >
                    <el-button type="primary" round>调度管理</el-button>
                </el-col>
                <el-col :span="1.5" >
                    <el-button type="primary" round>能耗管理</el-button>
                </el-col>
                <el-col :span="1.5" >
                    <el-button type="primary" round>安全管理</el-button>
                </el-col>
                <el-col :span="1.5" >
                    <el-button type="primary" round>报表管理</el-button>
                </el-col>
                <el-col :span="1">
                </el-col>
                <el-col :span="1">
                    <i class="el-icon-bell"></i>
                </el-col>
                <el-col :span="1" >
                    <i class="el-icon-picture-outline"></i>
                </el-col>
                <el-col :span="1" >
                    <i class="el-icon-switch-button"></i>
                </el-col>
            </el-header>
            <el-container>
                <router-view></router-view>
            </el-container>
        </el-container>
    </div>
</template>

<script>
  export default {

    name: "Home",

    data() {
      return {
        data: [{
          label: '生产优化',
          children: [{
            label: '生产概览',
          },{
            label: '虚拟计量',
          },{
            label: '海管分析',
          },{
            label: '平台工艺',
          }]
        }],
        defaultProps: {
          children: 'children',
          label: 'label'
        }
      };
    },
    methods: {
      handleNodeClick(data) {
        if (data.label == '虚拟计量'){
          this.$router.push({ path:'/VirtualMeasurement'})
        }else if (data.label == '生产优化'){
          this.$router.push({ path:'/ProductionOverview'})
        }
        console.log(data.label);
      }
    }
  };
</script>

<style>
.homeHeader{
    background-color: #0088ff;
    display: flex;
    align-items: center;
    justify-content: space-between;
    padding: 0px 15px;
    box-sizing: border-box;
    height: 80px;
}
    .homeHeader .title{
        font-size: 30px;
        font-family: "微软雅黑 Light";
        color: white;
    }
</style>