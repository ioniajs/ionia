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
				{ path: '/cms/demo/video-upload', name: '上传组件' },
				{ path: '/cms/demo/pdf', name: 'PDF在线阅读' },
			],
		},
		{
			path: '/cms/point-mall',
			name: '积分商城',
			icon: 'icon-content',
			children: [
				{
					path: '/cms/point-mall/commodity-category',
					name: '商品类目',
				},
				{
					path: '/cms/point-mall/commodity-management',
					name: '商品管理',
				},
				{
					path: '/cms/point-mall/exchange-record',
					name: '兑换记录',
				},
			],
		},
		{
			path: '/cms/content-operation',
			name: '内容运营',
			icon: 'icon-content',
			children: [
				{
					path: '/cms/content-operation/content',
					name: '内容管理',
				},
				{
					path: '/cms/content-operation/comment',
					name: '评论管理',
				},
				{
					path: '/cms/content-operation/blogroll',
					name: '友情链接',
				},
				{
					path: '/cms/content-operation/volunteer',
					name: '志愿者',
					children: [
						{
							path: '/cms/content-operation/volunteer/manage',
							name: '志愿者管理',
						},
						{
							path: '/cms/content-operation/volunteer/check',
							name: '志愿者审核',
						},
					],
				},
			],
		},
		{
			path: '/cms/system-management',
			name: '系统管理',
			icon: 'icon-Column',
			children: [
				{
					path: '/cms/system-management/site',
					name: '站点管理',
				},
				{
					path: '/cms/system-management/practice-base',
					name: '实践阵地',
				},
				{
					path: '/cms/system-management/role',
					name: '角色管理',
				},
				{
					path: '/cms/system-management/user',
					name: '用户管理',
				},
				{
					path: '/cms/system-management/model-management',
					name: '模型管理',
					children: [
						{
							path: '/cms/system-management/model-management/source',
							name: '来源管理',
						},
						{
							path: '/cms/system-management/model-management/content-type',
							name: '内容类型',
						},
					],
				},
				{
					path: '/cms/system-management/mail-serve',
					name: '邮件服务',
				},
				{
					path: '/cms/system-management/area-management',
					name: '区域管理',
				},
				{
					path: '/cms/system-management/memory-management',
					name: '存储管理',
					children: [
						{
							path: '/cms/system-management/memory-management/oss',
							name: '储存管理OSS',
						},
						{
							path: '/cms/system-management/memory-management/ftp',
							name: '储存管理FTP',
						},
					],
				},
				{
					path: '/cms/system-management/menu-management',
					name: '菜单管理',
					children: [
						{
							path: '/cms/system-management/menu-management/interface',
							name: '接口管理',
						},
						{
							path: '/cms/system-management/menu-management/menu',
							name: '菜单管理',
						},
					],
				},
				{
					path: '/cms/system-management/setting',
					name: '系统设置',
				},
			],
		},
		{
			path: 'cms/examination-management',
			icon: 'icon-Column',
			name: '考评管理',
			children: [
				{
					path: '/cms/examination-management/test-base-management',
					name: '题库管理',
				},
			],
		},
		{
			path: '/cms/system-messages',
			icon: 'icon-Column',
			name: '系统消息',
		},
	],
} as Record<string, IoniaMenuRoute[]>;
