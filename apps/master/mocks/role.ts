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
							createTime: '',
							createUser: '',
							description: '',
							id: 0,
							name: '',
							orgName: '',
							updateTime: '',
							updateUser: '',
						},
						{
							createTime: '',
							createUser: '',
							description: '',
							id: 0,
							name: '',
							orgName: '',
							updateTime: '',
							updateUser: '',
						},
						{
							createTime: '',
							createUser: '',
							description: '',
							id: 0,
							name: '',
							orgName: '',
							updateTime: '',
							updateUser: '',
						},
						{
							createTime: '',
							createUser: '',
							description: '',
							id: 0,
							name: '',
							orgName: '',
							updateTime: '',
							updateUser: '',
						},
					],
					first: true,
					last: true,
					number: 0,
					numberOfElements: 0,
					pageable: {
						offset: 0,
						pageNumber: 0,
						pageSize: 0,
						paged: true,
						sort: {
							sorted: true,
							unsorted: true,
						},
						unpaged: true,
					},
					size: 0,
					sort: {
						sorted: true,
						unsorted: true,
					},
					totalElements: 0,
					totalPages: 0,
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
					name: '',
					orgId: 0,
					orgNodeIds: [],
					updateTime: '',
					updateUser: '',
				},
				message: '成功',
			})
		);
	}),
];
