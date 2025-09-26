// @ts-check
import withNuxt from './.nuxt/eslint.config.mjs'
import prettierPlugin from 'eslint-plugin-prettier'

export default withNuxt([
	{
		plugins: {
			prettier: prettierPlugin,
		},
	},
	{
		ignores: ['./lib/**/*', './app/components/ui/**/*', './.nuxt/**/*'],
	},
	{
		rules: {
			'prettier/prettier': [
				'error',
				{
					singleQuote: true,
					semi: false,
					useTabs: true,
					tabWidth: 2,
					trailingComma: 'es5',
					bracketSpacing: true,
					printWidth: 160,
					endOfLine: 'auto',
				},
			],
			'@typescript-eslint/no-dynamic-delete': 'off',
			'no-undef': 'off',
			'prefer-const': 'off',
			'no-unused-vars': [
				'warn',
				{
					vars: 'all',
					varsIgnorePattern: '^_',
					args: 'after-used',
					argsIgnorePattern: '^_',
					ignoreRestSiblings: true,
				},
			],
			'@typescript-eslint/no-unused-vars': 'off',
			'@typescript-eslint/no-explicit-any': 'off',
			'@typescript-eslint/no-unused-expressions': 'off',
			'vue/no-use-v-if-with-v-for': 'off',
			'vue/no-v-html': 'warn',
			'vue/html-self-closing': 'off',
		},
	},
	{
		files: ['**/*.{ts,tsx}'],
		rules: {
			'no-unused-vars': 'off',
			'@typescript-eslint/no-unused-vars': [
				'warn',
				{
					vars: 'all',
					varsIgnorePattern: '^_',
					args: 'after-used',
					argsIgnorePattern: '^_',
					ignoreRestSiblings: true,
				},
			],
		},
	},
	{
		files: ['app/components/SafeHtml.vue'],
		rules: {
			'vue/no-v-html': 'off',
			'vue/no-v-text-v-html-on-component': 'off',
		},
	},
])
