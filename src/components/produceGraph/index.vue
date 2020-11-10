<!--  -->
<template>
  <div>
    <div class="m_graph_container" tabindex>
      <div id="container" ref="container"  style="position:relative;width:2000px;height:400px;cursor:default;" >
    </div>
  </div>
  </div>
</template>

<script>
import mxgraph from "@/graph/index.js";
const {
  mxGraph,
  mxClient,
  mxCodec,
  mxUtils,
  mxConstants,
  mxPerimeter,
} = mxgraph;
import produceGraphFunctions from "@/components/produceGraph/produceGraphFunctions.js"
export default {
  data() {
    return {};
  },
  methods: {
    init() {
        produceGraphFunctions.main(this.$refs.container)
    },
  },
  //生命周期 - 创建完成（访问当前this实例）
  created() {},
  //生命周期 - 挂载完成（访问DOM元素）
  mounted() {
    this.init();
  },
};
</script>
<style lang="scss" scoped>
/* @import url(); 引入css类 */
.m_graph_container {
  position:absolute;

  height: 600px;
  overflow: hidden;
  cursor: default;

}
  #container {
    position: absolute;

    overflow: hidden;

    top: -30px;
    bottom: 0;
    cursor: pointer;
  }
</style>
