import Vue from 'vue'
import Router from 'vue-router'
import HelloWorld from '@/components/HelloWorld'
import Login from '@/components/Login'
import Home from '@/components/Home'
import User from '@/components/User'

Vue.use(Router)

const router = new Router({
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

router.beforeEach((to, from, next) => {
  if (to.path === '/login' || to.path === '/') {
    next()
  } else {
    let token = localStorage.getItem('Authorization')
    console.log(token)
    if (token === null || token === '') {
      console.log('1')
      next('/login')
    } else {
      console.log('2')
      next()
    }
  }
})
// router.beforeEach((to, from, next) => {
//   console.log(to.path)
//   if (to.path === '/') {
//     next()
//   } else {
//     console.log(to.path)
//     if (to.path === '/login') {
//       next()
//     } else {
//       let token = localStorage.getItem('Authorization')
//       console.log(token)
//       if (token === null || token === '') {
//         next('/login')
//       } else {
//         next()
//       }
//     }
//   }
// })

export default router
