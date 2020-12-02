import React, { useRef, useEffect } from 'react';
import { BizModalForm, BizModalFormRef } from '@ionia/libs';
import { AreaDTO, saveArea, AreaVO, areaDetail, updateArea } from '@ionia/libs/src';
import { useMount, useRequest } from '@umijs/hooks';
import { ProFormText } from '@ant-design/pro-form';
import { InfoCircleOutlined } from '@ant-design/icons';
import { Form, TreeSelect, Tooltip, Switch, Button, message } from 'antd';
import './index.less';

interface AreaModalProps {
	row?: any;
}

export default ({ row }: AreaModalProps) => {
	const [form] = Form.useForm();
	const ref = useRef<BizModalFormRef>();
	const treeData = [
		{
			value: '1',
			label: '审核员',
		},
		{
			value: '2',
			label: '系统管理员',
		},
		{
			value: '3',
			label: '信息录入员',
		},
	];
	// const handleSubmit = (values: any) => {
	// 	if (row) {
	// 	} else {
	// 	}
	// };
	if (row) {
		const { data, run } = useRequest(areaDetail, {
			manual: true,
		});
		useMount(() => {
			if (row.id !== undefined) {
				run(row.id);
			}
		});
		useEffect(() => {
			if (data?.data) {
				form.setFieldsValue({
					...data?.data,
				});
			}
		}, [data?.data]);
	}
	return (
		<BizModalForm
			form={form}
			ref={ref}
			triggerRender={() =>
				row ? (
					<a onClick={() => ref.current?.open()}>{row?.areaName}</a>
				) : (
					<Button type='primary' onClick={() => ref.current?.open()}>
						{' '}
						<i className='iconfont icon-plus1' style={{ fontSize: '16px' }} /> 新建
					</Button>
				)
			}
			onFinish={async (values: any) => {
				if (!row) {
					const { data, code } = await saveArea(values as AreaDTO);
					if (code == 200) {
						message.success('提交成功!');
						form.resetFields();
					}
				} else {
					const { data, code } = await updateArea(values as AreaDTO);
					if (code == 200) {
						message.success('修改成功');
						ref.current?.close();
					}
				}
			}}
			className='io-cms-area-management__bizmodalform'
			title={row ? '编辑区域' : '新建区域'}
			submitterRender={() => (
				<div className='btn-submitter'>
					<Button onClick={() => ref.current?.close()}>取消</Button>
					{row ? (
						''
					) : (
						<Button htmlType='submit' type='primary'>
							保存并继续新建
						</Button>
					)}
					<Button htmlType='submit' type='primary'>
						保存
					</Button>
				</div>
			)}
		>
			<Form.Item
				name='parentId'
				label='上级区域'
				rules={[{ required: true }, { message: '请选择上级区域' }]}
			>
				<TreeSelect treeData={treeData} placeholder='请选择上级区域' />
			</Form.Item>
			<ProFormText
				name='areaName'
				label='区域名称'
				placeholder='请输入区域名称'
				rules={[{ required: true }]}
			/>
			<ProFormText
				name='areaCode'
				label='编号'
				placeholder='请输入编号'
				rules={[{ required: true }]}
			/>
			<ProFormText
				name='sortNum'
				label='排序值'
				placeholder='请输入排序值'
				rules={[{ required: true }]}
			/>
			<Form.Item
				name='status'
				label={
					<span>
						状态&nbsp;
						<Tooltip title='再读取行政区划时不显示禁用状态的区域'>
							<InfoCircleOutlined />
						</Tooltip>
					</span>
				}
				initialValue={true}
				valuePropName='checked'
			>
				<Switch checkedChildren='开启' unCheckedChildren='关闭' />
			</Form.Item>
		</BizModalForm>
	);
};
