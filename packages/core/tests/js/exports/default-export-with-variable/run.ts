import { object, common, variables, exports } from '@sveltejs/cli-core/js';
import type { ScriptFileEditor } from '@sveltejs/cli-core';

export function run({ ast }: ScriptFileEditor<any>): void {
	const object1 = object.create({
		test: common.createLiteral('string')
	});
	const variable = variables.declaration(ast, 'const', 'object', object1);
	ast.body.push(variable);

	exports.defaultExport(ast, variables.identifier('object'));
}
