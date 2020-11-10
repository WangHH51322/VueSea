<!--  -->
<template>
  <div>
    <div id="mypic">
      <div class="topCard">
        <h4
          style="
            margin-block-start: 0;
            text-align: center;
            font-size: 1.6em;
            margin-block-end: 0.5em;
          "
        >
          流型参数
        </h4>
        <div style="text-align: center; font-size: 1.2em; padding: 2px">
          平均持液率：{{ holdRate }}
        </div>
        <div style="text-align: center; font-size: 1.2em">
          液塞长度：{{ slugLength }} 米
        </div>
        <div style="text-align: center; font-size: 1.2em; padding: 2px">
          液塞周期：{{ slugCycle }} 秒
        </div>
      </div>
    </div>
    <!-- <div class="demo-image">
      <div class="block">
        <el-image
          class="bottomImg"
          :lazy="true"
          style="width: 400px; height: 300px"
          :src="require('@/assets/liuxing.png')"
          :fit="fit"
        ></el-image>
      </div>
    </div> -->
  </div>
</template>

<script>
export default {
  data () {
    return {
      fits: ['fill'],
      holdRate: 0.8,
      slugLength: 33,
      slugCycle: 30
    }
  },
  // 生命周期 - 创建完成（访问当前this实例）
  created () {},
  // 生命周期 - 挂载完成（访问DOM元素）
  mounted () {}
}
</script>
<style scoped>
/* @import url(); 引入css类 */
#mypic {
    margin-top:30px;
  height: 300px;
  width: 400px;
  background: url("../assets/liuxing.png");
  background-size: 400px 300px;
}
.topCard {
  background-color: #fff;
  width: 180px;
  height: 125px;
  position: relative;
  top: 45px;
  left: 116px;
}
.bottomImg {
  margin-top: 0px;
  z-index: 1;
}
</style>
