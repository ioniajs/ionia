import { rest } from 'msw';

export default [
	//根据组织id获取栏目权限数据
	rest.get('/module-user/cmsmanager/auth/channel/org', (req, res, ctx) => {
		return res(
			ctx.json({
				code: 200,
				data: [],
				message: '',
			})
		);
	}),
	//新增修改栏目权限数据---组织
	rest.post('/module-user/cmsmanager/auth/channel/org', (req, res, ctx) => {
		return res(
			ctx.json({
				code: 200,
				data: true,
				message: '',
			})
		);
	}),
	//根据角色id获取栏目权限数据
	rest.get('/module-user/cmsmanager/auth/channel/role', (req, res, ctx) => {
		return res(
			ctx.json({
				code: 200,
				data: [
					{
						channelId: 1,
						channelName: '一级栏目1',
						children: [
							{
								channelId: 11,
								channelName: '二级栏目1',
								children: [
									{
										channelId: 111,
										channelName: '三级栏目1',
										children: [],
										datas: {
											key1: {
												operation: 1,
												optional: 1,
												selected: 1,
											},
											key2: {
												operation: 2,
												optional: 0,
												selected: 0,
											},
											key0: {
												operation: 0,
												optional: 1,
												selected: 1,
											},
											key5: {
												operation: 5,
												optional: 0,
												selected: 0,
											},
											key6: {
												operation: 6,
												optional: 0,
												selected: 0,
											},
											key3: {
												operation: 3,
												optional: 0,
												selected: 0,
											},
											key4: {
												operation: 4,
												optional: 0,
												selected: 0,
											},
											key7: {
												operation: 7,
												optional: 1,
												selected: 1,
											},
											key8: {
												operation: 8,
												optional: 1,
												selected: 1,
											},
										},
										flag: false,
									},
									{
										channelId: 112,
										channelName: '三级栏目2',
										children: [],
										datas: {
											key1: {
												operation: 1,
												optional: 1,
												selected: 1,
											},
											key2: {
												operation: 2,
												optional: 0,
												selected: 0,
											},
											key0: {
												operation: 0,
												optional: 1,
												selected: 1,
											},
											key5: {
												operation: 5,
												optional: 0,
												selected: 0,
											},
											key6: {
												operation: 6,
												optional: 0,
												selected: 0,
											},
											key3: {
												operation: 3,
												optional: 0,
												selected: 0,
											},
											key4: {
												operation: 4,
												optional: 1,
												selected: 1,
											},
											key7: {
												operation: 7,
												optional: 1,
												selected: 1,
											},
											key8: {
												operation: 8,
												optional: 1,
												selected: 1,
											},
										},
										flag: false,
									},
								],
								datas: {
									key1: {
										operation: 1,
										optional: 0,
										selected: 0,
									},
									key2: {
										operation: 2,
										optional: 1,
										selected: 1,
									},
									key0: {
										operation: 0,
										optional: 0,
										selected: 0,
									},
									key5: {
										operation: 5,
										optional: 1,
										selected: 1,
									},
									key6: {
										operation: 6,
										optional: 1,
										selected: 1,
									},
									key3: {
										operation: 3,
										optional: 1,
										selected: 1,
									},
									key4: {
										operation: 4,
										optional: 1,
										selected: 1,
									},
									key7: {
										operation: 7,
										optional: 0,
										selected: 0,
									},
									key8: {
										operation: 8,
										optional: 0,
										selected: 0,
									},
								},
								flag: false,
							},
							{
								channelId: 12,
								channelName: '二级栏目2',
								children: [],
								datas: {
									key1: {
										operation: 1,
										optional: 0,
										selected: 0,
									},
									key2: {
										operation: 2,
										optional: 1,
										selected: 1,
									},
									key0: {
										operation: 0,
										optional: 1,
										selected: 1,
									},
									key5: {
										operation: 5,
										optional: 1,
										selected: 1,
									},
									key6: {
										operation: 6,
										optional: 1,
										selected: 1,
									},
									key3: {
										operation: 3,
										optional: 1,
										selected: 1,
									},
									key4: {
										operation: 4,
										optional: 0,
										selected: 0,
									},
									key7: {
										operation: 7,
										optional: 0,
										selected: 0,
									},
									key8: {
										operation: 8,
										optional: 0,
										selected: 0,
									},
								},
								flag: false,
							},
							{
								channelId: 13,
								channelName: '二级栏目3',
								children: [],
								datas: {
									key1: {
										operation: 1,
										optional: 0,
										selected: 0,
									},
									key2: {
										operation: 2,
										optional: 1,
										selected: 1,
									},
									key0: {
										operation: 0,
										optional: 1,
										selected: 1,
									},
									key5: {
										operation: 5,
										optional: 0,
										selected: 0,
									},
									key6: {
										operation: 6,
										optional: 0,
										selected: 0,
									},
									key3: {
										operation: 3,
										optional: 1,
										selected: 1,
									},
									key4: {
										operation: 4,
										optional: 0,
										selected: 0,
									},
									key7: {
										operation: 7,
										optional: 1,
										selected: 1,
									},
									key8: {
										operation: 8,
										optional: 1,
										selected: 1,
									},
								},
								flag: false,
							},
						],
						datas: {
							key1: {
								operation: 1,
								optional: 1,
								selected: 1,
							},
							key2: {
								operation: 2,
								optional: 1,
								selected: 1,
							},
							key0: {
								operation: 0,
								optional: 1,
								selected: 1,
							},
							key5: {
								operation: 5,
								optional: 1,
								selected: 1,
							},
							key6: {
								operation: 6,
								optional: 1,
								selected: 1,
							},
							key3: {
								operation: 3,
								optional: 1,
								selected: 1,
							},
							key4: {
								operation: 4,
								optional: 1,
								selected: 1,
							},
							key7: {
								operation: 7,
								optional: 1,
								selected: 1,
							},
							key8: {
								operation: 8,
								optional: 1,
								selected: 1,
							},
						},
						flag: false,
					},
					{
						channelId: 2,
						channelName: '一级栏目2',
						children: [],
						datas: {
							key1: {
								operation: 1,
								optional: 1,
								selected: 1,
							},
							key2: {
								operation: 2,
								optional: 1,
								selected: 1,
							},
							key0: {
								operation: 0,
								optional: 1,
								selected: 1,
							},
							key5: {
								operation: 5,
								optional: 1,
								selected: 1,
							},
							key6: {
								operation: 6,
								optional: 1,
								selected: 1,
							},
							key3: {
								operation: 3,
								optional: 1,
								selected: 1,
							},
							key4: {
								operation: 4,
								optional: 1,
								selected: 1,
							},
							key7: {
								operation: 7,
								optional: 0,
								selected: 0,
							},
							key8: {
								operation: 8,
								optional: 1,
								selected: 1,
							},
						},
						flag: false,
					},
					{
						channelId: 3,
						channelName: '一级栏目3',
						children: [],
						datas: {
							key1: {
								operation: 1,
								optional: 1,
								selected: 1,
							},
							key2: {
								operation: 2,
								optional: 1,
								selected: 1,
							},
							key0: {
								operation: 0,
								optional: 1,
								selected: 1,
							},
							key5: {
								operation: 5,
								optional: 1,
								selected: 1,
							},
							key6: {
								operation: 6,
								optional: 1,
								selected: 1,
							},
							key3: {
								operation: 3,
								optional: 1,
								selected: 1,
							},
							key4: {
								operation: 4,
								optional: 1,
								selected: 1,
							},
							key7: {
								operation: 7,
								optional: 1,
								selected: 1,
							},
							key8: {
								operation: 8,
								optional: 0,
								selected: 0,
							},
						},
						flag: false,
					},
					{
						channelId: 4,
						channelName: '一级栏目4',
						children: [],
						datas: {
							key1: {
								operation: 1,
								optional: 1,
								selected: 1,
							},
							key2: {
								operation: 2,
								optional: 1,
								selected: 1,
							},
							key0: {
								operation: 0,
								optional: 1,
								selected: 1,
							},
							key5: {
								operation: 5,
								optional: 1,
								selected: 1,
							},
							key6: {
								operation: 6,
								optional: 1,
								selected: 1,
							},
							key3: {
								operation: 3,
								optional: 1,
								selected: 1,
							},
							key4: {
								operation: 4,
								optional: 1,
								selected: 1,
							},
							key7: {
								operation: 7,
								optional: 0,
								selected: 0,
							},
							key8: {
								operation: 8,
								optional: 0,
								selected: 0,
							},
						},
						flag: false,
					},
					{
						channelId: 5,
						channelName: '一级栏目5',
						children: [],
						datas: {
							key1: {
								operation: 1,
								optional: 1,
								selected: 1,
							},
							key2: {
								operation: 2,
								optional: 1,
								selected: 1,
							},
							key0: {
								operation: 0,
								optional: 0,
								selected: 0,
							},
							key5: {
								operation: 5,
								optional: 1,
								selected: 1,
							},
							key6: {
								operation: 6,
								optional: 1,
								selected: 1,
							},
							key3: {
								operation: 3,
								optional: 1,
								selected: 1,
							},
							key4: {
								operation: 4,
								optional: 1,
								selected: 1,
							},
							key7: {
								operation: 7,
								optional: 0,
								selected: 0,
							},
							key8: {
								operation: 8,
								optional: 0,
								selected: 0,
							},
						},
						flag: false,
					},
				],
				message: '成功',
			})
		);
	}),
	//新增修改栏目权限数据---角色
	rest.post('/module-user/cmsmanager/auth/channel/role', (req, res, ctx) => {
		return res(
			ctx.json({
				code: 200,
				data: true,
				message: '',
			})
		);
	}),
	//根据用户id获取栏目权限数据
	rest.get('/module-user/cmsmanager/auth/channel/user', (req, res, ctx) => {
		return res(
			ctx.json({
				code: 200,
				data: [],
				message: '',
			})
		);
	}),
	//新增修改栏目权限数据---用户
	rest.post('/module-user/cmsmanager/auth/channel/user', (req, res, ctx) => {
		return res(
			ctx.json({
				code: 200,
				data: true,
				message: '',
			})
		);
	}),
];
