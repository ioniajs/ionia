import { rest } from 'msw';

export default [
	//菜单新增
	rest.post('/module-user/cmsmanager/menu', (req, res, ctx) => {
		return res(
			ctx.json({
				code: 200,
				message: '成功',
				data: true,
			})
		);
	}),

	//权限控制开关
	rest.post('/module-user/cmsmanager/menu/auth', (req, res, ctx) => {
		return res(
			ctx.json({
				code: 200,
				message: '成功',
				data: true,
			})
		);
	}),
	//菜单删除
	rest.post('/module-user/cmsmanager/menu/delete', (req, res, ctx) => {
		return res(
			ctx.json({
				code: 200,
				message: '成功',
				data: true,
			})
		);
	}),
	//菜单列表
	rest.get('/module-user/cmsmanager/menu/list', (req, res, ctx) => {
		return res(
			ctx.json({
				code: 200,
				data: [
					{
						authFlag: 0,
						component: '/api',
						id: '1329720712180531202',
						menuName: '顶级',
						menuType: 1,
						name: '我也不知道是什么',
						parentId: '',
						showFlag: 1,
						sortNum: 1,
					},
				],
				message: '成功',
			})
		);
	}),
	//组织下菜单权限显示
	rest.get('/module-user/cmsmanager/menu/premiss/org/list', (req, res, ctx) => {
		return res(
			ctx.json({
				code: 0,
				data: [
					{
						children: [
							{
								children: [
									{
										id: 111,
										name: '1-1-1',
										permissionFlag: 0,
									},
									{
										id: 112,
										name: '1-1-2',
										permissionFlag: 0,
									},
								],
								id: 11,
								name: '1-0',
								permissionFlag: 0,
							},
						],
						id: 0,
						name: '顶级',
						permissionFlag: 0,
					},
				],
				message: '',
			})
		);
	}),
	//角色下菜单权限修改
	rest.post('/module-user/cmsmanager/menu/premiss/role', (req, res, ctx) => {
		return res(
			ctx.json({
				code: 200,
				message: '成功',
				data: true,
			})
		);
	}),
	//角色下菜单权限显示
	rest.get('/module-user/cmsmanager/menu/premiss/role/list', (req, res, ctx) => {
		return res(
			ctx.json({
				code: 200,
				data: [
					{
						children: [
							{
								children: [
									{
										key: '141',
										title: '四级1',
										permissionFlag: 1,
										children: [],
									},
									{
										key: '142',
										title: '四级2',
										permissionFlag: 1,
										children: [],
									},
									{
										key: '143',
										title: '四级3',
										permissionFlag: 0,
										children: [],
									},
									{
										key: '144',
										title: '四级4',
										permissionFlag: 0,
										children: [],
									},
								],
								key: '14',
								title: '二级4-三级1',
								permissionFlag: 0,
							},
							{
								key: '13',
								title: '二级3',
								permissionFlag: 0,
								children: [
									{
										key: '131',
										title: '三级1',
										permissionFlag: 1,
										children: [],
									},
									{
										key: '132',
										title: '三级2',
										permissionFlag: 0,
										children: [],
									},
								],
							},
							{
								key: '12',
								title: '二级2',
								permissionFlag: 1,
								children: [],
							},
							{
								key: '11',
								title: '二级1',
								permissionFlag: 0,
								children: [],
							},
						],
						key: '1',
						title: '顶级',
						permissionFlag: 0,
					},
					{
						key: '2',
						title: '系统设置',
						permissionFlag: 0,
						children: [
							{
								key: '21',
								title: '系统设置二级2',
								permissionFlag: 0,
								children: [
									{
										key: '211',
										title: '系统设置三级2',
										permissionFlag: 1,
										children: [],
									},
									{
										key: '212',
										title: '系统设置三级1',
										permissionFlag: 0,
										children: [],
									},
								],
							},
							{
								key: '22',
								title: '系统设置二级1',
								permissionFlag: 0,
								children: [],
							},
						],
					},
				],
				message: '获取成功',
			})
		);
	}),
	//用户下菜单权限显示
	rest.get('/module-user/cmsmanager/menu/premiss/user/list', (req, res, ctx) => {
		return res(
			ctx.json({
				code: 0,
				data: [
					{
						children: [
							{
								children: [
									{
										id: 111,
										name: '1-1-1',
										permissionFlag: 0,
									},
									{
										id: 112,
										name: '1-1-2',
										permissionFlag: 0,
									},
								],
								id: 11,
								name: '1-0',
								permissionFlag: 0,
							},
						],
						id: 0,
						name: '顶级',
						permissionFlag: 0,
					},
				],
				message: '',
			})
		);
	}),
	//显示开关
	rest.post('/module-user/cmsmanager/menu/show', (req, res, ctx) => {
		return res(
			ctx.json({
				code: 200,
				message: '成功',
				data: true,
			})
		);
	}),
	//菜单修改
	rest.post('/module-user/cmsmanager/menu/update', (req, res, ctx) => {
		return res(
			ctx.json({
				code: 200,
				message: '成功',
				data: true,
			})
		);
	}),
	//菜单详情
	rest.get('/module-user/cmsmanager/menu/:id', (req, res, ctx) => {
		return res(
			ctx.json({
				code: 0,
				data: {
					apis: [
						{
							apiName: '',
							apiUrl: '',
							id: 0,
						},
					],
					authFlag: 0,
					component: '',
					icon: '',
					id: 0,
					menuName: '',
					menuType: 0,
					name: '',
					nodeIds: [],
					parentId: 0,
					path: '',
					redirect: '',
					showFlag: 0,
					sortNum: 0,
				},
				message: '',
			})
		);
	}),
];
