import { rest } from 'msw';

export default [
	//保存区域
	rest.post('/module-infra/cmsmanager/area', (req, res, ctx) => {
		return res(
			ctx.json({
				code: 200,
				data: true,
				message: '成功',
			})
		);
	}),
	//删除区域
	rest.post('/module-infra/cmsmanager/area/delete', (req, res, ctx) => {
		return res(
			ctx.json({
				code: 200,
				data: true,
				message: '成功',
			})
		);
	}),
	//禁用区域
	rest.post('/module-infra/cmsmanager/area/disable/:id', (req, res, ctx) => {
		return res(
			ctx.json({
				code: 200,
				data: true,
				message: '成功',
			})
		);
	}),
	//启用区域
	rest.post('/module-infra/cmsmanager/area/enable/:id', (req, res, ctx) => {
		return res(
			ctx.json({
				code: 200,
				data: true,
				message: '成功',
			})
		);
	}),
	//区域列表
	rest.get('/module-infra/cmsmanager/area/list', (req, res, ctx) => {
		return res(
			ctx.json({
				code: 200,
				data: [
					{
						areaCode: '110000',
						areaDictCode: '1',
						areaName: '北京',
						child: false,
						createTime: '2019-03-12T10:00:10',
						id: 1,
						nodeIds: ['1'],
						parentId: '',
						remark: '',
						sortNum: 2,
						status: 1,
					},
					{
						areaCode: '120000',
						areaDictCode: '1',
						areaName: '天津',
						child: false,
						createTime: '2019-03-12T10:00:11',
						id: 2,
						nodeIds: ['2'],
						parentId: '',
						remark: '',
						sortNum: 11,
						status: 0,
					},
					{
						areaCode: '130000',
						areaDictCode: '1',
						areaName: '河北',
						child: false,
						createTime: '2019-03-12T10:00:11',
						id: 3,
						nodeIds: ['3'],
						parentId: '',
						remark: '',
						sortNum: 12,
						status: 1,
					},
					{
						areaCode: '140000',
						areaDictCode: '1',
						areaName: '山西',
						child: false,
						createTime: '2019-03-12T10:00:11',
						id: 4,
						nodeIds: ['4'],
						parentId: '',
						remark: '',
						sortNum: 13,
						status: 0,
					},
					{
						areaCode: '150000',
						areaDictCode: '1',
						areaName: '内蒙古',
						child: false,
						createTime: '2019-03-12T10:00:11',
						id: 5,
						nodeIds: ['5'],
						parentId: '',
						remark: '',
						sortNum: 14,
						status: 1,
					},
					{
						areaCode: '210000',
						areaDictCode: '1',
						areaName: '辽宁',
						child: false,
						createTime: '2019-03-12T10:00:11',
						id: 6,
						nodeIds: ['6'],
						parentId: '',
						remark: '',
						sortNum: 15,
						status: 0,
					},
					{
						areaCode: '220000',
						areaDictCode: '1',
						areaName: '吉林',
						child: false,
						createTime: '2019-03-12T10:00:12',
						id: 7,
						nodeIds: ['7'],
						parentId: '',
						remark: '',
						sortNum: 16,
						status: 1,
					},
					{
						areaCode: '230000',
						areaDictCode: '1',
						areaName: '黑龙江',
						child: false,
						createTime: '2019-03-12T10:00:12',
						id: 8,
						nodeIds: ['8'],
						parentId: '',
						remark: '',
						sortNum: 17,
						status: 0,
					},
					{
						areaCode: '310000',
						areaDictCode: '1',
						areaName: '上海',
						child: false,
						createTime: '2019-03-12T10:00:12',
						id: 9,
						nodeIds: ['9'],
						parentId: '',
						remark: '',
						sortNum: 18,
						status: 1,
					},
					{
						areaCode: '320000',
						areaDictCode: '1',
						areaName: '江苏',
						child: false,
						createTime: '2019-03-12T10:00:12',
						id: 10,
						nodeIds: ['10'],
						parentId: '',
						remark: '',
						sortNum: 19,
						status: 0,
					},
					{
						areaCode: '330000',
						areaDictCode: '1',
						areaName: '浙江',
						child: false,
						createTime: '2019-03-12T10:00:12',
						id: 11,
						nodeIds: ['11'],
						parentId: '',
						remark: '',
						sortNum: 20,
						status: 1,
					},
					{
						areaCode: '340000',
						areaDictCode: '1',
						areaName: '安徽',
						child: false,
						createTime: '2019-03-12T10:00:12',
						id: 12,
						nodeIds: ['12'],
						parentId: '',
						remark: '',
						sortNum: 21,
						status: 0,
					},
				],
				message: '成功',
			})
		);
	}),
	//排序
	rest.post('/module-infra/cmsmanager/area/sort', (req, res, ctx) => {
		return res(
			ctx.json({
				code: 200,
				data: true,
				message: '成功',
			})
		);
	}),
	//验证AreaCode是否通过, true通过，false不通过
	rest.get('/module-infra/cmsmanager/area/unique', (req, res, ctx) => {
		return res(
			ctx.json({
				code: 200,
				data: true,
				message: '成功',
			})
		);
	}),
	//修改区域
	rest.post('/module-infra/cmsmanager/area/update', (req, res, ctx) => {
		return res(
			ctx.json({
				code: 200,
				data: true,
				message: '成功',
			})
		);
	}),
	//区域详情
	rest.get('/module-infra/cmsmanager/area/:id', (req, res, ctx) => {
		return res(
			ctx.json({
				code: 200,
				data: {
					areaCode: '1',
					areaDictCode: '1',
					areaName: '江西金磊科技',
					child: '',
					createTime: '2020-12-2 11:26:08',
					id: '1296714675319382018',
					nodeIds: [],
					parentId: '江西金磊科技',
					remark: '江西金磊科技',
					sortNum: '1',
					status: 0,
				},
				message: '成功',
			})
		);
	}),
];
