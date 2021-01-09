import React, { useRef, useEffect } from 'react';
import { ProFormText, ProFormTextArea } from '@ant-design/pro-form';
import { BizModalForm, BizModalFormRef } from '@ionia/libs';
import { DataDictionaryTypeDTO, addDictionaryType, updateDictionaryType, detailDictionaryType } from '@ionia/libs/src/services';
import { Button, Form, message } from 'antd';
import { useRequest, useMount } from '@umijs/hooks';
import './index.less';

interface DetailFormProps {
    id?: number; // 有id表示详情,无id表示新增
    reloadTableData?: () => void; // 添加/修改成功后刷新表格
}
/**
 * 新增数据字典类型
 * @param values 
 */
const handleCreate = async (values: DataDictionaryTypeDTO) => {
    const createRes = await addDictionaryType(values);
    if (createRes.code === 200) {
        message.success('添加成功');
    } else {
        message.error('添加失败');
    }
    return createRes.code;
}
/**
 * 编辑修改数据字典
 * @param values 
 */
const handleUpdate = async (values: DataDictionaryTypeDTO) => {
    const updateRes = await updateDictionaryType(values);
    if (updateRes.code === 200) {
        message.success('编辑成功');
    } else {
        message.error('编辑失败');
    }
    return updateRes.code;
}
export default ({ id, reloadTableData }: DetailFormProps) => {
    const ref = useRef<BizModalFormRef>();
    const [form] = Form.useForm();
    const { run: runDetailDictionaryType } = useRequest(detailDictionaryType, {
        manual: true,
        onSuccess: result => {
            form.setFieldsValue({ ...result.data })
        }
    });
    useMount(() => {
        if (id) {
            runDetailDictionaryType(id);
        }
    })

    return (
        <BizModalForm
            ref={ref}
            form={form}
            width={569}
            title={id ? '编辑字典类型' : '添加字典类型'}
            triggerRender={() => (
                !id ? <Button type='primary' onClick={() => { ref.current?.open() }}>
                    <i className='iconfont icon-plus1' />
                    新建
                </Button> :
                    <a onClick={() => { ref.current?.open() }}>编辑</a>
            )}
            onFinish={async values => {
                if (!id) {
                    const success = await handleCreate(values as DataDictionaryTypeDTO);
                    if (success === 200) {
                        ref.current?.close();
                        form.resetFields(); // 清空表单
                        reloadTableData && reloadTableData();
                    }
                } else {
                    const param = { ...values, id: id };
                    const success = await handleUpdate(param as DataDictionaryTypeDTO);
                    if (success === 200) {
                        ref.current?.close();
                        form.resetFields(); // 清空表单
                        reloadTableData && reloadTableData();
                    }
                }
            }}
            submitterRender={() => (
                <>
                    <Button>取消</Button>
                    <Button type='primary' htmlType='submit'>确定</Button>
                </>
            )}
            className='io-cms-data-dictionary-type-detail-form'
        >
            <ProFormText name='type' label='字典类型' placeholder='请输入字典类型' rules={[{ required: true }]} labelCol={{ span: 6 }} wrapperCol={{ span: 16 }} fieldProps={{ maxLength: 30 }} disabled={!!id} />
            <ProFormText name='name' label='字典名称' placeholder='请输入字典名称' rules={[{ required: true }]} labelCol={{ span: 6 }} wrapperCol={{ span: 16 }} fieldProps={{ maxLength: 20 }} />
            <ProFormTextArea name='remake' label='备注' placeholder='请输入备注信息' labelCol={{ span: 6 }} wrapperCol={{ span: 16 }} fieldProps={{ maxLength: 50, showCount: true }} />
        </BizModalForm>
    )
}