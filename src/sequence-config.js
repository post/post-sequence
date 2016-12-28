export const posthtml = {
	modules: {
		priority: 999
	},
	include: {
		priority: 998
	},
	bem:{
		priority:997
	},
	customElements:{
		priority:996
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
