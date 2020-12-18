import { rest } from 'msw';

export default [
	//新增修改站点权限数据---阵地
	rest.post('/module-user/cmsmanager/auth/site/org', (req, res, ctx) => {
		return res(
			ctx.json({
				code: 200,
				data: true,
				message: '成功',
			})
		);
	}),
	//根据阵地id获取站点权限数据
	rest.get(`/module-user/cmsmanager/auth/site/org/:id`, (req, res, ctx) => {
		return res(
			ctx.json({
				code: 200,
				data: {
					id: 0,
					sites: [
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
															optional: 0,
															selected: 0,
														},
														key4: {
															operation: 4,
															optional: 1,
															selected: 0,
														},
													},
													parentId: '1325688865397125233',
													siteId: '13241121314124121226',
													siteName: '金磊科技3-2-2',
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
															optional: 1,
															selected: 0,
														},
														key4: {
															operation: 4,
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
															selected: 0,
														},
														key2: {
															operation: 2,
															optional: 1,
															selected: 0,
														},
														key0: {
															operation: 0,
															optional: 0,
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
															optional: 0,
															selected: 0,
														},
														key4: {
															operation: 4,
															optional: 1,
															selected: 0,
														},
													},
													parentId: '1325688865397125233',
													siteId: '1325689121213121145826',
													siteName: '金磊科技3-2-6',
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
															optional: 0,
															selected: 0,
														},
														key4: {
															operation: 4,
															optional: 1,
															selected: 0,
														},
													},
													parentId: '132568886539712000',
													siteId: '13241214124121000',
													siteName: '金磊科技3-2-7',
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
															optional: 0,
															selected: 0,
														},
														key4: {
															operation: 4,
															optional: 1,
															selected: 0,
														},
													},
													parentId: '1325688865397125233',
													siteId: '13241214124121001',
													siteName: '金磊科技3-2-8',
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
															optional: 0,
															selected: 0,
														},
														key4: {
															operation: 4,
															optional: 1,
															selected: 0,
														},
													},
													parentId: '1325688865397125233',
													siteId: '13241214124120003',
													siteName: '金磊科技3-2-9',
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
															optional: 0,
															selected: 0,
														},
														key4: {
															operation: 4,
															optional: 1,
															selected: 0,
														},
													},
													parentId: '1325688865397125233',
													siteId: '13241214124120004',
													siteName: '金磊科技3-2-10',
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
															optional: 0,
															selected: 0,
														},
														key4: {
															operation: 4,
															optional: 1,
															selected: 0,
														},
													},
													parentId: '1325688865397125233',
													siteId: '13241214124120005',
													siteName: '金磊科技3-2-11',
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
															optional: 0,
															selected: 0,
														},
														key4: {
															operation: 4,
															optional: 1,
															selected: 0,
														},
													},
													parentId: '1325688865397125233',
													siteId: '13241214124120006',
													siteName: '金磊科技3-2-12',
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
															optional: 0,
															selected: 0,
														},
														key4: {
															operation: 4,
															optional: 1,
															selected: 0,
														},
													},
													parentId: '1325688865397125233',
													siteId: '13241214124120007',
													siteName: '金磊科技3-2-13',
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
															optional: 0,
															selected: 0,
														},
														key4: {
															operation: 4,
															optional: 1,
															selected: 0,
														},
													},
													parentId: '1325688865397125233',
													siteId: '13241214124120008',
													siteName: '金磊科技3-2-14',
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
															optional: 0,
															selected: 0,
														},
														key4: {
															operation: 4,
															optional: 1,
															selected: 0,
														},
													},
													parentId: '1325688865397125233',
													siteId: '13241214124120009',
													siteName: '金磊科技3-2-15',
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
															optional: 0,
															selected: 0,
														},
														key4: {
															operation: 4,
															optional: 1,
															selected: 0,
														},
													},
													parentId: '1325688865397125233',
													siteId: '13241214124120010',
													siteName: '金磊科技3-2-16',
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
															optional: 0,
															selected: 0,
														},
														key4: {
															operation: 4,
															optional: 1,
															selected: 0,
														},
													},
													parentId: '1325688865397125233',
													siteId: '13241214124120011',
													siteName: '金磊科技3-2-17',
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
															optional: 0,
															selected: 0,
														},
														key4: {
															operation: 4,
															optional: 1,
															selected: 0,
														},
													},
													parentId: '1325688865397125233',
													siteId: '1212312131213',
													siteName: '金磊科技3-2-18',
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
											optional: 0,
											selected: 0,
										},
										key4: {
											operation: 4,
											optional: 1,
											selected: 0,
										},
									},
									parentId: 1,
									siteId: '132494402754659111',
									siteName: '金磊科技3',
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
													},
													parentId: '1325688865397125233',
													siteId: '132514121345826',
													siteName: '金磊科技4-1-1',
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
													},
													parentId: '1325688865397125233',
													siteId: '1325142134121121226',
													siteName: '金磊科技4-1-2',
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
													},
													parentId: '1325688865397125233',
													siteId: '1325614213826',
													siteName: '金磊科技4-1-3',
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
													},
													parentId: '1325612311397125233',
													siteId: '131421311245826',
													siteName: '金磊科技4-1-4',
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
													},
													parentId: '13256888621125233',
													siteId: '13256413121412126',
													siteName: '金磊科技4-1-5',
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
													},
													parentId: '1325688865397125233',
													siteId: '1325621312121145826',
													siteName: '金磊科技4-1-6',
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
											},
											parentId: '132494121546599425',
											siteId: '13231221315233',
											siteName: '金磊科技4-1',
											flag: false,
										},
										{
											children: [
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
													},
													parentId: '1325688865397125233',
													siteId: '1321213124221145826',
													siteName: '金磊科技4-2-1',
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
															optional: 0,
															selected: 0,
														},
														key4: {
															operation: 4,
															optional: 1,
															selected: 0,
														},
													},
													parentId: '1325688865397125233',
													siteId: '13212324124121226',
													siteName: '金磊科技4-2-2',
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
													},
													parentId: '1325688865397125233',
													siteId: '1321132121325826',
													siteName: '金磊科技4-2-3',
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
															optional: 1,
															selected: 0,
														},
														key4: {
															operation: 4,
															optional: 1,
															selected: 0,
														},
													},
													parentId: '1325612311397125233',
													siteId: '13312213121245826',
													siteName: '金磊科技4-2-4',
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
													},
													parentId: '13256888621125233',
													siteId: '13252113211412126',
													siteName: '金磊科技4-2-5',
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
															optional: 0,
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
															optional: 0,
															selected: 0,
														},
														key4: {
															operation: 4,
															optional: 1,
															selected: 0,
														},
													},
													parentId: '1325688865397125233',
													siteId: '13256892112121145826',
													siteName: '金磊科技4-2-6',
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
															optional: 0,
															selected: 0,
														},
														key4: {
															operation: 4,
															optional: 1,
															selected: 0,
														},
													},
													parentId: '132568886539712000',
													siteId: '13241212112121000',
													siteName: '金磊科技4-2-7',
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
															optional: 0,
															selected: 0,
														},
														key4: {
															operation: 4,
															optional: 1,
															selected: 0,
														},
													},
													parentId: '1325688865397125233',
													siteId: '1324122131121001',
													siteName: '金磊科技4-2-8',
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
															optional: 0,
															selected: 0,
														},
														key4: {
															operation: 4,
															optional: 1,
															selected: 0,
														},
													},
													parentId: '1325688865397125233',
													siteId: '13241212121220003',
													siteName: '金磊科技4-2-9',
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
															optional: 0,
															selected: 0,
														},
														key4: {
															operation: 4,
															optional: 1,
															selected: 0,
														},
													},
													parentId: '1325688865397125233',
													siteId: '132412141241010004',
													siteName: '金磊科技4-2-10',
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
															optional: 0,
															selected: 0,
														},
														key4: {
															operation: 4,
															optional: 1,
															selected: 0,
														},
													},
													parentId: '1325688865397125233',
													siteId: '13221214124120005',
													siteName: '金磊科技4-2-11',
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
															optional: 0,
															selected: 0,
														},
														key4: {
															operation: 4,
															optional: 1,
															selected: 0,
														},
													},
													parentId: '1325688865397125233',
													siteId: '132412142114120006',
													siteName: '金磊科技4-2-12',
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
															optional: 0,
															selected: 0,
														},
														key4: {
															operation: 4,
															optional: 1,
															selected: 0,
														},
													},
													parentId: '1325688865397125233',
													siteId: '1321114124120007',
													siteName: '金磊科技4-2-13',
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
															optional: 0,
															selected: 0,
														},
														key4: {
															operation: 4,
															optional: 1,
															selected: 0,
														},
													},
													parentId: '1325688865397125233',
													siteId: '13241121213008',
													siteName: '金磊科技4-2-14',
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
															optional: 0,
															selected: 0,
														},
														key4: {
															operation: 4,
															optional: 1,
															selected: 0,
														},
													},
													parentId: '1325688865397125233',
													siteId: '13241212121120009',
													siteName: '金磊科技4-2-15',
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
															optional: 0,
															selected: 0,
														},
														key4: {
															operation: 4,
															optional: 1,
															selected: 0,
														},
													},
													parentId: '1325688865397125233',
													siteId: '132412121220010',
													siteName: '金磊科技4-2-16',
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
															optional: 0,
															selected: 0,
														},
														key4: {
															operation: 4,
															optional: 1,
															selected: 0,
														},
													},
													parentId: '1325688865397125233',
													siteId: '132412121320011',
													siteName: '金磊科技4-2-17',
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
															optional: 0,
															selected: 0,
														},
														key4: {
															operation: 4,
															optional: 1,
															selected: 0,
														},
													},
													parentId: '1325688865397125233',
													siteId: '13241213121226',
													siteName: '金磊科技4-2-18',
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
											},
											parentId: '1324944027546121425',
											siteId: '132568896210108121',
											siteName: '金磊科技4-2',
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
											optional: 0,
											selected: 0,
										},
										key4: {
											operation: 4,
											optional: 1,
											selected: 0,
										},
									},
									parentId: 1,
									siteId: '132494402121311',
									siteName: '金磊科技4',
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
													},
													parentId: '1325688865397125233',
													siteId: '1000689734121145826',
													siteName: '金磊科技5-1-1',
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
													},
													parentId: '1325688865397125233',
													siteId: '100089734121121226',
													siteName: '金磊科技5-1-2',
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
													},
													parentId: '1325688865397125233',
													siteId: '10009734121325826',
													siteName: '金磊科技5-1-3',
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
													},
													parentId: '1325612311397125233',
													siteId: '10006897131245826',
													siteName: '金磊科技5-1-4',
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
													},
													parentId: '13256888621125233',
													siteId: '100097341211412126',
													siteName: '金磊科技5-1-5',
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
													},
													parentId: '1325688865397125233',
													siteId: '1000912112121145826',
													siteName: '金磊科技5-1-6',
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
											},
											parentId: '132494121546599425',
											siteId: '132510001215233',
											siteName: '金磊科技5-1',
											flag: false,
										},
										{
											children: [
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
													},
													parentId: '1325688865397125233',
													siteId: '100041214221145826',
													siteName: '金磊科技5-2-1',
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
															optional: 0,
															selected: 0,
														},
														key4: {
															operation: 4,
															optional: 1,
															selected: 0,
														},
													},
													parentId: '1325688865397125233',
													siteId: '10004124121226',
													siteName: '金磊科技5-2-2',
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
													},
													parentId: '1325688865397125233',
													siteId: '100014314121325826',
													siteName: '金磊科技5-2-3',
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
															optional: 1,
															selected: 0,
														},
														key4: {
															operation: 4,
															optional: 1,
															selected: 0,
														},
													},
													parentId: '1325612311397125233',
													siteId: '100097131245826',
													siteName: '金磊科技5-2-4',
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
													},
													parentId: '13256888621125233',
													siteId: '100041211412126',
													siteName: '金磊科技5-2-5',
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
															optional: 0,
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
															optional: 0,
															selected: 0,
														},
														key4: {
															operation: 4,
															optional: 1,
															selected: 0,
														},
													},
													parentId: '1325688865397125233',
													siteId: '11000121145826',
													siteName: '金磊科技5-2-6',
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
															optional: 0,
															selected: 0,
														},
														key4: {
															operation: 4,
															optional: 1,
															selected: 0,
														},
													},
													parentId: '132568886539712000',
													siteId: '13100021000',
													siteName: '金磊科技5-2-7',
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
															optional: 0,
															selected: 0,
														},
														key4: {
															operation: 4,
															optional: 1,
															selected: 0,
														},
													},
													parentId: '1325688865397125233',
													siteId: '13210001001',
													siteName: '金磊科技5-2-8',
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
															optional: 0,
															selected: 0,
														},
														key4: {
															operation: 4,
															optional: 1,
															selected: 0,
														},
													},
													parentId: '1325688865397125233',
													siteId: '13100021123',
													siteName: '金磊科技5-2-9',
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
															optional: 0,
															selected: 0,
														},
														key4: {
															operation: 4,
															optional: 1,
															selected: 0,
														},
													},
													parentId: '1325688865397125233',
													siteId: '1324121000120004',
													siteName: '金磊科技5-2-10',
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
															optional: 0,
															selected: 0,
														},
														key4: {
															operation: 4,
															optional: 1,
															selected: 0,
														},
													},
													parentId: '1325688865397125233',
													siteId: '13210004124120005',
													siteName: '金磊科技5-2-11',
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
															optional: 0,
															selected: 0,
														},
														key4: {
															operation: 4,
															optional: 1,
															selected: 0,
														},
													},
													parentId: '1325688865397125233',
													siteId: '13210004124120006',
													siteName: '金磊科技5-2-12',
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
															optional: 0,
															selected: 0,
														},
														key4: {
															operation: 4,
															optional: 1,
															selected: 0,
														},
													},
													parentId: '1325688865397125233',
													siteId: '132410004120007',
													siteName: '金磊科技5-2-13',
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
															optional: 0,
															selected: 0,
														},
														key4: {
															operation: 4,
															optional: 1,
															selected: 0,
														},
													},
													parentId: '1325688865397125233',
													siteId: '1324110004120008',
													siteName: '金磊科技5-2-14',
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
															optional: 0,
															selected: 0,
														},
														key4: {
															operation: 4,
															optional: 1,
															selected: 0,
														},
													},
													parentId: '1325688865397125233',
													siteId: '13241100012009',
													siteName: '金磊科技5-2-15',
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
															optional: 0,
															selected: 0,
														},
														key4: {
															operation: 4,
															optional: 1,
															selected: 0,
														},
													},
													parentId: '1325688865397125233',
													siteId: '132100024120010',
													siteName: '金磊科技5-2-16',
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
															optional: 0,
															selected: 0,
														},
														key4: {
															operation: 4,
															optional: 1,
															selected: 0,
														},
													},
													parentId: '1325688865397125233',
													siteId: '1324110004120011',
													siteName: '金磊科技5-2-17',
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
															optional: 0,
															selected: 0,
														},
														key4: {
															operation: 4,
															optional: 1,
															selected: 0,
														},
													},
													parentId: '1325688865397125233',
													siteId: '13241100024121226',
													siteName: '金磊科技5-2-18',
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
											},
											parentId: '1324944027546121425',
											siteId: '1325610001221',
											siteName: '金磊科技5-2',
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
											optional: 0,
											selected: 0,
										},
										key4: {
											operation: 4,
											optional: 1,
											selected: 0,
										},
									},
									parentId: 1,
									siteId: '132494402159111',
									siteName: '金磊科技5',
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
							},
							parentId: 1,
							siteId: '0',
							siteName: '增量站点',
							flag: false,
						},
					],
				},
				message: '成功',
			})
		);
	}),
	//新增修改站点权限数据---角色
	rest.post('/module-user/cmsmanager/auth/site/role', (req, res, ctx) => {
		return res(
			ctx.json({
				code: 200,
				data: true,
				message: '成功',
			})
		);
	}),
	//根据角色id获取站点权限数据
	rest.get('/module-user/cmsmanager/auth/site/role/:id', (req, res, ctx) => {
		return res(
			ctx.json({
				code: 200,
				data: {
					id: 0,
					sites: [
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
															optional: 0,
															selected: 0,
														},
														key4: {
															operation: 4,
															optional: 1,
															selected: 0,
														},
													},
													parentId: '1325688865397125233',
													siteId: '13241121314124121226',
													siteName: '金磊科技3-2-2',
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
															optional: 1,
															selected: 0,
														},
														key4: {
															operation: 4,
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
															selected: 0,
														},
														key2: {
															operation: 2,
															optional: 1,
															selected: 0,
														},
														key0: {
															operation: 0,
															optional: 0,
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
															optional: 0,
															selected: 0,
														},
														key4: {
															operation: 4,
															optional: 1,
															selected: 0,
														},
													},
													parentId: '1325688865397125233',
													siteId: '1325689121213121145826',
													siteName: '金磊科技3-2-6',
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
															optional: 0,
															selected: 0,
														},
														key4: {
															operation: 4,
															optional: 1,
															selected: 0,
														},
													},
													parentId: '132568886539712000',
													siteId: '13241214124121000',
													siteName: '金磊科技3-2-7',
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
															optional: 0,
															selected: 0,
														},
														key4: {
															operation: 4,
															optional: 1,
															selected: 0,
														},
													},
													parentId: '1325688865397125233',
													siteId: '13241214124121001',
													siteName: '金磊科技3-2-8',
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
															optional: 0,
															selected: 0,
														},
														key4: {
															operation: 4,
															optional: 1,
															selected: 0,
														},
													},
													parentId: '1325688865397125233',
													siteId: '13241214124120003',
													siteName: '金磊科技3-2-9',
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
															optional: 0,
															selected: 0,
														},
														key4: {
															operation: 4,
															optional: 1,
															selected: 0,
														},
													},
													parentId: '1325688865397125233',
													siteId: '13241214124120004',
													siteName: '金磊科技3-2-10',
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
															optional: 0,
															selected: 0,
														},
														key4: {
															operation: 4,
															optional: 1,
															selected: 0,
														},
													},
													parentId: '1325688865397125233',
													siteId: '13241214124120005',
													siteName: '金磊科技3-2-11',
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
															optional: 0,
															selected: 0,
														},
														key4: {
															operation: 4,
															optional: 1,
															selected: 0,
														},
													},
													parentId: '1325688865397125233',
													siteId: '13241214124120006',
													siteName: '金磊科技3-2-12',
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
															optional: 0,
															selected: 0,
														},
														key4: {
															operation: 4,
															optional: 1,
															selected: 0,
														},
													},
													parentId: '1325688865397125233',
													siteId: '13241214124120007',
													siteName: '金磊科技3-2-13',
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
															optional: 0,
															selected: 0,
														},
														key4: {
															operation: 4,
															optional: 1,
															selected: 0,
														},
													},
													parentId: '1325688865397125233',
													siteId: '13241214124120008',
													siteName: '金磊科技3-2-14',
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
															optional: 0,
															selected: 0,
														},
														key4: {
															operation: 4,
															optional: 1,
															selected: 0,
														},
													},
													parentId: '1325688865397125233',
													siteId: '13241214124120009',
													siteName: '金磊科技3-2-15',
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
															optional: 0,
															selected: 0,
														},
														key4: {
															operation: 4,
															optional: 1,
															selected: 0,
														},
													},
													parentId: '1325688865397125233',
													siteId: '13241214124120010',
													siteName: '金磊科技3-2-16',
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
															optional: 0,
															selected: 0,
														},
														key4: {
															operation: 4,
															optional: 1,
															selected: 0,
														},
													},
													parentId: '1325688865397125233',
													siteId: '13241214124120011',
													siteName: '金磊科技3-2-17',
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
															optional: 0,
															selected: 0,
														},
														key4: {
															operation: 4,
															optional: 1,
															selected: 0,
														},
													},
													parentId: '1325688865397125233',
													siteId: '1212312131213',
													siteName: '金磊科技3-2-18',
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
											optional: 0,
											selected: 0,
										},
										key4: {
											operation: 4,
											optional: 1,
											selected: 0,
										},
									},
									parentId: 1,
									siteId: '132494402754659111',
									siteName: '金磊科技3',
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
													},
													parentId: '1325688865397125233',
													siteId: '132514121345826',
													siteName: '金磊科技4-1-1',
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
													},
													parentId: '1325688865397125233',
													siteId: '1325142134121121226',
													siteName: '金磊科技4-1-2',
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
													},
													parentId: '1325688865397125233',
													siteId: '1325614213826',
													siteName: '金磊科技4-1-3',
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
													},
													parentId: '1325612311397125233',
													siteId: '131421311245826',
													siteName: '金磊科技4-1-4',
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
													},
													parentId: '13256888621125233',
													siteId: '13256413121412126',
													siteName: '金磊科技4-1-5',
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
													},
													parentId: '1325688865397125233',
													siteId: '1325621312121145826',
													siteName: '金磊科技4-1-6',
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
											},
											parentId: '132494121546599425',
											siteId: '13231221315233',
											siteName: '金磊科技4-1',
											flag: false,
										},
										{
											children: [
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
													},
													parentId: '1325688865397125233',
													siteId: '1321213124221145826',
													siteName: '金磊科技4-2-1',
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
															optional: 0,
															selected: 0,
														},
														key4: {
															operation: 4,
															optional: 1,
															selected: 0,
														},
													},
													parentId: '1325688865397125233',
													siteId: '13212324124121226',
													siteName: '金磊科技4-2-2',
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
													},
													parentId: '1325688865397125233',
													siteId: '1321132121325826',
													siteName: '金磊科技4-2-3',
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
															optional: 1,
															selected: 0,
														},
														key4: {
															operation: 4,
															optional: 1,
															selected: 0,
														},
													},
													parentId: '1325612311397125233',
													siteId: '13312213121245826',
													siteName: '金磊科技4-2-4',
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
													},
													parentId: '13256888621125233',
													siteId: '13252113211412126',
													siteName: '金磊科技4-2-5',
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
															optional: 0,
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
															optional: 0,
															selected: 0,
														},
														key4: {
															operation: 4,
															optional: 1,
															selected: 0,
														},
													},
													parentId: '1325688865397125233',
													siteId: '13256892112121145826',
													siteName: '金磊科技4-2-6',
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
															optional: 0,
															selected: 0,
														},
														key4: {
															operation: 4,
															optional: 1,
															selected: 0,
														},
													},
													parentId: '132568886539712000',
													siteId: '13241212112121000',
													siteName: '金磊科技4-2-7',
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
															optional: 0,
															selected: 0,
														},
														key4: {
															operation: 4,
															optional: 1,
															selected: 0,
														},
													},
													parentId: '1325688865397125233',
													siteId: '1324122131121001',
													siteName: '金磊科技4-2-8',
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
															optional: 0,
															selected: 0,
														},
														key4: {
															operation: 4,
															optional: 1,
															selected: 0,
														},
													},
													parentId: '1325688865397125233',
													siteId: '13241212121220003',
													siteName: '金磊科技4-2-9',
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
															optional: 0,
															selected: 0,
														},
														key4: {
															operation: 4,
															optional: 1,
															selected: 0,
														},
													},
													parentId: '1325688865397125233',
													siteId: '132412141241010004',
													siteName: '金磊科技4-2-10',
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
															optional: 0,
															selected: 0,
														},
														key4: {
															operation: 4,
															optional: 1,
															selected: 0,
														},
													},
													parentId: '1325688865397125233',
													siteId: '13221214124120005',
													siteName: '金磊科技4-2-11',
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
															optional: 0,
															selected: 0,
														},
														key4: {
															operation: 4,
															optional: 1,
															selected: 0,
														},
													},
													parentId: '1325688865397125233',
													siteId: '132412142114120006',
													siteName: '金磊科技4-2-12',
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
															optional: 0,
															selected: 0,
														},
														key4: {
															operation: 4,
															optional: 1,
															selected: 0,
														},
													},
													parentId: '1325688865397125233',
													siteId: '1321114124120007',
													siteName: '金磊科技4-2-13',
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
															optional: 0,
															selected: 0,
														},
														key4: {
															operation: 4,
															optional: 1,
															selected: 0,
														},
													},
													parentId: '1325688865397125233',
													siteId: '13241121213008',
													siteName: '金磊科技4-2-14',
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
															optional: 0,
															selected: 0,
														},
														key4: {
															operation: 4,
															optional: 1,
															selected: 0,
														},
													},
													parentId: '1325688865397125233',
													siteId: '13241212121120009',
													siteName: '金磊科技4-2-15',
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
															optional: 0,
															selected: 0,
														},
														key4: {
															operation: 4,
															optional: 1,
															selected: 0,
														},
													},
													parentId: '1325688865397125233',
													siteId: '132412121220010',
													siteName: '金磊科技4-2-16',
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
															optional: 0,
															selected: 0,
														},
														key4: {
															operation: 4,
															optional: 1,
															selected: 0,
														},
													},
													parentId: '1325688865397125233',
													siteId: '132412121320011',
													siteName: '金磊科技4-2-17',
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
															optional: 0,
															selected: 0,
														},
														key4: {
															operation: 4,
															optional: 1,
															selected: 0,
														},
													},
													parentId: '1325688865397125233',
													siteId: '13241213121226',
													siteName: '金磊科技4-2-18',
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
											},
											parentId: '1324944027546121425',
											siteId: '132568896210108121',
											siteName: '金磊科技4-2',
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
											optional: 0,
											selected: 0,
										},
										key4: {
											operation: 4,
											optional: 1,
											selected: 0,
										},
									},
									parentId: 1,
									siteId: '132494402121311',
									siteName: '金磊科技4',
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
													},
													parentId: '1325688865397125233',
													siteId: '1000689734121145826',
													siteName: '金磊科技5-1-1',
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
													},
													parentId: '1325688865397125233',
													siteId: '100089734121121226',
													siteName: '金磊科技5-1-2',
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
													},
													parentId: '1325688865397125233',
													siteId: '10009734121325826',
													siteName: '金磊科技5-1-3',
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
													},
													parentId: '1325612311397125233',
													siteId: '10006897131245826',
													siteName: '金磊科技5-1-4',
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
													},
													parentId: '13256888621125233',
													siteId: '100097341211412126',
													siteName: '金磊科技5-1-5',
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
													},
													parentId: '1325688865397125233',
													siteId: '1000912112121145826',
													siteName: '金磊科技5-1-6',
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
											},
											parentId: '132494121546599425',
											siteId: '132510001215233',
											siteName: '金磊科技5-1',
											flag: false,
										},
										{
											children: [
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
													},
													parentId: '1325688865397125233',
													siteId: '100041214221145826',
													siteName: '金磊科技5-2-1',
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
															optional: 0,
															selected: 0,
														},
														key4: {
															operation: 4,
															optional: 1,
															selected: 0,
														},
													},
													parentId: '1325688865397125233',
													siteId: '10004124121226',
													siteName: '金磊科技5-2-2',
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
													},
													parentId: '1325688865397125233',
													siteId: '100014314121325826',
													siteName: '金磊科技5-2-3',
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
															optional: 1,
															selected: 0,
														},
														key4: {
															operation: 4,
															optional: 1,
															selected: 0,
														},
													},
													parentId: '1325612311397125233',
													siteId: '100097131245826',
													siteName: '金磊科技5-2-4',
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
													},
													parentId: '13256888621125233',
													siteId: '100041211412126',
													siteName: '金磊科技5-2-5',
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
															optional: 0,
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
															optional: 0,
															selected: 0,
														},
														key4: {
															operation: 4,
															optional: 1,
															selected: 0,
														},
													},
													parentId: '1325688865397125233',
													siteId: '11000121145826',
													siteName: '金磊科技5-2-6',
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
															optional: 0,
															selected: 0,
														},
														key4: {
															operation: 4,
															optional: 1,
															selected: 0,
														},
													},
													parentId: '132568886539712000',
													siteId: '13100021000',
													siteName: '金磊科技5-2-7',
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
															optional: 0,
															selected: 0,
														},
														key4: {
															operation: 4,
															optional: 1,
															selected: 0,
														},
													},
													parentId: '1325688865397125233',
													siteId: '13210001001',
													siteName: '金磊科技5-2-8',
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
															optional: 0,
															selected: 0,
														},
														key4: {
															operation: 4,
															optional: 1,
															selected: 0,
														},
													},
													parentId: '1325688865397125233',
													siteId: '13100021123',
													siteName: '金磊科技5-2-9',
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
															optional: 0,
															selected: 0,
														},
														key4: {
															operation: 4,
															optional: 1,
															selected: 0,
														},
													},
													parentId: '1325688865397125233',
													siteId: '1324121000120004',
													siteName: '金磊科技5-2-10',
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
															optional: 0,
															selected: 0,
														},
														key4: {
															operation: 4,
															optional: 1,
															selected: 0,
														},
													},
													parentId: '1325688865397125233',
													siteId: '13210004124120005',
													siteName: '金磊科技5-2-11',
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
															optional: 0,
															selected: 0,
														},
														key4: {
															operation: 4,
															optional: 1,
															selected: 0,
														},
													},
													parentId: '1325688865397125233',
													siteId: '13210004124120006',
													siteName: '金磊科技5-2-12',
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
															optional: 0,
															selected: 0,
														},
														key4: {
															operation: 4,
															optional: 1,
															selected: 0,
														},
													},
													parentId: '1325688865397125233',
													siteId: '132410004120007',
													siteName: '金磊科技5-2-13',
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
															optional: 0,
															selected: 0,
														},
														key4: {
															operation: 4,
															optional: 1,
															selected: 0,
														},
													},
													parentId: '1325688865397125233',
													siteId: '1324110004120008',
													siteName: '金磊科技5-2-14',
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
															optional: 0,
															selected: 0,
														},
														key4: {
															operation: 4,
															optional: 1,
															selected: 0,
														},
													},
													parentId: '1325688865397125233',
													siteId: '13241100012009',
													siteName: '金磊科技5-2-15',
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
															optional: 0,
															selected: 0,
														},
														key4: {
															operation: 4,
															optional: 1,
															selected: 0,
														},
													},
													parentId: '1325688865397125233',
													siteId: '132100024120010',
													siteName: '金磊科技5-2-16',
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
															optional: 0,
															selected: 0,
														},
														key4: {
															operation: 4,
															optional: 1,
															selected: 0,
														},
													},
													parentId: '1325688865397125233',
													siteId: '1324110004120011',
													siteName: '金磊科技5-2-17',
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
															optional: 0,
															selected: 0,
														},
														key4: {
															operation: 4,
															optional: 1,
															selected: 0,
														},
													},
													parentId: '1325688865397125233',
													siteId: '13241100024121226',
													siteName: '金磊科技5-2-18',
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
											},
											parentId: '1324944027546121425',
											siteId: '1325610001221',
											siteName: '金磊科技5-2',
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
											optional: 0,
											selected: 0,
										},
										key4: {
											operation: 4,
											optional: 1,
											selected: 0,
										},
									},
									parentId: 1,
									siteId: '132494402159111',
									siteName: '金磊科技5',
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
							},
							parentId: 1,
							siteId: '0',
							siteName: '增量站点',
							flag: false,
						},
					],
				},
				message: '成功',
			})
		);
	}),
	//新增修改站点权限数据---用户
	rest.post('/module-user/cmsmanager/auth/site/user', (req, res, ctx) => {
		return res(
			ctx.json({
				code: 200,
				data: true,
				message: '成功',
			})
		);
	}),
	//根据阵地id获取站点权限数据---用户
	rest.get(`/module-user/cmsmanager/auth/site/user/:id`, (req, res, ctx) => {
		return res(
			ctx.json({
				code: 200,
				sites: [
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
														optional: 0,
														selected: 0,
													},
													key4: {
														operation: 4,
														optional: 1,
														selected: 0,
													},
												},
												parentId: '1325688865397125233',
												siteId: '131214124121226',
												siteName: '金磊科技3-2-2',
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
														optional: 1,
														selected: 0,
													},
													key4: {
														operation: 4,
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
														selected: 0,
													},
													key2: {
														operation: 2,
														optional: 1,
														selected: 0,
													},
													key0: {
														operation: 0,
														optional: 0,
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
														optional: 0,
														selected: 0,
													},
													key4: {
														operation: 4,
														optional: 1,
														selected: 0,
													},
												},
												parentId: '1325688865397125233',
												siteId: '1325689121213121145826',
												siteName: '金磊科技3-2-6',
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
														optional: 0,
														selected: 0,
													},
													key4: {
														operation: 4,
														optional: 1,
														selected: 0,
													},
												},
												parentId: '132568886539712000',
												siteId: '13241214124121000',
												siteName: '金磊科技3-2-7',
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
														optional: 0,
														selected: 0,
													},
													key4: {
														operation: 4,
														optional: 1,
														selected: 0,
													},
												},
												parentId: '1325688865397125233',
												siteId: '13241214124121001',
												siteName: '金磊科技3-2-8',
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
														optional: 0,
														selected: 0,
													},
													key4: {
														operation: 4,
														optional: 1,
														selected: 0,
													},
												},
												parentId: '1325688865397125233',
												siteId: '13241214124120003',
												siteName: '金磊科技3-2-9',
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
														optional: 0,
														selected: 0,
													},
													key4: {
														operation: 4,
														optional: 1,
														selected: 0,
													},
												},
												parentId: '1325688865397125233',
												siteId: '13241214124120004',
												siteName: '金磊科技3-2-10',
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
														optional: 0,
														selected: 0,
													},
													key4: {
														operation: 4,
														optional: 1,
														selected: 0,
													},
												},
												parentId: '1325688865397125233',
												siteId: '13241214124120005',
												siteName: '金磊科技3-2-11',
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
														optional: 0,
														selected: 0,
													},
													key4: {
														operation: 4,
														optional: 1,
														selected: 0,
													},
												},
												parentId: '1325688865397125233',
												siteId: '13241214124120006',
												siteName: '金磊科技3-2-12',
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
														optional: 0,
														selected: 0,
													},
													key4: {
														operation: 4,
														optional: 1,
														selected: 0,
													},
												},
												parentId: '1325688865397125233',
												siteId: '13241214124120007',
												siteName: '金磊科技3-2-13',
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
														optional: 0,
														selected: 0,
													},
													key4: {
														operation: 4,
														optional: 1,
														selected: 0,
													},
												},
												parentId: '1325688865397125233',
												siteId: '13241214124120008',
												siteName: '金磊科技3-2-14',
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
														optional: 0,
														selected: 0,
													},
													key4: {
														operation: 4,
														optional: 1,
														selected: 0,
													},
												},
												parentId: '1325688865397125233',
												siteId: '13241214124120009',
												siteName: '金磊科技3-2-15',
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
														optional: 0,
														selected: 0,
													},
													key4: {
														operation: 4,
														optional: 1,
														selected: 0,
													},
												},
												parentId: '1325688865397125233',
												siteId: '13241214124120010',
												siteName: '金磊科技3-2-16',
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
														optional: 0,
														selected: 0,
													},
													key4: {
														operation: 4,
														optional: 1,
														selected: 0,
													},
												},
												parentId: '1325688865397125233',
												siteId: '13241214124120011',
												siteName: '金磊科技3-2-17',
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
														optional: 0,
														selected: 0,
													},
													key4: {
														operation: 4,
														optional: 1,
														selected: 0,
													},
												},
												parentId: '1325688865397125233',
												siteId: '13241214124121226',
												siteName: '金磊科技3-2-18',
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
										optional: 0,
										selected: 0,
									},
									key4: {
										operation: 4,
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
								optional: 1,
								selected: 1,
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
];
