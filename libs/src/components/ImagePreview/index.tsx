import { CloseOutlined } from '@ant-design/icons';
import React from 'react';
import './index.less';
import { Button, Tooltip } from 'antd';

interface ImagePreviewProps {
	src: string;
	alt?: string;
	width?: number;
	height?: number;
	onRemove?: () => void;
}

export const ImagePreview: React.FC<ImagePreviewProps> = props => {
	const { width, height, onRemove } = props;
	return (
		<div className='io-image-preview' style={{ width, height }}>
			{onRemove && (
				<Tooltip title='删除'>
					<Button className='io-remove-btn' onClick={onRemove}>
						<CloseOutlined />
					</Button>
				</Tooltip>
			)}
		</div>
	);
};
