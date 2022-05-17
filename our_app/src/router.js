import Vue from 'vue'
import Router from 'vue-router'
import Artists from './views/Artist.vue'
import ArtistDetails from './views/ArtistDetails.vue'

Vue.use(Router)

const router =  new Router({
  routes: [
    {
      path: '/',
      redirect: '/artists'
    },
    {
      path: '/artists',
      name: 'artists',
      component: Artists
    },
    {
      path: '/artistdetails/:id',
      name: 'artistdetails',
      component: ArtistDetails
    }
  ]
})
export default router
