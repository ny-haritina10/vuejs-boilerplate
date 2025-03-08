import { createRouter, createWebHistory } from 'vue-router';

import UserRegistration from '../examples/static/UserRegistration.vue';
import ProductList from '../examples/static/ProductList.vue';
import Dashboard from '../pages/Dashboard.vue';

const routes = [
  { path: '/', name: 'Dashboard', component: Dashboard },  
  { path: '/examples/static/form', name: 'UserRegistration', component: UserRegistration },
  { path: '/examples/static/list', name: 'ProductList', component: ProductList }
];

const router = createRouter({
  history: createWebHistory(),
  routes
});

export default router;