import Vue from 'vue'
import VueRouter from 'vue-router'
import Main from '../views/Main.vue'
import Home from '../views/home/Home.vue'
import ProductionManagement from '../views/productionManagement/ProductionManagement.vue'
import ProductionOptimization from '../views/productionManagement/productionOptimization/ProductionOptimization.vue'
import VirtualMeasurement from '../views/productionManagement/productionOptimization/VirtualMeasurement.vue'
import ProductionOverview from '../views/productionManagement/productionOptimization/ProductionOverview.vue'
import RemoteMonitoring from '../views/remoteMonitoring/RemoteMonitoring.vue'

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
                path: 'VirtualMeasurement',
                name: '虚拟计量',
                component: VirtualMeasurement,
                meta:{title:'虚拟计量',breadNumber:4,toPath:'/ProductionManagement/ProductionOptimization/VirtualMeasurement'}
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
