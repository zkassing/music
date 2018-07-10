import Vue from 'vue'
import Router from 'vue-router'
import Panel from '@/components/Panel'
import Sheet from '@/components/Sheet'
import Detail from '@/components/Detail'
Vue.use(Router)

export default new Router({
  routes: [
    {
      path: '/',
      component: Panel,
      redirect: '/sheet',
      children: [
        {
          path: 'sheet',
          component: Sheet
        }
      ]
    },
    {
      path: '/sheet/datail/:id',
      name: 'detail',
      component: Detail,
    }
  ]
})
