import React, { useRef } from 'react';
import { BizModalForm, BizModalFormRef } from '@ionia/libs';
import { Button, Tree, Tooltip } from 'antd';
import { InfoCircleOutlined } from '@ant-design/icons';
import './index.less';

interface RestoreSectionProps {
    selectRowKeys?: string[];
}

const treeData = [
    {
        title: '0-0',
        key: '0-0',
        children: [
            {
                title: '0-0-0',
                key: '0-0-0',
                children: [
                    { title: '0-0-0-0', key: '0-0-0-0' },
                    { title: '0-0-0-1', key: '0-0-0-1' },
                    {
                        title: '0-0-0-2',
                        key: '0-0-0-2',
                        children: [
                            { title: '0-0-0-0-0', key: '0-0-0-0-0' },
                            { title: '0-0-0-0-1', key: '0-0-0-0-1' },
                            {
                                title: '0-0-0-0-2',
                                key: '0-0-0-0-2',
                                children: [
                                    { title: '0-0-0-0-0-0', key: '0-0-0-0-0-0' },
                                    {
                                        title: '0-0-0-0-0-1',
                                        key: '0-0-0-0-0-1',
                                        children: [
                                            { title: '0-0-0-0-0-0-00', key: '0-0-0-0-0-0-00' },
                                            {
                                                title: '0-0-0-0--0-1-1',
                                                key: '0-0-0-0-0-1-1',
                                                children: [
                                                    {
                                                        title: '0-0-0-0-0-0-0',
                                                        key: '0-0-0-0-0-0-0',
                                                    },
                                                    {
                                                        title: '0-0-0-0-0-0-1',
                                                        key: '0-0-0-0-0-0-1',
                                                        children: [
                                                            {
                                                                title: '0-0-0-0-0-0-0-0',
                                                                key: '0-0-0-0-0-0-0-0',
                                                                children: [
                                                                    {
                                                                        title: '0-0-0-0-0-0-0-0-0',
                                                                        key: '0-0-0-0-0-0-0-0-0',
                                                                        children: [
                                                                            {
                                                                                title:
                                                                                    '0-0-0-0-0-0-0-0-0-00000000',
                                                                                key:
                                                                                    '0-0-0-0-0-0-0-0-0-000000000',
                                                                            },
                                                                        ],
                                                                    },
                                                                ],
                                                            },
                                                        ],
                                                    },
                                                ],
                                            },
                                        ],
                                    },
                                ],
                            },
                        ],
                    },
                ],
            },
            {
                title: '0-0-1',
                key: '0-0-1',
                children: [
                    { title: '0-0-1-0', key: '0-0-1-0' },
                    { title: '0-0-1-1', key: '0-0-1-1' },
                    { title: '0-0-1-2', key: '0-0-1-2' },
                ],
            },
            {
                title: '0-0-2',
                key: '0-0-2',
            },
        ],
    },
    // {
    //     title: '0-1',
    //     key: '0-1',
    //     children: [
    //         { title: '0-1-0-0', key: '0-1-0-0' },
    //         { title: '0-1-0-1', key: '0-1-0-1' },
    //         { title: '0-1-0-2', key: '0-1-0-2' },
    //     ],
    // },
    // {
    //     title: '0-2',
    //     key: '0-2',
    // },
];

export default ({ selectRowKeys }: RestoreSectionProps) => {
    const modalRef = useRef<BizModalFormRef>();
    return (
        <BizModalForm
            ref={modalRef}
            title='还原栏目'
            triggerRender={() => (
                <Button type='default' onClick={() => modalRef.current?.open()}>还原栏目</Button>
            )}
            submitterRender={() => (
                <>
                    <Button onClick={() => modalRef.current?.close()}>取消</Button>
                    <Button type='primary'>仅还原栏目</Button>
                    <Button type='primary'>还原栏目及内容</Button>
                </>
            )}
            width={496}
        >
            <p>
                选择要还原的栏目&nbsp;
					<Tooltip
                    title={
                        <span>
                            红色的为被删除的栏目
								<br />
								没被删除的栏目不可选
							</span>
                    }
                    placement='bottom'
                >
                    <InfoCircleOutlined />
                </Tooltip>
					：
            </p>
            <div className='io-cms-content-recycle-restore-section-modal-tree-container'>
                <Tree treeData={treeData} checkable defaultExpandAll />
            </div>
        </BizModalForm>
    )
}