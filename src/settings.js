let storage = window.localStorage.getItem('Awesome');
storage = JSON.parse(storage);

module.exports = {
	title: 'awesome',
	name: '',
	theme: 'default',
	isCollapse: false,
	host: 'https://api.github.com',
	owner: 'langnang',
	repo: 'Awesome',
	ignore_labels: [],
	labels: [],
	issues: [],
	...storage,
};
