import React, { useState } from 'react';
import { Button, Form, Input, Switch, Cascader, Select, Tooltip, TreeSelect } from 'antd';
import { InfoCircleOutlined } from '@ant-design/icons';
import { BizPage, GobackButton, SaveButton, ImageUpload } from '@ionia/libs';
import { useMount, useRequest } from '@umijs/hooks';
import { gainSiteTree, createAdminSite, AdminSiteDTO } from '@ionia/libs/src/services/kernel'
import { AdminSiteTreeVO } from '@ionia/libs/src/services/kernel/admin-site.vo'
import './index.less';

const { Option } = Select;
const layout = {
	labelCol: { span: 6 },
	wrapperCol: { span: 12 },
}
const selectBefore = (
	<Select defaultValue='http://' className='select-before'>
		<Option value='http://'>http://</Option>
		<Option value='https://'>https://</Option>
	</Select>
);

const handleCreateSites = async (filed: AdminSiteDTO) => {
	const createRef = await createAdminSite(filed);
	return createRef;
}
export default () => {
	const [form] = Form.useForm();
	const [siteTree, setSiteTree] = useState<AdminSiteTreeVO[]>();
	const [domainList, setDomainList] = useState<number[]>([1])
	const { run: runsiteTree } = useRequest(gainSiteTree, {
		manual: true,
		onSuccess: (result) => {
			const loop = function (data: any) {
				return data.map((r: any) => {
					if (r.children) {
						r.children = loop(r.children);
					}
					return {
						value: r.id,
						title: r.name,
						key: r.id,
						children: r.children,
						...r,
					}
				})
			}
			const tempSiteTree = loop(result.data);
			setSiteTree(tempSiteTree);
		}
	});
	useMount(() => {
		runsiteTree();
	})
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
									// const success = await handleCreateSites(values);
								})
							}}
						/>
						<Button type='default' className='io-cms-site-save-expand__but'>
							保存并详细配置
						</Button>
						<Button type='default' className='io-cms-site-save-expand__but'>
							保存并继续新建
						</Button>
					</>
				);
			}}
		>
			<Form form={form} style={{ marginTop: '32px' }} {...layout}>
				<Form.Item
					name='parentId'
					label='上级站点'
					rules={[{ required: true, message: '请选择上级站点' }]}
				>
					<TreeSelect placeholder='请选择上级站点' treeData={siteTree} />
				</Form.Item>
				<Form.Item
					name='name'
					label='站点名称'
					rules={[{ required: true, message: '请输入站点名称' }]}
				>
					<Input placeholder='请输入站点名称' />
				</Form.Item>
				<Form.Item
					name='dir'
					label='站点目录'
					rules={[{ required: true, message: '请输入站点目录' }]}
				>
					<Input placeholder='请输入站点目录' />
				</Form.Item>
				{domainList.map((d: any, i: number) => {
					return (

						<Form.Item
							name={`domain_${i}`}
							label={i !== 0 ? <span style={{ display: 'none' }}>域名</span> : '域名'}
							rules={[{ required: true, message: '请输入域名' }]}
							colon={!i}
						>
							<Input placeholder='请输入域名' addonBefore={selectBefore} />
						</Form.Item>
					)
				})}
				<Form.Item name='' label={<span style={{ display: 'none' }}>添加按钮</span>} colon={false}>
					<Button
						type='dashed'
						style={{ width: '100%' }}
						onClick={() => {
							setDomainList(domainList.concat(1))
						}}
					>
						<i className='iconfont icon-plus-square' />
						添加
					</Button>
				</Form.Item>
				<Form.Item name='desc' label='站点描述'>
					<Input.TextArea
						placeholder='请输入站点描述'
						showCount={true}
						allowClear={true}
						maxLength={500}
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
					<Input placeholder='请输入SEO标题' />
				</Form.Item>
				<Form.Item name='seoKeyWord' label='SEO关键字'>
					<Input placeholder='请输入SEO关键字' />
				</Form.Item>
				<Form.Item name='seoDesc' label='SEO描述'>
					<Input.TextArea
						placeholder='请输入SEO描述'
						showCount={true}
						allowClear={true}
						maxLength={500}
					/>
				</Form.Item>
			</Form>
		</BizPage>
	);
};
