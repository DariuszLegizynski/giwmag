import { createRouter, createWebHistory } from 'vue-router'
import Home from '@/views/Home.vue'

const routes = [
  {
    path: '/',
    redirect: '/home'
  },
  {
    path: '/home',
    name: 'Home',
    component: Home
  },
  {
    path: '/about',
    name: 'About',
    component: () => import('@/views/About.vue')
  },
  {
    path: '/offer',
    name: 'Offer',
    component: () => import('@/views/Offer.vue')
  },
  {
    path: '/offer/productList/:id/',
    name: 'productList',
    component: () => import('@/views/ProductList.vue')
  },
  {
    path: '/offer/product/:id/',
    name: 'product',
    component: () => import('@/views/Product.vue')
  }
]

const router = createRouter({
  history: createWebHistory(process.env.BASE_URL),
  routes,
  scrollBehavior(to) {
    if (to.hash) {
      return {
        el: to.hash
      }
    }
    return { top: 0, left: 0 }
  }
})

export default router
