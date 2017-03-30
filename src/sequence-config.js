export const posthtml = {
	modules: {
		priority: 999
	},
	include: {
		priority: 998
	},
	bem: {
		priority: 997
	},
	customElements: {
		priority: 996
	},
	inlineAssets: {
		priority: 5
	},
	inlineCss: {
		priority: 4
	},
	removeTags: {
		priority: 3
	},
	removeAttributes: {
		priority: 2
	},
	beautify: {
		priority: 1
	},
	reporter: {
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
	math: {
		priority: 9997
	},
	each: {
		priority: 9996
	},
	mixins: {
		priority: 9995
	},
	atRulesVariables: {
		priority: 9994
	},
	customProperties: {
		priority: 9993
	},
	for: {
		priority: 9992
	},
	conditionals: {
		priority: 9991
	},
	nested: {
		priority: 9990
	},
	sorting: {
		priority: 9989
	},
	styleGuide: {
		priority: 9988
	},
	discardComments: {
		priority: 9987
	},
	csso: {
		priority: 9986
	}
};
