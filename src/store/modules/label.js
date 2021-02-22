import { listLabel } from '@/apis/index';
const state = {
	origin: [],
	list: [],
	ignore: [
		{ id: 2756909428, node_id: 'MDU6TGFiZWwyNzU2OTA5NDI4' },
		{ id: 2756909430, node_id: 'MDU6TGFiZWwyNzU2OTA5NDMw' },
		{ id: 2756909432, node_id: 'MDU6TGFiZWwyNzU2OTA5NDMy' },
		{ id: 2756909434, node_id: 'MDU6TGFiZWwyNzU2OTA5NDM0' },
		{ id: 2756909438, node_id: 'MDU6TGFiZWwyNzU2OTA5NDM4' },
		{ id: 2756909436, node_id: 'MDU6TGFiZWwyNzU2OTA5NDM2' },
		{ id: 2756909440, node_id: 'MDU6TGFiZWwyNzU2OTA5NDQw' },
		{ id: 2756909442, node_id: 'MDU6TGFiZWwyNzU2OTA5NDQy' },
		{ id: 2756909444, node_id: 'MDU6TGFiZWwyNzU2OTA5NDQ0' },
	],
};

const mutations = {
	SET_ORIGIN: (state, origin) => {
		state.origin = origin;
	},
	SET_LIST: (state, list) => {
		state.list = list;
	},
};

const actions = {
	getList({ state, commit }) {
		listLabel().then((res) => {
			// console.log(res);
			const ignore_id = state.ignore.map((v) => v.id);
			// console.log(ignore_id);
			let list = res.filter((v) => !ignore_id.includes(v.id));
			list = list.map((v) => {
				let config = v.description.split(';');
				config = config.reduce((total, value) => {
					if (value == '') {
						return total;
					}
					let spt = value.split('=');
					total[spt[0]] = spt[1];
					return total;
				}, {});
				// console.log(config);
				v.config = config;
				return v;
			});
			commit('SET_ORIGIN', list);
			// list.forEach((v) => {
			// 	console.log(v);
			// 	let spt = v.name.split('>>');
			// 	spt.forEach((vSub, iSub) => {});
			// });
			let _list = list.reduce((total, val) => {
				total = depth(val, total);
				return total;
			}, []);
			console.log(_list);
			commit('SET_LIST', _list);
		});
	},
};

export default {
	namespaced: true,
	state,
	mutations,
	actions,
};

const depth = (obj, parent) => {
	// const parent_names = parent.map((v) => v.name);
	console.log(obj);
	const name_spt = obj.name.split('>>');
	console.log(name_spt);
	parent.push(
		name_spt.reduceRight((total, value, index, array) => {
			if (index == array.length - 1) {
				return {
					...obj,
					name: value,
				};
			} else if (index == 0) {
				return {
					chilren: total,
					name: value,
				};
			} else {
				let _total = [];
				_total.push({
					name: value,
					children: total,
				});
				return _total;
			}
		}, [])
	);
	// if (!parent_names.includes(name_spt[name_spt.length - 1])) {
	// 	parent.push({
	// 		...obj,
	// 		name: name_spt[name_spt.length - 1],
	// 		children: [],
	// 	});
	// }
	return parent;
};

// const depthSub = () => {};
