export default {
	entry: 'src/index.tsx',
	esm: {
		type: 'babel',
		importLibToEs: true,
	},
	extraBabelPlugins: [
		[
			'babel-plugin-import',
			{ libraryName: 'antd', libraryDirectory: 'es', style: true },
			'antd',
		],
	],
};
