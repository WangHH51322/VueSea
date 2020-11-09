import Vue from 'vue'
import App from './App.vue'
import router from './router/router'
import store from './store'
import ElementUI from 'element-ui';
import VCharts from 'v-charts'
import VeLine from 'v-charts/lib/line.common'
import 'element-ui/lib/theme-chalk/index.css';
import echarts from 'echarts'

Vue.config.productionTip = false
Vue.component(VeLine.name, VeLine)
Vue.use(ElementUI);
Vue.use(VCharts)
Vue.prototype.$echarts = echarts

new Vue({
  router,
  store,
  render: h => h(App)
}).$mount('#app')
