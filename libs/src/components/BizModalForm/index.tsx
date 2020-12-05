import { ModalForm, ModalFormProps } from '@ant-design/pro-form';
import { SubmitterProps } from '@ant-design/pro-form/lib/components/Submitter';
import { Button, Form } from 'antd';
import React, { forwardRef, ReactNode, useImperativeHandle, useState } from 'react';
import './index.less';
import { validateMessages } from './rule';

export interface BizModalFormRef {
	open: () => void;
	close: () => void;
}

interface SubmitterRenderParams {
	props: SubmitterProps;
	doms: JSX.Element[];
}

interface BizModalFormProps extends ModalFormProps {
	title?: string;
	width?: number;
	children?: ReactNode;
	triggerRender?: () => ReactNode;
	submitterRender?: (params: SubmitterRenderParams) => ReactNode;
}

export const BizModalForm = forwardRef(
	(
		{
			title,
			children,
			triggerRender,
			submitterRender,
			width = 530,
			...reset
		}: BizModalFormProps,
		ref
	) => {
		const [form] = Form.useForm();
		const [visible, setVisible] = useState(false);

		useImperativeHandle(ref, () => ({
			open: toOpen,
			close: toClose,
		}));

		const toOpen = () => {
			setVisible(true);
		};
		const toClose = () => {
			setVisible(false);
		};

		const defaultTriggerRender = () => (
			<Button
				type='primary'
				onClick={() => {
					toOpen();
				}}
			>
				<i
					className='iconfont icon-plus1'
					style={{ fontSize: '14px', lineHeight: '21px' }}
				/>
				新建
			</Button>
		);

		const defaultSubmitterRender = () => {
			return (
				<div className='btn-submitter'>
					<Button type='default' onClick={() => toClose()}>
						取消
					</Button>
					<Button type='primary' htmlType='submit'>
						保存
					</Button>
				</div>
			);
		};

		let modalTitle = title;

		if (modalTitle) {
			modalTitle = modalTitle.length > 26 ? modalTitle.substring(0, 26) + '...' : modalTitle;
		}

		return (
			<ModalForm
				form={form}
				layout='horizontal'
				title={modalTitle}
				width={width}
				visible={visible}
				className='io-biz-modal-from'
				validateMessages={validateMessages}
				trigger={triggerRender ? triggerRender() : defaultTriggerRender()}
				submitter={{
					render: (_props, _doms) => {
						return submitterRender
							? submitterRender({
									props: _props,
									doms: _doms,
							  })
							: defaultSubmitterRender();
					},
				}}
				{...reset}
				modalProps={{
					onCancel: toClose,
					closeIcon: <i className='iconfont icon-close' />,
					...reset.modalProps,
				}}
			>
				{children}
			</ModalForm>
		);
	}
);
