import Vue from 'vue'
import Router from 'vue-router'

Vue.use(Router)

export default new Router({
  mode:'history',
  routes: [
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
      import ('../components/Nav/Classify.vue'),
      redirect:"/classify/city",
      children:[{
        path:'city',
        component: () =>
        import ('../components/Nav/Classify/City.vue')
      },
    ]
    }
  ]
})
