import './css/site.css';
import 'bootstrap';

import Vue from 'vue';

import AppComponent from './components/app/app.component.vue';
import Router from './router';
import GlobalFilter from './shared/global.filter';

Vue.use(GlobalFilter);

new Vue({
    el: '#app-root',
    router: Router,
    render: h => h(AppComponent)
});
