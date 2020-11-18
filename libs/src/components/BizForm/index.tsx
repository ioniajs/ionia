import { LeftOutlined } from '@ant-design/icons';
import { ProFormProps } from '@ant-design/pro-form';
import { Button, Form } from 'antd';
import React from 'react';
import './index.less';

export interface BizFormProps extends ProFormProps {
	renderActions?: boolean;
	onCancel?: () => void;
	onSubmit?: () => Promise<void>;
}

const layout = {
	labelCol: { span: 6 },
	wrapperCol: { span: 12 },
};

export const BizForm: React.FC<BizFormProps> = props => {
	const {
		children,
		renderActions = true,
		onSubmit,
		onCancel = () => history.back(),
		...reset
	} = props;
	return (
		<div className='io-biz-form'>
			<Form scrollToFirstError {...layout} {...reset}>
				{renderActions && (
					<Form.Item className='io-biz-form_action-footer'>
						<Button
							className='io-biz-form_backbut'
							onClick={() => history.back()}
							size='small'
						>
							<LeftOutlined />
							返回
						</Button>
						<Button
							type='primary'
							htmlType='submit'
							className='io-biz-form_subbut'
							size='small'
							onClick={onSubmit}
						>
							保存
						</Button>
					</Form.Item>
				)}
				{children}
			</Form>
		</div>
	);
};
