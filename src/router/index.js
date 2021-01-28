import Vue from 'vue';
import router from 'vue-router';
import routes from '@/router/routes';

Vue.use(Router);

const router = new Router({
  mode: 'history',
  routes,
});

export default router;