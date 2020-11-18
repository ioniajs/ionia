import { gainSiteTree, logger } from '@ionia/libs';
import { useRequest } from 'ahooks';
import { Tree, Dropdown, Menu } from 'antd';
import { DownOutlined, CarryOutOutlined, FormOutlined } from '@ant-design/icons';
import React, { useState } from 'react';
import './index.less';
import { DataNode } from 'antd/lib/tree';

// interface DataNode {
// 	dir: string;
// 	id: string;
// 	name: number;
// 	domain: string[];
// 	status:number;
// 	children?: DataNode[];
//   }

//   const initTreeDate: DataNode[] = [

//   ];

const dfs = (node: any) => {
	return (
		node &&
		node.map((n: any) => {
			if (n && n.children) {
				n.children = dfs(n.children);
			}
			return {
				...n,
				title: n.name,
				key: n.id,
			};
		})
	);
};

const Site: React.FC<{}> = () => {
	const { data } = useRequest(() => gainSiteTree());

	const treeData: any = data?.data ?? [];

	const d = dfs(treeData);
	// d.map((item:any)=>{
	// 	item.icon =<CarryOutOutlined/>
	// })

	logger.debug('-->', d);

	let sites = ['青山湖人民政府', '青山湖人民政府', '青山湖人民政府'];
	const menus = (
		<Menu className='io-master_hader-site'>
			<div>
				<p>常用站点</p>
				<div>
					{sites.map((item, index) => {
						return <p key={index}>{item}</p>;
					})}
				</div>
			</div>
			<Menu.Divider />
			<div>
				<p>全部站点</p>
			</div>
			{d.length ? (
				<Tree
					showLine={{ showLeafIcon: false }}
					showIcon
					defaultExpandAll={true}
					//switcherIcon={<DownOutlined />}
					treeData={d}
					className='io-master_hader-tree'
				/>
			) : null}
		</Menu>
	);

	return (
		<>
			<Dropdown overlay={menus}>
				<span className='io-master__header--item'>
					<span className='text'>JEECMS演示站</span>
				</span>
			</Dropdown>
		</>
	);
};

export default Site;
