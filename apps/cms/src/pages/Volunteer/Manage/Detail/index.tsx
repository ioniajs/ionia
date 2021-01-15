import React, { useEffect, useState } from 'react';
import { BizPage, BizSection, ImageUpload } from '@ionia/libs';
import { Form, TreeSelect, Cascader, message, Input, Rate, Spin, Tag } from 'antd';
import {
    ProFormText,
    ProFormTextArea,
    ProFormDatePicker,
    ProFormSelect,
    ProFormRadio,
} from '@ant-design/pro-form';
import moment from 'moment';
import { useHistory } from 'react-router-dom';
import {
    updateVolunteers,
    VolunteerDTO,
    volunteersDetail,
    uniqueEmailVolunteers,
    uniquePhoneVolunteers,
    uniqueUserNameVolunteers,
} from '@ionia/libs/src/services';
import { useRequest, useMount } from '@umijs/hooks';
import { values } from 'lodash';

const layout = {
    labelCol: { span: 6 },
    wrapperCol: { span: 12 },
};

const domicileOptions = [
    {
        value: 360000,
        label: '江西省',
    },
    {
        value: 100001,
        label: '北京市',
    },
];

// 志愿者表彰tag颜色值变化
const praiseVOSTagColors = ['#f50', '#2db7f5', '#87d068', '#108ee9'];

const handleUpdateVolunteer = async (fildes: VolunteerDTO) => {
    const updataRes = await updateVolunteers(fildes);
    if (updataRes.code === 200) {
        message.success('修改成功');
    } else {
        message.error('修改失败');
    }
    return updataRes.code;
}

export default ({ match }: any) => {
    const {
        params: { id },
    } = match;
    const [form] = Form.useForm();
    const [onlyReadForm] = Form.useForm();
    const history = useHistory();
    const { location } = history;
    const { state }: any = location;
    const [files, setFiles] = useState<any[]>([]);
    const [renderAvatarFlag, setRenderAvatarFlag] = useState<boolean>(false);
    const [datas, setDatas] = useState<any>();
    const [spinLoading, setSpinLoading] = useState<boolean>(true); // 页面加载中
    const { run: runGetDetail } = useRequest(volunteersDetail, {
        manual: true,
        onSuccess: result => {
            setDatas(result.data);
            setSpinLoading(false);
            form.setFieldsValue({ ...result.data, domicileId: [result.data?.domicileId] });
            const tempFile = [{
                // uid: result.data?.avatarRes?.id,
                uid: '1349275677517447169',
                name: '154923-155384576397bb.jpg',
                // url: result.data?.avatarRes?.url,
                url: 'https://jeecms-1252927091.cos.ap-chengdu.myqcloud.com/2021/01/13/154923-155384576397bb.jpg',
                status: 'done'
            }];
            // tempFile ? setRenderAvatarFlag(true) : setRenderAvatarFlag(false);
            setFiles([...tempFile]);
            files ? setRenderAvatarFlag(true) : setRenderAvatarFlag(false);
        }
    });
    useEffect(() => {
        if (id) {
            runGetDetail(id)
        }
    }, [id])
    return (
        <Spin spinning={spinLoading}>

            <BizPage
                breadcrumbs={[{ name: '志愿者' }, { name: '基本信息' }]}
                showActions
                onSave={() => {
                    form.validateFields().then(async values => {
                        console.log(values, '志愿者编辑数据');
                        const param = {
                            ...values,
                            id: id,
                            domicileId: values.domicileId[0], // 籍贯
                            // clan: values.clanId, // 民族
                            // gender: values.genderId, //  性别
                            // occupation: values.occupationId, // 职业
                            // // cipher: datas.cipher, // 密码
                            // type: values.typeId, // 志愿类型
                            // politicalLook: values.politicalLookId, // 政治面貌
                            // education: values.educationId, // 学历
                        }
                        const success = await handleUpdateVolunteer(param as VolunteerDTO);
                        if (success === 200) {
                            history.goBack();
                        }
                    })
                }}
            >
                <BizSection title='基本信息'>
                    <Form form={form} {...layout} className='io-cms-volunteer-detail-form-container'>
                        {renderAvatarFlag && (<Form.Item name='avatarRes' label='头像'>
                            <ImageUpload
                                defaultFileList={files}
                                onChange={(files: any) => {
                                    console.log('files', files);
                                    setFiles([...files]);
                                }} />
                        </Form.Item>)}
                        <Form.Item
                            name='username'
                            label='用户名'
                            rules={[
                                { required: true },
                                () => ({
                                    async validator(rule, value) {
                                        if (!!value) {
                                            // const flag = await uniqueUserNameVolunteers({
                                            //     username: value,
                                            // }).then(res => res.data);
                                            if (!!value && /^[0-9a-zA-Z_]+$/.test(value))
                                                return Promise.resolve();
                                            return Promise.reject(
                                                '请输入数字、大小写字母、英文下划线'
                                            );
                                        }
                                        return Promise.reject('');
                                    },
                                }),
                            ]}
                        >
                            <Input maxLength={30} />
                        </Form.Item>
                        <Form.Item
                            name='phone'
                            label='手机号'
                            validateTrigger={['onBlur']}
                            rules={[
                                { required: true },
                                () => ({
                                    async validator(rule, value) {
                                        if (!!value) {
                                            // const flag = await uniquePhoneVolunteers({ phone: value }).then(
                                            //     res => res.data
                                            // );
                                            if (!!value && /^1\d{10}$/.test(value))
                                                return Promise.resolve();
                                            return Promise.reject(
                                                '请输入正确的手机号码'
                                            );
                                        }
                                        return Promise.reject('');
                                    },
                                }),
                            ]}
                        >
                            <Input />
                        </Form.Item>
                        <ProFormText
                            name='fullName'
                            label='姓名'
                            rules={[{ required: true }]}
                            fieldProps={{ maxLength: 50 }}
                        />
                        <ProFormSelect
                            name='typeId'
                            label='志愿者类型'
                            rules={[{ required: true }]}
                            options={[
                                { value: 1, label: '党员干部志愿者' },
                                { value: 2, label: '文艺志愿者' },
                                { value: 3, label: '社会志愿者' },
                            ]}
                            fieldProps={{ getPopupContainer: triggerNode => triggerNode.parentElement }}
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
                                            const reg = /^([a-zA-Z]|[0-9])(\w|\-)+@[a-zA-Z0-9]+\.([a-zA-Z]{2,4})$/;
                                            // const flag = await uniqueEmailVolunteers({ email: value }).then(
                                            //     res => res.data
                                            // );
                                            if (!!value && reg.test(value))
                                                return Promise.resolve();
                                            return Promise.reject(
                                                '请输入正确的邮箱格式'
                                            );
                                        }
                                        return Promise.reject('');
                                    },
                                }),
                            ]}
                        >
                            <Input maxLength={100} />
                        </Form.Item>
                        <Form.Item name='teamId' label='志愿队' rules={[{ required: true }]}>
                            <TreeSelect
                                showSearch
                                getPopupContainer={triggerNode => triggerNode.parentElement}
                                treeData={state?.teamsTreeList}
                            />
                        </Form.Item>
                        <ProFormText
                            name='currentLocation'
                            label='现居地'
                            rules={[{ required: true }]}
                            fieldProps={{ maxLength: 150 }}
                        />
                        <ProFormText
                            name='idCard'
                            label='证件号码'
                            rules={[
                                { required: true },
                                () => ({
                                    validator(rule, value) {
                                        if (!!value) {
                                            const reg = /(^\d{15}$)|(^\d{18}$)|(^\d{17}(\d|X|x)$)/;
                                            if (!!value && reg.test(value)) return Promise.resolve();
                                            return Promise.reject('请输入正确的证件号码');
                                        }
                                        return Promise.reject();
                                    },
                                }),
                            ]}
                        />
                        <ProFormRadio.Group
                            name='genderId'
                            label='性别'
                            options={[
                                { value: 1, label: '男' },
                                { value: 2, label: '女' },
                            ]}
                            rules={[{ required: true }]}
                            initialValue={1}
                        />
                        <ProFormSelect
                            name='clanId'
                            label='民族'
                            rules={[{ required: true }]}
                            options={[
                                { value: 1, label: '汉族' },
                                { value: 2, label: '维吾尔族' },
                                { value: 3, label: '蒙古族' },
                                { value: 4, label: '傣族' },
                            ]}
                            fieldProps={{ getPopupContainer: triggerNode => triggerNode.parentElement }}
                        />
                        <ProFormDatePicker
                            name='birthday'
                            label='出生日期'
                            rules={[{ required: true }]}
                            fieldProps={{
                                disabledDate: current => {
                                    return current && current < moment('1900-12-31').endOf('day');
                                },
                                style: {
                                    width: '100%'
                                }
                            }}
                        />
                        <Form.Item name='domicileId' label='籍贯' rules={[{ required: true }]}>
                            <Cascader options={domicileOptions} />
                        </Form.Item>
                        <ProFormSelect
                            name='educationId'
                            label='最高学历'
                            rules={[{ required: true }]}
                            options={[
                                { value: 1, label: '中专' },
                                { value: 2, label: '大专' },
                                { value: 3, label: '本科' },
                                { value: 4, label: '硕士' },
                                { value: 5, label: '博士' },
                            ]}
                            fieldProps={{ getPopupContainer: triggerNode => triggerNode.parentElement }}
                        />
                        <ProFormSelect
                            name='politicalLookId'
                            label='政治面貌'
                            rules={[{ required: true }]}
                            options={[
                                { value: 1, label: '群众' },
                                { value: 2, label: '团员' },
                                { value: 3, label: '预备党员' },
                                { value: 4, label: '党员' },
                            ]}
                            fieldProps={{ getPopupContainer: triggerNode => triggerNode.parentElement }}
                        />
                        <ProFormSelect
                            name='occupationId'
                            label='职业'
                            rules={[{ required: true }]}
                            options={[
                                { value: 1, label: '党政机构从业人员' },
                                { value: 2, label: '公益组织人员' },
                                { value: 3, label: '医生' },
                            ]}
                            fieldProps={{ getPopupContainer: triggerNode => triggerNode.parentElement }}
                        />
                        <ProFormText name='workUnit' label='单位' fieldProps={{ maxLength: 100 }} />
                        <ProFormSelect
                            name='strongPoint'
                            label='擅长服务'
                            options={[
                                { value: '1', label: '科普宣传' },
                                { value: '2', label: '法律服务' },
                                { value: '3', label: '文体教育' },
                                { value: '4', label: '社区服务' },
                                { value: '5', label: '环保宣传' },
                            ]}
                            fieldProps={{
                                mode: 'multiple',
                                maxTagCount: 5,
                                getPopupContainer: triggerNode => triggerNode.parentElement,
                            }}
                        />
                        <ProFormTextArea
                            name='introduce'
                            label='志愿者简介'
                            placeholder='请输入志愿者简介（仅限300字）'
                            fieldProps={{ maxLength: 300, showCount: true }}
                        />
                        <Form.Item name='checkTime' label='加入时间' >
                            <span>{datas?.checkTime}</span>
                        </Form.Item>
                        <Form.Item name='code' label='志愿者编号' >
                            <span>{datas?.code}</span>
                        </Form.Item>
                    </Form>
                </BizSection>
                <BizSection title='综合表现'>
                    <Form form={onlyReadForm} {...layout} className='io-cms-volunteer-detail-form-container'>
                        <Form.Item name='totalVolunteerHour' label='服务总时长'>
                            <span>{datas?.totalVolunteerHour}小时</span>
                        </Form.Item>
                        <Form.Item name='totalIntegral' label='总积分'>
                            <span>{datas?.totalIntegral}</span>
                        </Form.Item>
                        <Form.Item name='praiseVOS' label='志愿者表彰称号'>
                            {(datas?.praiseVOS || []).map((p: any, i: number) => {
                                return (
                                    <Tag color={praiseVOSTagColors[i]}>十佳志愿者（{p.num}）</Tag>
                                )
                            })}
                        </Form.Item>
                        <Form.Item name='skillScore' label='综合评价'>
                            <Rate value={datas?.skillScore} disabled={true} />&nbsp;专业技能
                            <span style={{ display: 'inline-block', marginRight: '40px' }} />
                            <Rate value={datas?.attitudeScore} disabled={true} />&nbsp;服务态度
                            <span style={{ display: 'inline-block', marginRight: '40px' }} />
                            <Rate value={datas?.punctualityScore} disabled={true} />&nbsp;守时程度
                        </Form.Item>
                    </Form>
                </BizSection>
            </BizPage>
        </Spin>
    )
}