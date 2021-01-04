import React, { useState } from 'react';
import { Table, Checkbox, Button, message } from 'antd';
import { logger, sitepermGroupOrgandrole, saveSitepermGroupOrgandrole } from '@ionia/libs';
import { useRequest } from 'ahooks';
import '../index.less';

export default ({ siteId }: { siteId: string }) => {
	console.log('siteId', siteId);
	const [load, setLoad] = useState<boolean>(true);
	const [tree, setTree] = useState([]);
	useRequest(() => sitepermGroupOrgandrole({ siteId }), {
		onSuccess: data => {
			let dataSource = getParentArray(data.data);
			setTree(dataSource);
			setLoad(false);
		},
	});
	const columns = [
		{
			title: '全选',
			// width:'80px',
			render: (text: any, row: any) => {
				if (row.children && row.children.length) {
					return (
						<i
							className='iconfont icon-apartment'
							title='选中下级/取消下级'
							style={{ cursor: 'pointer' }}
							onClick={() => {
								checkChildren(row);
							}}
						/>
					);
				} else {
					return '';
				}
			},
		},
		{
			title: '阵地',
			dataIndex: 'orgName',
			key: 'orgName',
		},
		{
			title: '角色',
			key: 'roleName',
			width: '12%',
			render: (text: any, record: any, index: any) => {
				if (record.roleName) {
					return (
						<Checkbox
							checked={record.selected == 1}
							disabled={record.optional == 0}
							onChange={e => {
								e.target.checked;
								// console.log('row', text, record);
								changeParent(e.target.checked, record);
							}}
						>
							{record.roleName}
						</Checkbox>
					);
				} else {
					return null;
				}
			},
		},
	];
	const rowSelection = {
		renderCell: (checked: any, record: any) => {
			// console.log('record', record);
			if (record.orgName) {
				return (
					<Checkbox
						checked={record.selected == 1}
						disabled={record.optional == 0}
						onChange={e => {
							checkAllChildren(e.target.checked, record);
						}}
					/>
				);
			} else {
				return null;
			}
		},
		checkStrictly: true,
		/**
		 * 全选
		 */
		onSelectAll: (selected: any, selectedRows: any, changeRows: any) => {
			console.log(selected, selectedRows, changeRows);
			const loop = (data: any) => {
				data.map((item: any) => {
					if (item.optional == 1) {
						selected ? (item.selected = 1) : (item.selected = 0);
					}

					if (item.children && item.children.length) {
						loop(item.children);
					}
				});
			};
			loop(tree);
			setTree([...tree]);
		},
	};

	//递归添加父级
	const getParentArray = (data: any) => {
		const loop = (list: any, parent: any) => {
			list.map((item: any) => {
				item.parent = parent;
				item.flag = false;
				if (item.children) {
					loop(item.children, item);
					return item;
				}
			});
		};
		loop(data, '');
		return data;
	};

	const changeParent = (flag: boolean, record: any) => {
		flag ? (record.selected = 1) : (record.selected = 0);
		const loop = (data: any) => {
			if (data.parent && data.parent.optional == 1) {
				data.parent.selected = 1;
			}
			if (data.parent.parent) {
				loop(data.parent);
			}
		};
		loop(record);
		setTree([...tree]);
	};

	const checkAllChildren = (flag: boolean, record: any) => {
		flag ? (record.selected = 1) : (record.selected = 0);
		if (record.children && record.children.length) {
			const loop = (row: any) => {
				row.map((t: any) => {
					console.log('t', t);
					if (t.optional == 1) {
						flag ? (t.selected = 1) : (t.selected = 0);
					}
					if (t.children) {
						loop(t.children);
					}
				});
			};
			loop(record.children);
		}
		setTree([...tree]);
		logger.debug('tree', tree);
	};

	const checkChildren = (record: any) => {
		record.flag = !record.flag;
		const loop = (data: any) => {
			data.map((item: any) => {
				if (item.optional == 1) {
					record.flag ? (item.selected = 1) : (item.selected = 0);
				}

				if (item.children && item.children.length) {
					loop(item.children);
				}
			});
		};
		loop(record.children);
		setTree([...tree]);
	};

	const onSubmit = async () => {
		let orgList: any[] = [];
		let roleList: any[] = [];
		const loop = (data: any) => {
			data.map((t: any) => {
				if (t.orgId) {
					orgList.push({
						orgId: t.orgId,
						selected: t.selected,
					});
				}
				if (t.roleId) {
					roleList.push({
						roleId: t.roleId,
						selected: t.selected,
					});
				}
				if (t.children) {
					loop(t.children);
				}
			});
		};
		loop(tree);
		const { code } = await saveSitepermGroupOrgandrole({
			orgs: orgList,
			roles: roleList,
			siteId,
		});
		if (code == 200) {
			message.success('保存成功');
		}
	};
	return (
		<div>
			<Button type='primary' onClick={onSubmit} className='io-cms-site-authority_button'>
				保存
			</Button>

			{tree.length && (
				<Table
					columns={columns}
					dataSource={tree}
					rowSelection={{ ...rowSelection }}
					pagination={false}
					loading={load}
					rowKey={record => {
						return record.orgId ? record.orgId : record.roleId;
					}}
					defaultExpandAllRows={true}
				/>
			)}
		</div>
	);
};
