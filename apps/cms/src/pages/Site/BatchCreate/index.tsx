import React, { useState } from 'react';
import { Form, TreeSelect } from 'antd';
import { ProFormSelect } from '@ant-design/pro-form';
import { BizPage, gainSiteTree, } from '@ionia/libs';
import { AdminSiteTreeVO } from '@ionia/libs/src/services/kernel/admin-site.vo';
import { useRequest, useMount } from '@umijs/hooks';
import './index.less';

export default () => {
    const [siteTreeData, setSiteTreeData] = useState<AdminSiteTreeVO[]>();
    const { run: runGainSiteTree } = useRequest(gainSiteTree, {
        manual: true,
        onSuccess: result => {
            const loop = function (data: any) {
                return data.map((r: any) => {
                    if (r.children) {
                        r.children = loop(r.children);
                    }
                    return {
                        value: r.id,
                        title: r.name,
                        key: r.id,
                        children: r.children,
                        ...r,
                    };
                });
            };
            const tempSiteTree = loop(result.data.list);
            setSiteTreeData(tempSiteTree);
        },
    });
    useMount(() => {
        runGainSiteTree();
    })
    const [form] = Form.useForm();
    return (
        <BizPage
            form={form}
            showActions
            breadcrumbs={[{ name: '站点管理' }, { name: '批量新建' }]}
            layout={{}}
        >
            <div className='io-cms-site-batch-create__div'>
                <Form.Item
                    name='parentId'
                    label='上级站点'
                    rules={[{ required: true, message: '请选择上级站点' }]}
                >
                    <TreeSelect
                        treeData={siteTreeData}
                        placeholder='请选择上级站点'
                        showSearch
                        onSearch={(e) => {
                            runGainSiteTree(e);
                        }}
                        className='io-cms-site-batch-create__treeselect'
                        style={{ width: '224px' }}
                        dropdownStyle={{ maxHeight: 520, overflow: 'auto', minWidth: 420 }}
                    />
                </Form.Item>
            </div>
        </BizPage>
    )
}