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
										key: '1331776990746841011',
										name: '四级1',
										operatingFlag: 1,
										permissionFlag: 0,
									},
									{
										key: '1331776990746841012',
										name: '四级2',
										operatingFlag: 1,
										permissionFlag: 0,
									},
								],
								key: '1331773069462675457',
								name: '二级4-三级1',
								operatingFlag: 1,
								permissionFlag: 0,
							},
							{
								children: [
									{
										key: '1331776990746841022',
										name: '四级2',
										operatingFlag: 1,
										permissionFlag: 1,
									},
									{
										key: '1331776990746841023',
										name: '新增模版-test1',
										operatingFlag: 0,
										permissionFlag: 0,
									},
									{
										key: '1331776990746841024',
										name: '四级4',
										operatingFlag: 1,
										permissionFlag: 0,
									},
								],
								key: '1331773069462675451',
								name: '二级4-三级2',
								operatingFlag: 1,
								permissionFlag: 1,
							},
							{
								children: [
									{
										key: '1331776990746841031',
										name: '四级1-测试1',
										operatingFlag: 1,
										permissionFlag: 0,
									},
									{
										key: '1331776990746841032',
										name: '四级2',
										operatingFlag: 1,
										permissionFlag: 0,
									},
									{
										key: '1331776990746841033',
										name: '新增模版-test1',
										operatingFlag: 1,
										permissionFlag: 1,
									},
									{
										key: '1331776990746841034',
										name: '四级4',
										operatingFlag: 1,
										permissionFlag: 0,
									},
									{
										key: '1331776990746841035',
										name: '四级5-测试1',
										operatingFlag: 1,
										permissionFlag: 0,
									},
								],
								key: '1331773069462675453',
								name: '二级4-三级3',
								operatingFlag: 1,
								permissionFlag: 1,
							},
							{
								key: '1331773069462675001',
								name: '二级5-三级1',
								operatingFlag: 1,
								permissionFlag: 0,
							},
						],
						key: '1329720712180531202',
						name: '顶级',
						operatingFlag: 1,
						permissionFlag: 1,
						onlyTwo: 0,
					},
					{
						children: [
							{
								key: '133177306175001',
								name: '二级1',
								operatingFlag: 1,
								permissionFlag: 0,
							},
							{
								key: '133177306946267121',
								name: '二级2',
								operatingFlag: 1,
								permissionFlag: 0,
							},
							{
								key: '1331121262675001',
								name: '二级3',
								operatingFlag: 0,
								permissionFlag: 0,
							},
							{
								key: '13311212621211',
								name: '二级4',
								operatingFlag: 1,
								permissionFlag: 1,
							},
						],
						key: '121312222',
						name: '测试2',
						operatingFlag: 1,
						permissionFlag: 1,
						onlyTwo: 1,
					},
					{
						key: 0,
						name: '增量菜单',
						operatingFlag: 1,
						permissionFlag: 0,
						onlyTwo: 1,
					},
				],
				message: '成功',
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
