import Vue from 'vue';
import Vuex from 'vuex';

import label from './modules/label';
import issue from './modules/issue';

import getters from './getters';

Vue.use(Vuex);

export default new Vuex.Store({
	modules: { label, issue },
	getters,
});
