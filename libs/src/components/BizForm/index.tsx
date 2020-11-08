import React from 'react';
import { Button, Form } from 'antd';
import { LeftOutlined } from '@ant-design/icons';
import { ProFormProps } from '@ant-design/pro-form';
import './index.less';

export interface BizFormProps extends ProFormProps {
	renderActions?: boolean;
	onSubmit?: () => void;
	onCancel?: () => void;
	butLoading?: boolean;
	onFinish?: () => Promise<void>;
}

const layout = {
	labelCol: { span: 6 },
	wrapperCol: { span: 12 },
};
export const BizForm: React.FC<BizFormProps> = props => {
	const {
		children,
		// tabList,
		onSubmit,
		renderActions = true,
		onFinish,
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
							onClick={onFinish}
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
