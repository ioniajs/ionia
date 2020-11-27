import { gainSiteTree, useGlobalStore } from '@ionia/libs';
import { useDebounceFn, useMount, useRequest } from 'ahooks';
import { Drawer, Input, Tree } from 'antd';
import React, { ReactText, useMemo, useState } from 'react';
import Highlighter from 'react-highlight-words';
import PinyinMatch from 'pinyin-match';
import './index.less';

const { Search } = Input;

const dfs = (node: any, searchWord: string) => {
	return (
		node &&
		node.map((n: any) => {
			if (n && n.children) {
				n.children = dfs(n.children, searchWord);
			}
			return {
				...n,
				title: (
					<Highlighter
						searchWords={[getMatchWords(n.name, searchWord)]}
						autoEscape={true}
						textToHighlight={n.name}
					/>
				),
				key: n.id,
			};
		})
	);
};

const dataList: any[] = [];

const generateList = (data: any[]) => {
	for (let i = 0; i < data.length; i++) {
		const node = data[i];
		dataList.push({ key: node.id, name: node.name });
		if (node.children) {
			generateList(node.children);
		}
	}
};

//@ts-ignore
const getParentKey = (key: string, tree: any[]) => {
	let parentKey;
	for (let i = 0; i < tree.length; i++) {
		const node = tree[i];
		if (node.children) {
			if (node.children.some((item: any) => item.key === key)) {
				parentKey = node.key;
			} else if (getParentKey(key, node.children)) {
				parentKey = getParentKey(key, node.children);
			}
		}
	}
	return parentKey;
};

const getMatchWords = (sourceString: string, searchString: string) => {
	const results: number[] | boolean = PinyinMatch.match(sourceString, searchString);
	if (!results || !Array.isArray(results)) return '';
	return sourceString.substring(results[0], results[1] + 1);
};

export default () => {
	const [visible, setVisible] = useState(false);
	const [searchWord, setSearchWord] = useState<string>('');
	const [expandedKeys, setExpandedKeys] = useState<ReactText[]>([]);
	const [autoExpandParent, setAutoExpandParent] = useState(true);

	const globalStore = useGlobalStore();
	const siteName = globalStore?.state?.siteName ?? 'JEECMS演示站';

	const { data, run: runGainSiteTree } = useRequest(() => gainSiteTree(), {
		onSuccess: data => {
			generateList(data.data.list);
			setExpandedKeys(dataList.map(n => n.key));
		},
	});
	const treeData = data?.data.list ?? [];
	const commons = data?.data.commons ?? [];
	const size = data?.data.size ?? 0;

	const siteTree = useMemo(() => dfs(treeData, searchWord), [treeData, searchWord]);

	useMount(() => {
		runGainSiteTree();
	});

	siteTree.map((item: any) => {
		item.icon = <i className='iconfont icon-apartment' />;
	});

	const changeSite = (value: any) => {
		globalStore.setState({
			siteName: value,
		});
		setVisible(false);
	};

	const onExpand = (expandedKeys: ReactText[]) => {
		setExpandedKeys(expandedKeys);
		setAutoExpandParent(false);
	};

	const { run: onChange } = useDebounceFn(
		(value: string) => {
			let newExpandedKeys: ReactText[];
			if (!!value) {
				newExpandedKeys = dataList
					.map(item => {
						if (!!getMatchWords(item.name, value)) {
							return getParentKey(item.key, treeData);
						}
						return null;
					})
					.filter((item, i, self) => item && self.indexOf(item) === i);
			} else {
				newExpandedKeys = dataList.map(n => n.key);
			}
			setSearchWord(value);
			setExpandedKeys(newExpandedKeys);
			setAutoExpandParent(true);
		},
		{
			wait: 300,
		}
	);

	return (
		<div className='io-master__header-site'>
			<div className='io-master__header--item' onClick={() => setVisible(true)}>
				<span className='text'>{siteName}</span>
			</div>
			<Drawer
				placement='right'
				visible={visible}
				onClose={() => setVisible(false)}
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
								<Search
									allowClear
									placeholder='搜索站点名称'
									onChange={e => onChange(e.target.value)}
									onSearch={onChange}
								/>
							</div>
						</div>
					</div>
				)}
				<div>
					{siteTree.length ? (
						<Tree
							className='io-master_hader-tree'
							showLine={{ showLeafIcon: false }}
							showIcon
							defaultExpandAll={true}
							treeData={siteTree}
							expandedKeys={expandedKeys}
							autoExpandParent={autoExpandParent}
							onExpand={onExpand}
							onSelect={(_, e: any) => {
								changeSite(e.node.name);
							}}
						/>
					) : null}
				</div>
			</Drawer>
		</div>
	);
};
