import React, { useRef, useState } from 'react';
import { BizModalForm, BizModalFormRef } from '@ionia/libs';
import { Button, Tree, Tooltip, Modal, Form, Radio, TreeSelect } from 'antd';
import { InfoCircleOutlined } from '@ant-design/icons';
import './index.less';

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

export default () => {
	const modalRef = useRef<BizModalFormRef>();
	const [checkedKeys, setCheckedKeys] = useState<string[]>();
	const [visible, setVisible] = useState<boolean>(false);
	const [form] = Form.useForm();
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
			<Modal visible={visible} title='还原栏目' onCancel={() => setVisible(false)}>
				<div>
					<p>以下站点的上级站点已被删除，无法正常恢复，请选择处理方式：</p>
					<p>[站点1]</p>
					<Form
						form={form}
						className='io-cms-content-recycle-restore-section-modal-container'
					>
						<Form.Item name='' label=''>
							<Radio.Group>
								<Radio value={1}>同时还原所有上级栏目</Radio>
								<Radio value={2}>还原到其他栏目下</Radio>
							</Radio.Group>
						</Form.Item>
						<Form.Item
							name='parentId'
							label='上级栏目'
							rules={[{ required: true, message: '请选择上级栏目' }]}
						>
							<TreeSelect treeData={treeSelectData} />
						</Form.Item>
					</Form>
				</div>
			</Modal>
		</>
	);
};
