import React from 'react';
import { Progress, Select, Tooltip } from 'antd';
import { UploadFile } from 'antd/lib/upload/interface';
import './index.less';

export interface AnnexUploadItemProps {
	file: UploadFile;
	onRemove?: () => void;
}

const selectSecret = [
	{ key: '1', value: '秘密' },
	{ key: '2', value: '机密' },
	{ key: '3', value: '绝密' },
];

export const AnnexUploadItem = ({ file, onRemove }: AnnexUploadItemProps) => {
	let item = null;
	if (file.status === 'done') {
		if (file.type === 'image/jpeg' || file.type === 'image/jpg' || file.type === 'image/png') {
			item = (
				<>
					<i className='iconfont icon-attachment' />
					<a>image1.png</a>
					<Select
						className='io-upload-secret-select'
						placeholder='选择密级'
						onSelect={e => {
							console.log(e, 'eeeee');
						}}
					>
						{(selectSecret || []).map(item => {
							return (
								<Select.Option key={item.key} value={item.key}>
									{item.value}
								</Select.Option>
							);
						})}
					</Select>
					<i className='iconfont icon-delete' />
				</>
			);
		}
		if (file.type === 'video/mp4') {
			item = (
				<>
					<i className='iconfont icon-attachment' />
					<span>video.mp4</span>
					<Select
						className='io-upload-secret-select'
						placeholder='选择密级'
						onSelect={e => {
							console.log(e, 'eeeee');
						}}
					>
						{(selectSecret || []).map(item => {
							return (
								<Select.Option key={item.key} value={item.key}>
									{item.value}
								</Select.Option>
							);
						})}
					</Select>
					<i className='iconfont icon-play-circle' />
					<i className='iconfont icon-delete' />
				</>
			);
		}
		if (file.type === 'audio/ogv') {
			item = (
				<>
					<i className='iconfont icon-attachment' />
					<span>audio.ogv</span>
					<Select
						className='io-upload-secret-select'
						placeholder='选择密级'
						onSelect={e => {
							console.log(e, 'eeeee');
						}}
					>
						{(selectSecret || []).map(item => {
							return (
								<Select.Option key={item.key} value={item.key}>
									{item.value}
								</Select.Option>
							);
						})}
					</Select>
					<i className='iconfont icon-play-circle' />
					<i className='iconfont icon-delete' />
				</>
			);
		}
	}
	if (file.status === 'error') {
		item = (
			<>
				<i className='iconfont icon-attachment' />
				<span>{file.name}</span>
				<i className='iconfont icon-delete' />
			</>
		);
	}
	const isError = file.status === 'error';
	const child = (
		<div
			className={`io-annex-upload__item ${
				file.status === 'done' ? 'io-annex-upload__item--done' : ''
			}`}
		>
			{item}
		</div>
	);
	return isError ? <Tooltip title='上传错误'>{child}</Tooltip> : child;
};
