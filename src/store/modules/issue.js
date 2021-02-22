import { listIssue } from '@/apis/index';
import { iniToJSON } from '../../utils/iniToJSON';
const state = {
	list: [],
	ignore: [],
};

const mutations = {
	SET_LIST: (state, list) => {
		state.list = list;
	},
};

const actions = {
	getList({ commit }) {
		listIssue().then((res) => {
			let issues = res.map((v) => {
				return {
					node_id: v.node_id,
					title: v.title,
					params: iniToJSON(v.body),
				};
			});
			console.log(issues);
			commit('SET_LIST', issues);
		});
	},
};

export default {
	namespaced: true,
	state,
	mutations,
	actions,
};
