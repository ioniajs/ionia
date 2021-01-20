import React, { useRef, useState } from 'react';
import { BizTable, BizPage } from '@ionia/libs';
import { ActionType, ProColumns } from '@ant-design/pro-table';
import { Button, message, Popconfirm, Form, Input, Space, DatePicker, Tooltip } from 'antd';
import {
    volunteerTeamsList,
    AdminVolunteerTeamListVO,
    deleteVolunteerTeams
} from '@ionia/libs/src/services';
import { SearchOutlined } from '@ant-design/icons';
import { IdsDTO } from '@ionia/libs/src/services/common.dto';
import moment from 'moment';
import { useHistory } from 'react-router-dom';
import './index.less';

/**
 * 删除志愿队伍
 * @param filed
 */
const handleDeleteVolunteerTeams = async (filed: IdsDTO) => {
    const deleteRes = await deleteVolunteerTeams(filed);
    if (deleteRes.code === 200) {
        message.success('删除成功');
    } else {
        message.error('删除失败');
    }
    return deleteRes.code;
};

export default () => {
    const actionRef = useRef<ActionType>();
    const [searchParams, setSearchParams] = useState<any>({ pageNo: 1, pageSize: 10 });
    const [form] = Form.useForm();
    const history = useHistory();

    const filterDropdown = (filter: string) => {
        return (
            <div className='io-cms-table-filterDropDown'>
                <Form form={form}>
                    <Form.Item name={filter} className='filterDropDown_formItem'>
                        <Input placeholder='Search' />
                    </Form.Item>
                </Form>
                <Space>
                    <Button
                        type='primary'
                        onClick={() => {
                            const param = form.getFieldValue(filter);
                            searchParams[filter] = param;
                            setSearchParams({ ...searchParams });
                        }}
                        icon={<SearchOutlined />}
                        size='small'
                        style={{ width: 90 }}
                    >
                        查询
					</Button>
                    <Button
                        onClick={() => {
                            form.resetFields();
                            searchParams[filter] = '';
                            setSearchParams({ ...searchParams });
                        }}
                        size='small'
                        style={{ width: 90 }}
                    >
                        重置
					</Button>
                </Space>
            </div>
        );
    };
    const columns: ProColumns<AdminVolunteerTeamListVO>[] = [
        {
            title: '队伍名称',
            key: 'name',
            dataIndex: 'name',
            render: (_, row) => (
                <a>{row.name}</a>
            )
        },
        {
            title: '队伍编号',
            key: 'code',
            dataIndex: 'code',
            filterDropdown: () => filterDropdown('code'),
        },
        {
            title: '账号信息',
            key: 'username',
            dataIndex: 'username',
            render: (_, row) => (
                <Tooltip title={
                    <>
                        <div>{row.username}</div>
                        <div>{row.email}</div>
                    </>
                }>
                    <span style={{ width: '120px', display: 'inline-block' }}>
                        <div className='table-content-ellipsis'>{row.username}</div>
                        <div className='table-content-ellipsis'>{row.email}</div>
                    </span>
                </Tooltip>
            ),
            width: 150,
            filterDropdown: () => filterDropdown('userInfo'),
        },
        {
            title: '所属阵地',
            key: 'orgName',
            dataIndex: 'orgName',
            width: 200,
            render: (_, row) => (
                <Tooltip title={row.orgName}>
                    <span style={{ width: '180px', display: 'inline-block' }}>
                        <div className='table-content-ellipsis'>{row.orgName}</div>
                    </span>
                </Tooltip>
            )
        },
        {
            title: '负责人',
            key: 'principalName',
            dataIndex: 'principalName',
            render: (_, row) => (
                <span>
                    <div>{row.principalName}</div>
                    <div>{row.principalPhone}</div>
                </span>
            ),
            filterDropdown: () => filterDropdown('principal'),
        },
        {
            title: '地址',
            key: 'address',
            dataIndex: 'address',
            width: 200,
            render: (_, row) => (
                <Tooltip title={row.address}>
                    <span style={{ width: '180px', display: 'inline-block' }}>
                        <div className='table-content-ellipsis'><a><i className='iconfont icon-address' />&nbsp;&nbsp;{row.address}</a></div>
                    </span>
                </Tooltip>
            ),
            filterDropdown: () => filterDropdown('address'),
        },
        {
            title: '队伍规模',
            key: 'memberNum',
            dataIndex: 'memberNum',
            render: (_, row) => (
                <span>{row.memberNum}人</span>
            ),
            sorter: true,
        },
        {
            title: '成立时间',
            key: 'time',
            dataIndex: 'time',
            sorter: true,
            filterDropdown: () => (
                <div className='io-cms-table-time-filterDropDown'>
                    <Form form={form}>
                        <Form.Item name='time' className='time-filterDropDown_formItem'>
                            <DatePicker.RangePicker />
                        </Form.Item>
                    </Form>
                    <Space className='time-filterDropDown__space' size={40}>
                        <Button
                            className='time-filterDropDown-search__button'
                            type='primary'
                            onClick={() => {
                                const time = form.getFieldValue('time');
                                console.log(time, 'timeme');
                                const beginCheckTime =
                                    moment(time[0]).format('YYYY-MM-DD') + ' 00:00:00';
                                const endCheckTime =
                                    moment(time[1]).format('YYYY-MM-DD') + ' 00:00:00';
                                console.log(beginCheckTime, endCheckTime);
                                setSearchParams({
                                    ...searchParams,
                                    beginCheckTime,
                                    endCheckTime,
                                });
                            }}
                            icon={<SearchOutlined />}
                            size='small'
                            style={{ width: 120 }}
                        >
                            查询
						</Button>
                        <Button
                            onClick={() => {
                                form.setFieldsValue({ time: '' });
                                setSearchParams({
                                    ...searchParams,
                                    beginCheckTime: '',
                                    endCheckTime: '',
                                });
                            }}
                            size='small'
                            style={{ width: 120 }}
                        >
                            重置
						</Button>
                    </Space>
                </div>
            ),
        },
        {
            title: '操作',
            key: 'operation',
            dataIndex: 'operation',
            render: (_, row) => (
                <Popconfirm
                    title={
                        <span>
                            <div style={{ fontWeight: 'bold' }}>确认是否需要删除？</div>
                            <div style={{ fontSize: '12px', color: '#8C8C8C' }}>
                                队伍删除将一并删除所有下级队伍信息（含待审核<br />
                                队伍），同时队伍下的志愿者将处于无队伍状态，<br />
                                确认是否执行？
							</div>
                        </span>
                    }
                    placement='leftBottom'
                    okText='确认'
                    cancelText='取消'
                    onConfirm={async () => {
                        const success = await handleDeleteVolunteerTeams({
                            ids: [row.id.toString()],
                        });
                        if (success === 200 && actionRef.current) {
                            actionRef.current.reload();
                        }
                    }}
                >
                    <a>删除</a>
                </Popconfirm>
            )
        },
    ];
    return (
        <BizPage>
            <div className='io-cms-volunteer-teams'>
                <BizTable
                    rowKey='id'
                    actionRef={actionRef}
                    columns={columns}
                    params={searchParams}
                    renderActions={() => (
                        <>
                            <div className='io-space-item'>
                                <Button type='primary' onClick={() => {
                                    history.push({
                                        pathname: '/volunteer/teams/add'
                                    })
                                }}>新建</Button>
                            </div>
                        </>
                    )}
                    inputPlaceholderText='请输入队伍名称'
                    request={(params: any, sort: any, filter: any) => {
                        let orderBy;
                        if (JSON.stringify(sort) !== '{}') {
                            const sortKey = Object.keys(sort)[0];
                            const sortValue = Object.values(sort)[0];
                            if (sortKey === 'memberNum') {
                                // 队伍规模升序
                                if (sortValue === 'ascend') {
                                    orderBy = 1;
                                } else {
                                    // 队伍规模降序
                                    orderBy = 2;
                                }
                            } else if (sortKey === 'time') {
                                // 成立时间升序
                                if (sortValue === 'ascend') {
                                    orderBy = 3;
                                } else {
                                    // 成立时间降序
                                    orderBy = 4;
                                }
                            }
                        }
                        return volunteerTeamsList({
                            ...params,
                            pageNo: params.current,
                            pageSize: params.pageSize,
                            orderBy: orderBy
                        }).then(data => ({
                            data: data.data,
                        }));
                    }}
                    pagination={false}
                />
            </div>
        </BizPage>
    )
}