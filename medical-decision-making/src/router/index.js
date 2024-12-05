import { createRouter, createWebHashHistory } from 'vue-router';
import Home from '../views/Home.vue';
import condition1 from '../views/conditions/condition1.vue';
import condition2 from '../views/conditions/condition2.vue';
import condition3 from '../views/conditions/condition3.vue';

const routes = [
  { path: '/', name: 'Home', component: Home },
  { path: '/condition1', name: 'Condition1', component: condition1 },
  { path: '/condition2', name: 'Condition2', component: condition2 },
  { path: '/condition3', name: 'Condition3', component: condition3 },
];

const router = createRouter({
  history: createWebHashHistory(),
  routes,
});

export default router;
