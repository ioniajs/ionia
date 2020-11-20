import { rest } from 'msw';

export default [
	//删除角色
	rest.post('/module-user/cmsmanager/roles/delete', (req, res, ctx) => {
		return res(
			ctx.json({
				code: 200,
				data: true,
				message: '成功',
			})
		);
	}),
	//移入用户
	rest.post('/module-user/cmsmanager/roles/move/in', (req, res, ctx) => {
		return res(
			ctx.json({
				code: 200,
				data: true,
				message: '成功',
			})
		);
	}),
	//移出用户
	rest.post('/module-user/cmsmanager/roles/move/out', (req, res, ctx) => {
		return res(
			ctx.json({
				code: 200,
				data: true,
				message: '成功',
			})
		);
	}),
	//角色分页
	rest.get('/module-user/cmsmanager/roles/page', (req, res, ctx) => {
		return res(
			ctx.json({
				code: 200,
				data: {
					content: [
						{
							createTime: '2020-09-11 13:52:14',
							createUser: 'system',
							description: '我是新建的角色',
							id: '1326402331541061633',
							name: '名称',
							orgName: '大天阵地',
							updateTime: '2020-11-11 13:52:14',
							updateUser: '大天阵地',
						},
						{
							createTime: '2020-09-11 13:53:14',
							createUser: 'system',
							description: '我是新建的角色',
							id: '1326402331541061632',
							name: '名称',
							orgName: '大天阵地',
							updateTime: '2020-10-11 13:53:14',
							updateUser: '大天阵地',
						},
						{
							createTime: '2020-11-12 13:52:14',
							createUser: 'system',
							description: '我是新建的角色',
							id: '1326402331541061631',
							name: '名称',
							orgName: '大天阵地',
							updateTime: '2020-10-13 13:53:14',
							updateUser: '大天阵地',
						},
						{
							createTime: '2020-10-12 13:52:14',
							createUser: 'system',
							description: '我是新建的角色',
							id: '132640233154106113628',
							name: '名称',
							orgName: '大天阵地',
							updateTime: '2020-12-11 13:53:14',
							updateUser: '大天阵地',
						},
						{
							createTime: '2020-10-12 13:52:14',
							createUser: 'system',
							description: '我是新建的角色',
							id: '13264021231531061628',
							name: '名称',
							orgName: '大天阵地',
							updateTime: '2020-12-11 13:53:14',
							updateUser: '大天阵地',
						},
						{
							createTime: '2020-10-12 13:52:14',
							createUser: 'system',
							description: '我是新建的角色',
							id: '1326422312541061628',
							name: '名称',
							orgName: '大天阵地',
							updateTime: '2020-12-11 13:53:14',
							updateUser: '大天阵地',
						},
						{
							createTime: '2020-10-12 13:52:14',
							createUser: 'system',
							description: '我是新建的角色',
							id: '1322302331541061628',
							name: '名称',
							orgName: '大天阵地',
							updateTime: '2020-12-11 13:53:14',
							updateUser: '大天阵地',
						},
						{
							createTime: '2020-10-28 13:52:14',
							createUser: 'system',
							description: '我是新建的角色',
							id: '1326302331541061628',
							name: '名称',
							orgName: '大天阵地',
							updateTime: '2020-11-11 13:53:14',
							updateUser: '大天阵地',
						},
						{
							createTime: '2020-10-31 13:52:14',
							createUser: 'system',
							description: '我是新建的角色',
							id: '1326402331541061628',
							name: '名称',
							orgName: '大天阵地',
							updateTime: '2020-11-19 13:53:14',
							updateUser: '大天阵地',
						},
						{
							createTime: '2020-10-02 13:52:14',
							createUser: 'system',
							description: '我是新建的角色',
							id: '1326402331541261628',
							name: '名称',
							orgName: '大天阵地',
							updateTime: '2020-11-18 13:53:14',
							updateUser: '大天阵地',
						},
					],
					pageNo: 1,
					pageSize: 10,
					pages: 1,
					total: 1,
				},
				message: '成功',
			})
		);
	}),
	//添加角色
	rest.post('/module-user/cmsmanager/roles/save', (req, res, ctx) => {
		return res(
			ctx.json({
				code: 200,
				data: true,
				message: '成功',
			})
		);
	}),
	//批量添加角色
	rest.post('/module-user/cmsmanager/roles/save/batch', (req, res, ctx) => {
		return res(
			ctx.json({
				code: 200,
				data: true,
				message: '成功',
			})
		);
	}),
	//检验名称是否可用 true 可用 false 不可用
	rest.get('/module-user/cmsmanager/roles/unique/name', (req, res, ctx) => {
		return res(
			ctx.json({
				code: 200,
				data: true,
				message: '成功',
			})
		);
	}),
	//修改角色
	rest.post('/module-user/cmsmanager/roles/update', (req, res, ctx) => {
		return res(
			ctx.json({
				code: 200,
				data: true,
				message: '成功',
			})
		);
	}),
	//角色详情
	rest.get('/module-user/cmsmanager/roles/:id', (req, res, ctx) => {
		return res(
			ctx.json({
				code: 200,
				data: {
					createTime: '',
					createUser: '',
					description: '',
					id: 0,
					name: 'admin',
					orgId: 0,
					orgNodeIds: [],
					updateTime: '2020 11-01',
					updateUser: 'admin',
				},
				message: '成功',
			})
		);
	}),
];
