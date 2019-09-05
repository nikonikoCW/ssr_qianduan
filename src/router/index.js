import Vue from 'vue'
import Router from 'vue-router'
import HelloWorld from '@/components/HelloWorld'
import Login from '@/components/Login'
import Home from '@/components/Home'
import User from '@/components/User'

Vue.use(Router)

export default new Router({
  // 加了这个可以去掉#
  mode: 'history',
  routes: [
    {
      path: '/',
      name: 'HelloWorld',
      component: HelloWorld
    },
    {
      path: '/login',
      name: 'Login',
      component: Login
    },
    {
      path: '/home',
      name: 'Home',
      component: Home,
      children: [
        {
          // 子域名不能/user会直接到根域名
          path: 'user',
          name: 'User',
          component: User
        }
      ]
    }
  ]
})
