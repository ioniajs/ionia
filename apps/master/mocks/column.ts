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
						children: [
							{
								children: [
									{
										children: [
											{
												datas: {
													key1: {
														operation: 1,
														optional: 1,
														selected: 1,
													},
													key2: {
														operation: 2,
														optional: 1,
														selected: 0,
													},
													key0: {
														operation: 0,
														optional: 1,
														selected: 1,
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
												parentId: '1325688865397215233',
												siteId: '1325689734125645826',
												siteName: '金磊科技1-1-1',
												flag: false,
											},
										],
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
												selected: 1,
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
										parentId: '1324944027546599425',
										siteId: '1325688865397215233',
										siteName: '金磊科技1-1',
										flag: false,
									},
									{
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
										parentId: '1324944027546599425',
										siteId: '1325688962101088257',
										siteName: '金磊科技1-2',
										flag: false,
									},
								],
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
										selected: 1,
									},
									key6: {
										operation: 6,
										optional: 1,
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
								parentId: 1,
								siteId: '1324944027546599425',
								siteName: '金磊科技1',
								flag: false,
							},
							{
								datas: {
									key1: {
										operation: 1,
										optional: 0,
										selected: 0,
									},
									key2: {
										operation: 2,
										optional: 0,
										selected: 0,
									},
									key0: {
										operation: 0,
										optional: 1,
										selected: 0,
									},
									key5: {
										operation: 5,
										optional: 0,
										selected: 0,
									},
									key6: {
										operation: 6,
										optional: 1,
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
								parentId: 1,
								siteId: '1325689429627564033',
								siteName: '金磊科技2',
								flag: false,
							},
							{
								children: [
									{
										children: [
											{
												datas: {
													key1: {
														operation: 1,
														optional: 1,
														selected: 1,
													},
													key2: {
														operation: 2,
														optional: 1,
														selected: 0,
													},
													key0: {
														operation: 0,
														optional: 1,
														selected: 1,
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
												parentId: '1325688865397125233',
												siteId: '1325689734121145826',
												siteName: '金磊科技3-1-1',
												flag: false,
											},
											{
												datas: {
													key1: {
														operation: 1,
														optional: 1,
														selected: 1,
													},
													key2: {
														operation: 2,
														optional: 1,
														selected: 0,
													},
													key0: {
														operation: 0,
														optional: 1,
														selected: 1,
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
												parentId: '1325688865397125233',
												siteId: '1325689734121121226',
												siteName: '金磊科技3-1-2',
												flag: false,
											},
											{
												datas: {
													key1: {
														operation: 1,
														optional: 1,
														selected: 1,
													},
													key2: {
														operation: 2,
														optional: 1,
														selected: 0,
													},
													key0: {
														operation: 0,
														optional: 1,
														selected: 1,
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
												parentId: '1325688865397125233',
												siteId: '1325689734121325826',
												siteName: '金磊科技3-1-3',
												flag: false,
											},
											{
												datas: {
													key1: {
														operation: 1,
														optional: 1,
														selected: 1,
													},
													key2: {
														operation: 2,
														optional: 1,
														selected: 0,
													},
													key0: {
														operation: 0,
														optional: 1,
														selected: 1,
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
												parentId: '1325612311397125233',
												siteId: '13256897131245826',
												siteName: '金磊科技3-1-4',
												flag: false,
											},
											{
												datas: {
													key1: {
														operation: 1,
														optional: 1,
														selected: 1,
													},
													key2: {
														operation: 2,
														optional: 1,
														selected: 0,
													},
													key0: {
														operation: 0,
														optional: 1,
														selected: 1,
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
												parentId: '13256888621125233',
												siteId: '13256897341211412126',
												siteName: '金磊科技3-1-5',
												flag: false,
											},
											{
												datas: {
													key1: {
														operation: 1,
														optional: 1,
														selected: 1,
													},
													key2: {
														operation: 2,
														optional: 1,
														selected: 0,
													},
													key0: {
														operation: 0,
														optional: 1,
														selected: 1,
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
												parentId: '1325688865397125233',
												siteId: '132568912112121145826',
												siteName: '金磊科技3-1-6',
												flag: false,
											},
										],
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
												selected: 1,
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
										parentId: '132494121546599425',
										siteId: '13256888651215233',
										siteName: '金磊科技3-1',
										flag: false,
									},
									{
										children: [
											{
												datas: {
													key1: {
														operation: 1,
														optional: 1,
														selected: 1,
													},
													key2: {
														operation: 2,
														optional: 1,
														selected: 0,
													},
													key0: {
														operation: 0,
														optional: 1,
														selected: 1,
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
												parentId: '1325688865397125233',
												siteId: '132142141214221145826',
												siteName: '金磊科技3-2-1',
												flag: false,
											},
											{
												datas: {
													key1: {
														operation: 1,
														optional: 1,
														selected: 1,
													},
													key2: {
														operation: 2,
														optional: 1,
														selected: 0,
													},
													key0: {
														operation: 0,
														optional: 1,
														selected: 1,
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
												parentId: '1325688865397125233',
												siteId: '13241214124121226',
												siteName: '金磊科技3-2-2',
												flag: false,
											},
											{
												datas: {
													key1: {
														operation: 1,
														optional: 1,
														selected: 1,
													},
													key2: {
														operation: 2,
														optional: 1,
														selected: 0,
													},
													key0: {
														operation: 0,
														optional: 1,
														selected: 1,
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
												parentId: '1325688865397125233',
												siteId: '13213214314121325826',
												siteName: '金磊科技3-2-3',
												flag: false,
											},
											{
												datas: {
													key1: {
														operation: 1,
														optional: 1,
														selected: 1,
													},
													key2: {
														operation: 2,
														optional: 1,
														selected: 0,
													},
													key0: {
														operation: 0,
														optional: 1,
														selected: 1,
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
												parentId: '1325612311397125233',
												siteId: '133121397131245826',
												siteName: '金磊科技3-2-4',
												flag: false,
											},
											{
												datas: {
													key1: {
														operation: 1,
														optional: 1,
														selected: 1,
													},
													key2: {
														operation: 2,
														optional: 1,
														selected: 0,
													},
													key0: {
														operation: 0,
														optional: 1,
														selected: 1,
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
												parentId: '13256888621125233',
												siteId: '1325121327341211412126',
												siteName: '金磊科技3-2-5',
												flag: false,
											},
											{
												datas: {
													key1: {
														operation: 1,
														optional: 1,
														selected: 1,
													},
													key2: {
														operation: 2,
														optional: 1,
														selected: 0,
													},
													key0: {
														operation: 0,
														optional: 1,
														selected: 1,
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
												parentId: '1325688865397125233',
												siteId: '1325689121213121145826',
												siteName: '金磊科技3-2-6',
												flag: false,
											},
										],
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
										parentId: '1324944027546121425',
										siteId: '132568896210108121',
										siteName: '金磊科技3-2',
										flag: false,
									},
								],
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
										selected: 1,
									},
									key6: {
										operation: 6,
										optional: 1,
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
								parentId: 1,
								siteId: '132494402754659111',
								siteName: '金磊科技3',
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
								selected: 0,
							},
							key8: {
								operation: 8,
								optional: 1,
								selected: 0,
							},
						},
						parentId: '',
						siteId: 1,
						siteName: '江西金磊科技',
						flag: false,
					},
					{
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
						parentId: 1,
						siteId: '0',
						siteName: '增量站点',
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
