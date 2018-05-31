import Vue from 'vue'
import Router from 'vue-router'
import HelloWorld from '@/components/HelloWorld'
import he1 from '@/components/he1'
import he2 from '@/components/he2'
Vue.use(Router)

export default new Router({
  routes: [
    {
      path: '/',
      name: 'HelloWorld',
      component: HelloWorld,
      children:[
        { 
          path: '/he1', 
          name: 'he1', 
          component: he1 ,
        },
        { 
          path: '/he2', 
          name: 'he2', 
          component: he2 ,
        },
      ]
    }
  ]
})
