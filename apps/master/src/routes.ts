export interface IoniaMenuRoute {
	path: string;
	name: string;
	icon?: string;
	children?: IoniaMenuRoute[];
}

export default {
	cms: [
		{
			path: '/cms',
			name: '内容列表',
			icon: 'icon-content',
		},
		{
			path: '/cms/category',
			name: '内容分类',
			icon: 'icon-Column',
		},
		{
			path: '/cms/user',
			name: '用户列表',
			icon: 'icon-Column',
		},
		{
			path: '/cms/demo',
			name: '组件演示',
			children: [
				{ path: '/cms/demo/basic', name: '基础组件' },
				{ path: '/cms/demo/detail', name: '详情页' },
			],
		},
		{
			path: '/cms/practicebase',
			name: '实践阵地',
		},
		{
			path: '/cms/notpagefound',
			name: '404报错',
		},
	],
} as Record<string, IoniaMenuRoute[]>;
