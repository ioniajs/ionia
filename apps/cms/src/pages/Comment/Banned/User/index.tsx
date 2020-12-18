import React, { useState, useRef } from 'react';
import { ProColumns, ActionType } from '@ant-design/pro-table';
import { Button, DatePicker, Form, Space } from 'antd';
import { SortOrder } from 'antd/lib/table/interface';
import { BizTable } from '@ionia/libs';
import { useHistory } from 'react-router-dom';
import { SearchOutlined } from '@ant-design/icons';
import moment from 'moment';
import './index.less';

const sortDirections: SortOrder[] = ['descend', 'ascend'];

const dataSource = [
    {
        id: '001',
        userName: '鲁班',
        prohibitedTime: '2020-03-11 08:46:05',
        operationUser: 'system',

    },
    {
        id: '002',
        userName: '安琪拉',
        prohibitedTime: '2019-09-03 14:13:33',
        operationUser: 'system',
    },
]

export const UserChildren = () => {
    const history = useHistory();
    const [form] = Form.useForm();
    const [selectedRowKeys, setSelectedRowKeys] = useState<number[]>([]);
    const actionRef = useRef<ActionType>();
    const columns = [
        {
            title: '禁止用户',
            key: 'userName',
            dataIndex: 'userName',
            render: (_: any, row: any) => (
                <a onClick={() => { history.push('/content-operation/comment/single-user') }}>{row.userName}</a>
            )
        },
        {
            title: '禁止时间',
            key: 'prohibitedTime',
            dataIndex: 'prohibitedTime',
            sorter: (a: any, b: any, order: any) => {
                let atime = new Date(a.prohibitedTime.replace(/-/g, '/')).getTime();
                let btime = new Date(b.prohibitedTime.replace(/-/g, '/')).getTime();
                return atime - btime;
            },
            sortDirections: sortDirections,
            filterDropdown: () => (
                <div className='io-cms-comment-banned-user-table-prohibitedTime-filterDropDown'>
                    <Form form={form}>
                        <Form.Item name='prohibitedTime' className='prohibitedTime-filterDropDown_formItem'>
                            <DatePicker.RangePicker showTime />
                        </Form.Item>
                    </Form>
                    <Space className='prohibitedTime-filterDropDown__space' size={40}>
                        <Button
                            className='prohibitedTime-filterDropDown-search__button'
                            type='primary'
                            onClick={() => {
                                const prohibitedTime = form.getFieldValue('prohibitedTime');
                                const startTime = prohibitedTime && moment(prohibitedTime[0]).format('YYYY-MM-DD HH:mm:ss');
                                const endTime = prohibitedTime && moment(prohibitedTime[1]).format('YYYY-MM-DD HH:mm:ss');
                                console.log(startTime, endTime);
                            }}
                            icon={<SearchOutlined />}
                            size='small'
                            style={{ width: 120 }}
                        >
                            查询
						</Button>
                        <Button
                            onClick={() => {
                                form.resetFields();
                            }}
                            size='small'
                            style={{ width: 120 }}
                        >
                            重置
						</Button>
                    </Space>
                </div>
            )
        },
        {
            title: '操作人',
            key: 'operationUser',
            dataIndex: 'operationUser',
        },
        {
            title: '操作',
            key: 'operation',
            dataIndex: 'operation',
            render: () => (
                <a>取消用户禁止</a>
            )
        },
    ]
    return (
        <BizTable
            rowKey='id'
            actionRef={actionRef}
            renderActions={() => (
                <Button type='primary'>取消用户禁止</Button>
            )}
            inputPlaceholderText='请输入禁止用户/操作人'
            columns={columns}
            dataSource={dataSource}
            // request={() => {}}
            rowSelection={{
                selectedRowKeys,
                onChange: (selectedRowKeys: any) => {
                    setSelectedRowKeys(selectedRowKeys as number[]);
                },
                checkStrictly: false,
            }}
            pagination={{
                total: 30,
                showSizeChanger: true,
                showQuickJumper: true,
                showTotal: total => `共${total}条`,
                defaultPageSize: 5,
            }}
        />
    )
}