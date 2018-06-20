import Vue from 'vue';
import VueRouter from 'vue-router';

import AppComponent from './components/app/app.component.vue';
import ProductListComponent from './components/product/product-list.component.vue';

Vue.use(VueRouter);

const routes = [
    { path: '/', component: ProductListComponent }
];

export default new VueRouter ({
    mode: 'history',
    routes: routes
});