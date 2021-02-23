import Mock from 'mockjs';

export const mockLabel = Mock.mock({
	'list|30': [
		{
			node_id: () => Mock.Random.guid(),
			name: () => Mock.Random.county(true).replace(/\s+/g, '>>'),
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
				const desc = Mock.Random.title();
				const logo = Mock.Random.dataImage();
				const link = Mock.Random.url();
				return `
				desc=${desc}
				logo=${logo}
					link = ${link}
				`;
			},
		},
	],
}).list;
