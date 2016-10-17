export const posthtml = {
	modules: {
		priority: 999
	},
	include: {
		priority: 998
	},
	inlineAssets: {
		priority: 2
	},
	inlineCss: {
		priority: 2
	},
	removeTags: {
		priority: 1
	},
	removeAttributes: {
		priority: 1
	},
	beautify: {
		priority: 0
	}
};

export const postcss = {
	devtools: {
		priority: 9999
	},
	easyImport: {
		priority: 9998
	},
	import: {
		priority: 9998
	},
	each: {
		priority: 9997
	},
	mixins: {
		priority: 9996
	},
	atRulesVariables: {
		priority: 9995
	},
	customProperties: {
		priority: 9994
	},
	for: {
		priority: 9993
	},
	conditionals: {
		priority: 9992
	},
	nested: {
		priority: 9991
	},
	sorting: {
		priority: 9990
	},
	styleGuide: {
		priority: 9989
	},
	discardComments: {
		priority: 9988
	},
	csso: {
		priority: 9987
	}
};
