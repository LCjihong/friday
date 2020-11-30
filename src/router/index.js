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
        {
          path: 'classify',
          component: () => import('@/components/Home/Nav/Classify'),
          children: [{
            path: 'city',
            component: () => import('@/components/Home/Nav/Classify/City/City')
          },
          {
            path: 'friday',
            component: () => import('@/components/Home/Nav/Classify/Friday/Friday.vue')
          },
          ]
        },
        {
          path: 'personal',
          component: () => import('@/components/Home/Personal/Personal'),
          redirect:'/personal/maccount',
          children:[
            {
              path: 'maccount',
              component: () => import('@/components/Home/Personal/MyAccount/MyAccount')
            },
            {
              path: 'morder',
              component: () => import('@/components/Home/Personal/MyOrder/MyOrder')
            },
            {
              path: 'mwallet',
              component: () => import('@/components/Home/Personal/MyWallet/MyWallet')
            },
            {
              path: 'mdata',
              component: () => import('@/components/Home/Personal/MyData/MyData')
            },
            {
              path: 'maddr',
              component: () => import('@/components/Home/Personal/MyAddr/MyAddr')
            },
            {
              path: 'mfavorite',
              component: () => import('@/components/Home/Personal/MyFavorite/MyFavorite')
            },
            {
              path: 'mbrowse',
              component: () => import('@/components/Home/Personal/MyBrowse/MyBrowse')
            },
            {
              path: 'alertpwd',
              component: () => import('@/components/Home/Personal/AlertPwd/AlertPwd')
            },
            {
              path: 'mmessage',
              component: () => import('@/components/Home/Personal/MyMessage/MyMessage')
            },
            {
              path: 'mopinion',
              component: () => import('@/components/Home/Personal/MyOpinion/MyOpinion')
            }
          ]
        }
      ]
    },
    {
      path: '/lr',
      name: 'home',
      component: () => import('../components/LRhome.vue'),
      redirect: "/lr/login",
      children: [{
          path: 'login',
          component: () => import('../components/logo/longin.vue')
        },
        {
          path: 'Register',
          component: () => import('../components/logo/register.vue')
        }, {
          path: 'Vcaphone',
          component: () => import('../components/logo/vcaofmPhone.vue')
        },
        {
          path: 'ForgetPwd',
          component: () => import('../components/logo/ResetPassword.vue')
        }
      ]
    },
  ]
})
