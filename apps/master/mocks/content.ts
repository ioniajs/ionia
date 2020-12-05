import { rest } from 'msw';

export default [
	//根据阵地id获取内容权限数据
	rest.get('/module-user/cmsmanager/auth/content/org', (req, res, ctx) => {
		return res(
			ctx.json({
				code: 200,
				data: {
					contents: [
						{
							channelId: 1,
							channelName: '栏目一',
							children: [
								{
									channelId: '1324944027546599425',
									channelName: '栏目二',
									children: [
										{
											channelId: '1325688865397215233',
											channelName: '栏目三',
											children: [
												{
													channelId: '1325689734125645826',
													channelName: '栏目四',
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
													},
													flag: false,
													parentId: '1325688865397215233',
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
											},
											flag: false,
											parentId: '1324944027546599425',
										},
										{
											channelId: '1325688962101088257',
											channelName: '栏目五',
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
											},
											flag: false,
											parentId: '1324944027546599425',
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
									},
									flag: false,
									parentId: 1,
								},
								{
									channelId: '1325689429627564033',
									channelName: '栏目六',
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
									},
									flag: false,
									parentId: 1,
								},
								{
									channelId: '1326361764857733121',
									channelName: '栏目七',
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
									},
									flag: false,
									parentId: 1,
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
							},
							flag: false,
							parentId: '',
						},
						{
							channelId: 0,
							channelName: '增量栏目',
							datas: {
								key1: {
									operation: 1,
									optional: 1,
									selected: 0,
								},
								key2: {
									operation: 2,
									optional: 1,
									selected: 0,
								},
								key0: {
									operation: 0,
									optional: 1,
									selected: 0,
								},
								key5: {
									operation: 5,
									optional: 1,
									selected: 0,
								},
								key6: {
									operation: 6,
									optional: 1,
									selected: 0,
								},
								key3: {
									operation: 3,
									optional: 1,
									selected: 0,
								},
								key4: {
									operation: 4,
									optional: 1,
									selected: 0,
								},
								key7: {
									operation: 7,
									optional: 1,
									selected: 0,
								},
								key8: {
									operation: 8,
									optional: 1,
									selected: 0,
								},
							},
							flag: false,
							parentId: '',
						},
					],
					id: 1,
				},
				message: '成功',
			})
		);
	}),
	//新增修改内容权限数据---阵地
	rest.post('/module-user/cmsmanager/auth/content/org', (req, res, ctx) => {
		return res(
			ctx.json({
				code: 200,
				data: true,
				message: '',
			})
		);
	}),
	//根据角色id获取内容权限数据
	rest.get('/module-user/cmsmanager/auth/content/role', (req, res, ctx) => {
		return res(
			ctx.json({
				code: 200,
				data: {
					contents: [
						{
							channelId: 1,
							channelName: '栏目一',
							children: [
								{
									channelId: '1324944027546599425',
									channelName: '栏目二',
									children: [
										{
											channelId: '1325688865397215233',
											channelName: '栏目三',
											children: [
												{
													channelId: '1325689734125645826',
													channelName: '栏目四',
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
													},
													flag: false,
													parentId: '1325688865397215233',
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
											},
											flag: false,
											parentId: '1324944027546599425',
										},
										{
											channelId: '1325688962101088257',
											channelName: '栏目五',
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
											},
											flag: false,
											parentId: '1324944027546599425',
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
									},
									flag: false,
									parentId: 1,
								},
								{
									channelId: '1325689429627564033',
									channelName: '栏目六',
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
									},
									flag: false,
									parentId: 1,
								},
								{
									channelId: '1326361764857733121',
									channelName: '栏目七',
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
									},
									flag: false,
									parentId: 1,
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
							},
							flag: false,
							parentId: '',
						},
						{
							channelId: 0,
							channelName: '增量栏目',
							datas: {
								key1: {
									operation: 1,
									optional: 1,
									selected: 0,
								},
								key2: {
									operation: 2,
									optional: 1,
									selected: 0,
								},
								key0: {
									operation: 0,
									optional: 1,
									selected: 0,
								},
								key5: {
									operation: 5,
									optional: 1,
									selected: 0,
								},
								key6: {
									operation: 6,
									optional: 1,
									selected: 0,
								},
								key3: {
									operation: 3,
									optional: 1,
									selected: 0,
								},
								key4: {
									operation: 4,
									optional: 1,
									selected: 0,
								},
								key7: {
									operation: 7,
									optional: 1,
									selected: 0,
								},
								key8: {
									operation: 8,
									optional: 1,
									selected: 0,
								},
							},
							flag: false,
							parentId: '',
						},
					],
					id: 1,
				},
				message: '成功',
			})
		);
	}),
	//新增修改栏目权限数据---角色
	rest.post('/module-user/cmsmanager/auth/content/role', (req, res, ctx) => {
		return res(
			ctx.json({
				code: 200,
				data: true,
				message: '',
			})
		);
	}),
	//根据用户id获取内容权限数据
	rest.get('/module-user/cmsmanager/auth/content/user', (req, res, ctx) => {
		return res(
			ctx.json({
				code: 200,
				data: {
					contents: [
						{
							channelId: 1,
							channelName: '栏目一',
							children: [
								{
									channelId: '1324944027546599425',
									channelName: '栏目二',
									children: [
										{
											channelId: '1325688865397215233',
											channelName: '栏目三',
											children: [
												{
													channelId: '1325689734125645826',
													channelName: '栏目四',
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
													},
													flag: false,
													parentId: '1325688865397215233',
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
											},
											flag: false,
											parentId: '1324944027546599425',
										},
										{
											channelId: '1325688962101088257',
											channelName: '栏目五',
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
											},
											flag: false,
											parentId: '1324944027546599425',
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
									},
									flag: false,
									parentId: 1,
								},
								{
									channelId: '1325689429627564033',
									channelName: '栏目六',
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
									},
									flag: false,
									parentId: 1,
								},
								{
									channelId: '1326361764857733121',
									channelName: '栏目七',
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
									},
									flag: false,
									parentId: 1,
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
							},
							flag: false,
							parentId: '',
						},
						{
							channelId: 0,
							channelName: '增量栏目',
							datas: {
								key1: {
									operation: 1,
									optional: 1,
									selected: 0,
								},
								key2: {
									operation: 2,
									optional: 1,
									selected: 0,
								},
								key0: {
									operation: 0,
									optional: 1,
									selected: 0,
								},
								key5: {
									operation: 5,
									optional: 1,
									selected: 0,
								},
								key6: {
									operation: 6,
									optional: 1,
									selected: 0,
								},
								key3: {
									operation: 3,
									optional: 1,
									selected: 0,
								},
								key4: {
									operation: 4,
									optional: 1,
									selected: 0,
								},
								key7: {
									operation: 7,
									optional: 1,
									selected: 0,
								},
								key8: {
									operation: 8,
									optional: 1,
									selected: 0,
								},
							},
							flag: false,
							parentId: '',
						},
					],
					id: 1,
				},
				message: '成功',
			})
		);
	}),
	//新增修改内容权限数据---用户
	rest.post('/module-user/cmsmanager/auth/content/user', (req, res, ctx) => {
		return res(
			ctx.json({
				code: 200,
				data: true,
				message: '',
			})
		);
	}),
];
