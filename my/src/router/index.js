import { createRouter, createWebHistory } from 'vue-router'
import Home from '../views/Home.vue'

const routes = [
  {
    path: '/',
    name: 'Home',
    component: Home
  },
  {
    path: '/article',
    name: 'Article',
    component: () => import(/* webpackChunkName: "about" */ '../views/Article.vue')
  },
  {
    path: '/article/:id',
    name: 'ArticleId',
    component: () => import('../views/ArticleId')
  },
  {
    path: '/message',
    name: 'Message',
    component: () => import(/* webpackChunkName: "about" */ '../views/Message.vue')
  },
  {
    path: '/link',
    name: 'Link',
    component: () => import(/* webpackChunkName: "about" */ '../views/Link.vue')
  },
  {
    path: '/about',
    name: 'About',
    component: () => import(/* webpackChunkName: "about" */ '../views/About.vue')
  },
  // 修改用户资料
  {
    path: '/userModify',
    name: 'UserModify',
    component: () => import(/* webpackChunkName: "about" */ '../views/UserModify.vue')
  }
]

const router = createRouter({
  history: createWebHistory(process.env.BASE_URL),
  routes
})

export default router
