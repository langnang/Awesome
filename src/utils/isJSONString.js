import { typeOf } from '@bit/langnang.javascript.type-of';

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
