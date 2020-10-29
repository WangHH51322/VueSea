<template>
    <div>
        <el-container>
            <el-header class="homeHeader">
                <el-col :span="15">
                    <div class="title">智能油田管理平台</div>
                </el-col>
                <el-col :span="2" >
                    <template slot="title">
                        <router-link to="/ProductionManagement">生产管理</router-link>
                    </template>
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
        font-size: 35px;
        font-family: "微软雅黑 Light";
        color: white;
    }
</style>