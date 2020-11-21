import React, { useState } from 'react';
import { ProFormText, ProFormCheckbox } from '@ant-design/pro-form';
import { BizModalForm, gainSiteTree, copySite, SiteCopyDTO } from '@ionia/libs';
import { AdminSiteTreeVO } from '@ionia/libs/src/services/kernel/admin-site.vo';
import { Button, Form, TreeSelect, Select, Input, message } from 'antd';
import { useMount, useRequest } from '@umijs/hooks';
import './index.less';

interface CopyFormProps {
	siteId: string;
}

const copyTypes = [
	{
		value: 1,
		label: '站点配置',
	},
	{
		value: 2,
		label: '模板文件',
	},
	{
		value: 3,
		label: '消息模板',
	},
	{
		value: 4,
		label: '栏目',
	},
];
const { Option } = Select;
const selectBefore = (
	<Select defaultValue='http://' className='select-before'>
		<Option value='http://' key={1}>
			http://
		</Option>
		<Option value='https://' key={2}>
			https://
		</Option>
	</Select>
);

const formItemLayout = {
	labelCol: {
		xs: { span: 24 },
		sm: { span: 4 },
	},
	wrapperCol: {
		xs: { span: 24 },
		sm: { span: 20 },
	},
};
const formItemLayoutWithOutLabel = {
	wrapperCol: {
		xs: { span: 24, offset: 0 },
		sm: { span: 20, offset: 4 },
	},
};

export default ({ siteId }: CopyFormProps) => {
	const [form] = Form.useForm();
	const [siteTree, setSiteTree] = useState<AdminSiteTreeVO[]>();
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
			const tempSiteTree = loop(result.data.list);
			setSiteTree(tempSiteTree);
		},
	});
	useMount(() => {
		runsiteTree();
		form.setFieldsValue({
			domain: [''],
		});
	});

	return (
		<BizModalForm
			form={form}
			title='复制站点'
			width={580}
			triggerRender={({ open }) => <a onClick={open}>复制</a>}
			onFinish={async values => {
				console.log(values);
				const param = {
					...values,
					siteId,
				};
				const coprRes = await copySite(param as SiteCopyDTO);
				if (coprRes.code === 200) {
					message.success('复制成功');
					form.resetFields();
					form.setFieldsValue({
						domain: [''],
					});
				}
			}}
		>
			<Form.Item
				name='parentId'
				label='上级站点'
				rules={[{ required: true, message: '请选择上级站点' }]}
			>
				<TreeSelect
					showSearch={true}
					treeData={siteTree}
					onSearch={e => {
						runsiteTree(e);
					}}
					placeholder='请选择上级站点'
				/>
			</Form.Item>
			<ProFormText
				name='name'
				label='站点名称'
				placeholder='请输入站点名称'
				rules={[{ required: true }]}
				fieldProps={{
					maxLength: 120,
				}}
			/>
			<ProFormText
				name='dir'
				label='站点目录'
				placeholder='请输入站点目录'
				rules={[
					{ required: true },
					() => ({
						validator(rule, value) {
							if (!!value) {
								if (!!value && /^[0-9a-zA-Z]+$/.test(value))
									return Promise.resolve();
								return Promise.reject('请输入英文和数字');
							}
							return Promise.reject('');
						},
					}),
				]}
				fieldProps={{
					maxLength: 120,
				}}
			/>
			{/* <Row>
                <Form.Item
                    name='domain'
                    label='域名'
                    rules={[{ required: true, message: '请输入域名' }]}
                >
                    <Input
                        maxLength={120}
                        addonBefore={selectBefore}
                        placeholder='请输入域名'
                    />
                </Form.Item>
                <Button>删除</Button>
            </Row> */}
			<Form.List name='domain'>
				{(fields, { add, remove }, { errors }) => {
					return (
						<>
							{fields.map((field, index) => {
								return (
									<Form.Item
										{...(index === 0
											? formItemLayout
											: formItemLayoutWithOutLabel)}
										label={
											index === 0 ? (
												<span>
													<span className='io-cms-site-copy-label-mark__span'>
														*
													</span>
													域名
												</span>
											) : (
													''
												)
										}
										required={false}
										key={field.key}
									>
										<Form.Item
											{...field}
											validateTrigger={['onChange', 'onBlur']}
											rules={[
												{
													required: true,
													message: '请输入域名',
												},
											]}
											noStyle
										>
											<Input
												placeholder='请输入域名'
												style={{ width: '81%' }}
												addonBefore={selectBefore}
											/>
										</Form.Item>
										{fields.length > 1 && index > 0 ? (
											<Button
												className='dynamic-delete-button'
												onClick={() => remove(field.name)}
											>
												删除
											</Button>
										) : null}
									</Form.Item>
								);
							})}
							<Form.Item
								name=''
								label={<span style={{ display: 'none' }}>添加按钮</span>}
								colon={false}
								className='io-cms-site-copy-add__Item'
							>
								<Button
									type='dashed'
									className='io-cms-site-copy-add__but'
									onClick={() => add()}
								>
									<i className='iconfont icon-plus-square' />
									添加
								</Button>
								<Form.ErrorList errors={errors} />
							</Form.Item>
						</>
					);
				}}
			</Form.List>
			<ProFormCheckbox.Group
				name='copyType'
				options={copyTypes}
				layout='horizontal'
				label='要复制的数据'
			/>
		</BizModalForm>
	);
};
