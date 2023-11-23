import { createRouter, createWebHistory } from 'vue-router';
import DashBoard from '../components/DashBoard.vue';
import LogIn from '../components/LogIn.vue'
import SignUp from '../components/SignUp.vue'



const routes = [
    {
        path: '/',
        redirect: '/dashboard',
        name: 'Dash',
        component: {
            template: '<router-view/>',
        },
        children: [
          {
            path: 'dashboard',
            name: 'Dashboard',
            component: DashBoard
          }
        ]
      },

    {
        path: '/login',
        redirect: '/login',
        name: 'login',
        component: {
            template: '<router-view/>',
        },
        children: [
          {
            path: 'login',
            name: 'Login',
            component: LogIn
          }
        ]
      },

      {
        path: '/signup',
        redirect: '/signup',
        name: 'signup',
        component: {
            template: '<router-view/>',
        },
        children: [
          {
            path: 'signup',
            name: 'signup',
            component: SignUp
          }
        ]
      },

];

const router = createRouter({
  history: createWebHistory(),
  routes,
});

export default router;
