import Vue from 'vue'
import VueRouter from 'vue-router'
import Main from '../views/Main.vue'
import Home from '../views/home/Home.vue'
import ProductionManagement from '../views/productionManagement/ProductionManagement.vue'
import ProductionOptimization from '../views/productionManagement/productionOptimization/ProductionOptimization.vue'
import VirtualMeasurementOnLine from '../views/productionManagement/productionOptimization/VIrtualMeasurement/VirtualMeasurementOnLine.vue'
import VirtualMeasurementOffLine from '../views/productionManagement/productionOptimization/VIrtualMeasurement/VirtualMeasurementOffLine.vue'
import AnalysisOfSubmarinePipeline from '../views/productionManagement/productionOptimization/AnalysisOfSubmarinePipeline.vue'
import ProductionOverview from '../views/productionManagement/productionOptimization/ProductionOverview.vue'
import RemoteMonitoring from '../views/remoteMonitoring/RemoteMonitoring.vue'
import PlatformProcessAnalysisOnLine from "../views/productionManagement/productionOptimization/platformTechnology/PlatformProcessAnalysis/PlatformProcessAnalysisOnLine.vue"
import PlatformProcessAnalysisOffLine from "../views/productionManagement/productionOptimization/platformTechnology/PlatformProcessAnalysis/PlatformProcessAnalysisOffLine.vue"
import SeparatorAnalysis from "../views/productionManagement/productionOptimization/platformTechnology/SeparatorAnalysis/SeparatorAnalysis.vue";
import SeparatorAnalysisOnline from "../views/productionManagement/productionOptimization/platformTechnology/SeparatorAnalysis/SeparatorAnalysisOnline.vue";
import SeparatorAnalysisOffline from "../views/productionManagement/productionOptimization/platformTechnology/SeparatorAnalysis/SeparatorAnalysisOffline.vue";


const originalPush = VueRouter.prototype.push
VueRouter.prototype.push = function push(location) {
  return originalPush.call(this, location).catch(err => err)
}

Vue.use(VueRouter)

const routes = [
  {
    path: '/',
    name:'Main',
    component: Main,
    redirect: '/home',
    // meta: {title: '导航', breadNumber: 1},
    children: [
      {
        path: '/home',
        name: 'Home',
        component: Home,
        meta: {title: '首页', breadNumber:2, toPath: '/home'},
      },
      {
        path: '/ProductionManagement',
        name: '生产管理',
        component: ProductionManagement,
        redirect: '/ProductionManagement/ProductionOptimization',
        meta:{title:'生产管理',breadNumber:2,toPath:'/ProductionManagement'},
        children:[
          {
            path: 'ProductionOptimization',
            name: '生产优化',
            component: ProductionOptimization,
            redirect: '/ProductionManagement/ProductionOptimization/ProductionOverview',
            meta:{title:'生产优化',breadNumber:3,toPath:'/ProductionManagement/ProductionOptimization'},
            children:[
              {
                path: 'ProductionOverview',
                name: '生产概览',
                component: ProductionOverview,
                meta:{title:'生产概览',breadNumber:4,toPath:'/ProductionManagement/ProductionOptimization/ProductionOverview'}
              },
              {
                path: 'AnalysisOfSubmarinePipeline',
                name: '海管分析',
                component: AnalysisOfSubmarinePipeline,
                meta:{title:'海管分析',breadNumber:4,toPath:'/ProductionManagement/ProductionOptimization/AnalysisOfSubmarinePipeline'}
              },
              {
                path: 'VirtualMeasurementOnLine',
                name: '虚拟计量',
                component: VirtualMeasurementOnLine,
                meta:{title:'虚拟计量',breadNumber:4,toPath:'/ProductionManagement/ProductionOptimization/VirtualMeasurementOnLine'}
              },
              {
                path: 'VirtualMeasurementOffLine',
                name: '虚拟计量',
                component: VirtualMeasurementOffLine,
                meta:{title:'虚拟计量',breadNumber:4,toPath:'/ProductionManagement/ProductionOptimization/VirtualMeasurementOnLine'}
              },
              {
                path: 'PlatformProcessAnalysisOnLine',
                name: '平台工艺',
                component: PlatformProcessAnalysisOnLine,
                meta:{title:'平台工艺',breadNumber:4,toPath:'/ProductionManagement/ProductionOptimization/PlatformProcessAnalysisOnLine'},
              },
              {
                path: 'PlatformProcessAnalysisOffLine',
                name: '平台工艺',
                component: PlatformProcessAnalysisOffLine,
                meta:{title:'平台工艺',breadNumber:4,toPath:'/ProductionManagement/ProductionOptimization/PlatformProcessAnalysisOnLine'},
              },
              {
                path: 'SeparatorAnalysis',
                name: '平台工艺-分离器分析',
                component: SeparatorAnalysis,
                meta:{title:'平台工艺-分离器分析',breadNumber:4,toPath:'/ProductionManagement/ProductionOptimization/SeparatorAnalysis'},
                children:[{
                  path: 'SeparatorAnalysisOnline',
                  name: '分离器分析在线模式',
                  component: SeparatorAnalysisOnline,
                  meta:{title:'分离器分析在线模式',breadNumber:5,toPath:'/ProductionManagement/ProductionOptimization/SeparatorAnalysis/SeparatorAnalysisOnline'}
                },{
                  path: 'SeparatorAnalysisOffline',
                  name: '分离器分析离线模式',
                  component: SeparatorAnalysisOffline,
                  meta:{title:'分离器分析离线模式',breadNumber:5,toPath:'/ProductionManagement/ProductionOptimization/SeparatorAnalysis/SeparatorAnalysisOffline'}
                }]
              },
            ]
          }
        ]
      },
      {
        path: '/RemoteMonitoring',
        name: '远程监控',
        component: RemoteMonitoring,
        meta:{title:'远程监控',breadNumber:2,toPath:'/RemoteMonitoring'},
      }
    ]
  },
]

const router = new VueRouter({
  routes
})

export default router
