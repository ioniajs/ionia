import React, { useState, useRef } from 'react';
import { Progress, Select, Tooltip, Image } from 'antd';
import { UploadFile } from 'antd/lib/upload/interface';
import { AudioPlayer } from '../../AudioPlayer';
import { VideoPlayer } from '../../VideoPlayer';
import { BizModalForm, BizModalFormRef } from '../../BizModalForm';
import './index.less';

export interface AnnexUploadItemProps {
	file: UploadFile;
	onRemove?: () => void;
	onSelectSecret?: (value: any, uid: any) => void;
	secretValues?: any;
}

const selectSecret = [
	{ key: '1', value: '秘密' },
	{ key: '2', value: '机密' },
	{ key: '3', value: '绝密' },
];

export const AnnexUploadItem = ({
	file,
	onRemove,
	onSelectSecret,
	secretValues,
}: AnnexUploadItemProps) => {
	const [audioPlay, setAudioPlay] = useState<boolean>(false);
	const previewModalRef = useRef<BizModalFormRef>();
	const [videoPlay, setVideoPlay] = useState<boolean>(false);
	let item = null;
	const isError = file.status === 'error';
	if (file.status === 'done') {
		if (file.type === 'image/jpeg' || file.type === 'image/jpg' || file.type === 'image/png') {
			item = (
				<>
					<i className='iconfont icon-attachment' />
					<a
						className='annex-upload-item-name__span'
						onClick={() => {
							if (isError) return;
							previewModalRef.current?.open();
						}}
					>
						image1.png
					</a>
					<Select
						className='io-upload-secret-select'
						placeholder='选择密级'
						onSelect={e => {
							onSelectSecret && onSelectSecret(e, file.uid);
						}}
						size='small'
						style={{ width: '90px' }}
						defaultValue={secretValues.filter((s: any) => s.uid === file.uid)[0]?.value}
					>
						{(selectSecret || []).map(item => {
							return (
								<Select.Option key={item.key} value={item.key}>
									{item.value}
								</Select.Option>
							);
						})}
					</Select>
					<i
						className='iconfont icon-delete'
						onClick={() => {
							onRemove && onRemove();
						}}
					/>
				</>
			);
		}
		if (file.type === 'video/mp4') {
			item = (
				<>
					<i className='iconfont icon-attachment' />
					<span className='annex-upload-item-name__span'>video.mp4</span>
					<Select
						className='io-upload-secret-select'
						placeholder='选择密级'
						onSelect={e => {
							onSelectSecret && onSelectSecret(e, file.uid);
						}}
						size='small'
						style={{ width: '90px' }}
						defaultValue={secretValues.filter((s: any) => s.uid === file.uid)[0]?.value}
					>
						{(selectSecret || []).map(item => {
							return (
								<Select.Option key={item.key} value={item.key}>
									{item.value}
								</Select.Option>
							);
						})}
					</Select>
					{!videoPlay ? (
						<i
							className='iconfont icon-play-circle'
							onClick={() => setVideoPlay(true)}
						/>
					) : (
						<i className='iconfont icon-timeout' onClick={() => setVideoPlay(false)} />
					)}
					<i
						className='iconfont icon-delete'
						onClick={() => {
							onRemove && onRemove();
						}}
					/>
				</>
			);
		}
		if (file.type === 'audio/ogv') {
			item = !audioPlay ? (
				<>
					<i className='iconfont icon-attachment' />
					<span className='annex-upload-item-name__span'>audio.ogv</span>
					<Select
						className='io-upload-secret-select'
						placeholder='选择密级'
						onSelect={e => {
							onSelectSecret && onSelectSecret(e, file.uid);
						}}
						size='small'
						style={{ width: '90px' }}
						defaultValue={secretValues.filter((s: any) => s.uid === file.uid)[0]?.value}
					>
						{(selectSecret || []).map(item => {
							return (
								<Select.Option key={item.key} value={item.key}>
									{item.value}
								</Select.Option>
							);
						})}
					</Select>
					<i className='iconfont icon-play-circle' onClick={() => setAudioPlay(true)} />
					<i
						className='iconfont icon-delete'
						onClick={() => {
							onRemove && onRemove();
						}}
					/>
				</>
			) : (
				<>
					<img
						src={require('../../../static/images/player.gif')}
						className='annex-upload-audio-play__gif--img'
					/>
					<span className='annex-upload-item-name__span'>audio.ogv</span>
					<Select
						className='io-upload-secret-select'
						placeholder='选择密级'
						onSelect={e => {
							onSelectSecret && onSelectSecret(e, file.uid);
						}}
						size='small'
						style={{ width: '90px' }}
						defaultValue={secretValues.filter((s: any) => s.uid === file.uid)[0]?.value}
					>
						{(selectSecret || []).map(item => {
							return (
								<Select.Option key={item.key} value={item.key}>
									{item.value}
								</Select.Option>
							);
						})}
					</Select>
					<i className='iconfont icon-timeout' onClick={() => setAudioPlay(false)} />
					<i
						className='iconfont icon-delete'
						onClick={() => {
							onRemove && onRemove();
						}}
					/>
				</>
			);
		}
	}
	if (file.status === 'error') {
		item = (
			<>
				<i className='iconfont icon-attachment' />
				<span className='annex-upload-item-name__span'>{file.name}</span>
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
				<span className='annex-upload-item-name__span' title={file.name}>
					{file.name}
				</span>
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
				<span className='annex-upload-item-name__span' title={file.name}>
					{file.name}
				</span>
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

	const child = (
		<div
			className={`io-annex-upload__item ${
				file.status === 'done' ? 'io-annex-upload__item--done' : ''
			} ${isError ? 'io-annex-upload__item--error' : ''} ${
				file.status === 'success' ? 'io-annex-upload__item--success' : ''
			} ${file.status === 'uploading' ? 'io-annex-upload__item--uploading' : ''} ${
				audioPlay || videoPlay ? 'io-audio-upload__item_play--done' : ''
			} `}
		>
			{item}
			{/* 图片预览 */}
			<BizModalForm
				ref={previewModalRef}
				title={file.name}
				triggerRender={() => null}
				submitterRender={() => null}
			>
				<Image src={file.url && file.thumbUrl} preview={false} />
			</BizModalForm>
			{/* 音频播放 */}
			<div style={{ display: 'none' }}>
				<AudioPlayer playing={audioPlay} src={file.url} />
			</div>
			{/* 视频播放 */}
			<VideoPlayer
				visible={videoPlay}
				url={file.url}
				playing={videoPlay}
				onCancel={() => setVideoPlay(false)}
			/>
		</div>
	);
	return isError ? <Tooltip title='上传错误'>{child}</Tooltip> : child;
};
