import React, { useRef, useState } from 'react';
import { BizModalForm, BizModalFormRef } from '@ionia/libs';
import { Button, Tree, Tooltip, Modal, Form, Radio, TreeSelect } from 'antd';
import { InfoCircleOutlined } from '@ant-design/icons';
import './index.less';
import { values } from 'lodash';

const treeData = [
	{
		title: '0-0',
		key: '0-0',
		delete: false,
		children: [
			{
				title: '0-0-0',
				key: '0-0-0',
				delete: false,
				children: [
					{ title: '0-0-0-0', key: '0-0-0-0', delete: false },
					{ title: '0-0-0-1', key: '0-0-0-1', delete: false },
					{
						title: '0-0-0-2',
						key: '0-0-0-2',
						delete: false,
						children: [
							{ title: '0-0-0-0-0', key: '0-0-0-0-0', delete: false },
							{ title: '0-0-0-0-1', key: '0-0-0-0-1', delete: false },
							{
								title: '0-0-0-0-2',
								key: '0-0-0-0-2',
								delete: false,
								children: [
									{ title: '0-0-0-0-0-0', key: '0-0-0-0-0-0', delete: false },
									{
										title: '0-0-0-0-0-1',
										key: '0-0-0-0-0-1',
										delete: false,
										children: [
											{
												title: '0-0-0-0-0-0-00',
												key: '0-0-0-0-0-0-00',
												delete: false,
											},
											{
												title: '0-0-0-0--0-1-1',
												key: '0-0-0-0-0-1-1',
												delete: false,
												children: [
													{
														title: '0-0-0-0-0-0-0',
														key: '0-0-0-0-0-0-0',
														delete: false,
													},
													{
														title: '0-0-0-0-0-0-1',
														key: '0-0-0-0-0-0-1',
														delete: false,
														children: [
															{
																title: '0-0-0-0-0-0-0-0',
																key: '0-0-0-0-0-0-0-0',
																delete: false,
																children: [
																	{
																		title: '0-0-0-0-0-0-0-0-0',
																		key: '0-0-0-0-0-0-0-0-0',
																		delete: false,
																		children: [
																			{
																				title:
																					'0-0-0-0-0-0-0-0-0-00000000',
																				key:
																					'0-0-0-0-0-0-0-0-0-000000000',
																				delete: false,
																				disableCheckbox: true,
																			},
																		],
																	},
																],
															},
														],
													},
												],
											},
										],
									},
								],
							},
						],
					},
				],
			},
			{
				title: '0-0-1',
				key: '0-0-1',
				disableCheckbox: true,
				children: [
					{ title: '0-0-1-0', key: '0-0-1-0' },
					{ title: '0-0-1-1', key: '0-0-1-1' },
					{ title: '0-0-1-2', key: '0-0-1-2' },
				],
			},
			{
				title: '0-0-2',
				key: '0-0-2',
				disableCheckbox: false,
			},
		],
	},
];
const treeSelectData = [
	{
		title: 'Node1',
		value: '0-0',
		key: '0-0',
		children: [
			{
				title: 'Child Node1',
				value: '0-0-0',
				key: '0-0-0',
			},
		],
	},
	{
		title: 'Node2',
		value: '0-1',
		key: '0-1',
		children: [
			{
				title: 'Child Node3',
				value: '0-1-0',
				key: '0-1-0',
			},
			{
				title: 'Child Node4',
				value: '0-1-1',
				key: '0-1-1',
			},
			{
				title: 'Child Node5',
				value: '0-1-2',
				key: '0-1-2',
			},
		],
	},
];

const radioStyle = {
	display: 'block',
	height: '42px',
	lineHeight: '42px',
};

export default () => {
	const modalRef = useRef<BizModalFormRef>();
	const [checkedKeys, setCheckedKeys] = useState<string[]>();
	const [visible, setVisible] = useState<boolean>(false);
	const [form] = Form.useForm();
	const [radioValue, setRadioValue] = useState<number>(1);
	return (
		<>
			<BizModalForm
				ref={modalRef}
				title='还原栏目'
				triggerRender={() => (
					<Button type='default' onClick={() => modalRef.current?.open()}>
						还原栏目
					</Button>
				)}
				submitterRender={() => (
					<>
						<Button onClick={() => modalRef.current?.close()}>取消</Button>
						<Button
							type='primary'
							onClick={() => {
								console.log(checkedKeys, '仅还原栏目');
							}}
						>
							仅还原栏目
						</Button>
						<Button
							type='primary'
							onClick={() => {
								modalRef.current?.close();
								setVisible(true);
							}}
						>
							还原栏目及内容
						</Button>
					</>
				)}
				width={496}
			>
				<p>
					选择要还原的栏目&nbsp;
					<Tooltip
						title={
							<span>
								红色的为被删除的栏目
								<br />
								没被删除的栏目不可选
							</span>
						}
						placement='bottom'
					>
						<InfoCircleOutlined />
					</Tooltip>
					：
				</p>
				<div className='io-cms-content-recycle-restore-section-biz-modal-form-tree-container'>
					<Tree
						treeData={treeData}
						checkable
						checkStrictly
						onCheck={checkedKeys => setCheckedKeys(checkedKeys as string[])}
						defaultExpandAll
						titleRender={nodeData => {
							if (nodeData?.disableCheckbox === false) {
								return <span style={{ color: 'red' }}>{nodeData.title}</span>;
							}
							return <span>{nodeData.title}</span>;
						}}
					/>
				</div>
			</BizModalForm>
			<Modal
				visible={visible}
				title='还原栏目'
				onOk={() => {
					console.log(radioValue, 'rararararar')
					if (radioValue === 2) {
						form.validateFields().then(values => {
							console.log(values, 'vavavav');
							const param = {
								radioValue,
								checkedKeys,
								parentId: values.parentId
							};
							console.log(param, '提交参数')
						})
					} else {
						const param = {
							radioValue,
							checkedKeys,
						}
						console.log(param, '提交参数')
					}
				}}
				onCancel={() => setVisible(false)}
				className='io-cms-content-recycle-restore-section-modal-container'
				width={560}
			>
				<div className='restore-section-modal-container__div'>
					<p style={{ marginBottom: '12px' }}>以下站点的上级站点已被删除，无法正常恢复，请选择处理方式：</p>
					<p style={{ marginBottom: '10px', color: '#8C8C8C' }}>[站点1]</p>
					<Form form={form}>
						<Form.Item name='' label='' style={{ marginBottom: '16px' }}>
							<Radio.Group defaultValue={radioValue} onChange={(e) => setRadioValue(e.target.value)}>
								<Radio value={1} style={radioStyle}>同时还原所有上级栏目</Radio>
								<Radio value={2} style={radioStyle}>还原到其他栏目下</Radio>
							</Radio.Group>
						</Form.Item>
						{radioValue === 2 && <Form.Item
							name='parentId'
							label='上级栏目'
							rules={[{ required: true, message: '请选择上级栏目' }]}
							labelCol={{ span: 4 }}
							style={{ marginBottom: '8px' }}
						>
							<TreeSelect treeData={treeSelectData} />
						</Form.Item>}
					</Form>
				</div>
			</Modal>
		</>
	);
};
