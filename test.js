import test from 'ava';
import colsFromArray from '.';

test('Should throw if args invalid', t => {
	t.throws(() => {
		colsFromArray('string');
	}, TypeError);

	t.throws(() => {
		colsFromArray([1, 2], {colLength: '2'});
	}, TypeError);

	t.throws(() => {
		colsFromArray([1], {colLength: 2});
	}, Error);
});

test('Should convert array into cols', t => {
	t.is(colsFromArray([1, 2, 3, 4]).length, 2);

	t.is(colsFromArray([1, 2, 3, 4, 5, 6], {colLength: 3}).length, 3);

	t.is(colsFromArray([1, 2, 3, 4, 5, 6, 7], {colLength: 3, fillCol: 0}).length, 3);
});

test('Should fill the cols to make array even when fillCol is not undefined', t => {
	t.is(colsFromArray([1, 2, 3, 4, 5, 6, 7], {colLength: 3, fillCol: 0})[2].length, 3);
	t.is(colsFromArray([1, 2, 3, 4, 5, 6, 7], {colLength: 2})[1].length, 3);
	console.log(colsFromArray([1, 2, 3, 4, 5, 6, 7], {colLength: 3, fillCol: 0}));
});
