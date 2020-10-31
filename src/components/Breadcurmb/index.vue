<template>
    <el-breadcrumb class="app-breadcrumb" separator="/">
        <transition-group name="breadcrumb">
            <el-breadcrumb-item v-for="(item,index) in levelList" v-if="item.meta.title" :key="item.path">
                <span v-if="item.redirect === 'noredirect' || index==levelList.length - 1" class="no-redirect">
                    {{item.meta.title}}
                </span>
            </el-breadcrumb-item>
        </transition-group>
    </el-breadcrumb>
</template>

<script>
  export default {
    name: "index",
    data(){
      return{
        levelList : null
      }
    },
    watch:{
      $route(){
        this.getBreadcrumb()
      }
    },
    created() {
      this.getBreadcrumb()
    },
    methods:{
      isHome(route) {
        return route.name === "home";
      },

      getBreadcrumb(){
        let matched = this.$route.matched.filter(item => item.name)
        console.log(matched)
        if (!this.isHome(matched[0])) {
          matched = [{ path: "/home", meta: { title: "首页" } }].concat(matched);
        }
        this.levelList = matched;
      }
    }
  }
</script>

<style scoped>

</style>