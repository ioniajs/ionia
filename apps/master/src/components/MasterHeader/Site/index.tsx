import { gainSiteTree, logger } from '@ionia/libs';
import { useRequest } from 'ahooks';
import { Tree, Dropdown, Menu } from 'antd';
import { DownOutlined } from '@ant-design/icons';
import React from 'react';
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
	return node && node.map((n: any) => {
		if(n && n.children) {
			n.children = dfs(n.children);
		}
		return {
			...n,
			title: n.name,
			key:n.id
		};		
	})
}

const Site : React.FC<{}> =() => {

	const { data } = useRequest(() => gainSiteTree());
	const treeData: any = data?.data ?? [];

	const d = dfs(treeData);

	logger.debug('-->', d);

	const menus = (
		<Menu className='io-master_hader-site'>
			<Tree
				showIcon
				defaultExpandAll
				defaultSelectedKeys={['0-0-0']}
				switcherIcon={<DownOutlined />}
				treeData={d}
			/>
		</Menu>
	);

	return (
		<>
			<Dropdown overlay={menus} visible={true}>
				<span className='io-master__header--item'>
					<span className='text'>JEECMS演示站</span>
				</span>
			</Dropdown>
		</>
	);
};


export default Site