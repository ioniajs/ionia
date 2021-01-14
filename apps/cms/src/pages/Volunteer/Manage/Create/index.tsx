import React from 'react';
import { BizPage, ImageUpload } from '@ionia/libs';
import { Form, TreeSelect, Cascader, message, Input } from 'antd';
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
	saveVolunteers,
	VolunteerDTO,
	uniqueEmailVolunteers,
	uniquePhoneVolunteers,
	uniqueUserNameVolunteers,
} from '@ionia/libs/src/services';
import './index.less';

const layout = {
	labelCol: { span: 6 },
	wrapperCol: { span: 12 },
};

const domicileOptions = [
	{
		value: '360000',
		label: '江西省',
	},
	{
		value: '100001',
		label: '北京市',
	},
];

const handleSave = async (flieds: VolunteerDTO) => {
	const saveRes = await saveVolunteers(flieds);
	if (saveRes.code === 200) {
		message.success('新建成功');
	} else {
		message.error('新建失败');
	}
	return saveRes.code;
};

export default () => {
	const [form] = Form.useForm();
	const history = useHistory();
	const { location } = history;
	const { state }: any = location;
	return (
		<BizPage
			showActions
			breadcrumbs={[{ name: '志愿者' }, { name: '新建' }]}
			onSave={() => {
				form.validateFields().then(async values => {
					console.log(values, '新增保存的值');
					const params = {
						...values,
						avatarId: values.avatarId[0]?.uid,
						birthday: moment(values.birthday).format('YYYY-MM-DD'),
						domicile: values.domicile[0],
						checkStatus: 0,
					};
					const success = await handleSave(params as VolunteerDTO);
					if (success === 200) {
						history.goBack();
					}
				});
			}}
		>
			<Form form={form} {...layout} className='io-cms-volunteer-create-form-container'>
				<Form.Item name='avatarId' label='头像'>
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
									const flag = await uniqueUserNameVolunteers({
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
									const flag = await uniquePhoneVolunteers({ phone: value }).then(
										res => res.data
									);
									if (!!value && /^1\d{10}$/.test(value) && flag)
										return Promise.resolve();
									return Promise.reject(
										flag ? '请输入正确的手机号码' : '手机号重复'
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
					name='cipher'
					label='密码'
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
					name='fullName'
					label='姓名'
					rules={[{ required: true }]}
					fieldProps={{ maxLength: 50 }}
				/>
				<ProFormSelect
					name='type'
					label='志愿者类型'
					rules={[{ required: true }]}
					options={[
						{ value: '1', label: '党员干部志愿者' },
						{ value: '2', label: '文艺志愿者' },
						{ value: '3', label: '社会志愿者' },
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
									console.log(value, '邮箱校验');
									const reg = /^([a-zA-Z]|[0-9])(\w|\-)+@[a-zA-Z0-9]+\.([a-zA-Z]{2,4})$/;
									const flag = await uniqueEmailVolunteers({ email: value }).then(
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
					name='gender'
					label='性别'
					options={[
						{ value: 1, label: '男' },
						{ value: 2, label: '女' },
					]}
					rules={[{ required: true }]}
					initialValue={1}
				/>
				<ProFormSelect
					name='clan'
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
					}}
				/>
				<Form.Item name='domicile' label='籍贯' rules={[{ required: true }]}>
					<Cascader options={domicileOptions} />
				</Form.Item>
				<ProFormSelect
					name='education'
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
					name='politicalLook'
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
					name='occupation'
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
						{ value: 1, label: '科普宣传' },
						{ value: 2, label: '法律服务' },
						{ value: 3, label: '文体教育' },
						{ value: 4, label: '社区服务' },
						{ value: 5, label: '环保宣传' },
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
			</Form>
		</BizPage>
	);
};
