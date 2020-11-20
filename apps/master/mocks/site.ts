import { rest } from 'msw';

export default [
	//新建站点
	rest.post('/module-kernel/cmsmanager/sites', (req, res, ctx) => {
		return res(
			ctx.json({
				code: 200,
				data: {},
				message: '成功',
			})
		);
	}),
	//批量新建站点
	rest.post('/module-kernel/cmsmanager/sites/batch', (req, res, ctx) => {
		return res(
			ctx.json({
				code: 200,
				data: {},
				message: '成功',
			})
		);
	}),
	//保存修改站点扩展配置
	rest.post('/module-kernel/cmsmanager/sites/cfg', (req, res, ctx) => {
		return res(
			ctx.json({
				code: 200,
				data: true,
				message: '成功',
			})
		);
	}),
	//站点扩展配置详情
	rest.get(`/module-kernel/cmsmanager/sites/cfg/:id`, (req, res, ctx) => {
		return res(
			ctx.json({
				code: 200,
				data: {
					channelContribute: 'test',
					channelNameRep: 'test',
					channelPage: 'test',
					commentAudit: 'test',
					commentCycle: 'test',
					commentLink: 'test',
					commentSet: 'test',
					contentDefinition: 'test',
					contentDefinitionType: '1',
					contentLikeLogin: 'test',
					contentNotUpdate: 'test',
					contentSign: 'test',
					contentSignColor: 'test',
					contentSignPic: 'test',
					contentSignType: 'test',
					contentSignWord: 'test',
					contentTitleCopy: '1',
					siteGray: 'test',
					siteId: 'test',
					siteLogin: 'test',
					sitePush: 'test',
					sitePushCryp: 'test',
					siteRelativePath: 'test',
					smtpCryp: 'test',
					smtpSend: 'test',
					smtpServer: 'test',
					smtpSsl: 'test',
					staticChannel: 'test',
					staticContent: '1',
					staticFtp: 'test',
					staticMemory: 'test',
					staticOss: 'test',
					staticPlatform: 'test',
					staticServer: 'test',
					staticSize: 'test',
					watermarkColor: 'test',
					watermarkLocation: 'test',
					watermarkPic: 'test',
					watermarkType: 'test',
					watermarkWord: 'test',
					watermarkWordSize: 'test',
				},
				message: '成功',
			})
		);
	}),
	//复制站点
	rest.post('/module-kernel/cmsmanager/sites/copy', (req, res, ctx) => {
		return res(
			ctx.json({
				code: 200,
				data: true,
				message: '成功',
			})
		);
	}),
	//批量删除(移入回收站)
	rest.post('/module-kernel/cmsmanager/sites/delete', (req, res, ctx) => {
		return res(
			ctx.json({
				code: 200,
				data: {},
				message: '成功',
			})
		);
	}),
	//校验站点目录，true通过，false不通过
	rest.get('/module-kernel/cmsmanager/sites/dir/unique', (req, res, ctx) => {
		return res(
			ctx.json({
				code: 200,
				data: true,
				message: '成功',
			})
		);
	}),
	//禁用站点
	rest.post('/module-kernel/cmsmanager/sites/disable/:id', (req, res, ctx) => {
		return res(
			ctx.json({
				code: 200,
				data: true,
				message: '成功',
			})
		);
	}),
	//启用站点
	rest.post('/module-kernel/cmsmanager/sites/enable/:id', (req, res, ctx) => {
		return res(
			ctx.json({
				code: 200,
				data: true,
				message: '成功',
			})
		);
	}),
	//校验站点名称，true通过，false不通过
	rest.get('/module-kernel/cmsmanager/sites/name/unique', (req, res, ctx) => {
		return res(
			ctx.json({
				code: 200,
				data: true,
				message: '成功',
			})
		);
	}),
	//回收站列表
	rest.get('/module-kernel/cmsmanager/sites/recycle', (req, res, ctx) => {
		return res(
			ctx.json({
				code: 200,
				data: {
					id: 111,
					name: 'test',
					operatTime: '2020-01-1',
					operator: 'root',
				},
				message: '成功',
			})
		);
	}),
	//回收站删除
	rest.post('/module-kernel/cmsmanager/sites/recycle/delete/:id', (req, res, ctx) => {
		return res(
			ctx.json({
				code: 200,
				data: {},
				message: '成功',
			})
		);
	}),
	//回收站还原
	rest.post('/module-kernel/cmsmanager/sites/recycle/revert/:id', (req, res, ctx) => {
		return res(
			ctx.json({
				code: 200,
				data: {},
				message: '成功',
			})
		);
	}),
	//站点排序
	rest.post('/module-kernel/cmsmanager/sites/sort', (req, res, ctx) => {
		return res(
			ctx.json({
				code: 200,
				data: {},
				message: '成功',
			})
		);
	}),
	//获取站点树
	rest.get('/module-kernel/cmsmanager/sites/tree', (req, res, ctx) => {
		return res(
			ctx.json({
				code: 200,
				data: {
					list: [
						{
							children: [
								{
									children: [
										{
											dir: '',
											domain: [],
											id: 11,
											name: '南昌市人民政府',
											status: 0,
											children: [
												{
													dir: '',
													domain: [],
													id: 111,
													name: '南昌市人民政府',
													status: 0,
													children: [],
												},
												{
													dir: '',
													domain: [],
													id: 112,
													name: '南昌市人民政府',
													status: 0,
													children: [],
												},
												{
													dir: '',
													domain: [],
													id: 113,
													name: '南昌市人民政府',
													status: 0,
													children: [],
												},
												{
													dir: '',
													domain: [],
													id: 114,
													name: '南昌市人民政府',
													status: 0,
													children: [],
												},
											],
										},
										{
											dir: '',
											domain: [],
											id: 12,
											name: '九江市人民政府',
											status: 0,
										},
										{
											dir: '',
											domain: [],
											id: 13,
											name: '景德镇市人民政府',
											status: 0,
										},
										{
											dir: '',
											domain: [],
											id: 14,
											name: '赣州市人民政府',
											status: 0,
										},
									],
									dir: '',
									domain: [],
									id: 1,
									name: '江西省人民政府',
									status: 0,
								},
								{
									children: [
										{
											dir: '',
											domain: [],
											id: 21,
											name: '长沙市人民政府',
											status: 0,
										},
										{
											dir: '',
											domain: [],
											id: 22,
											name: '株洲市人民政府',
											status: 0,
										},
										{
											dir: '',
											domain: [],
											id: 23,
											name: '景德镇市人民政府',
											status: 0,
										},
										{
											dir: '',
											domain: [],
											id: 24,
											name: '赣州市人民政府',
											status: 0,
										},
									],
									dir: '',
									domain: [],
									id: 2,
									name: '湖南省人民政府',
									status: 0,
								},
								{
									children: [
										{
											dir: '',
											domain: [],
											id: 31,
											name: '长沙市人民政府',
											status: 0,
										},
										{
											dir: '',
											domain: [],
											id: 32,
											name: '株洲市人民政府',
											status: 0,
										},
										{
											dir: '',
											domain: [],
											id: 33,
											name: '景德镇市人民政府',
											status: 0,
										},
										{
											dir: '',
											domain: [],
											id: 34,
											name: '赣州市人民政府',
											status: 0,
										},
									],
									dir: '',
									domain: [],
									id: 3,
									name: '山东省人民政府',
									status: 0,
								},
								{
									children: [
										{
											dir: '',
											domain: [],
											id: 41,
											name: '长沙市人民政府',
											status: 0,
										},
										{
											dir: '',
											domain: [],
											id: 42,
											name: '株洲市人民政府',
											status: 0,
										},
										{
											dir: '',
											domain: [],
											id: 43,
											name: '景德镇市人民政府',
											status: 0,
										},
										{
											dir: '',
											domain: [],
											id: 44,
											name: '赣州市人民政府',
											status: 0,
										},
									],
									dir: '',
									domain: [],
									id: 4,
									name: '山东省人民政府',
									status: 0,
								},
								{
									children: [
										{
											dir: '',
											domain: [],
											id: 51,
											name: '长沙市人民政府',
											status: 0,
										},
										{
											dir: '',
											domain: [],
											id: 52,
											name: '株洲市人民政府',
											status: 0,
										},
										{
											dir: '',
											domain: [],
											id: 53,
											name: '景德镇市人民政府',
											status: 0,
										},
										{
											dir: '',
											domain: [],
											id: 54,
											name: '赣州市人民政府',
											status: 0,
										},
									],
									dir: '',
									domain: [],
									id: 5,
									name: '山东省人民政府',
									status: 0,
								},
							],
							dir: '',
							domain: [],
							id: 0,
							name: '中华人民共和国',
							status: 0,
						},
					],
					commons: [
						{
							dir: '',
							domain: [],
							id: 52,
							name: '株洲市人民政府',
							status: 0,
						},
						{
							dir: '',
							domain: [],
							id: 53,
							name: '景德镇市人民政府',
							status: 0,
						},
						{
							dir: '',
							domain: [],
							id: 54,
							name: '赣州市人民政府',
							status: 0,
						},
					],
					size: 26,
				},
				message: '成功',
			})
		);
	}),
	//修改站点
	rest.get('/module-kernel/cmsmanager/sites/update', (req, res, ctx) => {
		return res(
			ctx.json({
				code: 200,
				data: {},
				message: '成功',
			})
		);
	}),
	//站点详情
	rest.get('/module-kernel/cmsmanager/sites/:id', (req, res, ctx) => {
		return res(
			ctx.json({
				code: 200,
				data: {
					desc: '',
					dir: '',
					domain: [],
					faviconUrl: '',
					id: 0,
					name: '',
					parentId: 1,
					previewUrl: '',
					seoDesc: '',
					seoKeyWord: '',
					seoTitle: '',
					status: 0,
				},
				message: '成功',
			})
		);
	}),
];
