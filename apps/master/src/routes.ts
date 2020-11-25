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
			name: '组件演示',
			children: [
				{ path: '/cms/basic', name: '基础组件' },
				{ path: '/cms/detail', name: '详情页' },
				{ path: '/cms/amap', name: '高德地图' },
				{ path: '/cms/etable', name: '可编辑表格' },
				{ path: '/cms/modal-table', name: '弹窗表格' },
			],
		},
		{
			path: '/cms/user',
			name: '用户列表',
			icon: 'icon-Column',
		},
		{
			path: '/cms/practice-base',
			name: '实践阵地',
		},
		{
			path: '/cms/setting',
			name: '系统设置',
		},
		{
			path: '/cms/site',
			name: '站点管理',
		},
		{
			path: '/cms/role',
			name: '角色管理',
		},
	],
} as Record<string, IoniaMenuRoute[]>;
