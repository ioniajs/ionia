import { Button, Modal } from 'antd';
import { ModalProps } from 'antd/lib/modal';
import React, { ReactNode, useState } from 'react';

interface TriggerRenderParams {
	open: () => void;
}

interface BizModalProps extends ModalProps {
	triggerRender?: (params: TriggerRenderParams) => ReactNode;
	children: ReactNode;
}

export const BizModal = ({ triggerRender, children, ...reset }: BizModalProps) => {
	const [visible, setVisible] = useState(false);

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
			打开
		</Button>
	);

	return (
		<div className='io-biz-modal'>
			{triggerRender
				? triggerRender({
						open: () => toOpen(),
				  })
				: defaultTriggerRender()}
			<Modal visible={visible} {...reset} onCancel={toClose}>
				{children}
			</Modal>
		</div>
	);
};
