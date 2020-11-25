import { DownOutlined } from '@ant-design/icons';
import { logger } from '@ionia/libs';
import { Affix, Button, Checkbox, Modal, Tree } from 'antd';
import React, { useState } from 'react';
import { ExclamationCircleOutlined } from '@ant-design/icons';

const { confirm } = Modal;
const treeData = [
	{
		title: 'parent 1',
		key: '0-0',
		isCheck: false,
		children: [
			{
				title: 'parent 1-0',
				key: '0-0-0',
				children: [
					{
						title: 'leaf',
						key: '0-0-0-0',
					},
					{
						title: 'leaf',
						key: '0-0-0-1',
					},
				],
			},
			{
				title: 'parent 1-1',
				key: '0-0-1',
			},
			{
				title: 'parent 1-2',
				key: '0-0-2',
				isCheck: false,
				children: [
					{ title: <span style={{ color: '#1890ff' }}>sss</span>, key: '0-0-2-0' },
					{ title: 'sss', key: '0-0-2-1' },
					{ title: 'sss', key: '0-0-2-2' },
					{ title: 'sss', key: '0-0-2-3' },
					{ title: 'sss', key: '0-0-2-4' },
					{ title: 'sss', key: '0-0-2-5' },
					{ title: 'sss', key: '0-0-2-6' },
				],
			},
			{
				title: 'parent 1-3',
				key: '0-0-3',
				isCheck: false,
				children: [
					{ title: <span style={{ color: '#1890ff' }}>sss</span>, key: '0-0-3-0' },
					{ title: <span style={{ color: '#1890ff' }}>sss</span>, key: '0-0-3-1' },
					{ title: <span style={{ color: '#1890ff' }}>sss</span>, key: '0-0-3-2' },
					{ title: <span style={{ color: '#1890ff' }}>sss</span>, key: '0-0-3-3' },
					{ title: <span style={{ color: '#1890ff' }}>sss</span>, key: '0-0-3-4' },
					{ title: <span style={{ color: '#1890ff' }}>sss</span>, key: '0-0-3-5' },
					{ title: <span style={{ color: '#1890ff' }}>sss</span>, key: '0-0-3-6' },
					{ title: <span style={{ color: '#1890ff' }}>sss</span>, key: '0-0-3-7' },
					{ title: <span style={{ color: '#1890ff' }}>sss</span>, key: '0-0-3-8' },
				],
			},
			{
				title: 'parent 1-4',
				key: '0-0-4',
				isCheck: false,
				children: [
					{ title: <span style={{ color: '#1890ff' }}>sss</span>, key: '0-0-4-0' },
					{ title: <span style={{ color: '#1890ff' }}>sss</span>, key: '0-0-4-1' },
					{ title: <span style={{ color: '#1890ff' }}>sss</span>, key: '0-0-4-2' },
					{ title: <span style={{ color: '#1890ff' }}>sss</span>, key: '0-0-4-3' },
					{ title: <span style={{ color: '#1890ff' }}>sss</span>, key: '0-0-4-4' },
					{ title: <span style={{ color: '#1890ff' }}>sss</span>, key: '0-0-4-5' },
					{ title: <span style={{ color: '#1890ff' }}>sss</span>, key: '0-0-4-6' },
					{ title: <span style={{ color: '#1890ff' }}>sss</span>, key: '0-0-4-7' },
					{ title: <span style={{ color: '#1890ff' }}>sss</span>, key: '0-0-4-8' },
				],
			},
		],
	},
];

//获取选中的子级节点
function getKey(arr: any, ids: string[] = []) {
	arr.forEach(({ key, children }: any) => {
		if (key) {
			ids.push(key);
		}
		if (children) {
			getKey(children, ids);
		}
	});
	return ids;
}
export default ({ roleId }: any) => {
	const [expandedKeys, setExpandedKeys] = useState<string[]>(getKey(treeData));
	const [checkedKeys, setCheckedKeys] = useState<string[]>([]);
	const [selectedKeys, setSelectedKeys] = useState<string[]>([]);
	const [autoExpandParent, setAutoExpandParent] = useState<boolean>(true);
	const [checked, setChecked] = useState<boolean>(false);
	const [selectChecked, setSelectChecked] = useState<boolean>(true);
	const [top, setTop] = useState(100);
	const onSelect = (selectedKeys: any, info: any) => {
		console.log('selected', selectedKeys, info);
	};
	const s = new Set<string>();
	const onCheck = (value: any, info: any) => {
		console.log('onCheck', value, info);
		// setCheckedKeys(checkedKeys.concat(value.checked));
		let arr = value.checked;
		arr.forEach((item: any) => {
			if (s.has(item)) {
				s.delete(item);
			} else {
				s.add(item);
			}
		});
		console.log('s', s);
		let arr1 = Array.from(s);
		setCheckedKeys(arr1);
	};

	const onExpand = (expandedKeys: any) => {
		console.log('onExpand', expandedKeys);
		// if not set autoExpandParent to false, if children expanded, parent can not collapse.
		// or, you can remove all expanded children keys.
		setExpandedKeys(expandedKeys);
		setAutoExpandParent(false);
	};
	/**
	 * 全选
	 */
	const changeAll = () => {
		const allIds = getKey(treeData);
		if (!checked) {
			setCheckedKeys(allIds);
			setChecked(true);
		} else {
			setCheckedKeys([]);
			setChecked(false);
		}
	};
	/**
	 * 全部展开
	 */
	const selectAll = () => {
		const allIds = getKey(treeData);
		if (!selectChecked) {
			setExpandedKeys(allIds);
			setSelectChecked(true);
		} else {
			setExpandedKeys([]);
			setSelectChecked(false);
		}
	};

	/**
	 * 确认框
	 */
	const showConfirm = () => {
		confirm({
			title: '保存后可能会影响当前登录用户的权限，是否确认保存？',
			icon: <ExclamationCircleOutlined />,
			onOk() {
				console.log('OK');
			},
			onCancel() {
				console.log('Cancel');
			},
		});
	};
	return (
		<div className='io_cms_role_authority-site'>
			<Affix offsetTop={top}>
				<Button type='primary' onClick={showConfirm}>
					保存
				</Button>
			</Affix>
			<div className='io_cms_role_authority-site_check'>
				<Checkbox onChange={changeAll} checked={checked}>
					全选
				</Checkbox>
				<Checkbox onChange={selectAll} checked={selectChecked}>
					全部展开
				</Checkbox>
			</div>
			<Tree
				checkable
				expandedKeys={expandedKeys}
				selectedKeys={selectedKeys}
				checkedKeys={checkedKeys}
				onSelect={onSelect}
				onExpand={onExpand}
				onCheck={onCheck}
				treeData={treeData}
				switcherIcon={<DownOutlined />}
				showIcon
				checkStrictly
				selectable={false}
				autoExpandParent={autoExpandParent}
				blockNode
				titleRender={(nodeData: any) => {
					if (nodeData.children) {
						return (
							<div
								onClick={e => e.stopPropagation()}
								className='io_cms_role_authority-site_title'
							>
								<i
									className={`iconfont icon-apartment ${
										nodeData.isCheck ? 'active' : ''
									}`}
									title='选中下级'
									onClick={() => {
										const keys = getKey(nodeData.children);
										logger.debug('keys', keys);
										if (keys.length > 0) {
											keys.push(String(nodeData.key));
										}
										if (!nodeData.isCheck) {
											setCheckedKeys(checkedKeys.concat(keys));
											s.add(keys);

											nodeData.isCheck = true;
										} else {
											const newKey = checkedKeys.filter(function (item) {
												return keys.indexOf(item) < 0;
											});
											s.clear();
											s.add(newKey);
											logger.debug('s', s);
											setCheckedKeys(newKey);
											nodeData.isCheck = false;
										}

										logger.debug(nodeData);
									}}
								></i>
								<span onClick={() => alert('我是文字')}>{nodeData.title}</span>
							</div>
						);
					} else {
						return <div>{nodeData.title}</div>;
					}
				}}
			/>
		</div>
	);
};
