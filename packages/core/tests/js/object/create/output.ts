const empty = {};
const created = { foo: 1, bar: 'string' };

// prettier-ignore
const created2 = {
	foo: 1,
	bar: 'string',
	object: { foo: 'hello', nested: { bar: 'world' } },
	array: [
		123,
		'hello',
		{ foo: 'bar', bool: true },
		[456, '789']
	]
};
