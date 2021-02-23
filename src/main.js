import Vue from 'vue';
import './plugins/fontawesome';
import './plugins/axios';
import './plugins/element.js';
import App from './App.vue';
import store from './store';
import './assets/style.scss';

Vue.config.productionTip = false;

new Vue({
	store,
	render: (h) => h(App),
}).$mount('#app');
