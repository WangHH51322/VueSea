<template>
    <div>
        <el-container>
            <el-header class="homeHeader">
                <div class="title">智能油田管理平台</div>
            </el-header>
            <el-container>
                <el-aside width="200px">
                    <el-tree :data="data" :props="defaultProps" @node-click="handleNodeClick"></el-tree>
                </el-aside>
                <el-container>
                    <el-main>Main</el-main>
                </el-container>
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
        console.log(data);
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