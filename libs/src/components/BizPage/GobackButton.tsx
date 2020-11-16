import { Button } from 'antd';
import { ButtonProps } from 'antd/lib/button';
import React from 'react';
import { useHistory } from 'react-router-dom';

interface GobackButtonProps extends ButtonProps {
	onGoback?: () => void;
}

export const GobackButton = ({ onGoback, ...reset }: GobackButtonProps) => {
	const history = useHistory();
	const defaultOnGoback = () => history.goBack();

	return (
		<Button
			icon={<i className='iconfont icon-left' style={{ fontSize: 14, marginRight: 4 }} />}
			onClick={() => (onGoback ? onGoback() : defaultOnGoback())}
			{...reset}
		>
			返回
		</Button>
	);
};
