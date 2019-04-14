'use strict';

module.exports = (arr, options = {}) => {
	if (!Array.isArray(arr)) {
		throw new TypeError(`Expected an array, got ${typeof arr}`);
	}

	options.colLength = options.colLength || 2;
	const arrLength = arr.length;

	if (typeof options.colLength !== 'number') {
		throw new TypeError(`Expected options.colLength to be number, got ${typeof arr}`);
	}

	if (options.colLength > arr.length) {
		throw new Error(`colLength should be less than array length`);
	}

	if (typeof options.fillCol !== 'undefined' && (arrLength % options.colLength) !== 0) {
		const itemsToAdd = [];
		for (let i = 0; i < (options.colLength - (arrLength % options.colLength)); i++) {
			itemsToAdd.push(options.fillCol);
		}
		arr = arr.concat(itemsToAdd);
	}

	const totalCols = [];

	for (let i = 0; i < options.colLength; i++) {
		totalCols.push([]);
	}

	return arr.reduce((cols, item, idx) => {
		const colIdx = idx % options.colLength;
		cols[colIdx].push(item);
		return cols;
	}, totalCols);
};
