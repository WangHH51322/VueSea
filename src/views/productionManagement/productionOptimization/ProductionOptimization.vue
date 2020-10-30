<template>
    <div>
        <router-view></router-view>
    </div>
</template>

<script>
  export default {

    name: "ProductionOptimization",

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
        }else if (data.label == '生产概览'){
          this.$router.push({ path:'/ProductionOverview'})
        }else if (data.label == '生产优化'){
          this.$router.push({ path:'/ProductionOverview'})
        }
        console.log(data.label);
      }
    }
  };
</script>

<style scoped>

</style>