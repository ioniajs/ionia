import React from 'react';
import { BizPage, ImageUpload } from '@ionia/libs';
import { Form, TreeSelect, Cascader } from 'antd';
import { ProFormText, ProFormTextArea, ProFormDatePicker, ProFormSelect, ProFormRadio } from '@ant-design/pro-form';
import moment from 'moment';
import './index.less';

const layout = {
    labelCol: { span: 6 },
    wrapperCol: { span: 12 }
}

// const handleDisabled = (currentDate: any): boolean | undefined => {
//     return currentDate && currentDate < moment();
// }

export default () => {
    const [form] = Form.useForm();
    return (
        <BizPage
            showActions
            breadcrumbs={[{ name: '志愿者' }, { name: '新建' }]}
            onSave={() => { form.validateFields() }}
        >
            <Form form={form} {...layout} className='io-cms-volunteer-create-form-container'>
                <Form.Item name='avatarId' label='头像'>
                    <ImageUpload />
                </Form.Item>
                <ProFormText name='username' label='用户名' rules={[{ required: true }, () => ({
                    validator(rule, value) {
                        if (!!value) {
                            if (!!value && /^[0-9a-zA-Z_]+$/.test(value))
                                return Promise.resolve();
                            return Promise.reject('请输入数字、大小写字母、英文下划线');
                        }
                        return Promise.reject('');
                    },
                }),]} fieldProps={{ maxLength: 30 }} />
                <ProFormText name='phone' label='手机号' rules={[{ required: true }, () => ({
                    validator(rule, value) {
                        if (!!value) {
                            if (!!value && /^1\d{10}$/.test(value))
                                return Promise.resolve();
                            return Promise.reject('请输入正确的手机号码');
                        }
                        return Promise.reject('');
                    },
                })]} />
                <ProFormText name='cipher' label='密码' rules={[{ required: true },
                () => ({
                    validator(rule, value) {
                        if (!!value) {
                            if (!!value && /^[0-9a-zA-Z_@#!]+$/.test(value) && value.length <= 20 && value.length >= 6)
                                return Promise.resolve();
                            return Promise.reject('请输入6~20位之间的大小写字母、数字、_、@、#、！字符');
                        }
                        return Promise.reject('');
                    }
                })]} />
                <ProFormText name='fullName' label='姓名' rules={[{ required: true }]} fieldProps={{ maxLength: 50 }} />
                <ProFormSelect name='type' label='志愿者类型' rules={[{ required: true }]} fieldProps={{ getPopupContainer: triggerNode => triggerNode.parentElement }} />
                <ProFormText name='email' label='邮箱' rules={[{ required: true }, () => ({
                    validator(rule, value) {
                        if (!!value) {
                            const reg = /^([a-zA-Z]|[0-9])(\w|\-)+@[a-zA-Z0-9]+\.([a-zA-Z]{2,4})$/;
                            if (!!value && reg.test(value))
                                return Promise.resolve();
                            return Promise.reject('请输入正确的邮箱格式');
                        }
                        return Promise.reject('');
                    }
                })]} fieldProps={{ maxLength: 100 }} />
                <Form.Item name='teamId' label='志愿队' rules={[{ required: true }]}>
                    <TreeSelect showSearch getPopupContainer={triggerNode => triggerNode.parentElement} />
                </Form.Item>
                <ProFormText name='currentLocation' label='现居地' rules={[{ required: true }]} fieldProps={{ maxLength: 150 }} />
                <ProFormText name='idCard' label='证件号码' rules={[{ required: true }, () => ({
                    validator(rule, value) { }
                })]} />
                <ProFormRadio.Group name='gender' label='性别' options={[]} rules={[{ required: true }]} />
                <ProFormSelect name='clan' label='民族' rules={[{ required: true }]} fieldProps={{ getPopupContainer: triggerNode => triggerNode.parentElement }} />
                <ProFormDatePicker name='birthday' label='出生日期' rules={[{ required: true }]} />
                <Form.Item name='domicile' label='籍贯' rules={[{ required: true }]}>
                    <Cascader />
                </Form.Item>
                <ProFormSelect name='education' label='最高学历' rules={[{ required: true }]} fieldProps={{ getPopupContainer: triggerNode => triggerNode.parentElement }} />
                <ProFormSelect name='politicalLook' label='政治面貌' rules={[{ required: true }]} fieldProps={{ getPopupContainer: triggerNode => triggerNode.parentElement }} />
                <ProFormSelect name='occupation' label='职业' rules={[{ required: true }]} fieldProps={{ getPopupContainer: triggerNode => triggerNode.parentElement }} />
                <ProFormText name='workUnit' label='单位' fieldProps={{ maxLength: 100 }} />
                <ProFormSelect name='strongPoint' label='擅长服务' fieldProps={{ mode: 'multiple', maxTagCount: 5, getPopupContainer: triggerNode => triggerNode.parentElement }} />
                <ProFormTextArea name='introduce' label='志愿者简介' placeholder='请输入志愿者简介（仅限300字）' fieldProps={{ maxLength: 300, showCount: true }} />
            </Form>
        </BizPage>
    )
}