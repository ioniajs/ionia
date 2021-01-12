import React, { ReactElement, useState } from 'react';
import { Upload, message } from 'antd';
import axios from 'axios';
import { UploadProps, UploadChangeParam } from 'antd/lib/upload';
import { UploadFile } from 'antd/lib/upload/interface';
import { useLocalStorage } from 'react-use';
import { UploadButton } from '../UploadButton';
import { VideoUploadItem } from '../VideoUploadItem';
import './index.less';

interface VideoUploadProps extends UploadProps {
	title?: string;
	tips?: string;
	limit?: number;
	onChange?: (files: any) => void;
}

export const VideoUpload = ({
	title,
	tips,
	limit = 1,
	action = '/module-infra/res/upload',
	defaultFileList,
	// = [
	// 	{
	// 		uid: '-xxx',
	// 		// percent: 50,
	// 		name: 'video.mp4',
	// 		status: 'done',
	// 		url: 'https://filesamples.com/samples/video/ogv/sample_640x360.ogv',
	// 		size: 200,
	// 		type: '',
	// 		thumbUrl:
	// 			'https://ss1.bdstatic.com/70cFvXSh_Q1YnxGkpoWK1HF6hhy/it/u=320188414,720873459&fm=26&gp=0.jpg',
	// 	},
	// 	{
	// 		uid: '001',
	// 		size: 100,
	// 		name: 'video.mp4',
	// 		url: 'https://storage.googleapis.com/media-session/elephants-dream/the-wires.mp3',
	// 		status: 'error',
	// 		percent: 50,
	// 		type: '',
	// 	},
	// ],
	onChange,
	...reset
}: VideoUploadProps) => {
	const [token] = useLocalStorage('io-token');
	const [fileList, setFileList] = useState<UploadFile<any>[]>(defaultFileList ?? []);
	return (
		<div className='io-video-upload'>
			<Upload
				className='io-video-upload__button'
				listType='picture-card'
				accept='video'
				action={action}
				beforeUpload={file => {
					if (file.type !== 'video/mp4') {
						message.error(`${file.name}不属于音频类型`);
					}
					return file.type === 'video/mp4';
				}}
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
								Authorization: `${token}`,
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
				itemRender={(originNode: ReactElement, file) => (
					<VideoUploadItem
						file={file}
						onRemove={() => {
							setFileList(fileList.filter(f => f.uid !== file.uid));
						}}
					/>
				)}
				{...reset}
				fileList={fileList}
				onChange={info => {
					setFileList(info.fileList.filter(file => !!file.status));
				}}
			>
				{fileList.length < limit && <UploadButton type='video' />}
			</Upload>
			{title && <p className='io-file-upload__title'>{title}</p>}
			{tips && <p className='io-file-upload__tips'>{tips}</p>}
		</div>
	);
};
