import React, { useState } from 'react';
import { Select, Checkbox, Form, Dropdown, Menu, Tooltip, Pagination, Modal } from 'antd';
import {
	QueryFilter,
	ProFormSelect,
	ProFormCheckbox,
	ProFormText,
	ProFormDateTimeRangePicker,
} from '@ant-design/pro-form';
import { SortableContainer, SortableElement } from 'react-sortable-hoc';
import arrayMove from 'array-move';
import './index.less';

// 排序方式
const sortWay = {
	0: '默认排序',
	1: '创建时间降序',
	2: '创建时间升序',
	3: '发布时间降序',
	4: '发布时间升序',
	5: '总阅读量降序',
	6: '总阅读量升序',
	7: '总阅读人数降序',
	8: '总阅读人数升序',
	9: '总评论数降序',
	10: '总评论数升序',
	11: '总点赞数降序',
	12: '总点赞数升序',
};
// 内容状态
const contentStatus = {
	0: '全部',
	1: '已发布',
	2: '初稿',
	3: '已下线',
};
// 内容类型
const contentType = {
	0: '全部',
	1: '置顶',
	2: '头条',
	3: '热点',
	4: '推荐',
};
// 内容模型
const contentModal = {
	1: '新闻',
	2: '图库',
	3: '视频',
};
// 创建方式
const createWay = {
	0: '全部',
	1: '新建',
	2: '复制',
	3: '站群推送',
};
// 搜索类型
const searchTypes = [
	{
		label: '标题',
		value: 1,
	},
	{
		label: '作者',
		value: 2,
	},
	{
		label: '来源',
		value: 3,
	},
	{
		label: '描述',
		value: 4,
	},
	{
		label: '创建人',
		value: 5,
	},
];

const inputPlaceHolder = ['', '标题', '作者', '来源', '描述', '创建人'];
// 选择列改变内容状态
const changeContentStatus = [
	{ value: 1, label: '发布' },
	{ value: 2, label: '存为初稿' },
	{ value: 3, label: '下线' },
];
// 选择列的其他操作
const changeOtherActions = [
	{ value: 1, label: '删除' },
	{ value: 2, label: '移动' },
	{ value: 3, label: '排序' },
	{ value: 4, label: '复制' },
	{ value: 5, label: '归档' },
	{ value: 6, label: '站群推送' },
];
// 选择列改变内容状态
const changeContentTypes = [
	{ value: 1, label: '设置置顶' },
	{ value: 2, label: '取消置顶' },
	{ value: 3, label: '设置热点' },
	{ value: 4, label: '取消热点' },
	{ value: 5, label: '设置头条' },
	{ value: 6, label: '取消头条' },
	{ value: 7, label: '设置推荐' },
	{ value: 8, label: '取消推荐' },
];

const dataSource = [
	{
		title:
			'【栏目HHHHH】昌北机场T1航站楼改造力争月底完工昌北机场T1航站楼改造力争月底完工昌北机场',
		user: 'HHHHH',
		id: 0,
	},
	{
		title:
			'【栏目MMMMM】昌北机场T1航站楼改造力争月底完工昌北机场T1航站楼改造力争月底完工昌北机场',
		user: 'MMMMM',
		id: 1,
	},
	{
		title:
			'【栏目WWWWW】昌北机场T1航站楼改造力争月底完工昌北机场T1航站楼改造力争月底完工昌北机场',
		user: 'WWWWW',
		id: 2,
	},
	{
		title:
			'【栏目ZZZZZ】昌北机场T1航站楼改造力争月底完工昌北机场T1航站楼改造力争月底完工昌北机场',
		user: 'ZZZZZ',
		id: 3,
	},
];

// 下线
const handleContentOffLine = (id: any) => {
	console.log(id, '下线id');
}
// 发布
const handleContentPublish = (id: any) => {
	console.log(id, '发布id');
}
// 预览
const handleContentPreview = (id: any) => {
	console.log(id, '预览id');
}
// 浏览
const handleContentBrowse = (id: any) => {
	console.log(id, '浏览id');
}

export const List = () => {
	const [searchTypesValue, setSearchTypes] = useState<number>(1);
	const [selectedRowKeys, setSelectedRowKeys] = useState<number[]>([]);
	const [indeterminate, setIndeterminate] = useState(false);
	const [checkedAll, setCheckedAll] = useState(false);
	const [datas, setDatas] = useState(dataSource);
	console.log(selectedRowKeys, 'rowKrys');
	const selectBefore = (
		<Select
			defaultValue={1}
			className='select-before'
			options={searchTypes}
			onChange={e => {
				setSearchTypes(Number(e));
			}}
		/>
	);
	// 右下角功能区，hover下拉
	const rightMenuActions = (
		<Menu>
			<Menu.Item>
				<a>归档</a>
			</Menu.Item>
			<Menu.Item>
				<a>置顶</a>
			</Menu.Item>
			<Menu.Item>
				<a>取消热点</a>
			</Menu.Item>
			<Menu.Item>
				<a>取消头条</a>
			</Menu.Item>
			<Menu.Item>
				<a>设置推荐</a>
			</Menu.Item>
			<Menu.Item>
				<a>站群推送</a>
			</Menu.Item>
		</Menu>
	);
	const topMenuActions = (
		<Menu>
			<Menu.Item><i className='iconfont icon-vertical-align-top' />&nbsp;置顶</Menu.Item>
			<Menu.Item><i className='iconfont icon-fire' />&nbsp;热点</Menu.Item>
			<Menu.Item><i className='iconfont icon-toutiao' />&nbsp;头条</Menu.Item>
			<Menu.Item><i className='iconfont icon-like' />&nbsp;推荐</Menu.Item>

		</Menu>
	)

	const SortableItem = SortableElement(({ value }: any) => (
		<div className='io-cms-content-list-item__div' key={value.key}>
			<div className='io-cms-content-list-item-top__div'>
				<Checkbox
					defaultChecked={selectedRowKeys.indexOf(value.id) > -1}
					onChange={e => {
						let tempSelectRowKeys: number[] = [];
						if (e.target.checked) {
							const temp = selectedRowKeys.concat(value.id);
							tempSelectRowKeys = Array.from(new Set(temp));
						} else {
							selectedRowKeys.splice(
								selectedRowKeys.findIndex((item: any) => item === value.id),
								1
							);
							const a: number[] = [];
							tempSelectRowKeys = a.concat(selectedRowKeys);
						}
						setSelectedRowKeys(tempSelectRowKeys);
						setCheckedAll(tempSelectRowKeys.length === datas.length);
						setIndeterminate(
							!!tempSelectRowKeys.length && tempSelectRowKeys.length < datas.length
						);
					}}
				/>
				<p className='io-cms-content-list-item-content-top-section__span'>{value.title}</p>
				<p className='io-cms-content-list-item-content-top-actions_span'>
					<Tooltip title='置顶（到期时间：2019-11-29 19）'>
						<i
							className='iconfont icon-vertical-align-top '
							style={{ cursor: 'pointer' }}
						/>
					</Tooltip>
					<Tooltip title='热点'>
						<i className='iconfont icon-fire item-content-top-action' />
					</Tooltip>
					<Tooltip title='头条'>
						<i className='iconfont icon-toutiao item-content-top-action' />
					</Tooltip>
					<Tooltip title='推荐'>
						<i className='iconfont icon-like item-content-top-action' />
					</Tooltip>
					<Tooltip title='更多内容类型'>
						<Dropdown overlay={topMenuActions}>
							<i className='iconfont icon-ellipsis item-content-top-action' />
						</Dropdown>
					</Tooltip>
				</p>
				<p className='io-cms-content-list-item-content-top-time__span'>
					2019-11-29 19:17:52
				</p>
			</div>
			<div className='io-cms-content-list-item-middle__div'>
				<div className='io-cms-content-list-item-content-middle-desc__div'>
					<span className='io-cms-content-list-content-desc__div'>
						<span className='io-cms-content-list-content-desc-div-text__span'>
							已发布
						</span>
					</span>
					<span className='io-cms-content-list-content-desc-count'>
						<Tooltip title='阅读量'>
							<span className='count-icon__span'>
								<i className='iconfont icon-eye1' />
								&nbsp;<span>97</span>
							</span>
						</Tooltip>
						<Tooltip title='阅读人数'>
							<span className='count-icon__span'>
								<i className='iconfont icon-user1' />
								&nbsp;<span>82</span>
							</span>
						</Tooltip>
						<Tooltip title='评论数'>
							<span className='count-icon__span'>
								<i className='iconfont icon-message' />
								&nbsp;<span>15</span>
							</span>
						</Tooltip>
						<Tooltip title='点赞数'>
							<span className='count-icon__span'>
								<i className='iconfont icon-like' />
								&nbsp;<span>36</span>
							</span>
						</Tooltip>
					</span>
				</div>
				<div className='io-cms-content-list-item-content-middle-actions'>
					<a
						className='content-middle-action'
						onClick={() => handleContentOffLine(value?.id)}
					>
						下线
					</a>
					<a
						className='content-middle-action'
						onClick={() => handleContentPublish(value?.id)}
					>
						发布
					</a>
					<a
						className='content-middle-action'
						onClick={() => handleContentPreview(value?.id)}
					>
						预览
					</a>
					<a
						className='content-middle-action'
						onClick={() => handleContentBrowse(value?.id)}
					>
						浏览
					</a>
					<a
						className='content-middle-action'
						onClick={() => {
							console.log('点击了删除')
							Modal.confirm({
								title: '你确定删除选中内容吗？',
								content: '删除后可在内容回收站中恢复。',
								okText: '删除',
								onOk: () => { }
							})
						}}
					>
						删除
					</a>
					<a className='content-middle-action'>复制</a>
					<a className='content-middle-action'>移动</a>
					<a className='content-middle-action'>排序</a>
					<Dropdown overlay={rightMenuActions}>
						<i className='iconfont icon-ellipsis content-middle-action' />
					</Dropdown>
				</div>
			</div>
		</div>
	));
	const SortableList = SortableContainer(({ items }: any) => {
		return (
			<div className='io-cms-content-list-item-container__div'>
				{items.map((value: any, index: number) => (
					<SortableItem key={`item-${index}`} index={index} value={value} />
				))}
			</div>
		);
	});
	const onSortEnd = ({ oldIndex, newIndex }: any) => {
		setDatas(arrayMove(datas, oldIndex, newIndex));
	};
	return (
		<div className='io-cms-content-list-container'>
			<div className='io-cms-content-list-search'>
				<QueryFilter
					span={6}
					onFinish={async values => {
						console.log(values);
					}}
					defaultCollapsed={true}
				>
					<ProFormSelect
						name='sortWay'
						label='排序方式'
						valueEnum={sortWay}
						style={{ width: '240px' }}
					// colSize={0.75}
					/>
					<ProFormSelect
						name='contentStatus'
						label='内容状态'
						valueEnum={contentStatus}
						mode='multiple'
					// colSize={0.75}
					/>
					<ProFormCheckbox.Group
						name='showSectionContent'
						label=''
						options={['显示子栏目内容']}
						layout='vertical'
					// colSize={0.5}
					/>
					<ProFormSelect
						name='contentType'
						label='内容类型'
						valueEnum={contentType}
						mode='multiple'
					// colSize={0.75}
					/>
					<ProFormSelect
						name='contentModal'
						label='内容模型'
						valueEnum={contentModal}
						mode='multiple'
					// colSize={0.75}
					/>
					<ProFormDateTimeRangePicker name='create' label='创建时间' colSize={1.5} />
					<ProFormDateTimeRangePicker
						name='publish'
						label='发布时间'
						colSize={1.5}
					/>
					<ProFormSelect
						name='createWay'
						label='创建方式'
						valueEnum={createWay}
						mode='multiple'
					// colSize={0.75}
					/>
					<ProFormCheckbox.Group
						name='showMineCreate'
						layout='vertical'
						label=''
						options={['我创建的']}
					// colSize={0.5}
					/>
					<ProFormText
						name='contentTittle'
						placeholder='搜索内容标题'
					// colSize={0.75}
					/>
					<ProFormText
						name='searchKeyWord'
						fieldProps={{
							addonBefore: selectBefore,
							placeholder: `搜素内容${inputPlaceHolder[searchTypesValue]}`,
						}}
					// colSize={0.75}
					/>
				</QueryFilter>
				<div className='io-cms-content-list-search-bottom' />
			</div>
			<Form className='io-cms-content-pro-list-header'>
				<Form.Item label='' name='selectAll' style={{ display: 'inline-block' }}>
					<Checkbox
						onChange={e => {
							if (e.target.checked) {
								const allRowKeys = datas.map((item: any) => {
									return item.id;
								});
								const temp = selectedRowKeys.concat(allRowKeys);
								const tempSelectRowKeys = Array.from(new Set(temp));
								setSelectedRowKeys(tempSelectRowKeys);
							} else {
								setSelectedRowKeys([]);
							}
							setCheckedAll(e.target.checked);
							setIndeterminate(false);
						}}
						checked={checkedAll}
						indeterminate={indeterminate}
					>
						全选
					</Checkbox>
				</Form.Item>
				<Form.Item
					label=''
					name='changeContentStatus'
					style={{ display: 'inline-block', marginLeft: '15px' }}
				>
					<Select
						options={changeContentStatus}
						placeholder='改变内容状态'
						style={{ width: '224px' }}
						allowClear
					/>
				</Form.Item>
				<Form.Item
					label=''
					name='otherOperation'
					style={{ display: 'inline-block', marginLeft: '24px' }}
				>
					<Select
						options={changeOtherActions}
						placeholder='其他操作'
						style={{ width: '224px' }}
						allowClear
					/>
				</Form.Item>
				<Form.Item
					label=''
					name='changeContentTypes'
					style={{ display: 'inline-block', marginLeft: '24px' }}
				>
					<Select
						options={changeContentTypes}
						placeholder='改变内容类型'
						listHeight={200}
						style={{ width: '224px' }}
						allowClear
					/>
				</Form.Item>
			</Form>
			<SortableList
				items={datas}
				onSortEnd={onSortEnd}
				axis='xy'
				helperClass='io-sortable-helper'
			/>
			<Pagination
				className='io-cms-content-list-pagination'
				total={85}
				showSizeChanger={true}
				showQuickJumper={true}
				showTotal={total => `共${total}条`}
				defaultPageSize={5}
				onChange={(page, pageSize) => {
					console.log(page, pageSize, 'pagination');
				}}
			/>
		</div>
	);
};
