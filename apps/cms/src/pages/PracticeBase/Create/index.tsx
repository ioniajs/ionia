import { UploadOutlined } from '@ant-design/icons';
import {
	AMap,
	BizPage,
	BizModalForm,
	GobackButton,
	ImageUpload,
	RichTextEditor,
	SaveButton,
	ModalFormRef,
	addPosition,
	OrgDTO,
} from '@ionia/libs';
import { Button, Form, Input, message, Space, TreeSelect } from 'antd';
import React, { useState, useRef } from 'react';
import './index.less';

const layout = {
	labelCol: { span: 7 },
	wrapperCol: { span: 12 },
};
const layout1 = {
	labelCol: { span: 16 },
	wrapperCol: { span: 8 },
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
	const ref = useRef<ModalFormRef>();
	const [editorState, setEditorState] = useState(); // 获取富文本编辑内容
	console.log(editorState, 'eeeeee');

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
										introduce: editorState,
									};
									const success = await newPractice(param);
									if (success.code === 200) {
										history.back();
									}
								});
							}}
						/>
						<Button style={{ marginLeft: 8 }}>保存并管理成员</Button>
						<Button style={{ marginLeft: 8 }}>保存并编辑权限</Button>
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
						style={{ width: 664, height: 32 }}
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
						style={{ width: 664, height: 32 }}
					/>
				</Form.Item>
				<Form.Item
					name='name'
					label='阵地名称'
					rules={[{ required: true, message: '请输入阵地名称' }]}
				>
					<Input style={{ width: 664 }} placeholder='请输入阵地名称' />
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
						style={{ width: 664, height: 32 }}
					/>
				</Form.Item>
				<Form.Item name='code' label='阵地编号'>
					<Input style={{ width: 664 }} placeholder='请输入阵地编号' />
				</Form.Item>
				<Form.Item name='fax' label='传真'>
					<Input style={{ width: 664 }} placeholder='请输入传真号码' />
				</Form.Item>
				<Form.List name='domain'>
					{(fields, { add, remove }, { errors }) => {
						return (
							<>
								{fields.map((field, index) => {
									return (
										<Form.Item
											{...layout}
											label={
												index === 0 ? (
													<span>日常联系人</span>
												) : (
													<span></span>
												)
											}
											required={false}
											key={field.key}
											colon={index === 0}
										>
											<Form.Item
												{...field}
												validateTrigger={['onChange', 'onBlur']}
												noStyle
											>
												<Input
													placeholder='请输入姓名'
													style={{ width: 328 }}
												/>
											</Form.Item>
											<Form.Item
												{...field}
												validateTrigger={['onChange', 'onBlur']}
												noStyle
											>
												<Input
													placeholder='请输入手机号或座机号'
													style={{ marginLeft: 8, width: 328 }}
												/>
											</Form.Item>
											{fields.length > 1 && index > 0 ? (
												<Button
													style={{ width: 60.9, marginLeft: 8 }}
													onClick={() => remove(field.name)}
												>
													删除
												</Button>
											) : null}
										</Form.Item>
									);
								})}
								<Form.Item
									{...layout}
									label={
										fields.length === 0 ? (
											<span>日常联系人</span>
										) : (
											<span></span>
										)
									}
									colon={false}
								>
									<Button
										type='dashed'
										style={{ width: 664 }}
										onClick={() => add()}
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
				<Form.Item style={{ display: 'flex' }} name='code' label='地址'>
					<Input style={{ width: 604.1 }} placeholder='请手动选择地址' />
					<BizModalForm
						ref={ref}
						title='选择地点'
						triggerRender={() => (
							<Button
								type='primary'
								onClick={() => {
									ref.current?.open();
								}}
								style={{ width: 60.9, height: 32 }}
							>
								选择
							</Button>
						)}
						width={1000}
					>
						<AMap />
					</BizModalForm>
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
						style={{ height: 150, width: 664 }}
					/>
				</Form.Item>
				<Form.Item name='introduce' label='阵地介绍'>
					<div className='io-cms-practice-base-create-from-item__rich-text-editor'>
						<RichTextEditor onGet={editorState => setEditorState(editorState)} />
					</div>
				</Form.Item>
			</Form>
		</BizPage>
	);
};
