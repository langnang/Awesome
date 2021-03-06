/**
 * ini 转换为 JSON
 * @param ini
 */
export const iniToJSON = (ini) => {
	const nodeArray = ini.split('[');
	return nodeArray.reduce((total, value) => {
		const node = getNode(value);
		const key_value = getKeyValue(value);
		if (node == '') {
			return { ...total, ...key_value };
		} else {
			total[node] = key_value;
			return total;
		}
	}, {});
};
// 节点
const getNode = (str) => {
	let node = str.substring(str.indexOf('['), str.indexOf(']'));
	return node;
};
// 键值对
const getKeyValue = (str) => {
	let array = str.substring(str.indexOf(']') + 1).split(/[\r\n]/g);
	return array.reduce((total, value) => {
		let spt = value.split('=');
		if (spt.length == 1) {
			return total;
		}
		total[spt[0].trim()] = spt[1].trim();
		return total;
	}, {});
};
