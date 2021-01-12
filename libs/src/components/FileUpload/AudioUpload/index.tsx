import { Upload, message } from 'antd';
import { UploadProps } from 'antd/lib/upload';
import { UploadFile } from 'antd/lib/upload/interface';
import axios from 'axios';
import React, { ReactElement, useEffect, useState } from 'react';
import { useLocalStorage } from 'react-use';
import { UploadButton } from '../UploadButton';
import { AudioUploadItem } from '../AudioUploadItem';

interface AudioUploadProps extends UploadProps {
	limit?: number;
	onChange?: (files: any) => void;
}

export const AudioUpload = ({
	limit = 1,
	action = '/module-infra/res/upload',
	defaultFileList,
	// = [
	//     {
	//         uid: '-xxx',
	//         // percent: 50,
	//         name: '此处为音频名称此处为音频名称此处为音出手大方.mp4',
	//         status: 'done',
	//         url:
	//             'https://test-videos.co.uk/vids/bigbuckbunny/mp4/h264/360/Big_Buck_Bunny_360_10s_1MB.mp4',
	//         size: 200,
	//         type: '',
	//         thumbUrl:
	//             'https://ss1.bdstatic.com/70cFvXSh_Q1YnxGkpoWK1HF6hhy/it/u=320188414,720873459&fm=26&gp=0.jpg',
	//     },
	//     {
	//         uid: '001',
	//         size: 100,
	//         name: 'video.mp4',
	//         url: 'https://storage.googleapis.com/media-session/elephants-dream/the-wires.mp3',
	//         status: 'uploading',
	//         percent: 50,
	//         type: '',
	//     },
	//     {
	//         uid: '002',
	//         size: 100,
	//         name: 'video.mp4',
	//         url: 'https://filesamples.com/samples/video/ogv/sample_640x360.ogv',
	//         status: 'success',
	//         percent: 100,
	//         type: '',
	//     },
	//     {
	//         uid: '003',
	//         size: 100,
	//         name: 'video.mp4',
	//         url: 'https://storage.googleapis.com/media-session/elephants-dream/the-wires.mp3',
	//         status: 'error',
	//         percent: 50,
	//         type: '',
	//     },
	// ],
	onChange,
	...reset
}: AudioUploadProps) => {
	const [token] = useLocalStorage('io-token');
	const [fileList, setFileList] = useState<UploadFile<any>[]>(defaultFileList ?? []);
	useEffect(() => {
		onChange && onChange(fileList);
	}, [fileList]);

	return (
		<div className='io-audio-upload'>
			<Upload
				className='io-audio-upload__button'
				accept='video/'
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
				itemRender={(originNode: ReactElement, file: UploadFile) => (
					<AudioUploadItem
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
				{fileList.length < limit && <UploadButton type='audio' />}
			</Upload>
		</div>
	);
};
