import { rest } from 'msw';

export default [
	//新建阵地
	rest.post('/module-user/cmsmanager/org', (req, res, ctx) => {
		return res(
			ctx.json({
				code: 200,
				data: 0,
				message: '添加成功',
			})
		);
	}),
	//批量新建阵地
	rest.post('/module-user/cmsmanager/org/batch', (req, res, ctx) => {
		return res(
			ctx.json({
				code: 200,
				data: true,
				message: '添加成功',
			})
		);
	}),
	//删除阵地-可批量
	rest.post('/module-user/cmsmanager/org/delete', (req, res, ctx) => {
		return res(
			ctx.json({
				code: 200,
				data: true,
				message: '删除成功',
			})
		);
	}),
	//阵地列表 ---树形结构
	rest.get('/module-user/cmsmanager/org/list', (req, res, ctx) => {
		return res(
			ctx.json({
				code: 200,
				data: [
					{
						address: '江西省南昌市西湖区力高滨江国际',
						area: '江西南昌',
						children: [
							{
								address: '',
								area: '湖南长沙',
								code: '456464647987',
								createDate: '2020-11-09T09:27:47',
								fax: '',
								id: '1325611005845196801',
								linkman: '',
								name: '大天阵地',
								parentId: '1324620880994734081',
								project: '',
								tag: '',
								type: '阵地类型',
							},
							{
								address: '江西南昌',
								area: '江西南昌',
								children: [
									{
										address: '江西南昌',
										area: '江西南昌',
										code: '4564987916',
										createDate: '2020-11-07T09:45:57',
										fax: '7984564',
										id: '1324890802182283265',
										linkman: '[{"phone":"13145854856","username":"王姐"}]',
										name: '赣州阵地',
										parentId: '1324890550658260993',
										project: '特色项目',
										tag: '',
										type: '实践中心',
									},
									{
										address: '江西南昌',
										area: '江西南昌',
										code: '4564987916',
										createDate: '2020-11-07T09:45:51',
										fax: '7984564',
										id: '1324890775338737665',
										linkman: '[{"phone":"13145854856","username":"王姐"}]',
										name: '景德镇阵地',
										parentId: '1324890550658260993',
										project: '特色项目',
										tag: '',
										type: '实践中心',
									},
									{
										address: '江西南昌',
										area: '江西南昌',
										code: '4564987916',
										createDate: '2020-11-07T09:45:42',
										fax: '7984564',
										id: '1324890737766162433',
										linkman: '[{"phone":"13145854856","username":"王姐"}]',
										name: '新余阵地',
										parentId: '1324890550658260993',
										project: '特色项目',
										tag: '',
										type: '实践中心',
									},
								],
								code: '4564987916',
								createDate: '2020-11-07T09:44:57',
								fax: '7984564',
								id: '1324890550658260993',
								linkman: '[{"phone":"13145854856","username":"王姐"}]',
								name: '南昌阵地',
								parentId: '1324620880994734081',
								project: '特色项目',
								tag: '',
								type: '实践中心',
							},
							{
								address: '江西南昌',
								area: '江西南昌',
								children: [
									{
										address: '江西南昌',
										area: '江西南昌',
										code: '4564987916',
										createDate: '2020-11-07T09:46:45',
										fax: '7984564',
										id: '1324891001529163778',
										linkman: '[{"phone":"13145854856","username":"王姐"}]',
										name: '范伟阵地',
										parentId: '1324890519167426561',
										project: '特色项目',
										tag: '',
										type: '实践中心',
									},
									{
										address: '江西南昌',
										area: '江西南昌',
										code: '4564987916',
										createDate: '2020-11-07T09:46:32',
										fax: '7984564',
										id: '1324890949226192897',
										linkman: '[{"phone":"13145854856","username":"王姐"}]',
										name: '赵本山阵地',
										parentId: '1324890519167426561',
										project: '特色项目',
										tag: '',
										type: '实践中心',
									},
									{
										address: '江西南昌',
										area: '江西南昌',
										code: '4564987916',
										createDate: '2020-11-07T09:46:40',
										fax: '7984564',
										id: '1324890979781697537',
										linkman: '[{"phone":"13145854856","username":"王姐"}]',
										name: '小沈阳阵地',
										parentId: '1324890519167426561',
										project: '特色项目',
										tag: '',
										type: '实践中心',
									},
								],
								code: '4564987916',
								createDate: '2020-11-07T09:44:50',
								fax: '7984564',
								id: '1324890519167426561',
								linkman: '[{"phone":"13145854856","username":"王姐"}]',
								name: '沈阳阵地',
								parentId: '1324620880994734081',
								project: '特色项目',
								tag: '',
								type: '实践中心',
							},
							{
								address: '江西南昌',
								area: '江西南昌',
								code: '4564987916',
								createDate: '2020-11-07T09:44:43',
								fax: '7984564',
								id: '1324890494110654466',
								linkman: '[{"phone":"13145854856","username":"王姐"}]',
								name: '江西阵地',
								parentId: '1324620880994734081',
								project: '特色项目',
								tag: '',
								type: '实践中心',
							},
							{
								address: '江西南昌',
								area: '江西南昌',
								children: [
									{
										address: '江西南昌',
										area: '江西南昌',
										code: '4564987916',
										createDate: '2020-11-07T09:47:09',
										fax: '7984564',
										id: '1324891104671293441',
										linkman: '[{"phone":"13145854856","username":"王姐"}]',
										name: '王二阵地',
										parentId: '1324632722458558466',
										project: '特色项目',
										tag: '',
										type: '实践中心',
									},
									{
										address: '江西南昌',
										area: '江西南昌',
										code: '4564987916',
										createDate: '2020-11-07T09:47:02',
										fax: '7984564',
										id: '11',
										linkman: '[{"phone":"13145854856","username":"王姐"}]',
										name: '赵四阵地',
										parentId: '1324632722458558466',
										project: '特色项目',
										tag: '',
										type: '实践中心',
									},
								],
								code: '4564987916',
								createDate: '2020-11-06T16:40:26',
								fax: '7984564',
								id: '1324632722458558466',
								linkman: '[{"phone":"13145854856","username":"王姐"}]',
								name: '大连阵地',
								parentId: '1324620880994734081',
								project: '特色项目',
								tag: '',
								type: '实践中心',
							},
						],
						code: '4564987916',
						createDat: '2020-11-06T15:53:22',
						fax: '',
						id: '1324620880994734081',
						linkman: '',
						name: '金磊科技',
						parentId: '',
						project: '特色项目',
						tag: '',
						type: '实践中心',
					},
				],
				message: '成功',
			})
		);
	}),
	//阵地下拉列表---采用懒加载
	rest.get('/module-user/cmsmanager/org/pull', (req, res, ctx) => {
		return res(
			ctx.json({
				code: 200,
				data: [
					{
						id: '1324620880994734080',
						name: '金磊科技1',
						parentId: '',
					},
					{
						id: '1324620880994734081',
						name: '金磊科技2',
						parentId: '',
					},
					{
						id: '1324620880994734082',
						name: '金磊科技3',
						parentId: '',
					},
				],
				message: '删除成功',
			})
		);
	}),
	//新增阵地资源
	rest.post('/module-user/cmsmanager/org/resource', (req, res, ctx) => {
		return res(
			ctx.json({
				code: 200,
				data: '1330022626717872130',
				message: '成功',
			})
		);
	}),
	//删除阵地资源
	rest.post('/module-user/cmsmanager/org/resource/delete', (req, res, ctx) => {
		return res(
			ctx.json({
				code: 200,
				data: true,
				message: '成功',
			})
		);
	}),
	//阵地资源列表分页
	rest.get('/module-user/cmsmanager/org/resource/page', (req, res, ctx) => {
		return res(
			ctx.json({
				code: 200,
				data: {
					content: [
						{
							id: '1330022626717872130',
							title: '11',
							url: '',
						},
						{
							id: '1325631386022842369',
							title: '介绍',
							url: '',
						},
						{
							id: '1325616984309645314',
							title: '这是阵地标题',
							url: '',
						},
						{
							id: '1325616960389529601',
							title: '这是阵地标题',
							url: '',
						},
						{
							id: '1325616852080017409',
							title: '这是阵地标题',
							url: '',
						},
					],
					pageNo: 1,
					pageSize: 10,
					pages: 1,
					total: 5,
				},
				message: '成功',
			})
		);
	}),
	//修改阵地资源
	rest.post('/module-user/cmsmanager/org/resource/update', (req, res, ctx) => {
		return res(
			ctx.json({
				code: 200,
				data: true,
				message: '成功',
			})
		);
	}),
	//阵地资源详情
	rest.get('/module-user/cmsmanager/org/resource/:id', (req, res, ctx) => {
		return res(
			ctx.json({
				code: 200,
				data: {
					id: '1213',
					title: 'test',
					url: 'www.baidu.com',
				},
				message: '成功',
			})
		);
	}),
	//阵地排序
	rest.post('/module-user/cmsmanager/org/sort', (req, res, ctx) => {
		return res(
			ctx.json({
				code: 200,
				data: true,
				message: '成功',
			})
		);
	}),
	//校验阵地名称，true通过，false不通过
	rest.get('/module-user/cmsmanager/org/unique', (req, res, ctx) => {
		return res(
			ctx.json({
				code: 200,
				data: true,
				message: '成功',
			})
		);
	}),
	//修改阵地
	rest.post('/module-user/cmsmanager/org/update', (req, res, ctx) => {
		return res(
			ctx.json({
				code: 200,
				data: true,
				message: '成功',
			})
		);
	}),
	//移入用户
	rest.post('/module-user/cmsmanager/org/user', (req, res, ctx) => {
		return res(
			ctx.json({
				code: 200,
				data: true,
				message: '成功',
			})
		);
	}),
	//批量删除用户
	rest.post('/module-user/cmsmanager/org/user/remove', (req, res, ctx) => {
		return res(
			ctx.json({
				code: 200,
				data: true,
				message: '成功',
			})
		);
	}),
	//阵地详情
	rest.get('/module-user/cmsmanager/org/:id', (req, res, ctx) => {
		return res(
			ctx.json({
				code: 200,
				data: {
					address: '江西省南昌市',
					area: '西湖区',
					code: '2001',
					coordinate: '100',
					fax: '',
					id: '121312411212',
					introduce: 'test',
					linkmanList: [
						{ username: '宋晓峰', phone: 1871101101101 },
						{ username: '宋晓峰', phone: 1871101101101 },
					],
					name: 'test',
					parentId: '1210',
					picList: [
						{ description: 'saads', picId: '12' },
						{ description: 'saadasads', picId: '13' },
						{ description: 'saaasafasds', picId: '14' },
					],
					project: 'test',
					tagId: '12131',
					type: 'test',
				},
				message: '成功',
			})
		);
	}),
	// 阵地移入用户分页
	rest.get('/module-user/cmsmanager/org/list/in', (req, res, ctx) => {
		return res(
			ctx.json({
				code: 200,
				data: {
					content: [
						{
							id: '1324982039954354177',
							orgName: '金磊科技',
							realName: '江西金磊科技',
							username: 'system',
						},
						{
							id: '1324982716730470402',
							orgName: '江西阵地',
							realName: '江西金磊科技',
							username: 'test',
						},
						{
							id: '1324984812695531522',
							orgName: '沈阳阵地',
							realName: '江西金磊科技',
							username: 'test3',
						},
					],
					pageNo: 1,
					pageSize: 10,
					pages: 1,
					total: 5,
				},
				message: '成功',
			})
		);
	}),
];
