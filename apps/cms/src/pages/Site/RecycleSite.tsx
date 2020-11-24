import { ActionType, ProColumns } from '@ant-design/pro-table';
import { BizPage, BizTable, deleteUser } from '@ionia/libs';
import {
    recycleSiteList,
    recycleSiteDetail,
    recycleSiteRestore,
    SiteRevertDTO,
} from '@ionia/libs/src/services';
import {
    AdminSiteRecycleSummaryVo,
} from '@ionia/libs/src/services/kernel/admin-site.vo';
import { IdsDTO } from '@ionia/libs/src/services/reuse.dto';
import { message, Modal, Radio, Button } from 'antd';
import React, { useRef, useState } from 'react';
import { useHistory } from 'react-router-dom';
import './index.less';

const userRemove = async (ids: IdsDTO) => {
    const removeRes = await deleteUser(ids);
    if (removeRes.code !== 200) {
        message.error('删除失败');
    } else {
        message.success('删除成功');
    }
    return removeRes.code;
};

// 回收站删除
const handleDeleteRecycle = async (ids: IdsDTO) => {
    const deleteRecycleRes = await recycleSiteDetail(ids);
    if (deleteRecycleRes.code !== 200) {
        message.error('删除失败');
    } else {
        message.success('删除成功');
    }
    return deleteRecycleRes.code;
};

// 回收站还原
const handleRecycleRevert = async (fileds: SiteRevertDTO) => {
    const revertRes = await recycleSiteRestore(fileds);
    if (revertRes.code !== 200) {
        message.error('站点恢复失败');
    } else {
        message.success('站点恢复成功');
    }
    return revertRes.code;
};

export default () => {
    const history = useHistory();
    const actionRef = useRef<ActionType>();
    const [selectedRowKeys, setSelectedRowKeys] = useState<number[]>([]);
    const columns: ProColumns<AdminSiteRecycleSummaryVo>[] = [
        {
            title: '站点名称',
            key: 'name',
            dataIndex: 'name',
        },
        {
            title: '删除人',
            key: 'operatTime',
            dataIndex: 'operatTime',
        },
        {
            title: '删除时间',
            key: 'operator',
            dataIndex: 'operator',
        },
    ];
    return (
        <div className='io-cms-site-recycle'>
            <BizPage
                showActions={true}
                renderActions={() => (
                    <>
                        <Button
                            type='primary'
                            onClick={async () => {
                                const tempSelRowKeys = selectedRowKeys.map((s: any) =>
                                    s.toString()
                                );
                                const deleteRes = await handleDeleteRecycle({
                                    ids: tempSelRowKeys,
                                });
                                if (deleteRes === 200 && actionRef.current) {
                                    actionRef.current?.reload();
                                }
                            }}
                            className='io-cms-site-recycle-delete__but'
                        >
                            删除
                        </Button>
                        <Button
                            type='default'
                            onClick={() => {
                                const ids = selectedRowKeys.map(s => Number(s));
                                let revertRadio: number;
                                Modal.confirm({
                                    title: '恢复站点',
                                    content: (
                                        <>
                                            <p>
                                                以下站点的上级站点已被删除，无法正常恢复，请选择处理方式:
											</p>
                                            <p>站点1</p>
                                            <Radio.Group
                                                onChange={e => revertRadio = e.target.value}
                                            >
                                                <Radio value={1}>同时恢复所有上级站点</Radio>
                                                <Radio value={2}>恢复到其他站点下</Radio>
                                            </Radio.Group>
                                        </>
                                    ),
                                    onOk: async () => {
                                        console.log(revertRadio);
                                        const params = {
                                            type: revertRadio,
                                            siteIds: ids || [],
                                        };
                                        const resvertRes = await handleRecycleRevert(params);
                                        if (resvertRes === 200 && actionRef.current) {
                                            actionRef.current?.reload();
                                        }
                                    }
                                })
                            }}
                        >
                            恢复
                        </Button>
                    </>
                )}
            >
                <BizTable
                    rowKey='id'
                    actionRef={actionRef}
                    columns={columns}
                    rowSelection={{
                        selectedRowKeys,
                        onChange: selectedRowKeys => {
                            setSelectedRowKeys(selectedRowKeys as number[]);
                        },
                    }}
                    request={(params, sort, filter) => {
                        return recycleSiteList().then(data => ({ data: data.data }));
                    }}
                    pagination={false}
                    toolBarRender={false}
                />
            </BizPage>
        </div>
    );
};
