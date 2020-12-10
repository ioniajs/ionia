import React, { useRef, useState } from 'react';
import { BizModalForm, BizModalFormRef, EditableTable } from '@ionia/libs';
import { Select, Form, Input, Button, message, Switch, Radio, Modal } from 'antd';
import shortid from 'shortid';
import './index.less';

// interface EditModalProps {
// 	row?: any;
// }

export default () => {
	const [form] = Form.useForm();
	const [count, setCount] = useState<number>(1);
	const [batchCreate, setBatchCreate] = useState<boolean>(false);
	const ref = useRef<BizModalFormRef>();
	const columns: any = [
		{
			title: '选项内容',
			key: 'content',
			dataIndex: 'content',
			width: 180,
			editable: true,
			formItemRender: ({ dataIndex, editing, save, toggleEdit, children, ref }: any) => {
				return editing ? (
					<Form.Item style={{ margin: 0 }} name={dataIndex}>
						<Input
							style={{ width: 172, height: 32 }}
							ref={ref}
							onPressEnter={save}
							onBlur={save}
						/>
					</Form.Item>
				) : (
					<div onClick={toggleEdit}>{children}</div>
				);
			},
		},
		{
			title: '图片',
			key: 'image',
			dataIndex: 'image',
			width: 90,
		},
		{
			title: '答案',
			key: 'answer',
			dataIndex: 'answer',
			width: 60,
			// editable: true,
			// formItemRender: ({ dataIndex, editing, save, toggleEdit, children, ref }: any) => {
			// 	return editing ? (
			// 		<Form.Item style={{ margin: 0 }} name={dataIndex}>
			// 			{/* <Input
			// 				style={{ width: 172, height: 32 }}
			// 				ref={ref}
			// 				onPressEnter={save}
			// 				onBlur={save}
			// 			/> */}
			// 			<Radio></Radio>
			// 		</Form.Item>
			// 	) : (
			// 		<div onClick={toggleEdit}>{children}</div>
			// 	);
			// },
			render: (_: any, row: any) => <Radio></Radio>,
		},
	];
	const options: any = [
		{
			title: '分类一',
			value: '分类一',
		},
		{
			title: '分类二',
			value: '分类二',
		},
		{
			title: '分类三',
			value: '分类三',
		},
	];
	const questionTypes: any = [
		{
			title: '单选题',
			value: '单选题',
		},
		{
			title: '多选题',
			value: '多选题',
		},
		{
			title: '下拉题',
			value: '判断题',
		},
		{
			title: '判断题',
			value: '判断题',
		},
		{
			title: '图片选择',
			value: '图片选择',
		},
	];
	return (
		<>
			<BizModalForm
				form={form}
				ref={ref}
				title='新建'
				// title={row ? '编辑题目' : '新建题目'}
				className='io-cms-test-base-management__bizmodalform'
				submitterRender={() => (
					<div className='btn-submitter'>
						<Button onClick={() => ref.current?.close()}>取消</Button>
						<Button htmlType='submit' type='primary'>
							保存并继续新建
						</Button>
						<Button htmlType='submit' type='primary'>
							保存
						</Button>
					</div>
				)}
			>
				<div className='io-cms-base-management__bizmodalfrom-div'>
					<Form.Item label='分类' name='classify' rules={[{ required: true }]}>
						<Select allowClear options={options} />
					</Form.Item>
					<Form.Item label='题型' name='questionTypes' rules={[{ required: true }]}>
						<Select allowClear options={questionTypes} />
					</Form.Item>
					<Form.Item label='题目名称' name='topicName' rules={[{ required: true }]}>
						<Input.TextArea
							placeholder='请输入题目名称字'
							showCount={true}
							allowClear
							maxLength={500}
							style={{ height: 150 }}
						/>
					</Form.Item>
					<Form.Item label='题目选项' name='option' rules={[{ required: true }]}>
						<EditableTable
							operationRender={({
								dataSource,
								setDataSource,
								changeData,
								deleteData,
							}) => ({
								title: '操作',
								dataIndex: 'operation',
								width: 50,
								render: (_: any, row: any, index: number) => (
									<i
										className='iconfont icon-close'
										onClick={() => {
											if (dataSource.length === 1) {
												message.error('无法删除，至少输入一个选项');
												return;
											}
											setDataSource([...deleteData(dataSource, row.key)]);
										}}
									></i>
								),
							})}
							footerRender={({ dataSource, setDataSource }) => (
								<div className='io-cms-test-base-management__editabletable__div'>
									<span className='io-cms-test-base-management__editabletable__div-span'>
										编号:
									</span>
									<Button
										type='dashed'
										onClick={() => {
											const data = [];
											for (let i = 0; i < count; i++) {
												data.push({
													key: shortid.generate(),
													content: '选项一',
													image: '-',
													answer: 'true',
												});
											}
											setDataSource([...dataSource, ...data]);
										}}
									>
										<i className='iconfont icon-plus1'></i>添加选项
									</Button>
									<Button
										className='io-cms-test-base-management__editabletable__div-button'
										type='dashed'
										onClick={() => setBatchCreate(true)}
									>
										<i className='iconfont icon-plus1'></i>批量添加
									</Button>
								</div>
							)}
							columns={columns}
							dataSource={[
								{
									key: '0',
									content: '选项一',
									image: '-',
									answer: 'true',
								},
							]}
						/>
					</Form.Item>
					<Form.Item label='答案解析' name='answer'>
						<Input.TextArea
							placeholder='请输入答案解析'
							showCount={true}
							allowClear
							maxLength={500}
							style={{ height: 150 }}
						/>
					</Form.Item>
					<Form.Item
						label='状态'
						name='status'
						initialValue={true}
						valuePropName='checked'
					>
						<Switch checkedChildren='开启' unCheckedChildren='关闭' />
					</Form.Item>
				</div>
			</BizModalForm>
			<Modal
				className='io-cms-test-base-management__editabletable-modal'
				onOk={() => setBatchCreate(false)}
				visible={batchCreate}
				title='批量添加选项'
			>
				<p>多个选项使用“回车键”换行隔开</p>
				<div className='io-cms-test-base-management__editabletable-div'></div>
			</Modal>
		</>
	);
};
