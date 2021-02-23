import { typeOf } from './typeOf';

export const isJSONString = (str) => {
	try {
		if (typeOf(JSON.parse(str)) == 'object') {
			return true;
		}
	} catch (e) {
		return false;
	}
	return false;
};
