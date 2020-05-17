import Vue from 'vue';
import VueRouter from 'vue-router';
import LoadingComponent from '../components/LoadingComponent';
import ErrorComponent from '../components/LoadingComponent';

Vue.use(VueRouter);

const lazyLoadView = ({component}) => {
  const AsyncHandler = () => ({
    component,
    loading: LoadingComponent,
    error: ErrorComponent,
    timeout: 3000,
  });

  return () =>
      Promise.resolve({
        functional: true,
        render(h, {data, children}) {
          return h(AsyncHandler, data, children);
        },
      });
};

const Home = lazyLoadView({
  component: import('../views/Home.vue'),
});
const Game = lazyLoadView({
  component: import('../views/Game.vue'),
});

const routes = [
  {
    path: '/',
    name: 'Home',
    component: Home,
  },
  {
    path: '/game',
    name: 'Game',
    component: Game,
  },
];

const router = new VueRouter({
  mode: 'history',
  base: process.env.BASE_URL,
  routes,
});

export default router;
