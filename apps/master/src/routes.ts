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
		},
		{
			path: '/cms/practicebase',
			name: '实践阵地',
		},
		{
			path: '/cms/setting',
			name: '系统设置',
		},
	],
} as Record<string, IoniaMenuRoute[]>;
