import { Button } from 'antd';
import React from 'react';

interface SaveButtonProps {
	onSave?: () => void;
	saveButDisabled?: boolean;
}

export const SaveButton = ({ onSave, saveButDisabled = false }: SaveButtonProps) => {
	return (
		<Button
			style={{ marginLeft: 8 }}
			type='primary'
			onClick={() => onSave && onSave()}
			disabled={saveButDisabled}
		>
			保存
		</Button>
	);
};
