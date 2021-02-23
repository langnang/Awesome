const state = {
	isCollapse: false,
};

const mutations = {
	TOGGLE_SIDEBAR: (state) => {
		state.isCollapse = !state.isCollapse;
	},
	SET_LIST: (state, list) => {
		state.list = list;
	},
};

const actions = {
	toggleSidebar({ commit }) {
		commit('TOGGLE_SIDEBAR');
	},
	getList() {},
};

export default {
	namespaced: true,
	state,
	mutations,
	actions,
};
