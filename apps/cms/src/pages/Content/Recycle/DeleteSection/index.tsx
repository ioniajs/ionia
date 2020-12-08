import React, { useRef, useState } from 'react';
import { BizModalForm, BizModalFormRef } from '@ionia/libs';
import { Button, Tree, Modal, Tooltip } from 'antd';
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

export default () => {
	const modalRef = useRef<BizModalFormRef>();
	const [checkedKeys, setCheckedKeys] = useState<string[]>();
	return (
		<>
			<BizModalForm
				ref={modalRef}
				title='删除栏目'
				triggerRender={() => (
					<Button type='default' onClick={() => modalRef.current?.open()}>
						删除栏目
					</Button>
				)}
				submitterRender={() => (
					<>
						<Button onClick={() => modalRef.current?.close()}>取消</Button>
						<Button
							type='primary'
							onClick={() => {
								modalRef.current?.close();
								Modal.confirm({
									title: '你确定删除选中栏目吗？',
									content:
										'删除栏目将同时删除子栏目及栏目中的内容，删除后无法恢复。',
									okText: '删除',
									onOk: () => {},
								});
							}}
						>
							删除
						</Button>
					</>
				)}
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
				<div className='io-cms-content-recycle-delete-section-biz-modal-form-tree-container'>
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
		</>
	);
};
