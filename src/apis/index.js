import axios from '@/plugins/axios';

// const host = 'https://api.github.com';
const owner = 'langnang';
const repo = 'awesome';

export const listLabel = () => {
	return new Promise((resolve) => {
		resolve([
			{
				id: 2756931387,
				node_id: 'MDU6TGFiZWwyNzU2OTMxMzg3',
				url: 'https://api.github.com/repos/langnang/Awesome/labels/Mine',
				name: 'Mine',
				color: '153163',
				default: false,
				description: 'icon=el-icon-s-flag',
			},
			{
				id: 2756909428,
				node_id: 'MDU6TGFiZWwyNzU2OTA5NDI4',
				url: 'https://api.github.com/repos/langnang/Awesome/labels/bug',
				name: 'bug',
				color: 'd73a4a',
				default: true,
				description: "Something isn't working",
			},
			{
				id: 2756909430,
				node_id: 'MDU6TGFiZWwyNzU2OTA5NDMw',
				url: 'https://api.github.com/repos/langnang/Awesome/labels/documentation',
				name: 'documentation',
				color: '0075ca',
				default: true,
				description: 'Improvements or additions to documentation',
			},
			{
				id: 2756909432,
				node_id: 'MDU6TGFiZWwyNzU2OTA5NDMy',
				url: 'https://api.github.com/repos/langnang/Awesome/labels/duplicate',
				name: 'duplicate',
				color: 'cfd3d7',
				default: true,
				description: 'This issue or pull request already exists',
			},
			{
				id: 2756909434,
				node_id: 'MDU6TGFiZWwyNzU2OTA5NDM0',
				url: 'https://api.github.com/repos/langnang/Awesome/labels/enhancement',
				name: 'enhancement',
				color: 'a2eeef',
				default: true,
				description: 'New feature or request',
			},
			{
				id: 2756909438,
				node_id: 'MDU6TGFiZWwyNzU2OTA5NDM4',
				url: 'https://api.github.com/repos/langnang/Awesome/labels/good%20first%20issue',
				name: 'good first issue',
				color: '7057ff',
				default: true,
				description: 'Good for newcomers',
			},
			{
				id: 2756909436,
				node_id: 'MDU6TGFiZWwyNzU2OTA5NDM2',
				url: 'https://api.github.com/repos/langnang/Awesome/labels/help%20wanted',
				name: 'help wanted',
				color: '008672',
				default: true,
				description: 'Extra attention is needed',
			},
			{
				id: 2756909440,
				node_id: 'MDU6TGFiZWwyNzU2OTA5NDQw',
				url: 'https://api.github.com/repos/langnang/Awesome/labels/invalid',
				name: 'invalid',
				color: 'e4e669',
				default: true,
				description: "This doesn't seem right",
			},
			{
				id: 2756909442,
				node_id: 'MDU6TGFiZWwyNzU2OTA5NDQy',
				url: 'https://api.github.com/repos/langnang/Awesome/labels/question',
				name: 'question',
				color: 'd876e3',
				default: true,
				description: 'Further information is requested',
			},
			{
				id: 2756909444,
				node_id: 'MDU6TGFiZWwyNzU2OTA5NDQ0',
				url: 'https://api.github.com/repos/langnang/Awesome/labels/wontfix',
				name: 'wontfix',
				color: 'ffffff',
				default: true,
				description: 'This will not be worked on',
			},
			{
				id: 2756928050,
				node_id: 'MDU6TGFiZWwyNzU2OTI4MDUw',
				url: 'https://api.github.com/repos/langnang/Awesome/labels/%E5%BC%80%E5%8F%91%3E%3E%E5%89%8D%E7%AB%AF%3E%3ECSS',
				name: '开发>>前端>>CSS',
				color: 'fbca04',
				default: false,
				description: '',
			},
		]);
	});
	// return axios({
	// 	method: 'get',
	// 	url: `github-api/repos/${owner}/${repo}/labels`,
	// });
};

export const listIssue = () => {
	return axios({
		method: 'get',
		url: `github-api/repos/${owner}/${repo}/issues`,
		params: {
			state: 'closed',
			creator: 'langnang',
		},
	});
};
