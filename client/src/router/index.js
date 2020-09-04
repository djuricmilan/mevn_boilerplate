import Vue from 'vue';
import VueRouter from 'vue-router';
import VueRouterExample from '@/components/VueRouterExample';
/* you will need the following import when handling frontend navigation */
//import store from '../store';

Vue.use(VueRouter);

const router = new VueRouter({
  routes: [
    {
      name: 'VueRouterExample',
      path: '/vue/router/example',
      component: VueRouterExample
    }
  ]
});

router.beforeEach((to, from, next) => {
  /*
    implement specific logic for client-side routing
    for example, prevent navigation to login component if user is logged in
  */
  next();
});

export default router;