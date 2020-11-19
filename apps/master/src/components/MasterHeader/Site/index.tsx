import { gainSiteTree, logger } from '@ionia/libs';
import { useRequest } from 'ahooks';
import { Tree, Select, Spin, Drawer, Button } from 'antd';
import { SearchOutlined } from '@ant-design/icons';
import React, { useState } from 'react';
import './index.less';
import { DataNode } from 'antd/lib/tree';
const { Option } = Select;

export default (props: any) => {
	const { siteTree } = props;
	const [visible, setVisible] = useState(false);
	const [siteData, setSiteData] = useState<any>([]);
	const [value, setValue] = useState([]);
	const [fetching, setFetching] = useState(false);
	let sites = ['青山湖人民政府', '青山湖人民政府', '青山湖人民政府'];
	const showDrawer = () => {
		setVisible(true);
	};
	const onClose = () => {
		setVisible(false);
	};

	const fetchUser = () => {
		// const siteData = siteTree.map((user: any) => ({
		// 	text: `${user.name.first} ${user.name.last}`,
		// 	value: user.login.username,
		// }));
		const siteData = [
			{ text: 'test', value: 'test' },
			{ text: 'test1', value: 'test1' },
			{ text: 'test2', value: 'test2' },
		];
		setSiteData(siteData);
		setFetching(false);
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
					<div className='io-master_hader-site_select'>
						<Select
							mode='multiple'
							labelInValue
							value={value}
							placeholder='搜索站点名称'
							notFoundContent={fetching ? <Spin size='small' /> : null}
							filterOption={false}
							style={{ width: '100%' }}
							onSearch={fetchUser}
						>
							{siteData.map((d: any) => (
								<Option key={d.value} value={d.value}>
									{d.text}
								</Option>
							))}
						</Select>
						<Button type='primary' icon={<SearchOutlined />}></Button>
					</div>
				</div>
				{siteTree.length ? (
					<Tree
						showLine={{ showLeafIcon: false }}
						showIcon
						defaultExpandAll={true}
						treeData={siteTree}
						className='io-master_hader-tree'
					/>
				) : null}
			</Drawer>
		</div>
	);
};
