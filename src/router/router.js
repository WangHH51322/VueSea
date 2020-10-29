import Vue from 'vue'
import VueRouter from 'vue-router'
import Home from '../views/Home.vue'
import ProductionManagement from '../views/productionManagement/ProductionManagement.vue'
import ProductionOptimization from '../views/productionManagement/productionOptimization/ProductionOptimization.vue'
import VirtualMeasurement from '../views/productionManagement/productionOptimization/VirtualMeasurement.vue'
import ProductionOverview from '../views/productionManagement/productionOptimization/ProductionOverview.vue'

const originalPush = VueRouter.prototype.push
VueRouter.prototype.push = function push(location) {
  return originalPush.call(this, location).catch(err => err)
}

Vue.use(VueRouter)

const routes = [
  {
    path: '/',
    name: 'Home',
    component: Home,
    children:[
      {
        path: '/ProductionManagement',
        name: '生产管理',
        component: ProductionManagement,
        meta:{title:'生产管理',breadNumber:1,toPath:'/ProductionManagement'},
        children:[
          {
            path: '/ProductionOptimization',
            name: '生产优化',
            component: ProductionOptimization,
            meta:{title:'生产优化',breadNumber:2,toPath:'/ProductionOptimization'},
            children:[
              {
                path: '/VirtualMeasurement',
                name: '虚拟计量',
                component: VirtualMeasurement,
                meta:{title:'虚拟计量',breadNumber:3,toPath:'/VirtualMeasurement'}
              },{
                path: '/ProductionOverview',
                name: '生产概览',
                component: ProductionOverview,
                meta:{title:'生产概览',breadNumber:3,toPath:'/ProductionOverview'}
              },
            ]
          }
        ]
      }
    ]
  },
]

const router = new VueRouter({
  routes
})

export default router
