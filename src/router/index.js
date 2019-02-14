import Vue from 'vue'
import Router from 'vue-router'
import Albums from '@/components/Albums'
import Album from '@/components/Album'

Vue.use(Router)

export default new Router({
  routes: [
    {
      path: '/',
      name: 'Albums',
      component: Albums
    },
    {
      path: '/albums/:albumId',
      name: 'Album',
      component: Album
    }
  ]
})
