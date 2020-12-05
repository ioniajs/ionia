import React, { useState, useEffect } from 'react';
import { BizPage, BizTable } from '@ionia/libs';
import { Tooltip } from 'antd';
import './index.less';

interface OutProps {
    onChange?: (val: number[]) => void;
}

const dataSource = [
    {
        id: 11111111,
        title: '昌北机场T1航站楼改造力争月底完工做的好解决监控流量是',
        contentType: ['top', 'fire', 'toutiao', 'like'],
        deleteName: 'Jim',
        deletePreStatus: 1,
        deleteTime: '2020-3-11 08:46:05',
    },
    {
        id: 2222222,
        title: '昌北机场T1航站楼改造力争月底完工投入突然散热热舞辐射热',
        contentType: ['top', 'fire', 'toutiao'],
        deleteName: 'Black',
        deletePreStatus: 0,
        deleteTime: '2020-3-31 09:10:45',
    },
    {
        id: 333333333,
        title: '昌北机场T1航站楼改造力争月底完工更多福特台湾二位太热',
        contentType: ['top', 'fire', 'toutiao', 'like', 'bad'],
        deleteName: 'Jim Green',
        deletePreStatus: 2,
        deleteTime: '2020-3-13 07:12:46',
    },
];

export default ({ onChange }: OutProps) => {
    const [selectedRowKeys, setSelectedRowKeys] = useState<number[]>([]);
    useEffect(() => {
        onChange && onChange(selectedRowKeys)
    }, [selectedRowKeys])
    const columns = [
        {
            title: '标题',
            key: 'title',
            dataIndex: 'title',
            render: (_: any, row: any) => (
                <Tooltip title={`${row.title}`}>
                    <span className='io-cms-user__biztable-username'>
                        {row.title}
                    </span>
                </Tooltip>
            ),
        },
        {
            title: '内容类型',
            key: 'contentType',
            dataIndex: 'contentType',
            width: 200
        },
        {
            title: '归档人',
            key: 'deleteName',
            dataIndex: 'deleteName',
            ellipsis: true,

        },
        {
            title: '归档前状态',
            key: 'deletePreStatus',
            dataIndex: 'deletePreStatus',
            width: 120
        },
        {
            title: '归档时间',
            key: 'deleteTime',
            dataIndex: 'deleteTime',
            width: 200
        },
    ];


    return (
        <div className='io-cms-conent-out-bizmodalform-bizpage-container'>
            <p className='container-description__p'>以下内容无法出档，原因为所属栏目已删除。</p>
            <BizPage
                showActions={false}
            >
                <BizTable
                    rowKey='id'
                    columns={columns}
                    dataSource={dataSource}
                    toolBarRender={false}
                    rowSelection={{
                        selectedRowKeys,
                        onChange: (selectedRowKeys: any) => {
                            setSelectedRowKeys(selectedRowKeys as number[]);
                        },
                        checkStrictly: false,
                    }}
                    pagination={{
                        total: 85,
                        showSizeChanger: true,
                        showQuickJumper: true,
                        showTotal: total => `共${total}条`,
                        defaultPageSize: 5,
                    }}
                />
            </BizPage>

        </div>
    )
}