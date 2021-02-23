import axios from '@/plugins/axios';

import { mockLabel, mockIssue } from './../../mock/index';

const host = 'https://api.github.com';
const owner = 'langnang';
const repo = 'awesome';

export const listLabel = () => {
	if (process.env.NODE_ENV == 'development') {
		return new Promise((resolve) => resolve(mockLabel));
	}
	return axios({
		method: 'get',
		url: `${host}/repos/${owner}/${repo}/labels`,
	});
};

export const listIssue = (labels = '') => {
	if (process.env.NODE_ENV == 'development') {
		return new Promise((resolve) => resolve(mockIssue));
	}
	return axios({
		method: 'get',
		url: `${host}/repos/${owner}/${repo}/issues`,
		params: {
			state: 'closed',
			creator: 'langnang',
			labels,
		},
	});
};
