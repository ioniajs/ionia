import { Upload } from 'antd';
import { UploadProps } from 'antd/lib/upload';
import { UploadFile } from 'antd/lib/upload/interface';
import axios from 'axios';
import React, { ReactElement, useEffect, useState } from 'react';
import { useLocalStorage } from 'react-use';
import { UploadButton } from '../UploadButton';
import { UploadItem } from '../UploadItem';
import './index.less';

interface ImageUploadProps extends UploadProps {
	title?: string;
	tips?: string;
	limit?: number;
	onChange?: (files: any) => void;
}

export const ImageUpload = ({
	title,
	tips,
	limit = 1,
	action = '/module-infra/res/upload',
	defaultFileList,
	onChange,
	...reset
}: ImageUploadProps) => {
	const [token] = useLocalStorage('io-token');
	const [fileList, setFileList] = useState<UploadFile<any>[]>(defaultFileList ?? []);

	useEffect(() => {
		onChange && onChange(fileList);
	}, [fileList]);

	return (
		<div className='io-image-upload'>
			<Upload
				className='io-image-upload__button'
				listType='picture-card'
				action={action}
				customRequest={({
					action,
					data,
					file,
					filename,
					headers,
					onError,
					onProgress,
					onSuccess,
					withCredentials,
				}) => {
					const formData = new FormData();
					// @ts-ignore
					formData.append('files', [file]);

					axios
						.post(action, formData, {
							withCredentials,
							headers: {
								'Accept-Language': 'zh-CN',
								Authorization: `Bearer ${token}`,
								...headers,
							},
							onUploadProgress: ({ total, loaded }) => {
								onProgress(
									{
										percent: Number(
											Math.round((loaded / total) * 100).toFixed(2)
										),
									},
									file
								);
							},
						})
						.then(({ data: response }) => {
							// console.log('此处需要映射一下', response);
							if (response.code === 200) {
								onSuccess(response.data, file);
							}
						})
						.catch(onError);

					return {
						abort() {
							console.log('upload progress is aborted.');
						},
					};
				}}
				itemRender={(originNode: ReactElement, file: UploadFile) => (
					<UploadItem
						file={file}
						onRemove={() => {
							setFileList(fileList.filter(f => f.uid !== file.uid));
						}}
					/>
				)}
				{...reset}
				fileList={fileList}
				onChange={info => {
					setFileList([...info.fileList]);
				}}
			>
				{fileList.length < limit && <UploadButton />}
			</Upload>
			{title && <p className='io-file-upload__title'>{title}</p>}
			{tips && <p className='io-file-upload__tips'>{tips}</p>}
		</div>
	);
};
