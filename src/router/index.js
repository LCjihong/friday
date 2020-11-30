import Vue from 'vue'
import Router from 'vue-router'

Vue.use(Router)

export default new Router({
  mode: 'history',
  routes: [{
      path: '/',
      name: 'welcome',
      component: () => import('@/components/Home/Home'),
      redirect: '/welcome',
      children: [{
          path: 'welcome',
          component: () => import('@/components/Home/Nav/Welcome')
        },
        // {
        //   path: 'classify',
        //   component: () => import('@/components/Nav/Classify'),
        //   children: [{
        //     path: 'city',
        //     component: () => import('@/components/Nav/Classify/City')
        //   }]
        // },
      ]
    },
    {
      path: '/lr',
      name: 'home',
      component: () =>
      import ('../components/LRhome.vue'),
      redirect:"/lr/login",
      children:[{
        path:'login',
        component: () =>
        import ('../components/logo/Longin.vue')
      },
      {
        path:'Register',
        component: () =>
        import ('../components/logo/Register.vue')
      },{
        path:'Vcaphone',
        component: () =>
        import ('../components/logo/VcaofmPhone.vue')
      },
      {
        path:'ForgetPwd',
        component: () =>
        import ('../components/logo/ResetPassword.vue')
      }
    ]
    },
    {
      path:'/classify',
      component: () =>
      import ('../components/Home/Nav/Classify.vue'),
      redirect:"/classify/nav",
      children:[{
        path:'nav',
        component: () =>
        import ('../components/Home/Nav/Classify/Nav.vue')
      },
    ]
    },
    {
      path:'/pointsm',
      component: () =>
      import ('../components/Home/Nav/Pointsm.vue'),
    },
    {
      path:'/particulars',
      component: () =>
      import ('../components/Home/Nav/Pointsm/Particulars.vue')
    },
    {
      path:'/lineitem',
      component: () =>
      import ('../components/Home/Nav/Pointsm/Lineitem.vue')
    },
    {
      path:'/succeed',
      component: () =>
      import ('../components/Home/Nav/Pointsm/Succeed.vue')
    },
    {
      path:'/mdata',
      component: () =>
      import ('../components/Home/Personal/Mdata/MyData.vue')
    },
  ]
})
