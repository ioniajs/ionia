import { Button, Modal } from 'antd';
import { ModalProps } from 'antd/lib/modal';
import React, { ReactNode, useState } from 'react';

interface RenderTriggerParams {
	open: () => void;
}

interface BizModalProps extends ModalProps {
	renderTrigger?: (params: RenderTriggerParams) => ReactNode;
	children: ReactNode;
}

export const BizModal = ({ renderTrigger, children, ...reset }: BizModalProps) => {
	const [visible, setVisible] = useState(false);

	const toOpen = () => {
		setVisible(true);
	};
	const toClose = () => {
		setVisible(false);
	};

	const defaultRenderTrigger = () => (
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
			{renderTrigger
				? renderTrigger({
						open: () => toOpen(),
				  })
				: defaultRenderTrigger()}
			<Modal visible={visible} {...reset} onCancel={toClose}>
				{children}
			</Modal>
		</div>
	);
};
