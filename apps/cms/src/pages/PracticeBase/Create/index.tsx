import React, { useState } from 'react';
import {
	BizPage,
	GobackButton,
	SaveButton,
	BizModal,
	AMap,
	ImageUpload,
	RichTextEditor,
} from '@ionia/libs';
import { Button, Form, Input, TreeSelect, message, Space } from 'antd';
import { UploadOutlined } from '@ant-design/icons';
import { addPosition, OrgDTO } from '@ionia/libs/src/services';
import './index.less';

const layout = {
	labelCol: { span: 7 },
	wrapperCol: { span: 12 },
};

const newPractice = async (filed: OrgDTO) => {
	const newRef = await addPosition(filed);
	if (newRef.code == 200) {
		message.success('新建成功');
	} else {
		message.error('新建失败');
	}
	return newRef;
};

export default () => {
	const [form] = Form.useForm();
	const [linkman, setLinkman] = useState(false);

	const baseTypeTree: any = [
		{
			title: '实践中心',
			value: '1',
		},
		{
			title: '实践所',
			value: '2',
		},
		{
			title: '实践站',
			value: '3',
		},
	];
	const treeData: any = [
		{
			title: 'Node1',
			value: '0',
			children: [
				{
					title: 'Child Node1',
					value: '1',
				},
				{
					title: 'Child Node2',
					value: '2',
				},
			],
		},
		{
			title: 'Node2',
			value: '3',
		},
	];
	return (
		<BizPage
			showActions={true}
			breadcrumbs={[{ name: '实践阵地' }, { name: '新增' }]}
			renderActions={() => {
				return (
					<>
						<GobackButton />
						<SaveButton
							onSave={async () => {
								form.validateFields().then(async values => {
									const param = {
										area: values.area,
										name: values.name,
										parentId: values.parentId,
										type: values.type,
										address: values.address || '',
										code: values.code || '',
										coordinate: values.coordinate || '',
									};
									const success = await newPractice(param);
									if (success.code === 200) {
										history.back();
									}
								});
							}}
						/>
						<Button className='io-cms-practice__button'>保存并管理成员</Button>
						<Button className='io-cms-practice__button'>保存并编辑权限</Button>
					</>
				);
			}}
		>
			<Form {...layout} className='io-cms-practice-form'>
				<Form.Item
					name='parentId'
					label='上级阵地'
					rules={[{ required: true, message: '请选择上级阵地' }]}
				>
					<TreeSelect
						placeholder='请选择上级阵地'
						treeData={treeData}
						showSearch={true}
						// onSearch={e => {
						// 	runsiteTree(e);
						// }}
						className='io-cms-practice-form__item'
					/>
				</Form.Item>
				<Form.Item
					name='area'
					label='所属地区'
					rules={[{ required: true, message: '请选择所属地区' }]}
				>
					<TreeSelect
						placeholder='请选择所属地区'
						treeData={treeData}
						showSearch={true}
						// onSearch={e => {
						// 	runsiteTree(e);
						// }}
						className='io-cms-practice-form__item'
					/>
				</Form.Item>
				<Form.Item
					name='name'
					label='阵地名称'
					rules={[{ required: true, message: '请输入阵地名称' }]}
				>
					<Input className='io-cms-practice-form__item' placeholder='请输入阵地名称' />
				</Form.Item>
				<Form.Item
					name='type'
					label='阵地类型'
					rules={[{ required: true, message: '请选择阵地类型' }]}
				>
					<TreeSelect
						placeholder='请选择阵地类型'
						treeData={baseTypeTree}
						showSearch={true}
						// onSearch={e => {
						// 	runsiteTree(e);
						// }}
						className='io-cms-practice-form__item'
					/>
				</Form.Item>
				<Form.Item name='code' label='阵地编号'>
					<Input className='io-cms-practice-form__item' placeholder='请输入阵地编号' />
				</Form.Item>
				<Form.Item name='fax' label='传真'>
					<Input className='io-cms-practice-form__item' placeholder='请输入传真号码' />
				</Form.Item>
				<Form.List name='日常联系人'>
					{(fields, { add, remove }) => (
						<>
							{fields.map((field, index) => (
								<Space
									key={field.key}
									style={{
										display: 'flex',
										marginBottom: 8,
									}}
									align='baseline'
								>
									{index === 0 ? <span>日常联系人 :</span> : null}
									<Form.Item
										{...field}
										name={[field.name, 'first']}
										fieldKey={[field.fieldKey, 'first']}
									>
										<Input
											className='io-cms-practice-add__input'
											placeholder='请输入联系人姓名'
										/>
									</Form.Item>
									<Form.Item
										{...field}
										name={[field.name, 'last']}
										fieldKey={[field.fieldKey, 'last']}
									>
										<Input
											className='io-cms-practice-add__input'
											placeholder='请输入手机号或座机号'
										/>
									</Form.Item>
									{fields.length > 1 && index > 0 ? (
										<Button
											className='io-cms-site-create-domain-delete__but'
											onClick={() => remove(field.name)}
										>
											删除
										</Button>
									) : null}
								</Space>
							))}
							<Form.Item
								label={fields.length > 0 ? '' : '日常联系人'}
								className='io-cms-site-copy-add__Item'
							>
								<Button
									className='io-cms-practice-add__button'
									type='dashed'
									onClick={() => add()}
									block
								>
									<i className='iconfont icon-plus-square' />
									添加
								</Button>
							</Form.Item>
						</>
					)}
				</Form.List>
				<Form.Item style={{ display: 'flex' }} name='code' label='地址'>
					<Input
						className='io-cms-practice-form__item-address'
						placeholder='请手动选择地址'
					/>
					<BizModal
						className='io-amap__content'
						triggerRender={({ open }) => (
							<Button
								className='io-cms-practice-form__item-button'
								type='primary'
								onClick={open}
							>
								选择
							</Button>
						)}
					>
						<AMap />
					</BizModal>
				</Form.Item>
				<Form.Item name='favicon' label='阵地标志'>
					<ImageUpload />
				</Form.Item>
				<Form.Item name='favicon' label='图片展示'>
					<Button type='primary' icon={<UploadOutlined />}>
						批量上传
					</Button>
				</Form.Item>
				<Form.Item name='project' label='特色活动项目'>
					<Input.TextArea
						placeholder='请输入文字'
						showCount={true}
						allowClear={true}
						maxLength={500}
						className='io-cms-site-create-form-item_InputArea'
					/>
				</Form.Item>
				<Form.Item name='introduce' label='阵地介绍'>
					<div className='io-cms-site-create-from-item__rich-text-editor'>
						<RichTextEditor></RichTextEditor>
					</div>
				</Form.Item>
			</Form>
		</BizPage>
	);
};
