import React, { useRef, useState } from 'react';
import { ProFormText, ProFormCheckbox } from '@ant-design/pro-form';
import { BizModalForm, gainSiteTree, copySite, SiteCopyDTO, BizModalFormRef } from '@ionia/libs';
import {
	AdminSiteTreeVO,
	verifySiteName,
	verifySiteCatalogue,
} from '@ionia/libs/src/services/kernel';
import { Button, Form, TreeSelect, Select, Input, message, Row, Col } from 'antd';
import { useMount, useRequest } from '@umijs/hooks';
import './index.less';

interface CopyFormProps {
	siteId: string;
	source?: string;
	parentId?: string;
}

const copyTypes = [
	{
		value: 1,
		label: '站点配置',
	},
	{
		value: 2,
		label: '栏目',
	}
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

export default ({ siteId, source, parentId }: CopyFormProps) => {
	const ref = useRef<BizModalFormRef>();
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
			ref={ref}
			form={form}
			title='复制站点'
			width={580}
			triggerRender={() =>
				source === 'list' ? (
					<a
						onClick={() => {
							ref.current?.open();
						}}
					>
						复制
					</a>
				) : (
						<Button
							type='default'
							className='io-cms-site-save-expand__but'
							onClick={() => {
								ref.current?.open();
							}}
						>
							复制
						</Button>
					)
			}
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
				labelCol={{ span: 6 }}
				wrapperCol={{ span: 14 }}
				initialValue={parentId}
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
			<Form.Item
				name='name'
				label='站点名称'
				validateTrigger={['onBlur']}
				rules={[
					{ required: true, message: '请输入站点名称' },
					() => ({
						async validator(rule, value) {
							console.log(value);
							if (!!value) {
								const success = await verifySiteName({
									name: value,
									siteId: siteId,
								}).then(res => res.data);
								if (success) return Promise.resolve();
								return Promise.reject('站点名称重复');
							}
						},
					}),
				]}
				labelCol={{ span: 6 }}
				wrapperCol={{ span: 14 }}
			>
				<Input
					allowClear
					placeholder='请输入站点名称'
					maxLength={120}
					className='io-cms-site-create-form__item'
				/>
			</Form.Item>
			{/* <ProFormText
				name='name'
				label='站点名称'
				validateTrigger={['onBlur']}
				placeholder='请输入站点名称'
				rules={[
					{ required: true },
					() => ({
						async validator(rule, value) {
							if (!!value) {
								const success = await verifySiteName({
									name: value,
									siteId: siteId,
								}).then(res => res.data);
								if (success) return Promise.resolve();
								return Promise.reject('站点名称重复');
							}
						}
					})
				]}
				fieldProps={{
					maxLength: 120,
				}}
				labelCol={{ span: 6 }}
				wrapperCol={{ span: 14 }}
			/> */}
			<Form.Item
				name='dir'
				label='站点目录'
				validateTrigger={['onBlur']}
				rules={[
					{ required: true, message: '请输入站点目录' },
					() => ({
						async validator(rule, value) {
							if (!!value) {
								let success = true;
								success = await verifySiteCatalogue({
									dir: value,
									siteId: siteId,
								}).then(res => res.data);
								if (!!value && /^[0-9a-zA-Z]+$/.test(value) && success)
									return Promise.resolve();
								return Promise.reject(
									success ? '请输入英文和数字' : '站点目录重复'
								);
							}
							return Promise.reject('');
						},
					}),
				]}
				labelCol={{ span: 6 }}
				wrapperCol={{ span: 14 }}
			>
				<Input
					allowClear
					placeholder='请输入站点目录'
					maxLength={120}
					className='io-cms-site-create-form__item'
				/>
			</Form.Item>
			{/* <ProFormText
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
				labelCol={{ span: 6 }}
				wrapperCol={{ span: 14 }}
			/> */}
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
										wrapperCol={{ span: 16 }}
										labelCol={{ span: 6 }}
										label={
											index === 0 ? (
												<span>
													<span className='io-cms-site-copy-label-mark__span'>
														*
													</span>
													域名
												</span>
											) : (
													<span style={{ display: 'none' }}>添加域名</span>
												)
										}
										required={false}
										key={field.key}
										colon={index === 0}
									>
										<Row>
											<Col span={21}>
												<Form.Item
													{...field}
													wrapperCol={{ span: 16 }}
													labelCol={{ span: 6 }}
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
														addonBefore={selectBefore}
													/>
												</Form.Item>
											</Col>
											<Col span={3}>
												{fields.length > 1 && index > 0 ? (
													<Button
														className='io-cms-site-copysite-domain-delete__but'
														onClick={() => remove(field.name)}
													>
														删除
													</Button>
												) : null}
											</Col>
										</Row>
									</Form.Item>
								);
							})}
							<Form.Item
								name=''
								label={<span style={{ display: 'none' }}>添加按钮</span>}
								colon={false}
								className='io-cms-site-copy-add__Item'
								labelCol={{ span: 6 }}
								wrapperCol={{ span: 14 }}
							>
								<Button
									type='dashed'
									className='io-cms-site-copy-add__but'
									onClick={() => add()}
									style={{ width: '100%' }}
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
				labelCol={{ span: 6 }}
				wrapperCol={{ span: 18 }}
				initialValue={[1, 2]}
			/>
		</BizModalForm>
	);
};
