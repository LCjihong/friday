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
          path: 'city',
          component: () => import('@/components/Home/Nav/Classify/City/City')
        },
        {
          path: 'classify',
          component: () => import('@/components/Home/Nav/Classify'),
          children: [
          {
            path: 'friday',
            component: () => import('@/components/Home/Nav/Classify/Friday/Friday.vue')
          },
          {
            path:'nav',
            component: () =>
            import ('../components/Home/Nav/Classify/Nav.vue')
          },
          {
            path:'newreigistrat',
            component: () =>
            import ('../components/Home/Nav/Classify/NewRegistration/NewRegistration.vue')
          },
            {
              path: 'merchant',
              component: () => import('@/components/Home/Nav/Classify/Merchant/Merchant')
            }
          ]
        },
        {
          path: 'pointsm',
          component: () => import('@/components/Home/Nav/Classify/Pointsm.vue')
        },
        {
          path: 'city',
          component: () => import('@/components/Home/Nav/Classify/City/City')
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
              path: 'personaldata',
              component: () => import('@/components/Home/Personal/MyAccount/PersonalData')
            },
            {
              path: 'mybill',
              component: () => import('@/components/Home/Personal/MyAccount/MyBill')
            },
            {
              path: 'rechargecard',
              component: () => import('@/components/Home/Personal/MyAccount/RechargeCard')
            },
            {
              path: 'morder',
              component: () => import('@/components/Home/Personal/MyOrder/MyOrder')
            },
            {
              path: 'orderaeta',
              component: () => import('@/components/Home/Personal/MyOrder/OrderDetails')
            },
            {
              path: 'mybonuspoints',
              component: () => import('@/components/Home/Personal/MyBonuspoints/MyIntegral')
            },
            {
              // src\components\Home\Personal\IntegraIorder\IntegralOrder.vue
              path: 'integralorder',
              component: () => import('@/components/Home/Personal/IntegraIorder/IntegralOrder')
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
              path: 'original',
              component: () => import('@/components/Home/Personal/MyData/Original')
            },
            {
              path: 'newphone',
              component: () => import('@/components/Home/Personal/MyData/Newphone')
            },
            {
              path: 'bindingsuc',
              component: () => import('@/components/Home/Personal/MyData/BindingSuc')
            },
            {
              path: 'bindingphone',
              component: () => import('@/components/Home/Personal/MyData/BindingPhone')
            },
            {
              path: 'maddr',
              component: () => import('@/components/Home/Personal/MyAddr/MyAddr'),
            },
            {
              path: 'addmesg',
              component: () => import('@/components/Home/Personal/MyAddr/AddMesg')
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
      path: '/cart',
      component: () => import('@/components/Home/Shopptro/Shopptro')
    },
    {
      path: '/confirmaor',
      component: () => import('@/components/Home/Shopptro/confirmaor'),
      redirect:'/confirmaor/addsite',
      children:[
        {
          path: 'addsite',
          component: () => import('@/components/Home/Shopptro/AddSite')
        },
        {
          path: 'newaddress',
          component: () => import('@/components/Home/Shopptro/NewAddress')
        }
      ]
    },
    {
      path: '/shoppnull',
      component: () => import('@/components/Home/Shopptro/ShoppNull')
    },
    {
      path: '/paymentsucce',
      component: () => import('@/components/Home/Shopptro/PaymentSucce')
    },
    {
      path: '/lr',
      name: 'LRhome',
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
    // {
    //   path:'/particulars',
    //   component: () =>
    //   import ('../components/Home/Nav/Pointsm/Particulars.vue')
    // },
    // {
    //   path:'/lineitem',
    //   component: () =>
    //   import ('../components/Home/Nav/Pointsm/Lineitem.vue')
    // },
    // {
    //   path:'/succeed',
    //   component: () =>
    //   import ('../components/Home/Nav/Pointsm/Succeed.vue')
    // },
    {
      path:'/mdata',
      component: () =>
      import ('../components/Home/Personal/MyData/MyData.vue')
    },
  ]
})
