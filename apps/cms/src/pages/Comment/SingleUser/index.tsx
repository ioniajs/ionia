import React, { useState } from 'react';
import { BizPage } from '@ionia/libs';
import { Select, Pagination, Button, TreeSelect, Form } from 'antd';
import {
	QueryFilter,
	ProFormSelect,
	ProFormDateTimeRangePicker,
	ProFormText,
} from '@ant-design/pro-form';
import { Search } from '../Search';
import { CommentItems } from '../Items';
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

export default () => {
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
		<BizPage
			showActions={true}
			goBackAction={true}
			renderActions={() => <></>}
			breadcrumbs={[{ name: '评论管理' }, { name: '用户全部评论' }]}
		>
			<div className='io-cms-comment-single-user-container'>
				<div className='io-cms-comment-single-user-detail__div'>
					<p>用户：</p>
					<a>systemSuperAdmin</a>
					<p>【&nbsp;全部&nbsp;1（待审核&nbsp;0&nbsp;|&nbsp;已审核&nbsp;1）】</p>
					<Button type='primary'>禁止用户评论</Button>
				</div>
				<Search />
				<div className='io-cms-comment-single-user-header-between-content__div' />
				<CommentItems />
				{/* <div className='io-cms-comment-single-user-search__div'>
                    <QueryFilter
                        span={5}
                        defaultCollapsed={true}
                        defaultColsNumber={3}
                        onFinish={async values => {
                            console.log(values);
                        }}
                        onCollapse={collapsed => SetCollapsed(collapsed)}
                    >
                        <ProFormSelect name='sortWay' label='排序方式' valueEnum={sortWay} />
                        <ProFormSelect
                            name='approvalStatus'
                            label='审核状态'
                            valueEnum={approvalStatus}
                        />
                        {!!collapsed && (
                            <ProFormText
                                name='keyWord'
                                placeholder='评论人/IP/评论内容/回复内容/文章标题'
                                colSize={1.2}
                            />
                        )}
                        <Form.Item
                            name='section'
                            label='所属栏目'
                            labelCol={{ span: 6 }}
                        >
                            <TreeSelect treeData={treeData} placeholder='请选择' allowClear />
                        </Form.Item>
                        <ProFormSelect
                            name='replyStatus'
                            label='回复状态'
                            valueEnum={replyStatus}

                        />
                        <ProFormDateTimeRangePicker
                            name='commentTime'
                            label='评论时间'
                            colSize={1.4}
                        />
                        <ProFormDateTimeRangePicker
                            name='replyTime'
                            label='回复时间'
                            colSize={1.4}
                        />
                        <ProFormText
                            name='searchKeyWord'
                            fieldProps={{
                                addonBefore: selectBefore,
                                placeholder: `搜素${inputPlaceHolder[searchTypesValue]}`,
                            }}
                        />
                    </QueryFilter>
                </div> */}
			</div>
			<Pagination
				className='io-cms-comment-list-pagination'
				total={85}
				showSizeChanger={true}
				showQuickJumper={true}
				showTotal={total => `共${total}条`}
				defaultPageSize={5}
				onChange={(page, pageSize) => {
					console.log(page, pageSize, 'pagination');
				}}
			/>
		</BizPage>
	);
};
