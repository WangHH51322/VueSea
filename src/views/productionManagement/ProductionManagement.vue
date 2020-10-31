<template>
    <div>
        <el-container>
            <el-aside width="200px">
                <el-tree :data="data" :props="defaultProps" @node-click="handleNodeClick"></el-tree>
            </el-aside>
            <el-container>
                <el-main>
<!--                    <crumbs></crumbs>-->
                    123
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

  import crumbs from "../crumbs/index.vue"
  export default {
    name: "ProductionManagement",
    components:{
      crumbs
    },

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
          this.$router.push({ path:'/ProductionManagement/ProductionOptimization/VirtualMeasurement'})
        }else if (data.label == '生产概览'){
          this.$router.push({ path:'/ProductionManagement/ProductionOptimization/ProductionOverview'})
        }else if (data.label == '生产优化'){
          this.$router.push({ path:'/ProductionManagement/ProductionOptimization'})
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

<style scoped>

</style>