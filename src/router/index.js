import Vue from 'vue'
import Router from 'vue-router'
const HelloWorld = () => import( '@/components/HelloWorld')
const he1 = () => import( '@/components/he1')
const he2 = () => import( '@/components/he2')

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
