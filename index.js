/** @format */

export function camelCaseToWords(str) {
	let result = '';
	for (let char of str) {
		if (result === '') {
			result += char.toUpperCase();
		} else if (char === char.toUpperCase()) {
			result += ' ' + char.toLowerCase();
		} else {
			result += char;
		}
	}
	return result;
}

export function snakeCaseToWords(str) {
	return str.charAt(0).toUpperCase() + str.substring(1).replace('_', ' ');
}

export function kebabCaseToWords(str) {
	return str.charAt(0).toUpperCase() + str.substring(1).replace('-', ' ');
}

export function enumToWords(text) {
	return text
		.split('_')
		.map(w => w.charAt(0) + w.substring(1).toLowerCase())
		.join(' ');
}
