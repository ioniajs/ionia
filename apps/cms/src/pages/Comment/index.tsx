import React, { useState } from 'react';
import { Form, TreeSelect, Select } from 'antd';
import { BizPage } from '@ionia/libs';
import {
	QueryFilter,
	ProFormSelect,
	ProFormDateTimeRangePicker,
	ProFormText,
} from '@ant-design/pro-form';
import './index.less';

const sortWay = {
	0: '默认排序',
	1: '评论时间降序',
	2: '评论时间升序',
	3: '点赞数降序',
	4: '点赞数升序',
};
const approvalStatus = {
	0: '全部',
	1: '未审核',
	2: '已审核',
};
const replyStatus = {
	0: '全部',
	1: '已回复',
	2: '未回复',
};
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
const inputPlaceHolder = ['', '评论内容', '评论人', '评论IP', '回复内容', '文章标题'];
export default () => {
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
		<BizPage>
			<div className='io-cms-comment-container'>
				<div className='io-cms-content-top-actions__div'>
					<span className='top-actions-mute__span'>禁言列表</span>
					<span className='top-actions-report__span'>举报列表</span>
				</div>
				<div className='io-cms-content-search__div'>
					<QueryFilter
						span={6}
						defaultCollapsed={false}
						onFinish={async values => {
							console.log(values);
						}}
					>
						<ProFormSelect
							name='sortWay'
							label='排序方式'
							valueEnum={sortWay}
							labelCol={{ span: 5 }}
							wrapperCol={{ span: 16 }}
						/>
						<ProFormSelect
							name='approvalStatus'
							label='审核状态'
							valueEnum={approvalStatus}
							labelCol={{ span: 4 }}
							wrapperCol={{ span: 16 }}
						/>
						<Form.Item
							name='section'
							label='所属栏目'
							labelCol={{ span: 4 }}
							wrapperCol={{ span: 16 }}
						>
							<TreeSelect treeData={treeData} placeholder='请选择' allowClear />
						</Form.Item>
						<ProFormSelect
							name='replyStatus'
							label='回复状态'
							valueEnum={replyStatus}
							labelCol={{ span: 4 }}
							wrapperCol={{ span: 16 }}
						/>
						<ProFormDateTimeRangePicker
							name='commentTime'
							label='评论时间'
							labelCol={{ span: 5 }}
							wrapperCol={{ span: 22 }}
						/>
						<ProFormDateTimeRangePicker
							name='replyTime'
							label='回复时间'
							labelCol={{ span: 4 }}
							wrapperCol={{ span: 22 }}
						/>
						<ProFormText
							name='searchKeyWord'
							fieldProps={{
								addonBefore: selectBefore,
								placeholder: `搜素内容${inputPlaceHolder[searchTypesValue]}`,
							}}
						/>
					</QueryFilter>
				</div>
				<div className='io-cms-comment-header-between-content__div' />
			</div>
		</BizPage>
	);
};
