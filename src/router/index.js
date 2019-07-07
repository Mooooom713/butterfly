import Vue from 'vue'
import Router from 'vue-router'
import Package from '@/pages/Package/Package'
import Right from '@/pages/Right/Right'

Vue.use(Router)

export default new Router({
  routes: [
    {
      path: '/',
      name: 'Package',
      component: Package
    },
    {
      path: '/right',
      name: 'Right',
      component: Right
    }
  ]
})
