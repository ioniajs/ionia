import React, { useEffect, useState, useRef } from 'react';
import { Form, Input, Select, Button, Radio, InputNumber, message } from 'antd';
import {
	goodsCategoryList,
	BizPage,
	ImageUpload,
	SaveButton,
	GobackButton,
	goodsSave,
} from '@ionia/libs';
import { InfoCircleOutlined } from '@ant-design/icons';
// 引入编辑器组件
import BraftEditor from 'braft-editor';
// 引入编辑器样式
import 'braft-editor/dist/index.css';
import { useHistory } from 'react-router-dom';

const layout = {
	labelCol: { span: 4 },
	wrapperCol: { span: 8 },
};
const { TextArea } = Input;
export default function add() {
	useEffect(() => {
		const getCategoryList = async () => {
			const { data } = await goodsCategoryList();
			setCategoryList([...data]);
		};
		getCategoryList();
	}, []);
	const [form] = Form.useForm();
	const history = useHistory();
	const [categoryList, setCategoryList] = useState<any[]>([]);
	const [editorState, setEditorState] = useState<any>('');
	const [virtualFlag, setVirtualFlag] = useState(0);
	const [stint, setStint] = useState(0);
	const [stintNum, setStintNum] = useState('');
	const [files, setFiles] = useState<any[]>([]);
	const onFinish = async (values: any) => {
		let atlas = files.map(item => {
			return item.uid;
		});
		const goodsParams = {
			...values,
			stintNum: stintNum ? stintNum : '',
			content: editorState ? editorState.toHTML() : '',
			atlas: atlas ? atlas : '',
		};
		console.log('goodsParams', goodsParams);
		const { code } = await goodsSave({ ...goodsParams });
		if (code == 200) {
			message.success('添加成功');
			history.push('/point-mall/commodity-management');
		}
	};

	const submitContent = async () => {
		// 在编辑器获得焦点时按下ctrl+s会执行此方法
		// 编辑器内容提交到服务端之前，可直接调用editorState.toHTML()来获取HTML格式的内容
		const htmlContent = editorState.toHTML();
	};

	const handleEditorChange = (editorState: any) => {
		setEditorState(editorState);
		console.log('editorState', editorState.toHTML().length);
	};
	return (
		<>
			<BizPage
				showActions
				breadcrumbs={[{ name: '商品管理' }, { name: '详情页' }]}
				renderActions={() => {
					return (
						<>
							<GobackButton />
							<SaveButton
								onSave={() => {
									form.submit();
								}}
							/>
						</>
					);
				}}
			>
				<Form
					form={form}
					onFinish={onFinish}
					className='io-cms-point-commodity-mangagement_add-form'
					{...layout}
				>
					<Form.Item
						label='商品类目'
						name='categoryId'
						rules={[{ required: true, message: '请选择你的商品类目' }]}
					>
						<Select placeholder='请选择你的商品类目'>
							{categoryList.map(item => (
								<Select.Option value={item.id} key={item.id}>
									{item.name}
								</Select.Option>
							))}
						</Select>
					</Form.Item>
					<Form.Item
						label='商品名称'
						name='name'
						rules={[{ required: true, message: '请输入你的商品名称' }]}
					>
						<Input placeholder='请输入商品名称' />
					</Form.Item>
					<Form.Item
						label='积分价格'
						name='integral'
						rules={[{ required: true, message: '请输入你的积分价格' }]}
					>
						<InputNumber placeholder='请输入积分价格' style={{ width: '300px' }} />
					</Form.Item>
					<Form.Item
						label='库存'
						name='inventory'
						rules={[{ required: true, message: '请输入你的库存' }]}
					>
						<InputNumber placeholder='请输入库存' style={{ width: '300px' }} />
					</Form.Item>
					<Form.Item
						label='商品相册'
						name='atlas'
						// rules={[{ required: true, message: '请上传你的商品相册' }]}
					>
						<ImageUpload
							limit={10}
							onChange={(files: any) => {
								console.log('files', files);
								setFiles([...files]);
							}}
						/>
					</Form.Item>
					<Form.Item
						label='兑换限制'
						name='stint'
						rules={[{ required: true, message: '请输入你的库存' }]}
						initialValue={0}
					>
						<Radio.Group
							onChange={(e: any) => {
								setStint(e.target.value);
								if (e.target.value == 0) {
									setStintNum('');
								}
							}}
						>
							<Radio value={0}>不限</Radio>
							<Radio value={1}>
								单人限兑
								<Input
									disabled={stint == 0}
									value={stintNum}
									onChange={e => {
										setStintNum(e.target.value);
									}}
								/>
							</Radio>
						</Radio.Group>
					</Form.Item>
					<Form.Item
						label='虚拟商品'
						name='virtualFlag'
						rules={[{ required: true, message: '请选择你的虚拟商品' }]}
						tooltip={{
							title:
								'设置为虚拟商品 ，用户兑换后无需处理，默认以设置好的兑现方式告知用户',
							icon: <InfoCircleOutlined />,
						}}
						initialValue={1}
					>
						<Radio.Group
							onChange={(e: any) => {
								setVirtualFlag(e.target.value);
							}}
						>
							<Radio value={1}>是</Radio>
							<Radio value={0}>否</Radio>
						</Radio.Group>
					</Form.Item>
					{virtualFlag == 1 && (
						<Form.Item
							label='兑现方式'
							name='convertMode'
							rules={[{ required: true, message: '请输入你的兑换方式' }]}
						>
							<TextArea
								rows={4}
								placeholder='请输入你的兑换方式'
								maxLength={150}
								showCount
							/>
						</Form.Item>
					)}
					<Form.Item
						label='累积兑换量'
						name='totalConvertNum'
						rules={[{ required: true, message: '请输入你的累积兑换量' }]}
					>
						<InputNumber
							placeholder='请输入你的累积兑换量'
							style={{ width: '300px' }}
						/>
					</Form.Item>
					<Form.Item label='商品详情' {...layout}>
						<BraftEditor
							value={editorState}
							className='my-editor'
							style={{ width: '902px', border: '1px solid #D9D9D9' }}
							onChange={handleEditorChange}
							onSave={submitContent}
						/>
					</Form.Item>
				</Form>
			</BizPage>
		</>
	);
}
