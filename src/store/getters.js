const getters = {
	labels_list: (state) => state.label.list.sort(),
	labels_tree: (state) => state.label.tree,
	issues: (state) => state.issue.list,
};
export default getters;
