import React, { useState } from 'react';
import { Progress, Tooltip } from 'antd';
import { UploadFile } from 'antd/lib/upload/interface';
import { AudioPlayer } from '../../AudioPlayer';
import './index.less';

export interface AudioUploadItemProps {
	file: UploadFile;
	onRemove?: () => void;
}

export const AudioUploadItem = ({ file, onRemove }: AudioUploadItemProps) => {
	const [play, setPlay] = useState<boolean>(false);
	let item = null;
	if (file.status === 'error') {
		item = (
			<>
				<i className='iconfont icon-attachment' />
				<span title={file.name}>{file.name}</span>
				<i
					className='iconfont icon-delete'
					onClick={() => {
						onRemove && onRemove();
					}}
				/>
			</>
		);
	}
	if (file.status === 'done') {
		item = !play ? (
			<>
				<i className='iconfont icon-attachment' />
				<span title={file.name}>{file.name}</span>
				<i className='iconfont icon-play-circle' onClick={() => setPlay(true)} />
				<i
					className='iconfont icon-delete'
					onClick={() => {
						onRemove && onRemove();
					}}
				/>
			</>
		) : (
			<>
				<img src={require('../../../static/images/player.gif')} />
				<span title={file.name}>{file.name}</span>
				<i className='iconfont icon-timeout' onClick={() => setPlay(false)} />
				<i
					className='iconfont icon-delete'
					onClick={() => {
						onRemove && onRemove();
					}}
				/>
			</>
		);
	}
	if (file.status === 'success') {
		item = (
			<>
				<i className='iconfont icon-loding' />
				<span title={file.name}>{file.name}</span>
				<Progress
					width={456}
					showInfo={false}
					strokeColor='#52C41A'
					strokeWidth={2}
					percent={100}
				/>
			</>
		);
	}
	if (file.status === 'uploading') {
		item = (
			<>
				<i className='iconfont icon-loding' />
				<span title={file.name}>{file.name}</span>
				<Progress
					width={456}
					showInfo={false}
					strokeColor='#1269DB'
					strokeWidth={2}
					percent={file.percent}
				/>
			</>
		);
	}
	const isError = file.status === 'error';

	const child = (
		<div
			className={`io-audio-upload__item ${isError ? 'io-audio-upload__item--error' : ''} ${
				file.status === 'done' ? 'io-audio-upload__item--done' : ''
			} ${play ? 'io-audio-upload__item_play--done' : ''} ${
				file.status === 'success' ? 'io-audio-upload__item--success' : ''
			} ${file.status === 'uploading' ? 'io-audio-upload__item--uploading' : ''}`}
		>
			{item}
			<div style={{ display: 'none' }}>
				<AudioPlayer playing={play} src={file.url} />
			</div>
		</div>
	);
	return isError ? <Tooltip title='上传错误'>{child}</Tooltip> : child;
};
