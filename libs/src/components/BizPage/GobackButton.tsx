import { Button } from 'antd';
import React from 'react';
import { useHistory } from 'react-router-dom';

interface GobackButtonProps {
	onGoback?: () => void;
}

export const GobackButton = ({ onGoback }: GobackButtonProps) => {
	const history = useHistory();
	const defaultOnGoback = () => history.goBack();

	return (
		<Button
			icon={<i className='iconfont icon-left' style={{ marginRight: 4 }} />}
			onClick={() => (onGoback ? onGoback() : defaultOnGoback())}
		>
			返回
		</Button>
	);
};
