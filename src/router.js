import Vue from 'vue';
import Router from 'vue-router';


import HomeView from './components/views/HomeView';
import LoginView from '.components/views/LoginView.vue';

Vue.use(Router);

export default new Router({
  routes: [
    {
      path: './',
      name: 'home',
      component: HomeView
    },
    {
      path: '/about',
      name: 'about',
      component: LoginView
    }
  ]
});
