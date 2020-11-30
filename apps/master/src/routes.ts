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
			name: '首页',
			icon: 'icon-Column',
		},
		{
			path: '/cms/demo',
			name: '组件演示',
			icon: 'icon-Column',
			children: [
				{ path: '/cms/demo/detail', name: '详情页' },
				{ path: '/cms/demo/amap', name: '高德地图' },
				{ path: '/cms/demo/etable', name: '可编辑表格' },
				{ path: '/cms/demo/modal-table', name: '弹窗表格' },
				{ path: '/cms/demo/modal-transfer', name: '弹窗穿梭框' },
				{ path: '/cms/demo/dynamic-from-item', name: '动态增减列表' },
			],
		},
		{
			path: '/cms/user',
			name: '用户列表',
			icon: 'icon-user',
		},
		{
			path: '/cms/site',
			icon: 'icon-Column',
			name: '站点管理',
		},
		{
			path: '/cms/role',
			icon: 'icon-Column',
			name: '角色管理',
		},
		{
			path: '/cms/content',
			icon: 'icon-Column',
			name: '内容管理',
		},
		{
			path: '/cms/practice-base',
			icon: 'icon-Column',
			name: '实践阵地',
		},
		{
			path: '/cms/setting',
			icon: 'icon-setting',
			name: '系统设置',
		},
	],
} as Record<string, IoniaMenuRoute[]>;
