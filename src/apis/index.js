import axios from '@/plugins/axios';

import { mockLabel, mockIssue } from './../../mock/index';
import defaultSettings from './../settings';

export const listLabel = () => {
	if (process.env.NODE_ENV == 'development') {
		return new Promise((resolve) => resolve(mockLabel));
	}
	return axios({
		method: 'get',
		url: `${defaultSettings.host}/repos/${defaultSettings.owner}/${defaultSettings.repo}/labels`,
	});
};

export const listIssue = (labels = '') => {
	if (process.env.NODE_ENV == 'development') {
		return new Promise((resolve) => resolve(mockIssue));
	}
	return axios({
		method: 'get',
		url: `${defaultSettings.host}/repos/${defaultSettings.owner}/${defaultSettings.repo}/issues`,
		params: {
			state: 'closed',
			creator: 'langnang',
			labels,
		},
	});
};
