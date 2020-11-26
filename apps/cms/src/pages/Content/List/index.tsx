import React, { useState } from 'react';
import { BizPage, BizTable, BizTree } from '@ionia/libs';
import { Form, Select, Input, DatePicker, Checkbox } from 'antd';
import {
	QueryFilter,
	ProFormSelect,
	ProFormCheckbox,
	ProFormText,
	ProFormDateRangePicker,
	ProFormDateTimeRangePicker,
} from '@ant-design/pro-form';
// import ProList from '@ant-design/pro-list';

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
const changeContentStatus = {
	1: '发布',
	2: '存为初稿',
	3: '下线',
};
// 选择列的其他操作
const changeOtherActions = {
	1: '删除',
	2: '移动',
	3: '排序',
	4: '复制',
	5: '归档',
	6: '站群推送',
};
// 选择列改变内容状态
const changeContentTypes = {
	1: '设置置顶',
	2: '取消置顶',
	3: '设置热点',
	4: '取消热点',
	5: '设置头条',
	6: '取消头条',
	7: '设置推荐',
	8: '取消推荐',
};

export const List = () => {
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
		<div>
			<QueryFilter
				// style={{ display: 'flex' }}
				onFinish={async values => {
					console.log(values);
				}}
			>
				<ProFormSelect
					name='sortWay'
					label='排序方式'
					valueEnum={sortWay}
					style={{ width: '240px' }}
					colSize={0.75}
				/>
				<ProFormSelect
					name='contentStatus'
					label='内容状态'
					valueEnum={contentStatus}
					colSize={0.75}
				/>
				<ProFormCheckbox.Group
					name='showSectionContent'
					layout='horizontal'
					label=''
					options={['显示子栏目内容']}
				/>
				<ProFormSelect
					name='contentType'
					label='内容类型'
					valueEnum={contentType}
					colSize={0.75}
				/>
				<ProFormSelect
					name='contentModal'
					label='内容模型'
					valueEnum={contentModal}
					colSize={0.75}
				/>
				{/* <Form.Item name='create' label='创建时间'>
                    <DatePicker.RangePicker showTime />
                </Form.Item> */}
				<Form.Item name='publish' label='发布时间'>
					<DatePicker.RangePicker showTime />
				</Form.Item>
				<ProFormDateTimeRangePicker name='create' label='创建时间' colSize={1} />
				{/* <ProFormDateRangePicker name='publish' label='发布时间' colSize={1} /> */}
				<ProFormSelect
					name='createWay'
					label='创建方式'
					valueEnum={createWay}
					colSize={0.75}
				/>
				<ProFormCheckbox.Group
					name='showMineCreate'
					layout='vertical'
					label=''
					options={['我创建的']}
				/>
				<ProFormText name='contentTittle' placeholder='搜索内容标题' colSize={0.75} />
				<ProFormText
					name='searchKeyWord'
					fieldProps={{
						addonBefore: selectBefore,
						placeholder: `搜素内容${inputPlaceHolder[searchTypesValue]}`,
					}}
				/>
				<Checkbox>全选</Checkbox>
				<ProFormSelect
					name=''
					valueEnum={changeContentStatus}
					colSize={0.5}
					placeholder='改变内容状态'
				/>
				<ProFormSelect
					name=''
					valueEnum={changeOtherActions}
					colSize={0.5}
					placeholder='其他操作'
				/>
				<ProFormSelect
					name=''
					valueEnum={changeContentTypes}
					colSize={0.5}
					placeholder='改变内容类型'
				/>
			</QueryFilter>
		</div>
	);
};
