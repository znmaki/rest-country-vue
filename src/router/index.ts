import { createRouter, createWebHistory } from 'vue-router'

import CountryLayout from '@/countries/layout/CountryLayout.vue'
import ListPage from '@/countries/pages/ListPage.vue'
import CountryPage from '@/countries/pages/CountryPage.vue'

const router = createRouter({
  history: createWebHistory(import.meta.env.BASE_URL),
  routes: [
    {
      path: '/',
      redirect: '/countries'
    },
    {
      path: '/countries',
      name: 'countries',
      component: CountryLayout,
      redirect: { name: 'list' },
      children: [
        { path: 'list', name: 'list', component: ListPage },
        { path: '/countries/:cca2', name: 'country-cca2', component: CountryPage }
      ]
    }
  ]
})

export default router
