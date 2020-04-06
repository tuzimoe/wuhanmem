import Vue from 'vue'
import Router from 'vue-router'
import Home from './views/Home.vue'
import Submit from './views/Submit.vue'

Vue.use(Router)
export default new Router({
  mode: 'history',
  routes: [
    {
      path: '/',
      name: 'Home',
      component: Home
    },
    {
      path: '/submit',
      name: 'Submit',
      component: Submit
    },
  ]
})
