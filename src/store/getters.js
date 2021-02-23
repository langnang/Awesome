const getters = {
	// app
	isCollapse: (state) => state.app.isCollapse,

	labels_list: (state) => state.label.list.sort((a, b) => (b.name + '').localeCompare(a.name + '')),
	labels_tree: (state) => state.label.tree,
	issues: (state) => state.issue.list,
};
export default getters;
