import { gainSiteTree, logger, useGlobalStore } from '@ionia/libs';
import { useRequest, useLocalStorageState } from 'ahooks';
import { Tree, Select, Spin, Drawer, Button } from 'antd';
import { SearchOutlined } from '@ant-design/icons';
import React, { useState, useMemo } from 'react';
import './index.less';
import { DataNode } from 'antd/lib/tree';
import { data } from 'msw/lib/types/context';

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
export default () => {
	const [visible, setVisible] = useState(false); //控制抽屉的出现
	const [siteData, setSiteData] = useState<any>([]); //搜索框的列表值
	const [value, setValue] = useState([]); //搜索框的值
	const [fetching, setFetching] = useState(false);
	//全局存储站点名称
	const globalStore = useGlobalStore();
	const siteName = globalStore?.state?.siteName ?? 'JEECMS演示站';
	const showDrawer = () => {
		setVisible(true);
	};
	const onClose = () => {
		setVisible(false);
	};

	const { data } = useRequest(() => gainSiteTree());
	const treeData = data?.data.list ?? [];
	const commons = data?.data.commons ?? [];
	const size = data?.data.size ?? 0;
	const siteTree = useMemo(() => dfs(treeData), [treeData]);

	siteTree.map((item: any) => {
		item.icon = <i className='iconfont icon-apartment'></i>;
	});

	/**
	 * 搜索
	 */
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

	const handleChange = (value: any) => {
		// this.setState({
		//   value,
		//   data: [],
		//   fetching: false,
		// });
		setValue(value);
		setSiteData([]);
		setFetching(false);
	};

	/**
	 * @param value
	 * 修改站点名称
	 * 关闭抽屉
	 */
	const changeSite = (value: any) => {
		console.log(value);
		globalStore.setState({
			siteName: value,
		});
		setVisible(false);
	};

	return (
		<div className='io-master__header-site'>
			<div className='io-master__header--item' onClick={showDrawer}>
				<span className='text'>{siteName}</span>
			</div>
			<Drawer
				placement='right'
				visible={visible}
				onClose={onClose}
				className='io-master__header-site'
			>
				{size > 20 && (
					<div>
						<div className='io-master_hader-site_common-site'>
							<p>最新使用</p>
							<div>
								{commons.map((item: any, index: any) => {
									return (
										<div
											key={index}
											className='io-master_hader-site_new'
											onClick={() => changeSite(item.name)}
										>
											{item.name}
										</div>
									);
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
									autoClearSearchValue
									defaultActiveFirstOption
									placeholder='搜索站点名称'
									notFoundContent={fetching ? <Spin size='small' /> : null}
									filterOption={false}
									style={{ width: '100%' }}
									onSearch={fetchUser}
									onChange={handleChange}
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
					</div>
				)}
				{value.length < 1 && (
					<div>
						{siteTree.length ? (
							<Tree
								showLine={{ showLeafIcon: false }}
								showIcon
								defaultExpandAll={true}
								treeData={siteTree}
								className='io-master_hader-tree'
								onSelect={(selectedKeys, e) => {
									changeSite(e.node.title);
								}}
							/>
						) : null}
					</div>
				)}
				{value.length > 0 && (
					<div>
						{value.map((item: any, index: any) => {
							return (
								<div
									key={index}
									className='io-master_hader-site_check'
									onClick={() => changeSite(item.value)}
								>
									{item.value}
								</div>
							);
						})}
						{/* 12131 */}
					</div>
				)}
			</Drawer>
		</div>
	);
};
