module.exports = {
	'env': {
		'browser': true,
		'commonjs': true,
		'es2021': true,
	},
	'parser': '@babel/eslint-parser',
	'plugins': ['prettier'],
	'extends': ['prettier', 'eslint:recommended'],
	'parserOptions': {
		'ecmaVersion': 12,
	},
	'rules': {
		'prettier/prettier': 'error',
	},
}
