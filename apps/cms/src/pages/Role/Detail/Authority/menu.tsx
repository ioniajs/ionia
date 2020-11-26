import React from 'react';
import { Collapse, Checkbox } from 'antd';
import './index.less';
import { divide } from 'lodash';
const { Panel } = Collapse;

function callback(key: any) {
	console.log(key);
}
interface treeItem {
	title: string;
	key: string;
	parentId: string | null;
	disabled?: boolean;
	children: treeItem[];
	disableCheckbox?: boolean;
}
const treeData: treeItem[] = [
	{
		title: 'test1',
		key: '1',
		parentId: null,
		children: [
			{
				title: 'parent 1-0',
				key: '11',
				disabled: true,
				parentId: '1',
				children: [
					{
						title: 'leaf',
						key: '111',
						disableCheckbox: true,
						parentId: '11',
						children: [],
					},
					{
						title: 'leaf',
						key: '112',
						parentId: '11',
						children: [],
					},
				],
			},
			{
				title: 'parent 1-1',
				key: '12',
				parentId: '1',
				children: [
					{
						title: 'leaf',
						key: '121',
						parentId: '12',
						children: [
							{
								title: 'leaf1-1-1',
								key: '1211',
								disableCheckbox: true,
								parentId: '121',
								children: [],
							},
							{
								title: 'leaf1-2-2',
								key: '1212',
								parentId: '121',
								children: [],
							},
						],
					},
					{
						title: 'leaf',
						key: '122',
						parentId: '12',
						children: [],
					},
				],
			},
			{
				title: 'parent 1-2',
				key: '13',
				parentId: '1',
				children: [],
			},
		],
	},
	{
		title: 'parent 2',
		key: '2',
		parentId: null,
		children: [],
	},
	{
		title: 'parent 2',
		key: '3',
		parentId: null,
		children: [],
	},
];
export default ({ roleId }: any) => {
	function onChange(e: { target: { checked: any } }) {
		console.log(`checked = ${e.target.checked}`);
	}
	return (
		<Collapse
			defaultActiveKey={['1']}
			onChange={callback}
			className='io_cms_role_authority-menu_collapse'
		>
			{treeData.map(item => {
				return (
					<Panel
						header={
							<div>
								<Checkbox onChange={onChange}>{item.title}</Checkbox>
							</div>
						}
						key='1'
						showArrow={item.children.length > 0}
					>
						{item.children?.map(i => {
							return (
								<div
									className='io_cms_role_authority-menu_collapse-panel'
									key={i.key}
								>
									<div className='io_cms_role_authority-menu_collapse-panel_title'>
										<Checkbox onChange={onChange}>{i.title}</Checkbox>
									</div>
									<div>
										{i.children.map((o: any) => {
											return (
												<Checkbox onChange={onChange} key={o.key}>
													{o.title}
												</Checkbox>
											);
										})}
									</div>
								</div>
							);
						})}
					</Panel>
				);
			})}
			{/* <Panel header='This is panel header 1' key='1'>
				<p>{text}</p>
			</Panel> */}
		</Collapse>
	);
};
