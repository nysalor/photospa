import Vue from 'vue'
import Router from 'vue-router'
import Albums from '@/components/Album'

Vue.use(Router)

export default new Router({
  routes: [
    {       
      path: '/albums/:id',
      name: 'Album',
      component: Album
    }
  ]
})
