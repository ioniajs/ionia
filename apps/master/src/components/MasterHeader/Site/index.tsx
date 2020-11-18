import { gainSiteTree, logger } from '@ionia/libs';
import { useRequest } from 'ahooks';
import { Tree, Select, Spin, Drawer } from 'antd';
import { RightOutlined, CarryOutOutlined, FormOutlined } from '@ant-design/icons';
import React, { useState } from 'react';
import './index.less';
import { DataNode } from 'antd/lib/tree';
const { Option } = Select;

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

	const [visible, setVisible] = useState(false);
	const [siteData, setSiteData] = useState([]);
	const [value, setValue] = useState([]);
	const [fetching, setFetching] = useState(false);
	let sites = ['青山湖人民政府', '青山湖人民政府', '青山湖人民政府'];
	const showDrawer = () => {
		setVisible(true);
	};
	const onClose = () => {
		setVisible(false);
	};

	return (
		<div className='io-master__header-site'>
			<div className='io-master__header--item' onMouseOver={showDrawer}>
				<span className='text'>JEECMS演示站</span>
			</div>
			<Drawer
				placement='right'
				visible={visible}
				onClose={onClose}
				className='io-master__header-site'
			>
				<div className='io-master_hader-site_common-site'>
					<p>常用站点</p>
					<div>
						{sites.map((item, index) => {
							return <p key={index}>{item}</p>;
						})}
					</div>
				</div>
				<div className='io-master_hader-site_search'>
					<p>全部站点</p>
					{/* <Search placeholder='搜索站点名称' enterButton /> */}
					<Select
						mode='multiple'
						labelInValue
						value={value}
						placeholder='搜索站点名称'
						notFoundContent={fetching ? <Spin size='small' /> : null}
						filterOption={false}
						style={{ width: '100%' }}
					>
						{/* {siteData.map(d => (
							<Option key={d.value}>{d.text}</Option>
						))} */}
					</Select>
				</div>
				{d.length ? (
					<Tree
						showLine={{ showLeafIcon: false }}
						showIcon
						defaultExpandAll={true}
						treeData={d}
						className='io-master_hader-tree'
					/>
				) : null}
			</Drawer>
		</div>
	);
};

export default Site;
