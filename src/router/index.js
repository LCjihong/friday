import Vue from 'vue'
import Router from 'vue-router'

Vue.use(Router)

export default new Router({
  mode:'history',
  routes: [
    {
<<<<<<< HEAD
      path: '/',
      name: 'welcome',
      component: () => import ('@/components/Home/Home')
    },
    {
      path: '/lr',
      name: 'home',
      component: () =>
        import('../components/LRhome.vue'),
      redirect: "/lr/login",
      children: [{
          path: 'login',
          component: () =>
            import('../components/logo/longin.vue')
        },
        {
          path: 'Register',
          component: () =>
            import('../components/logo/register.vue')
        }, {
          path: 'Vcaphone',
          component: () =>
            import('../components/logo/vcaofmPhone.vue')
        },
        {
          path: 'ForgetPwd',
          component: () =>
            import('../components/logo/ResetPassword.vue')
        }
      ]
=======
      path: '/lr',
      name: 'home',
      component: () =>
      import ('../components/LRhome.vue'),
      redirect:"/lr/login",
      children:[{
        path:'login',
        component: () =>
        import ('../components/logo/longin.vue')
      },
      {
        path:'Register',
        component: () =>
        import ('../components/logo/register.vue')
      },{
        path:'Vcaphone',
        component: () =>
        import ('../components/logo/vcaofmPhone.vue')
      },
      {
        path:'ForgetPwd',
        component: () =>
        import ('../components/logo/ResetPassword.vue')
      }
    ]
>>>>>>> b2169a6d7b61cfd0a13c77b0e99c1b98c25e8d46
    },
  ]
})
