import { LeftOutlined } from '@ant-design/icons';
import { BizPage, menuList, apiList, menuCreate } from '@ionia/libs';
import { useRequest } from 'ahooks';
import { useHistory } from 'react-router-dom';
import {
	Button,
	Form,
	Input,
	TreeSelect,
	Switch,
	Select,
	InputNumber,
	Modal,
	Radio,
	Row,
	Col,
	Table,
	message,
} from 'antd';
import React, { useState, useEffect } from 'react';
import './index.less';

const layout = {
	labelCol: {
		span: 4,
	},
	wrapperCol: {
		span: 8,
	},
};
export default function add() {
	const history = useHistory();
	const [form] = Form.useForm();
	const [apiVisible, setApiVisible] = useState<boolean>(false);
	const [iconVisible, setIconVisible] = useState<boolean>(false);
	const [value, setValue] = useState(undefined);
	const [iconValue, setIconValue] = useState('');
	const [iconText, setIconText] = useState('');
	const [treeData, setTreeData] = useState<any[]>([]);
	const [apiData, setApiData] = useState<any[]>([]);
	const [selectedRowKeys, setSelectedRowKeys] = useState<string[]>([]);
	const [apiSelectList, setApiSelectList] = useState<any[]>([]);
	const iconList = [
		{
			icon: 'icon-message',
			text: 'neirongguanli',
		},
		{
			icon: 'icon-appstoreadd',
			text: 'langmuguanli',
		},
		{
			icon: 'icon-quxiaozhiding',
			text: 'peizhi',
		},
		{
			icon: 'icon-calendar',
			text: 'hudong',
		},
		{
			icon: 'icon-like',
			text: 'shejiaomeiti',
		},
	];
	useRequest(() => menuList({}), {
		onSuccess: data => {
			let arr = getData(data.data);
			setTreeData(arr);
		},
	});
	const { run } = useRequest(() => apiList(), {
		manual: true,
	});
	const getData = (list: any) => {
		return list.map((item: any) => {
			if (item.children) {
				item.children = getData(item.children);
			}
			return { title: item.menuName, value: item.id, children: item.children };
		});
	};

	const onChange = (value: any) => {
		console.log(value);
		// this.setState({ value });
	};

	const onIconChange = (e: any) => {
		iconList.map((item: any) => {
			if (item.icon == e.target.value) {
				setIconText(item.text);
			}
		});
		setIconValue(e.target.value);
	};

	const columns = [
		{
			title: '接口名称',
			dataIndex: 'apiName',
		},
		{
			title: '接口地址',
			dataIndex: 'apiUrl',
		},
		{
			title: '使用场景',
			dataIndex: 'useScene',
		},
	];

	const handleOk = () => {
		console.log(selectedRowKeys);
		handleCancel();
	};

	const handleCancel = () => {
		// setSelectedRowKeys([]);
		setApiVisible(false);
	};
	const onFinish = async (values: any) => {
		console.log('Success:', values);
		let menuFormValues = {
			...values,
			component: btoa(values.component),
			apiIds: selectedRowKeys,
		};
		const { code } = await menuCreate({ ...menuFormValues });
		if (code == 200) {
			message.success('添加成功');
			history.push('/system-management/menu-management/menu');
		}
	};

	const hanldCreate = () => {
		// form.resetFields();
		form.validateFields().then(async (values: any) => {
			let menuFormValues = {
				...values,
				component: btoa(values.component),
				apiIds: selectedRowKeys,
			};
			const { code } = await menuCreate({ ...menuFormValues });
			if (code == 200) {
				message.success('添加成功');
				form.resetFields();
				form.setFieldsValue({ showFlag: false, authFlag: false, menuType: '1' });
				setApiSelectList([]);
				setSelectedRowKeys([]);
				setIconValue('');
				setIconText('');
			}
		});
	};

	const removeItem = (data: any) => {
		let arr = selectedRowKeys.filter(t => t != data);
		let arr1 = apiSelectList.filter(t => t.id != data);
		setSelectedRowKeys([...arr]);
		setApiSelectList([...arr1]);
	};

	useEffect(() => {
		form.setFieldsValue({ showFlag: false, authFlag: false, menuType: '1' });
	}, []);

	const onSelectChange = (selectedRowKeys: any, selectedRows: any) => {
		console.log('selectedRowKeys changed: ', selectedRows);
		setApiSelectList(selectedRows);
		setSelectedRowKeys(selectedRowKeys);
	};

	const rowSelection = {
		selectedRowKeys,
		onChange: onSelectChange,
	};

	return (
		<>
			<BizPage breadcrumbs={[{ name: '菜单管理' }, { name: '新建' }]}>
				<div className='io-cms-menu-add_buttons'>
					<Button
						className='io-cms-menu-add-button_item'
						icon={<LeftOutlined />}
						onClick={() => {
							history.go(-1);
						}}
					>
						返回
					</Button>
					<Button
						type='primary'
						className='io-cms-menu-add-button_item'
						onClick={() => {
							form.submit();
						}}
					>
						保存
					</Button>
					<Button onClick={hanldCreate}>保存并继续新增</Button>
				</div>
				<Form {...layout} onFinish={onFinish} form={form} className='io-cms-menu-add_form'>
					<Form.Item label='上级菜单' name='parentId'>
						<TreeSelect
							style={{ width: '100%' }}
							value={value}
							dropdownStyle={{ maxHeight: 400, overflow: 'auto' }}
							treeData={treeData}
							placeholder='请选择'
							treeDefaultExpandAll
							onChange={onChange}
						/>
					</Form.Item>
					<Form.Item
						label='菜单名称'
						name='menuName'
						rules={[{ required: true, message: '请输入菜单名称!' }]}
					>
						<Input placeholder='请输入菜单名称' />
					</Form.Item>
					<Form.Item
						label='菜单标识'
						name='name'
						rules={[{ required: true, message: '请输入菜单标识!' }]}
					>
						<Input placeholder='请输入菜单标识' />
					</Form.Item>
					<Form.Item
						label='路由地址'
						name='component'
						rules={[{ required: true, message: '请输入路由地址!' }]}
					>
						<Input placeholder='请输入路由地址' />
					</Form.Item>
					<Form.Item label='是否显示' name='showFlag' valuePropName='checked'>
						<Switch checkedChildren='显示' unCheckedChildren='隐藏' />
					</Form.Item>
					<Form.Item label='是否权限控制' name='authFlag' valuePropName='checked'>
						<Switch checkedChildren='开启' unCheckedChildren='关闭' />
					</Form.Item>
					<Form.Item label='菜单类型' name='menuType'>
						<Select>
							<Select.Option value='1'>菜单</Select.Option>
							<Select.Option value='2'>权限</Select.Option>
						</Select>
					</Form.Item>
					<Form.Item
						label='排序值'
						name='sortNum'
						rules={[{ required: true, message: '请输入排序值!' }]}
					>
						<InputNumber placeholder='请输入排序值' />
					</Form.Item>
					<Form.Item label='Icon图标' name='icon'>
						<Input
							addonBefore={<i className={`iconfont ` + iconValue}></i>}
							addonAfter={
								<span
									className='io-cms-menu-add-form_button'
									onClick={() => {
										setIconVisible(true);
									}}
								>
									选择
								</span>
							}
						/>
					</Form.Item>
					<Form.Item label='API权限' name='sortNum'>
						<Button
							type='primary'
							onClick={() => {
								setApiVisible(true);
								run().then(res => {
									console.log(res);
									setApiData(res.data);
								});
							}}
						>
							请选择
						</Button>
						{apiSelectList.map((item: any) => {
							return (
								<div key={item.id} className='io-cms-menu-add-api_item'>
									<span>{item.apiName}:</span>
									<span>{item.apiUrl}</span>
									<i
										className='iconfont icon-close'
										onClick={() => {
											removeItem(item.id);
										}}
									></i>
								</div>
							);
						})}
					</Form.Item>
				</Form>
				<Modal
					onOk={() => {
						setIconVisible(false);
						console.log(iconText);
						form.setFieldsValue({ icon: iconText });
					}}
					onCancel={() => {
						setIconVisible(false);
					}}
					title='Icon图标选择'
					visible={iconVisible}
				>
					<Radio.Group
						onChange={onIconChange}
						value={iconValue}
						style={{ width: '520px' }}
					>
						<Row>
							{iconList.map((item: any) => {
								return (
									<Col span={6} key={item.icon} className='io-cms-menu-form_icon'>
										<i className={item.icon + ` iconfont`}></i>
										<Radio value={item.icon}>{item.text}</Radio>
									</Col>
								);
							})}
						</Row>
					</Radio.Group>
				</Modal>
				<Modal
					visible={apiVisible}
					title='API权限设置'
					onOk={handleOk}
					onCancel={handleCancel}
					className='io-cms-menu-add-api_modal'
				>
					<div className='io-cms-menu-add-api_list'>
						<p>已选择列表</p>
						{apiSelectList.map((item: any) => {
							return (
								<div key={item.id} className='io-cms-menu-add-api_item'>
									<span>{item.apiName}:</span>
									<span>{item.apiUrl}</span>
									<i
										className='iconfont icon-close'
										onClick={() => {
											removeItem(item.id);
										}}
									></i>
								</div>
							);
						})}
						<p
							style={{
								display: 'flex',
								justifyContent: 'flex-end',
								cursor: 'pointer',
							}}
							onClick={() => {
								setApiSelectList([]);
								setSelectedRowKeys([]);
							}}
						>
							全部移除
						</p>
					</div>
					<Table
						columns={columns}
						dataSource={apiData}
						rowSelection={rowSelection}
						rowKey={record => record.id}
					/>
				</Modal>
			</BizPage>
		</>
	);
}
