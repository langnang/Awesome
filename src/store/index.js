import Vue from 'vue';
import Vuex from 'vuex';

import label from './modules/label';
import issue from './modules/issue';
import app from './modules/app';

import getters from './getters';

Vue.use(Vuex);

export default new Vuex.Store({
	modules: { app, label, issue },
	getters,
});
