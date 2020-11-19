import React, { useState, useEffect } from 'react';
import { Button, Form, Input, Switch, Select, Tooltip, TreeSelect, message, Anchor } from 'antd';
import { InfoCircleOutlined } from '@ant-design/icons';
import { BizPage, ImageUpload, BizSection } from '@ionia/libs';
import { useMount, useRequest } from '@umijs/hooks';
import { gainSiteTree, siteDetail, amendSite, AdminSiteDTO } from '@ionia/libs/src/services/kernel';
import { AdminSiteTreeVO, AdminSiteDetailVO } from '@ionia/libs/src/services/kernel/admin-site.vo';
import { ExpandChildren } from './expand';
import './index.less';

const { Option } = Select;
const { Link } = Anchor;
const layout1 = {
    labelCol: { span: 6 },
    wrapperCol: { span: 12 },
};

const selectBefore = (
    <Select defaultValue='http://' className='select-before'>
        <Option value='http://'>http://</Option>
        <Option value='https://'>https://</Option>
    </Select>
);
// 修改站点信息
const handleUpdateSites = async (filed: AdminSiteDTO) => {
    const createRef = await amendSite(filed);
    if (createRef.code === 200) {
        message.success('修改成功');
    } else {
        message.error('修改失败');
    }
    return createRef;
};

export default ({ match }: any) => {
    const {
        params: { id },
    } = match;
    const [basicForm] = Form.useForm();
    const [expandForm] = Form.useForm();
    const [siteTree, setSiteTree] = useState<AdminSiteTreeVO[]>();
    const [siteDetailData, setSiteDetailData] = useState<AdminSiteDetailVO>();
    const [domainList, setDomainList] = useState<number[]>([1]);
    // 获取站点树
    const { run: runsiteTree } = useRequest(gainSiteTree, {
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
            const tempSiteTree = loop(result.data);
            setSiteTree(tempSiteTree);
        },
    });
    // 获取站点详情
    const { run } = useRequest(siteDetail, {
        manual: true,
        onSuccess: (result) => {
            const data = result.data;
            setSiteDetailData(data);

        }
    })
    useMount(() => {
        if (id) {
            run(id);
        }
        runsiteTree();
    });
    useEffect(() => {
        if (siteDetailData) {
            basicForm.setFieldsValue({
                ...siteDetailData,
                status: !!siteDetailData.status,
            });
            const tempDomainList: number[] = [];
            (siteDetailData?.domain || []).forEach((d: any, i: number) => {
                tempDomainList.push(i);
                basicForm.setFieldsValue({
                    [`domain_${i}`]: d
                });
            });
            setDomainList(tempDomainList);
        }
    }, [siteDetailData]);
    // 基本信息的children
    const basicChildren: React.ReactNode = (
        <>
            <div className='io-site-detail-basicchildren__div'>
                <Button
                    type='primary'
                    onClick={async () => {
                        basicForm.validateFields().then(async values => {
                            const tempDomain = domainList.map((d: number, i: number) => {
                                return values[`domain_${d}`];
                            });
                            const param = {
                                id,
                                parentId: values.parentId,
                                name: values.name,
                                dir: values.dir,
                                domain: tempDomain,
                                desc: values.desc || '',
                                status: !!values.status ? 1 : 0,
                                favicon: values.favicon || '',
                                seoTitle: values.seoTitle || '',
                                seoKeyWord: values.seoKeyWord || '',
                                seoDesc: values.seoDesc || '',
                            };
                            const success = await handleUpdateSites(param);
                            if (success.code === 200) {
                                history.back();
                            }
                        })
                    }}
                >
                    保存
                </Button>
                <Button type='default' className='io-cms-site-save-expand__but'>预览</Button>
                <Button type='default' className='io-cms-site-save-expand__but'>浏览</Button>
                <Button type='default' className='io-cms-site-save-expand__but'>权限分配</Button>
                <Button type='default' className='io-cms-site-save-expand__but'>发布静态页</Button>
                <Button type='default' className='io-cms-site-save-expand__but'>复制</Button>
            </div>
            <Form form={basicForm} className='io-site__form' {...layout1}>
                <Form.Item
                    name='id'
                    label='站点ID'
                >
                    <span>{siteDetailData?.id}</span>
                </Form.Item>
                <Form.Item
                    name='parentId'
                    label='上级站点'
                    rules={[{ required: true, message: '请选择上级站点' }]}
                >
                    <TreeSelect placeholder='请选择上级站点' treeData={siteTree} />
                </Form.Item>
                <Form.Item
                    name='name'
                    label='站点名称'
                    rules={[{ required: true, message: '请输入站点名称' }]}
                >
                    <Input placeholder='请输入站点名称' maxLength={120} />
                </Form.Item>
                <Form.Item
                    name='dir'
                    label='站点目录'
                    rules={[
                        { required: true, message: '请输入站点目录' },
                        () => ({
                            validator(rule, value) {
                                if (!!value && /^[0-9a-zA-Z]+$/.test(value))
                                    return Promise.resolve();
                                return Promise.reject('请输入英文和数字');
                            },
                        }),
                    ]}
                >
                    <Input placeholder='请输入站点目录' maxLength={120} />
                </Form.Item>
                {domainList.map((d: any, i: number) => {
                    return (
                        <Form.Item
                            name={`domain_${d}`}
                            label={i !== 0 ? <span style={{ display: 'none' }}>域名</span> : '域名'}
                            rules={[{ required: true, message: '请输入域名' }]}
                            colon={!i}
                        >
                            <Input
                                placeholder='请输入域名'
                                addonBefore={selectBefore}
                                maxLength={120}
                            />
                        </Form.Item>
                    );
                })}
                <Form.Item
                    name=''
                    label={<span style={{ display: 'none' }}>添加按钮</span>}
                    colon={false}
                >
                    <Button
                        type='dashed'
                        style={{ width: '100%' }}
                        onClick={() => {
                            const num = domainList[length - 1];
                            setDomainList(domainList.concat(num + 1));
                        }}
                    >
                        <i className='iconfont icon-plus-square' />
						添加
					</Button>
                </Form.Item>
                <Form.Item name='desc' label='站点描述'>
                    <Input.TextArea
                        placeholder='请输入站点描述'
                        showCount={true}
                        allowClear={true}
                        maxLength={500}
                    />
                </Form.Item>
                <Form.Item
                    name='status'
                    label={
                        <span>
                            状态&nbsp;
							<Tooltip title='关闭站点后网站前台无法访问'>
                                <InfoCircleOutlined />
                            </Tooltip>
                        </span>
                    }
                    initialValue={1}
                >
                    <Switch checkedChildren='开启' unCheckedChildren='关闭' />
                </Form.Item>
                <Form.Item
                    name='favicon'
                    label={
                        <span>
                            站点标志&nbsp;
							<Tooltip title='浏览前台网站时，站点标志显示在浏览器页签左侧'>
                                <InfoCircleOutlined />
                            </Tooltip>
                        </span>
                    }
                >
                    <ImageUpload />
                </Form.Item>
                <Form.Item name='seoTitle' label='SEO标题'>
                    <Input placeholder='请输入SEO标题' maxLength={120} />
                </Form.Item>
                <Form.Item name='seoKeyWord' label='SEO关键字'>
                    <Input placeholder='请输入SEO关键字' maxLength={120} />
                </Form.Item>
                <Form.Item name='seoDesc' label='SEO描述'>
                    <Input.TextArea
                        placeholder='请输入SEO描述'
                        showCount={true}
                        allowClear={true}
                        maxLength={500}
                    />
                </Form.Item>
            </Form>
        </>

    );

    return (
        <BizPage
            breadcrumbs={[{ name: '站点管理' }, { name: '编辑' }]}
            showActions={true}
            tabList={[
                {
                    tabKey: '1',
                    tab: '基本信息',
                    children: basicChildren
                },
                { tabKey: '2', tab: '扩展配置', children: <ExpandChildren /> },
            ]}
        />
    )
}