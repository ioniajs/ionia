import React, { useRef } from 'react';
import { ProColumns, ActionType } from '@ant-design/pro-table';
import { Button, Switch, Divider } from 'antd';
import { DndProvider, useDrag, useDrop, createDndContext } from 'react-dnd';
import { HTML5Backend } from 'react-dnd-html5-backend';
// import update from 'immutability-helper';
import { BizTable, gainSiteTree, disableSite, enableSite, batchDetailSite } from '@ionia/libs';
import { AdminSiteTreeVO } from '@ionia/libs/src/services/kernel/admin-site.vo';

/**
 * 启用、禁用
 * @param fields
 */
const handleUpdate = async (id: string, status: number) => {
    // 启用
    if (status === 1) {
        const enableRes = await enableSite(id);
        return enableRes;
    }
    const disableRes = await disableSite(id)
    return disableRes;
};

// 删除
const handleRemove = async (id: string) => {
    const removeRes = await batchDetailSite({ ids: [id]});
    return removeRes;
}


export default () => {
    const actionRef = useRef<ActionType>();
    const columns: ProColumns<AdminSiteTreeVO>[] = [
        {
            title: '站点名称',
            key: 'name',
            dataIndex: 'name',
            width: 400
        },
        {
            title: '域名',
            key: 'domain',
            dataIndex: 'domain',
            width: 300
        },
        {
            title: '站点目录',
            key: 'dir',
            dataIndex: 'dir',
            width: 400
        },
        {
            title: '状态',
            key: 'status',
            dataIndex: 'status',
            render: (_, row) => (
                <Switch
                    checked={row.status === 1}
                    checkedChildren="开启"
                    unCheckedChildren="禁用"
                    onChange={async (value: any) => {
                        const success = await handleUpdate(
                            row.id.toString(),
                            value ? 1 : 0,
                        );
                        if (success) {
                            if (success && actionRef.current) {
                            actionRef.current.reload();
                            }
                        }
                    }}
                />
            ),
            width: 200
        },
        {
            title: '操作',
            key: 'operation',
            dataIndex: 'operation',
            render: (_, row) => (
                <>
                    <a>发布静态页</a>
                    <Divider type="vertical" />
                    <a>预览</a>
                    <Divider type="vertical" />
                    <a>浏览</a>
                    <Divider type="vertical" />
                    <a>复制</a>
                    <Divider type="vertical" />
                    <a
                        onClick={async () => {
                            const success = await handleRemove(row.id.toString());
                            if (success) {
                                if (success && actionRef.current) {
                                    actionRef.current.reload();
                                }
                            }
                        }}
                    >
                        删除
                    </a>
                </>
            ),
            width: 300
        }
    ];
    return (
        <BizTable
            actionRef={actionRef}
            renderActions={() => (
                <>
                    <div className='io-space-item'>
                        <Button type='primary'><i className='iconfont icon-plus1' style={{ fontSize: '16px'}} />新建</Button>
                    </div>
                    <div className='io-space-item'>
                        <Button type='default'>批量新建</Button>
                    </div>
                    <div className='io-space-item'>
                        <Button type='default'>批量删除</Button>
                    </div>
                    <div className='io-space-item'>
                        <Button type='default'>排序</Button>
                    </div>
                    <div className='io-space-item'>
                        <Button type='default'>站点回收</Button>
                    </div>
                </>
            )}
            inputPlaceholderText={'请输入站点名称/目录'}
            columns={columns}
            request={(params) => {
                return gainSiteTree(params.keyword || '');
            }}
            postData={(data: AdminSiteTreeVO[]) => [data]}
            // components={}
            rowSelection={{}}
            pagination={false}
        />
    )
}