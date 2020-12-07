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
          children: [{
              path: 'friday',
              component: () => import('@/components/Home/Nav/Classify/Friday/Friday.vue')
            },
            {
              path: 'nav',
              component: () =>
                import('../components/Home/Nav/Classify/Nav.vue')
            },
            {
              path: 'newreigistrat',
              component: () =>
                import('../components/Home/Nav/Classify/NewRegistration/NewRegistration.vue')
            },
            {
              path: 'merchant',
              component: () => import('@/components/Home/Nav/Classify/Merchant/Merchant')
            },
            {
              path: 'search/:keyword',
              component: () => import('@/components/Home/Nav/Classify/Search/Search')
            }
          ]
        },
        {
          path: 'pointsm',
          component: () => import('@/components/Home/Nav/Classify/Pointsm.vue')
        },
        {
          path: '/particulars',
          component: () =>
            import('@/components/Home/Nav/Classify/Pointsm/Particulars')
        },
        {
          path: 'city',
          component: () => import('@/components/Home/Nav/Classify/City/City')
        },
        {
          path: 'personal',
          component: () => import('@/components/Home/Personal/Personal'),
          redirect: '/personal/maccount',
          children: [{
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
              component: () => import('@/components/Home/Personal/MyOrder/MyOrder'),
              redirect:'/personal/morder/morder',
              children:[
                {
                  path: 'morder',
                  component: () => import('@/components/Home/Personal/MyOrder/OrderEmpty/MyOrder'),
                },
                {
                  path: 'morderone',
                  component: () => import('@/components/Home/Personal/MyOrder/OrderEmpty/MyOrderone'),
                },
                {
                  path: 'mordertwo',
                  component: () => import('@/components/Home/Personal/MyOrder/OrderEmpty/MyOrdertwo'),
                },
                {
                  path: 'morderthree',
                  component: () => import('@/components/Home/Personal/MyOrder/OrderEmpty/MyOrderthree'),
                },
                {
                  path: 'morderfour',
                  component: () => import('@/components/Home/Personal/MyOrder/OrderEmpty/MyOrderfour'),
                },
                {
                  path: 'morderfive',
                  component: () => import('@/components/Home/Personal/MyOrder/OrderEmpty/MyOrderfive'),
                },
                {
                  path: 'mordersix',
                  component: () => import('@/components/Home/Personal/MyOrder/OrderEmpty/MyOrdersix'),
                },
              ]
            },
            {
              path: 'orderevalua',
              component: () => import('@/components/Home/Personal/MyOrder/OrderEvaluate')
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
              path: 'integraldata',
              component: () => import('@/components/Home/Personal/MyBonuspoints/IntegralDetails')
            },
            {
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
              path: 'addr',
              component: () => import('@/components/Home/Personal/MyAddr/Addr'),
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
      path: '/commodata',
      name: 'CommDesc',
      component: () => import('@/components/Home/Nav/commodata')
    },
    {
      path: '/cart',
      component: () => import('@/components/Home/Shopptro/Shopptro')
    },
    {
      path: '/confirmaor',
      component: () => import('@/components/Home/Shopptro/confirmaor'),
      redirect: '/confirmaor/addsite',
      children: [{
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
      path: '/successsubmiss',
      name: 'SuccessSubmiss',
      component: () => import('@/components/Home/Shopptro/SuccessSubmiss')
    },
    {
      path: '/paymentsucce',
      name: 'PaySuccess',
      component: () => import('@/components/Home/Shopptro/PaymentSucce')
    },
    {
      path: '/lr',
      name: 'LRhome',
      component: () =>
        import('../components/LRhome.vue'),
      redirect: "/lr/login",
      children: [{
          path: 'login',
          component: () =>
            import('../components/Logo/Longin.vue')
        },
        {
          path: 'Register',
          component: () =>
            import('../components/Logo/Register.vue')
        }, {
          path: 'Vcaphone',
          component: () =>
            import('../components/Logo/VcaofmPhone.vue')
        },
        {
          path: 'ForgetPwd',
          component: () =>
            import('../components/Logo/ResetPassword.vue')
        }
      ]
    },
    {
      path:'/lineitem',
      component: () =>
      import ('../components/Home/Nav/Classify/Pointsm/Lineitem.vue')
    },
    {
      path:'/succeed',
      component: () =>
      import ('../components/Home/Nav/Classify/Pointsm/Succeed.vue')
    },
    {
      path: '/mdata',
      component: () =>
        import('../components/Home/Personal/MyData/MyData.vue')
    },
  ]
})
