<template>
    <div>
        <el-container>
            <el-card class="box-card" shadow="always" style="width: 200px;height: 650px;" :body-style="{ padding: '5px' }">
                <el-aside width="100px">
                    <el-tree :data="data" :props="defaultProps" @node-click="handleNodeClick"></el-tree>
                </el-aside>
            </el-card>
            <el-container>
                <el-main style="padding: 10px">
                    <el-breadcrumb class="app-breadcrumb" separator="/">
                        <transition-group name="breadcrumb">
                            <el-breadcrumb-item v-for="(item,index) in levelList" v-if="item.meta.title" :key="item.path">
                            <span v-if="item.redirect === 'noredirect' || index==levelList.length - 1" class="no-redirect">
                                {{item.meta.title}}
                            </span>
                                <router-link v-else :to="item.redirect||item.path">{{item.meta.title}}</router-link>
                            </el-breadcrumb-item>
                        </transition-group>
                    </el-breadcrumb>
                    <router-view></router-view>
                </el-main>
            </el-container>
        </el-container>
    </div>
</template>

<script>

  export default {
    name: "ProductionManagement",
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
        },
        levelList : null
      };
    },
    watch:{
      $route(){
        this.getBreadcrumb()
      }
    },
    created() {
      this.getBreadcrumb()
    },
    methods: {
      handleNodeClick(data) {
        if (data.label == '虚拟计量'){
          this.$router.push({ path:'/ProductionManagement/ProductionOptimization/VirtualMeasurementOnLine'})
        }else if (data.label == '生产概览'){
          this.$router.push({ path:'/ProductionManagement/ProductionOptimization/ProductionOverview'})
        }else if (data.label == '生产优化'){
          this.$router.push({ path:'/ProductionManagement/ProductionOptimization'})
        }else if (data.label == '平台工艺'){
          this.$router.push({ path:'/ProductionManagement/ProductionOptimization/PlatformProcessAnalysisOnLine'})
        }else if (data.label == '海管分析'){
          this.$router.push({ path:'/ProductionManagement/ProductionOptimization/AnalysisOfSubmarinePipeline'})
        }
        console.log(data.label);
      },

      getBreadcrumb(){
        let matched = this.$route.matched.filter(item => item.name)
        console.log(matched)
        // const first = matched[0]
        // if (first && first.name !== 'home') {
        //   matched = [{ path: '/home', meta: { title: "首页" } }].concat(matched);
        // }
        console.log(matched)
        this.levelList = matched;
      }
    }
  }
</script>

<style>

</style>
