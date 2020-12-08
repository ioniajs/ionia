import { rest } from 'msw';

export default [
	//新增修改站群权限数据---阵地
	rest.post('/module-user/cmsmanager/auth/siteGroup/org', (req, res, ctx) => {
		return res(
			ctx.json({
				code: 200,
				data: true,
				message: '成功',
			})
		);
	}),
	//根据阵地id获取站群树
	rest.get('/module-user/cmsmanager/auth/siteGroup/org/:id', (req, res, ctx) => {
		return res(
			ctx.json({
				code: 200,
				data: {
					id: 1,
					vos: [
						{
							children: [
								{
									children: [
										{
											children: [
												{
													children: [],
													id: '1325689734125645826',
													name: '金磊科技1-1-1',
													optional: true,
													parentId: '1325688865397215233',
													selected: false,
												},
											],
											id: '1325688865397215233',
											name: '金磊科技1-1',
											optional: true,
											parentId: '1324944027546599425',
											selected: false,
										},
										{
											children: [],
											id: '1325688962101088257',
											name: '金磊科技1-2',
											optional: true,
											parentId: '1324944027546599425',
											selected: true,
										},
									],
									id: '1324944027546599425',
									name: '金磊科技1',
									optional: true,
									parentId: 1,
									selected: false,
								},
								{
									children: [],
									id: '1325689429627564033',
									name: '金磊科技2',
									optional: true,
									parentId: 1,
									selected: false,
								},
								{
									children: [],
									id: '1326361764857733121',
									name: '复制站点',
									optional: true,
									parentId: 1,
									selected: false,
								},
							],
							id: 1,
							name: '江西金磊科技',
							optional: true,
							parentId: '',
							selected: true,
						},
					],
				},
				message: '成功',
			})
		);
	}),
	//新增修改站群权限数据---角色
	rest.post('/module-user/cmsmanager/auth/siteGroup/role', (req, res, ctx) => {
		return res(
			ctx.json({
				code: 200,
				data: true,
				message: '成功',
			})
		);
	}),
	//根据角色id获取站群树
	rest.get('/module-user/cmsmanager/auth/siteGroup/role/:id', (req, res, ctx) => {
		return res(
			ctx.json({
				code: 200,
				data: {
					id: 1,
					vos: [
						{
							children: [
								{
									children: [
										{
											children: [
												{
													children: [],
													id: '1325689734125645826',
													name: '金磊科技1-1-1',
													optional: false,
													parentId: '1325688865397215233',
													selected: false,
												},
												{
													children: [],
													id: '132568973412133121326',
													name: '金磊科技1-1-2',
													optional: false,
													parentId: '1325688865397215233',
													selected: false,
												},
												{
													children: [],
													id: '132568973412133121316',
													name: '金磊科技1-1-3',
													optional: true,
													parentId: '1325688865397215233',
													selected: false,
												},
											],
											id: '1325688865397215233',
											name: '金磊科技1-1',
											optional: true,
											parentId: '1324944027546599425',
											selected: false,
										},
										{
											children: [],
											id: '1325688962101088257',
											name: '金磊科技1-2',
											optional: true,
											parentId: '1324944027546599425',
											selected: true,
										},
									],
									id: '1324944027546599425',
									name: '金磊科技1',
									optional: false,
									parentId: 1,
									selected: false,
								},
								{
									children: [
										{
											children: [
												{
													children: [],
													id: '13131213121388257',
													name: '金磊科技2-1-1',
													optional: false,
													parentId: '1324944027546599425',
													selected: false,
												},
												{
													children: [],
													id: '1313121312123257',
													name: '金磊科技2-1-2',
													optional: false,
													parentId: '1324944027546599425',
													selected: false,
												},
											],
											id: '13131213101088257',
											name: '金磊科技2-1',
											optional: false,
											parentId: '1324944027546599425',
											selected: false,
										},
										{
											children: [],
											id: '113121123101088257',
											name: '金磊科技2-2',
											optional: true,
											parentId: '1324944027546599425',
											selected: true,
										},
										{
											children: [],
											id: '1131211314088257',
											name: '金磊科技2-3',
											optional: true,
											parentId: '1324944027546599425',
											selected: true,
										},
									],
									id: '1325689429627564033',
									name: '金磊科技2',
									optional: true,
									parentId: 1,
									selected: false,
								},
								{
									children: [
										{
											children: [
												{
													children: [],
													id: '131312123188257',
													name: '金磊科技3-1-1',
													optional: false,
													parentId: '1324944027546599425',
													selected: false,
												},
												{
													children: [],
													id: '13131213123257',
													name: '金磊科技3-1-2',
													optional: false,
													parentId: '1324944027546599425',
													selected: false,
												},
											],
											id: '1311421312088257',
											name: '金磊科技3-1',
											optional: false,
											parentId: '1324944027546599425',
											selected: false,
										},
										{
											children: [],
											id: '1131241213188257',
											name: '金磊科技3-2',
											optional: true,
											parentId: '1324944027546599425',
											selected: true,
										},
										{
											children: [],
											id: '1131412134188257',
											name: '金磊科技3-3',
											optional: true,
											parentId: '1324944027546599425',
											selected: true,
										},
									],
									id: '13256894212134133',
									name: '金磊科技3',
									optional: true,
									parentId: 1,
									selected: true,
								},
								{
									children: [
										{
											children: [
												{
													children: [],
													id: '13132113188257',
													name: '金磊科技4-1-1',
													optional: false,
													parentId: '1324944027546599425',
													selected: false,
												},
												{
													children: [],
													id: '131312134123257',
													name: '金磊科技4-1-2',
													optional: false,
													parentId: '1324944027546599425',
													selected: false,
												},
											],
											id: '1313112412157',
											name: '金磊科技4-1',
											optional: false,
											parentId: '1324944027546599425',
											selected: false,
										},
										{
											children: [],
											id: '11311214312257',
											name: '金磊科技4-2',
											optional: true,
											parentId: '1324944027546599425',
											selected: true,
										},
										{
											children: [],
											id: '1131211314088211',
											name: '金磊科技4-3',
											optional: true,
											parentId: '1324944027546599425',
											selected: true,
										},
									],
									id: '13256894292131033',
									name: '金磊科技4',
									optional: true,
									parentId: 1,
									selected: false,
								},
								{
									children: [],
									id: '1326361764857733121',
									name: '复制站点',
									optional: false,
									parentId: 1,
									selected: false,
								},
							],
							id: 1,
							name: '江西金磊科技',
							optional: true,
							parentId: '',
							selected: false,
						},
						{
							children: [],
							id: 0,
							name: '增量站点',
							optional: true,
							parentId: '',
							selected: false,
						},
					],
				},
				message: '成功',
			})
		);
	}),
	//新增修改站群权限数据---用户
	rest.post('/module-user/cmsmanager/auth/siteGroup/user', (req, res, ctx) => {
		return res(
			ctx.json({
				code: 200,
				data: true,
				message: '成功',
			})
		);
	}),
	//根据用户id获取站群树
	rest.get('/module-user/cmsmanager/auth/siteGroup/user/:id', (req, res, ctx) => {
		return res(
			ctx.json({
				code: 200,
				data: {
					id: 1,
					vos: [
						{
							children: [
								{
									children: [
										{
											children: [
												{
													children: [],
													id: '1325689734125645826',
													name: '金磊科技1-1-1',
													optional: true,
													parentId: '1325688865397215233',
													selected: false,
												},
											],
											id: '1325688865397215233',
											name: '金磊科技1-1',
											optional: true,
											parentId: '1324944027546599425',
											selected: false,
										},
										{
											children: [],
											id: '1325688962101088257',
											name: '金磊科技1-2',
											optional: true,
											parentId: '1324944027546599425',
											selected: true,
										},
									],
									id: '1324944027546599425',
									name: '金磊科技1',
									optional: true,
									parentId: 1,
									selected: false,
								},
								{
									children: [
										{
											id: '1325689429627564011',
											name: '金磊科技2-1',
											optional: true,
											parentId: 1,
											selected: false,
											children: [],
										},
										{
											id: '1325689429627560001',
											name: '金磊科技2-2',
											optional: false,
											parentId: 1,
											selected: false,
											children: [
												{
													id: '1325689429627560011',
													name: '金磊科技2-2-1',
													optional: false,
													parentId: 1,
													selected: false,
												},
												{
													id: '1325689429627560012',
													name: '金磊科技2-2-2',
													optional: false,
													parentId: 1,
													selected: false,
												},
											],
										},
									],
									id: '1325689429627564033',
									name: '金磊科技2',
									optional: true,
									parentId: 1,
									selected: false,
								},
								{
									children: [],
									id: '1326361764857733121',
									name: '复制站点',
									optional: true,
									parentId: 1,
									selected: false,
								},
							],
							id: '1',
							name: '江西金磊科技',
							optional: true,
							parentId: '',
							selected: true,
						},
					],
				},
				message: '成功',
			})
		);
	}),
];
