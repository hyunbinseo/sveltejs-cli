import { defineProject } from 'vitest/config';

export default defineProject({
	test: {
		name: 'core',
		include: ['./tests/**/index.ts', './tests/*.ts'],
		expect: {
			requireAssertions: true
		}
	}
});
