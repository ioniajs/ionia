import React, { useRef } from 'react';
import { Tooltip, Tree } from 'antd';
import { InfoCircleOutlined } from '@ant-design/icons';
import { BizModalForm, BizModalFormRef } from '@ionia/libs';
import './index.less';

interface CopyFormProps {
	contentId?: string;
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
											{ title: '0-0-0-0-0-0', key: '0-0-0-0-0-0' },
											{
												title: '0-0-0-0--0-1',
												key: '0-0-0-0-0-1',
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

export default ({ contentId }: CopyFormProps) => {
	const ref = useRef<BizModalFormRef>();
	return (
		<BizModalForm
			ref={ref}
			title='复制'
			width={496}
			triggerRender={() => (
				<a
					className='content-middle-action'
					onClick={() => {
						ref.current?.open();
					}}
				>
					复制
				</a>
			)}
		>
			<p>
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
			</p>
			<div className='io-cms-content-list-copy-modal-tree-container'>
				<Tree checkable treeData={treeData} />
			</div>
		</BizModalForm>
	);
};
