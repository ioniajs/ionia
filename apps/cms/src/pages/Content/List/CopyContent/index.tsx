import React, { useRef, useState } from 'react';
import { Tooltip, Tree, Button } from 'antd';
import { InfoCircleOutlined } from '@ant-design/icons';
import { BizModalForm, BizModalFormRef } from '@ionia/libs';
import './index.less';

interface CopyFormProps {
	contentId?: string;
	action?: string
}

const treeData = [
	{
		title: '0-0',
		key: '0-0',
		children: [
			{
				title: '0-0-0',
				key: '0-0-0',
				children: [
					{ title: '0-0-0-0', key: '0-0-0-0' },
					{ title: '0-0-0-1', key: '0-0-0-1' },
					{
						title: '0-0-0-2',
						key: '0-0-0-2',
						children: [
							{ title: '0-0-0-0-0', key: '0-0-0-0-0' },
							{ title: '0-0-0-0-1', key: '0-0-0-0-1' },
							{
								title: '0-0-0-0-2',
								key: '0-0-0-0-2',
								children: [
									{ title: '0-0-0-0-0-0', key: '0-0-0-0-0-0' },
									{
										title: '0-0-0-0-0-1',
										key: '0-0-0-0-0-1',
										children: [
											{ title: '0-0-0-0-0-0-00', key: '0-0-0-0-0-0-00' },
											{
												title: '0-0-0-0--0-1-1',
												key: '0-0-0-0-0-1-1',
												children: [
													{
														title: '0-0-0-0-0-0-0',
														key: '0-0-0-0-0-0-0',
													},
													{
														title: '0-0-0-0-0-0-1',
														key: '0-0-0-0-0-0-1',
														children: [
															{
																title: '0-0-0-0-0-0-0-0',
																key: '0-0-0-0-0-0-0-0',
																children: [
																	{
																		title: '0-0-0-0-0-0-0-0-0',
																		key: '0-0-0-0-0-0-0-0-0',
																		children: [
																			{
																				title:
																					'0-0-0-0-0-0-0-0-0-00000000',
																				key:
																					'0-0-0-0-0-0-0-0-0-000000000',
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
				children: [
					{ title: '0-0-1-0', key: '0-0-1-0' },
					{ title: '0-0-1-1', key: '0-0-1-1' },
					{ title: '0-0-1-2', key: '0-0-1-2' },
				],
			},
			{
				title: '0-0-2',
				key: '0-0-2',
			},
		],
	},
	// {
	//     title: '0-1',
	//     key: '0-1',
	//     children: [
	//         { title: '0-1-0-0', key: '0-1-0-0' },
	//         { title: '0-1-0-1', key: '0-1-0-1' },
	//         { title: '0-1-0-2', key: '0-1-0-2' },
	//     ],
	// },
	// {
	//     title: '0-2',
	//     key: '0-2',
	// },
];

export default ({ contentId, action }: CopyFormProps) => {
	const ref = useRef<BizModalFormRef>();
	const [checkedKeys, setCheckedKeys] = useState<string[]>();
	console.log(checkedKeys, 'onchangeHo')
	const handleOnCheck = (checkedKeys: any) => {
		console.log(checkedKeys, 'checked');
		setCheckedKeys(checkedKeys as string[]);
	}
	return (
		<BizModalForm
			ref={ref}
			title={action === 'copy' ? '复制' : '移动'}
			width={496}
			triggerRender={() => (
				action === 'copy' ? <a
					className='content-middle-action'
					onClick={() => {
						ref.current?.open();
					}}
				>
					复制
				</a> :
					<a className='content-middle-action' onClick={() => {
						ref.current?.open();
					}}>移动</a>
			)}
			submitterRender={() => (
				<div className='btn-submitter'>
					<Button onClick={() => ref.current?.close()}>取消</Button>
					<Button
						htmlType='submit'
						type='primary'
						onClick={() => {
							console.log('复制确定');
						}}
					>
						确定
					</Button>
				</div>
			)}
		>
			{action === 'copy' ? <p>
				复制到栏目&nbsp;
				<Tooltip
					title={
						<span>
							复制后将会在所选栏目
							<br />
							下新建一篇相同的内容
						</span>
					}
					placement='bottom'
				>
					<InfoCircleOutlined />
				</Tooltip>
				：
			</p> : <p>移动到栏目：</p>}
			<div className='io-cms-content-list-copy-modal-tree-container'>
				<Tree checkable
					treeData={treeData}
					onCheck={(checkedKeys) => handleOnCheck(checkedKeys)}
					defaultExpandAll
				/>
			</div>
		</BizModalForm>
	);
};
