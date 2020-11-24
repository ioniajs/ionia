import { Upload } from 'antd';
import React from 'react';
import { UploadButton } from './UploadButton';

interface ImageUploadProps {}

export const ImageUpload = ({}: ImageUploadProps) => {
	return (
		<Upload action='https://www.mocky.io/v2/5cc8019d300000980a055e76' listType='picture-card'>
			<UploadButton />
		</Upload>
	);
};
