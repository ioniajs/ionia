import React from 'react';
import { BizPage, ImageUpload } from '@ionia/libs';
import { saveVolunteerTeams, uniqueUserNameVolunteersTeams, uniqueEmailVolunteersTeams } from '@ionia/libs/src/services';
import { Form, Input } from 'antd';
import {
    ProFormText,
    ProFormTextArea,
    ProFormSelect,
} from '@ant-design/pro-form';
import './index.less';

const layout = {
    labelCol: { span: 6 },
    wrapperCol: { span: 12 },
};

export default () => {
    const [form] = Form.useForm();
    return (
        <BizPage
            showActions
            breadcrumbs={[{ name: '志愿队伍' }, { name: '新建' }]}
        >
            <Form form={form} {...layout} className='io-cms-colunteer-teams-create-form-container'>
                <Form.Item name='logoId' label='队伍Logo'>
                    <ImageUpload />
                </Form.Item>
                <Form.Item
                    name='username'
                    label='用户名'
                    rules={[
                        { required: true },
                        () => ({
                            async validator(rule, value) {
                                if (!!value) {
                                    const flag = await uniqueUserNameVolunteersTeams({
                                        username: value,
                                    }).then(res => res.data);
                                    if (!!value && /^[0-9a-zA-Z_]+$/.test(value) && flag)
                                        return Promise.resolve();
                                    return Promise.reject(
                                        flag ? '请输入数字、大小写字母、英文下划线' : '用户名重复'
                                    );
                                }
                                return Promise.reject('');
                            },
                        }),
                    ]}
                >
                    <Input maxLength={30} placeholder='请输入用户名' />
                </Form.Item>
                <ProFormText
                    name='cipher'
                    label='密码'
                    placeholder='请输入密码'
                    rules={[
                        { required: true },
                        () => ({
                            validator(rule, value) {
                                if (!!value) {
                                    if (
                                        !!value &&
                                        /^[0-9a-zA-Z_@#!]+$/.test(value) &&
                                        value.length <= 20 &&
                                        value.length >= 6
                                    )
                                        return Promise.resolve();
                                    return Promise.reject(
                                        '请输入6~20位之间的大小写字母、数字、_、@、#、！字符'
                                    );
                                }
                                return Promise.reject('');
                            },
                        }),
                    ]}
                />
                <ProFormText
                    name='name'
                    label='队伍名称'
                    placeholder='请输入队伍名称'
                    rules={[{ required: true }]}
                    fieldProps={{
                        maxLength: 80
                    }}
                />
                <Form.Item
                    name='email'
                    label='邮箱'
                    validateTrigger={['onBlur']}
                    rules={[
                        { required: true },
                        () => ({
                            async validator(rule, value) {
                                if (!!value) {
                                    console.log(value, '邮箱校验');
                                    const reg = /^([a-zA-Z]|[0-9])(\w|\-)+@[a-zA-Z0-9]+\.([a-zA-Z]{2,4})$/;
                                    const flag = await uniqueEmailVolunteersTeams({ email: value }).then(
                                        res => res.data
                                    );
                                    if (!!value && reg.test(value) && flag)
                                        return Promise.resolve();
                                    return Promise.reject(
                                        flag ? '请输入正确的邮箱格式' : '邮箱重复'
                                    );
                                }
                                return Promise.reject('');
                            },
                        }),
                    ]}
                >
                    <Input maxLength={100} placeholder='请输入邮箱' />
                </Form.Item>
            </Form>
        </BizPage>
    )
}