import React, { useState, useEffect } from 'react';
import { Upload, message, Button } from 'antd';
import { UploadProps } from 'antd/lib/upload';
import { UploadFile } from 'antd/lib/upload/interface';
import axios from 'axios';
import { useLocalStorage } from 'react-use';
import arrayMove from 'array-move';
import { SortableContainer, SortableElement } from 'react-sortable-hoc';
import { AnnexUploadItem, AnnexUploadItemProps } from '../AnnexUploadItem';
import './index.less';

interface AnnexUploadProps extends UploadProps {
	limit?: number;
	onChange?: (files: any) => void;
	onGetSecret?: (secretValues: any) => void;
}
interface secretValuesProps {
	value?: string;
	uid?: string;
}

export const AnnexUpload = ({
	limit = 6,
	action = '/module-infra/res/upload',
	defaultFileList,
	// defaultFileList = [
	// 	{
	// 		uid: '-xxx',
	// 		// percent: 50,
	// 		name: '此处为音频名称此处为音频名称此处为音出手大方.jpg',
	// 		status: 'done',
	// 		url: 'https://pic.tolvyo.com/mTGbnEE3gi-bef0c0d3b52049fbf7008437355bbbc1.jpg',
	// 		size: 200,
	// 		type: 'image/jpg',
	// 		thumbUrl:
	// 			'https://ss1.bdstatic.com/70cFvXSh_Q1YnxGkpoWK1HF6hhy/it/u=320188414,720873459&fm=26&gp=0.jpg',
	// 	},
	// 	{
	// 		uid: '001',
	// 		size: 100,
	// 		name: 'video.mp4',
	// 		url: 'https://storage.googleapis.com/media-session/elephants-dream/the-wires.mp3',
	// 		status: 'done',
	// 		// percent: 50,
	// 		type: 'video/mp4',
	// 	},
	// 	{
	// 		uid: '002',
	// 		size: 100,
	// 		name: 'audio.ogv',
	// 		url: 'https://filesamples.com/samples/video/ogv/sample_640x360.ogv',
	// 		status: 'done',
	// 		// percent: 100,
	// 		type: 'audio/ogv',
	// 	},
	// 	{
	// 		uid: '003',
	// 		size: 100,
	// 		name: 'video.mp4',
	// 		url: 'https://storage.googleapis.com/media-session/elephants-dream/the-wires.mp3',
	// 		status: 'error',
	// 		percent: 50,
	// 		type: '',
	// 	},
	// 	{
	// 		uid: '004',
	// 		percent: 50,
	// 		name: '此处为音频名称此处为音频名称此处为音出手大方.jpg',
	// 		status: 'uploading',
	// 		url: 'https://pic.tolvyo.com/mTGbnEE3gi-bef0c0d3b52049fbf7008437355bbbc1.jpg',
	// 		size: 200,
	// 		type: 'image/jpg',
	// 		thumbUrl:
	// 			'https://ss1.bdstatic.com/70cFvXSh_Q1YnxGkpoWK1HF6hhy/it/u=320188414,720873459&fm=26&gp=0.jpg',
	// 	},
	// 	{
	// 		uid: '005',
	// 		percent: 99,
	// 		name: '此处为音频名称此处为音频名称此处为音出手大方.jpg',
	// 		status: 'success',
	// 		url: 'https://pic.tolvyo.com/mTGbnEE3gi-bef0c0d3b52049fbf7008437355bbbc1.jpg',
	// 		size: 200,
	// 		type: 'image/jpg',
	// 		thumbUrl:
	// 			'https://ss1.bdstatic.com/70cFvXSh_Q1YnxGkpoWK1HF6hhy/it/u=320188414,720873459&fm=26&gp=0.jpg',
	// 	},
	// ],
	onChange,
	onGetSecret,
	...reset
}: AnnexUploadProps) => {
	const [token] = useLocalStorage('io-token');
	const [fileList, setFileList] = useState<UploadFile<any>[]>(defaultFileList ?? []);
	const [secretValues, setSecretValues] = useState<secretValuesProps[]>([]);
	useEffect(() => {
		onChange && onChange(fileList);
	}, [fileList]);
	useEffect(() => {
		onGetSecret && onGetSecret(secretValues);
	}, [secretValues]);
	const onSortEnd = ({ oldIndex, newIndex }: any) => {
		setFileList(arrayMove(fileList, oldIndex, newIndex));
	};
	const Item = SortableElement(({ file }: AnnexUploadItemProps) => (
		<div className='io-annex-upload__list-item'>
			<AnnexUploadItem
				file={file}
				onRemove={() => {
					setFileList(fileList.filter(f => f.uid !== file.uid));
				}}
				onSelectSecret={(value, uid) => {
					setSecretValues([...secretValues, { value: value, uid: uid }]);
				}}
				secretValues={secretValues}
			/>
		</div>
	));

	const List = SortableContainer(({ items }: any) => (
		<div className='io-annex__list'>
			{items.map((value: any, index: number) => (
				<Item file={value} key={`item-${index}`} index={index} />
			))}
		</div>
	));

	return (
		<div className='io-annex-upload'>
			<Upload
				action={action}
				showUploadList={false}
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
							console.log('此处需要映射一下', response);
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
				{...reset}
				fileList={fileList}
				onChange={info => {
					setFileList([...info.fileList]);
				}}
			>
				{fileList.length < limit && (
					<Button
						className='io-annex-upload__button'
						type='primary'
						icon={<i className='iconfont icon-upload' />}
					>
						上传附件
					</Button>
				)}
			</Upload>
			<List
				helperClass='io-sortable-helper'
				items={fileList}
				axis='xy'
				onSortEnd={onSortEnd}
				distance={20}
			/>
		</div>
	);
};
