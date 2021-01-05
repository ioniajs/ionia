import React, { useState, useEffect } from 'react';
import { Table, Button, Switch, Popconfirm, message } from 'antd';
import { menuList, menuDelete, showSwitch, rightControlSwitch } from '@ionia/libs';
import { useHistory } from 'react-router-dom';
import './index.less';

const MenuIndex = () => {
	const history = useHistory();
	const [list, setList] = useState<any[]>([]);

	useEffect(() => {
		handleLoad();
	}, []);
	const handleLoad = async () => {
		const { data } = await menuList({ parentId: '' });
		console.log(data);
		setList(data);
	};

	const changeShowFlag = async (id: any, flag: any) => {
		console.log(flag);
		let showFlag = flag == 1 ? 0 : 1;
		await showSwitch({ id, showFlag });
		handleLoad();
	};

	const changeAuthFlag = async (id: any, flag: any) => {
		console.log(flag);
		let authFlag = flag == 1 ? 0 : 1;
		await rightControlSwitch({ id, authFlag });
		handleLoad();
	};

	const columns = [
		{
			title: '菜单名称',
			dataIndex: 'menuName',
			render: (_: any, row: any) => (
				<a
					onClick={() => {
						history.push(`/system-management/menu-management/menu/detail/${row.id}`);
					}}
				>
					{_}
				</a>
			),
		},
		{
			title: '路由地址',
			dataIndex: 'component',
			// width: '12%',
		},
		{
			title: '权限标识',
			dataIndex: 'name',
		},
		{
			title: '排序',
			dataIndex: 'sortNum',
		},
		{
			title: '是否显示',
			dataIndex: 'showFlag',
			render: (_: any, row: any) => {
				return (
					<Switch
						checked={_ == 1}
						onChange={() => {
							changeShowFlag(row.id, _);
						}}
					></Switch>
				);
			},
		},
		{
			title: '是否权限控制',
			dataIndex: 'authFlag',
			render: (_: any, row: any) => {
				return (
					<Switch
						checked={_ == 1}
						onChange={() => {
							changeAuthFlag(row.id, _);
						}}
					></Switch>
				);
			},
		},
		{
			title: '操作',
			render: (row: any) => {
				return (
					<Popconfirm
						title='是否确定删除？'
						okText='确定'
						cancelText='取消'
						onConfirm={() => {
							console.log(row);
							if (row.children) {
							} else {
								let arr = [];
								arr.push(row.id);
								menuDelete({ ids: arr }).then((res: any) => {
									console.log(res);
									if (res.code == 200) {
										message.success('删除成功');
										handleLoad();
									}
								});
							}
						}}
					>
						<a>删除</a>
					</Popconfirm>
				);
			},
		},
	];
	return (
		<div>
			<Button
				className='io-cms-menu-list_button'
				onClick={() => {
					history.push('/system-management/menu-management/menu/add');
				}}
				type='primary'
			>
				新增
			</Button>
			<Table columns={columns} dataSource={list} rowKey='id' pagination={false} />
		</div>
	);
};
export default MenuIndex;
