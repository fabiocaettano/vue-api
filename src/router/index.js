import Vue from "vue";
import VueRouter from 'vue-router'
import Home from '../views/Home.vue'
import Create from '../views/Create.vue'
import Update from '../views/Update.vue'

Vue.use(VueRouter);

const routes = [
  {
    path: '/',
    name: 'home',
    component: Home
  },
  {
    path: '/create',
    name: 'create',
    component: Create
  },
  {
    path: '/alteraFaq/:id',
    name: 'update',
    component: Update
  }
]

const router = new VueRouter({  
  routes
})

export default router
