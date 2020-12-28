import React, { useState } from 'react';
import { Button, Form, Input, Switch, Select, Tooltip, TreeSelect, message, Row, Col } from 'antd';
import { InfoCircleOutlined } from '@ant-design/icons';
import { BizPage, GobackButton, SaveButton, ImageUpload } from '@ionia/libs';
import { useMount, useRequest } from '@umijs/hooks';
import {
	gainSiteTreeAuth,
	createAdminSite,
	AdminSiteDTO,
	verifySiteName,
	verifySiteCatalogue,
} from '@ionia/libs/src/services/kernel';
import { AdminSiteTreeVO } from '@ionia/libs/src/services/kernel';
import { useHistory } from 'react-router-dom';
import './index.less';

const { Option } = Select;

const layout = {
	labelCol: { span: 6 },
	wrapperCol: { span: 10 },
};

const selectBefore = (
	<Select defaultValue='http://' className='select-before'>
		<Option value='http://'>http://</Option>
		<Option value='https://'>https://</Option>
	</Select>
);

const handleCreateSites = async (filed: AdminSiteDTO) => {
	const createRef = await createAdminSite(filed);
	if (createRef.code === 200) {
		message.success('新建成功');
	} else {
		message.error('新建失败');
	}
	return createRef;
};
const handleParams = (values: any) => {
	const param: AdminSiteDTO = {
		parentId: values.parentId,
		name: values.name,
		dir: values.dir,
		modelPath: values.modelPath,
		domain: values.domain,
		desc: values.desc || '',
		status: !!values.status ? 1 : 0,
		// favicon: values.favicon || '',
		favicon: '',
		seoTitle: values.seoTitle || '',
		seoKeyWord: values.seoKeyWord || '',
		seoDesc: values.seoDesc || '',
		orgId: values.orgId,
	};
	return param;
};
let uniqueNameFlag: any = null;
export default () => {
	const [form] = Form.useForm();
	const history = useHistory();
	const [siteTree, setSiteTree] = useState<AdminSiteTreeVO[]>();
	const { run: runsiteTree } = useRequest(gainSiteTreeAuth, {
		manual: true,
		onSuccess: result => {
			const loop = function (data: any) {
				return (data || []).map((r: any) => {
					if (r.children) {
						r.children = loop(r.children);
					}
					return {
						value: r.id,
						title: r.name,
						key: r.id,
						children: r.children,
						...r,
					};
				});
			};
			const tempSiteTree = loop(result.data);
			setSiteTree(tempSiteTree);
		},
	});
	useMount(() => {
		runsiteTree('');
		form.setFieldsValue({ domain: [''] });
	});
	return (
		<BizPage
			breadcrumbs={[{ name: '站点管理' }, { name: '新建' }]}
			showActions={true}
			renderActions={() => {
				return (
					<>
						<GobackButton />
						<SaveButton
							onSave={async () => {
								form.validateFields().then(async values => {
									console.log(values, '保存的数据');
									// const param: AdminSiteDTO = {
									// 	parentId: values.parentId,
									// 	name: values.name,
									// 	dir: values.dir,
									// 	modelPath: values.modelPath,
									// 	domain: values.domain,
									// 	desc: values.desc || '',
									// 	status: !!values.status ? 1 : 0,
									// 	// favicon: values.favicon || '',
									// 	favicon: '',
									// 	seoTitle: values.seoTitle || '',
									// 	seoKeyWord: values.seoKeyWord || '',
									// 	seoDesc: values.seoDesc || '',
									// 	orgId: values.orgId
									// };
									const param = handleParams(values);
									const success = await handleCreateSites(param);
									if (success.code === 200) {
										history.goBack();
									}
								});
							}}
						/>
						<Button
							type='default'
							className='io-cms-site-save-expand__but'
							onClick={() => {
								form.validateFields().then(async values => {
									const param = handleParams(values);
									const success = await handleCreateSites(param);
									if (success.code === 200) {
										history.push({
											pathname: `/system-management/site/detail/${0}`,
											state: { tabKey: '2' },
										});
									}
								});
							}}
						>
							保存并详细配置
						</Button>
						<Button
							type='default'
							className='io-cms-site-save-expand__but'
							onClick={() => {
								form.validateFields().then(async values => {
									const param = handleParams(values);
									const success = await handleCreateSites(param);
									if (success.code === 200) {
										form.resetFields();
									}
								});
							}}
						>
							保存并继续新建
						</Button>
					</>
				);
			}}
		>
			<Form form={form} className='io-site__form' {...layout}>
				<Form.Item
					name='parentId'
					label='上级站点'
					rules={[{ required: true, message: '请选择上级站点' }]}
				>
					<TreeSelect
						placeholder='请选择上级站点'
						treeData={siteTree}
						showSearch={true}
						onSearch={e => {
							runsiteTree(e);
						}}
						className='io-cms-site-create-form__item'
					/>
				</Form.Item>
				<Form.Item
					name='orgId'
					label='所属阵地'
					rules={[{ required: true, message: '请选择所属阵地' }]}
				>
					<TreeSelect
						placeholder='请选择所属阵地'
						treeData={siteTree}
						showSearch={true}
						onSearch={e => {
							runsiteTree(e);
						}}
						className='io-cms-site-create-form__item'
					/>
				</Form.Item>
				<Form.Item
					name='name'
					label='站点名称'
					validateTrigger={['onBlur']}
					rules={[
						{ required: true, message: '请输入站点名称' },
						() => ({
							async validator(rule, value) {
								console.log(value);
								if (!!value) {
									const success = await verifySiteName({
										name: value,
										siteId: '',
									}).then(res => res.data);
									if (success) return Promise.resolve();
									return Promise.reject('站点名称重复');
								}
							},
						}),
					]}
				>
					<Input
						placeholder='请输入站点名称'
						maxLength={120}
						className='io-cms-site-create-form__item'
					/>
				</Form.Item>
				<Form.Item
					name='dir'
					label='站点目录'
					validateTrigger={['onBlur']}
					rules={[
						{ required: true, message: '请输入站点目录' },
						() => ({
							async validator(rule, value) {
								if (!!value) {
									let success = true;
									success = await verifySiteCatalogue({
										dir: value,
										siteId: '',
									}).then(res => res.data);
									if (!!value && /^[0-9a-zA-Z]+$/.test(value) && success)
										return Promise.resolve();
									return Promise.reject(
										success ? '请输入英文和数字' : '站点目录重复'
									);
								}
								return Promise.reject('');
							},
						}),
					]}
				>
					<Input
						placeholder='请输入站点目录'
						maxLength={120}
						className='io-cms-site-create-form__item'
					/>
				</Form.Item>
				<Form.Item
					name='modelPath'
					label='模板路径'
					rules={[
						{ required: true, message: '请输入模板路径' },
						() => ({
							validator(rule, value) {
								if (!!value) {
									if (!!value && /^[a-zA-Z][a-zA-Z0-9]*$/.test(value))
										return Promise.resolve();
									return Promise.reject('请输入英文和数字，并且不以数字开头');
								}
								return Promise.reject('');
							},
						}),
					]}
				>
					<Input
						placeholder='请输入模板路径'
						maxLength={120}
						className='io-cms-site-create-form__item'
					/>
				</Form.Item>
				<Form.List name='domain'>
					{(fields, { add, remove }, { errors }) => {
						return (
							<>
								{fields.map((field, index) => {
									return (
										<Form.Item
											wrapperCol={{ span: 12 }}
											labelCol={{ span: 6 }}
											label={
												index === 0 ? (
													<span>
														<span className='io-cms-site-copy-label-mark__span'>
															*
														</span>
														域名
													</span>
												) : (
													<span style={{ display: 'none' }}>
														添加域名
													</span>
												)
											}
											required={false}
											key={field.key}
											colon={index === 0}
										>
											<Row>
												<Col span={20}>
													<Form.Item
														{...field}
														wrapperCol={{ span: 6 }}
														labelCol={{ span: 12 }}
														validateTrigger={['onChange', 'onBlur']}
														rules={[
															{
																required: true,
																message: '请输入域名',
															},
														]}
														noStyle
													>
														<Input
															placeholder='请输入域名'
															className='io-cms-site-create-form__item'
															addonBefore={selectBefore}
														/>
													</Form.Item>
												</Col>
												<Col span={4}>
													{fields.length > 1 && index > 0 ? (
														<Button
															className='io-cms-site-create-domain-delete__but'
															onClick={() => remove(field.name)}
														>
															删除
														</Button>
													) : null}
												</Col>
											</Row>
										</Form.Item>
									);
								})}
								<Form.Item
									name=''
									label={<span style={{ display: 'none' }}>添加按钮</span>}
									colon={false}
									className='io-cms-site-copy-add__Item'
								>
									<Button
										type='dashed'
										className='io-cms-site-copy-add__but'
										onClick={() => add()}
										// style={{ width: '90%' }}
									>
										<i className='iconfont icon-plus-square' />
										添加
									</Button>
									<Form.ErrorList errors={errors} />
								</Form.Item>
							</>
						);
					}}
				</Form.List>
				<Form.Item name='desc' label='站点描述'>
					<Input.TextArea
						placeholder='请输入站点描述'
						showCount={true}
						allowClear={true}
						maxLength={500}
						className='io-cms-site-create-form-item_InputArea'
					/>
				</Form.Item>
				<Form.Item
					name='status'
					label={
						<span>
							状态&nbsp;
							<Tooltip title='关闭站点后网站前台无法访问'>
								<InfoCircleOutlined />
							</Tooltip>
						</span>
					}
					initialValue={1}
				>
					<Switch checkedChildren='开启' unCheckedChildren='关闭' defaultChecked />
				</Form.Item>
				<Form.Item
					name='favicon'
					label={
						<span>
							站点标志&nbsp;
							<Tooltip title='浏览前台网站时，站点标志显示在浏览器页签左侧'>
								<InfoCircleOutlined />
							</Tooltip>
						</span>
					}
				>
					<ImageUpload />
				</Form.Item>
				<Form.Item name='seoTitle' label='SEO标题'>
					<Input
						placeholder='请输入SEO标题'
						maxLength={120}
						className='io-cms-site-create-form__item'
					/>
				</Form.Item>
				<Form.Item name='seoKeyWord' label='SEO关键字'>
					<Input
						placeholder='请输入SEO关键字'
						maxLength={120}
						className='io-cms-site-create-form__item'
					/>
				</Form.Item>
				<Form.Item name='seoDesc' label='SEO描述'>
					<Input.TextArea
						placeholder='请输入SEO描述'
						showCount={true}
						allowClear={true}
						maxLength={500}
						className='io-cms-site-create-form-item_InputArea'
					/>
				</Form.Item>
			</Form>
		</BizPage>
	);
};
