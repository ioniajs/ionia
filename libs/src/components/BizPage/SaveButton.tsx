import { Button } from 'antd';
import React from 'react';

interface SaveButtonProps {
	onSave?: () => void;
}

export const SaveButton = ({ onSave }: SaveButtonProps) => {
	return (
		<Button style={{ marginLeft: 8 }} type='primary' onClick={() => onSave && onSave()}>
			保存
		</Button>
	);
};
