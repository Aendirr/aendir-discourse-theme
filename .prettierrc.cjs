/** @type {import("prettier").Config} */
const config = {
	plugins: ['prettier-plugin-svelte'],
	overrides: [{ files: '*.svelte', options: { parser: 'svelte' } }],
	semi: true,
	singleQuote: true,
	tabWidth: 2,
	trailingComma: 'none',
	printWidth: 100
};

module.exports = config;
