import React, { useState } from 'react';
import { Select, TreeSelect, Form } from 'antd';
import {
	QueryFilter,
	ProFormSelect,
	ProFormDateTimeRangePicker,
	ProFormText,
} from '@ant-design/pro-form';
import './index.less';

// const sortWay = {
//     0: '默认排序',
//     1: '评论时间降序',
//     2: '评论时间升序',
//     3: '点赞数降序',
//     4: '点赞数升序',
// };
const sortWay = [
	{ label: '默认排序', value: 0 },
	{ label: '评论时间降序', value: 1 },
	{ label: '评论时间升序', value: 2 },
	{ label: '点赞数降序', value: 3 },
	{ label: '点赞数升序', value: 4 },
];
const approvalStatus = [
	{ label: '全部', value: 0 },
	{ label: '未审核', value: 1 },
	{ label: '已审核', value: 2 },
];

const replyStatus = [
	{ label: '全部', value: 0 },
	{ label: '已回复', value: 1 },
	{ label: '未回复', value: 2 },
];

// 搜索类型
const searchTypes = [
	{
		label: '评论内容',
		value: 1,
	},
	{
		label: '评论人',
		value: 2,
	},
	{
		label: '评论IP',
		value: 3,
	},
	{
		label: '回复内容',
		value: 4,
	},
	{
		label: '文章标题',
		value: 5,
	},
];

const treeData = [
	{
		title: 'Node1',
		value: '0-0',
		children: [
			{
				title: 'Child Node1',
				value: '0-0-1',
			},
			{
				title: 'Child Node2',
				value: '0-0-2',
			},
		],
	},
	{
		title: 'Node2',
		value: '0-1',
	},
];
const inputPlaceHolder = ['', '评论内容', '评论人', '评论IP', '回复内容', '文章标题'];

interface SearchProps {
	type?: string;
}

export const Search = ({ type }: SearchProps) => {
	const [collapsed, SetCollapsed] = useState<boolean>(true); // 查询条件面板是否折叠
	const [searchTypesValue, setSearchTypes] = useState<number>(1);
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
	return (
		<div className='io-cms-comment-search__div'>
			<QueryFilter
				span={5}
				defaultCollapsed={true}
				defaultColsNumber={3}
				onFinish={async values => {
					console.log(values);
				}}
				onCollapse={collapsed => SetCollapsed(collapsed)}
			>
				<ProFormSelect name='sortWay' label='排序方式' options={sortWay} initialValue={0} />
				<ProFormSelect
					name='approvalStatus'
					label='审核状态'
					options={approvalStatus}
					initialValue={0}
				/>
				{!!collapsed && (
					<ProFormText
						name='keyWord'
						placeholder='评论人/IP/评论内容/回复内容/文章标题'
						colSize={1.2}
					/>
				)}
				{type !== 'singleContent' && (
					<Form.Item name='section' label='所属栏目' labelCol={{ span: 6 }}>
						<TreeSelect treeData={treeData} placeholder='请选择' allowClear />
					</Form.Item>
				)}
				<ProFormSelect
					name='replyStatus'
					label='回复状态'
					options={replyStatus}
					initialValue={0}
				/>
				<ProFormDateTimeRangePicker name='commentTime' label='评论时间' colSize={1.4} />
				<ProFormDateTimeRangePicker name='replyTime' label='回复时间' colSize={1.4} />
				<ProFormText
					name='searchKeyWord'
					fieldProps={{
						addonBefore: selectBefore,
						placeholder: `搜素${inputPlaceHolder[searchTypesValue]}`,
					}}
				/>
			</QueryFilter>
		</div>
	);
};
