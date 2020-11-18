import React from 'react';
import { Button, Form, Input, Switch, Cascader, Select, Tooltip } from 'antd';
import { InfoCircleOutlined } from '@ant-design/icons';
import { BizPage, GobackButton, SaveButton, BizForm, ImageUpload } from '@ionia/libs';
import './index.less';

const { Option } = Select;
const selectBefore = (
	<Select defaultValue='http://' className='select-before'>
		<Option value='http://'>http://</Option>
		<Option value='https://'>https://</Option>
	</Select>
);

export default () => {
	const [form] = Form.useForm();
	return (
		<BizPage
			breadcrumbs={[{ name: '站点管理' }, { name: '新建' }]}
			showActions={true}
			renderActions={() => {
				return (
					<>
						<GobackButton />
						<SaveButton />
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
			<BizForm form={form} renderActions={false} style={{ marginTop: '32px' }}>
				<Form.Item
					name='parentId'
					label='上级站点'
					rules={[{ required: true, message: '请选择上级站点' }]}
				>
					<Cascader placeholder='请选择上级站点' />
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
				<Form.Item
					name='domain'
					label='域名'
					rules={[{ required: true, message: '请输入域名' }]}
				>
					<Input placeholder='请输入域名' addonBefore={selectBefore} />
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
			</BizForm>
		</BizPage>
	);
};
