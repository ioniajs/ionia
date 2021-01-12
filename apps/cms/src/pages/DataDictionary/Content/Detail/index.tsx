import React, { useRef, useState, useEffect } from 'react';
import {
	ProFormSelect,
	ProFormText,
	ProFormTextArea,
	ProFormSwitch,
	ProFormDigit,
} from '@ant-design/pro-form';
import { BizModalForm, BizModalFormRef, ImageUpload } from '@ionia/libs';
import { Button, Form, message } from 'antd';
import {
	dataDictionaryList,
	detailDataDictionary,
	DataDictionaryUpdateDTO,
	updateDataDictionary,
	DataDictionarySaveDTO,
	saveDataDiactionary,
} from '@ionia/libs/src/services';
import { useRequest, useMount } from '@umijs/hooks';
import './index.less';

interface DetailFormProps {
	id?: number; // 有id表示详情,无id表示新增
	reloadTableData?: () => void; // 添加/修改成功后刷新表格
	source?: string; // 弹窗来源
	typeId?: number; // 字典类型Id
}

/**
 * 修改
 * @param fileds
 */
const handleUpdate = async (fileds: DataDictionaryUpdateDTO) => {
	const updateRes = await updateDataDictionary(fileds);
	if (updateRes.code === 200) {
		message.success('编辑成功');
	} else {
		message.error('编辑失败');
	}
	return updateRes.code;
};
/**
 * 新建下级或新建
 * @param fileds
 */
const handleCreate = async (fileds: DataDictionarySaveDTO) => {
	const saveRes = await saveDataDiactionary(fileds);
	if (saveRes.code === 200) {
		message.success(`${!!fileds.parentId ? '新建下级成功' : '新建成功'}`);
	} else {
		message.error(`${!!fileds.parentId ? '新建下级失败' : '新建失败'}`);
	}
	return saveRes.code;
};

export default ({ id, reloadTableData, source, typeId }: DetailFormProps) => {
	const ref = useRef<BizModalFormRef>();
	const [form] = Form.useForm();
	const [modalShow, setModalShow] = useState<boolean>(false);
	const [parentList, setparentList] = useState<any>();
	console.log(source, 'source');
	console.log(parentList, '上级字典list');
	let triggerRender: React.ReactNode = null;
	if (source === 'create') {
		triggerRender = (
			<Button
				type='primary'
				onClick={() => {
					ref.current?.open();
					setModalShow(true);
				}}
			>
				<i className='iconfont icon-plus1' />
				&nbsp;新建
			</Button>
		);
	} else if (source === 'edit') {
		triggerRender = (
			<a
				onClick={() => {
					ref.current?.open();
					setModalShow(true);
				}}
			>
				编辑
			</a>
		);
	} else if (source === 'createSub') {
		triggerRender = (
			<a
				onClick={() => {
					ref.current?.open();
					setModalShow(true);
				}}
			>
				新增下级
			</a>
		);
	}
	const { run: runDetailDictionary } = useRequest(detailDataDictionary, {
		manual: true,
		onSuccess: result => {
			form.setFieldsValue({ ...result.data });
		},
	});
	const { run: runDictionaryList } = useRequest(dataDictionaryList, {
		manual: true,
		onSuccess: result => {
			const tempList = result.data.map((r: any) => {
				return {
					...r,
					value: r.id,
				};
			});
			if (source === 'edit') {
				// 当编辑一级字典数据时，不能选择自己
				const tempFilterList = tempList.filter((t: any) => t.id !== typeId);
				setparentList(tempFilterList);
			} else {
				setparentList(tempList);
			}
		},
	});
	useEffect(() => {
		if (!!modalShow && id) {
			runDetailDictionary(id);
		}
		if (!!modalShow && typeId) {
			runDictionaryList({ typeId });
		}
	}, [modalShow]);
	// useMount(() => {
	//     if (typeId) {
	//         runDictionaryList({ typeId })
	//     }
	// })

	return (
		<BizModalForm
			ref={ref}
			form={form}
			width={558}
			className='io-cms-system-data-dictionary-bizmodalform'
			title={id ? '编辑字典数据' : '添加字典数据'}
			triggerRender={() =>
				triggerRender
				//     !id ? <Button type='primary' onClick={() => { ref.current?.open() }}>
				//         <i className='iconfont icon-plus1' />
				//     &nbsp;新建
				// </Button> : <a onClick={() => { ref.current?.open() }}>编辑</a>
			}
			onFinish={async values => {
				console.log(values, '保存的值');
				if (source === 'edit') {
					// 编辑详情
					const param = { ...values, typeId: typeId, id: id };
					const success = await handleUpdate(param as DataDictionaryUpdateDTO);
					if (success === 200) {
						ref.current?.close();
						form.resetFields(); // 清空表单
						reloadTableData && reloadTableData();
						setModalShow(false);
					}
				} else {
					const param = {
						...values,
						typeId: typeId,
						parentId: source === 'createSub' ? id : '',
						pictureId: 0,
					};
					const success = await handleCreate(param as DataDictionarySaveDTO);
					if (success === 200) {
						ref.current?.close();
						form.resetFields(); // 清空表单
						reloadTableData && reloadTableData();
						setModalShow(false);
					}
				}
			}}
			submitterRender={() => (
				<>
					<Button>取消</Button>
					<Button type='primary' htmlType='submit'>
						确定
					</Button>
				</>
			)}
		>
			<ProFormSelect
				name='parentId'
				label='上级字典数据'
				options={parentList}
				labelCol={{ span: 6 }}
				wrapperCol={{ span: 16 }}
				initialValue={source === 'createSub' ? typeId : ''}
			/>
			<Form.Item name='pictureId' label='字典图'>
				<ImageUpload />
			</Form.Item>
			<ProFormText
				name='key'
				label='字典键值'
				disabled={source === 'edit'}
				fieldProps={{ maxLength: 30 }}
				rules={[{ required: true }]}
				placeholder='请输入键值'
				labelCol={{ span: 6 }}
				wrapperCol={{ span: 16 }}
			/>
			<ProFormText
				name='label'
				label='字典标签'
				rules={[{ required: true }]}
				fieldProps={{ maxLength: 20 }}
				placeholder='请输入字典标签'
				labelCol={{ span: 6 }}
				wrapperCol={{ span: 16 }}
			/>
			<ProFormDigit
				name='sortNum'
				label='排序值'
				rules={[{ required: true }]}
				placeholder='请输入排序值，值越大排序越靠前'
				labelCol={{ span: 6 }}
				wrapperCol={{ span: 16 }}
				min={1}
				fieldProps={{ precision: 0 }}
				max={99999999}
				initialValue={10}
			/>
			<ProFormTextArea
				name='remark'
				label='备注'
				placeholder='请输入备注信息，仅限50字（选填）'
				fieldProps={{ showCount: true, maxLength: 50 }}
				labelCol={{ span: 6 }}
				wrapperCol={{ span: 16 }}
			/>
			<ProFormSwitch
				name='status'
				label='状态'
				fieldProps={{ unCheckedChildren: '关闭', checkedChildren: '开启' }}
				rules={[{ required: true }]}
				initialValue={1}
			/>
		</BizModalForm>
	);
};
