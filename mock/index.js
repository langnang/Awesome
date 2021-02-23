import Mock from 'mockjs';

export const mockLabel = Mock.mock({
	'list|30': [
		{
			node_id: () => Mock.Random.guid(),
			name: () => {
				if (Math.random() < 0.25) {
					return Mock.Random.province(true).replace(/\s+/g, '>>');
				} else if (Math.random() < 0.5) {
					return Mock.Random.word().replace(/\s+/g, '>>');
				} else if (Math.random() < 0.75) {
					return Mock.Random.zip().replace(/\s+/g, '>>');
				} else {
					return Mock.Random.first().replace(/\s+/g, '>>');
				}
			},
			description: '{"icon":"el-icon-eleme"}',
		},
	],
}).list;

export const mockIssue = Mock.mock({
	'list|10': [
		{
			node_id: () => Mock.Random.guid(),
			title: () => Mock.Random.cname(),
			body: () => {
				const desc = Mock.Random.cparagraph();
				const logo = Mock.Random.image('50x50');
				const link = Mock.Random.url();
				return `
				desc = ${desc}
				logo = ${logo}
				link = ${link}
				`;
			},
		},
	],
}).list;
