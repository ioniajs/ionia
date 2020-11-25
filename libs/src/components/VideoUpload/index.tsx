import React, { useState } from 'react';
import { Tooltip, Upload } from 'antd';
import { PlayCircleOutlined, SyncOutlined } from '@ant-design/icons';
import { UploadProps, UploadChangeParam } from 'antd/lib/upload';
import { UploadFile } from 'antd/lib/upload/interface';
import { VideoPlayer } from '../VideoPlayer';
import './index.less';

interface VideoUploadProps extends UploadProps {
	fileList?: any[];
	onAdd?: (file: UploadFile) => void;
}

export const VideoUpload: React.FC<VideoUploadProps> = props => {
	const {
		fileList: defaultFileList = [
			{
				uid: '-xxx',
				// percent: 50,
				name: 'video.mp4',
				status: 'success',
				url:
					'https://test-videos.co.uk/vids/bigbuckbunny/mp4/h264/360/Big_Buck_Bunny_360_10s_1MB.mp4',
				size: 200,
				type: '',
				thumbUrl:
					'https://ss1.bdstatic.com/70cFvXSh_Q1YnxGkpoWK1HF6hhy/it/u=320188414,720873459&fm=26&gp=0.jpg',
			},
			{
				uid: '001',
				size: 100,
				name: 'video.mp4',
				url: 'https://storage.googleapis.com/media-session/elephants-dream/the-wires.mp3',
				status: 'error',
				percent: 50,
				type: '',
			},
		],
		onRemove,
		onAdd,
		// action = config.uploadUrl,
		beforeUpload,
		itemRender,
		...reset
	} = props;
	const [fileList, setFileList] = useState(defaultFileList);
	const [videoPlayerVisible, setVideoPlayerVisible] = useState<boolean>();
	const [videoPlayerUrl, setVideoPlayerUrl] = useState<string>();
	const handleOnChange = ({ file, fileList, event }: UploadChangeParam<UploadFile<any>>) => {
		const { status } = file;
		setFileList(fileList);
		console.log(file, 'fffffasdsds');

		if (status === 'done') {
			onAdd && onAdd(file);
		}
	};
	return (
		<div>
			<Upload
				className='io-video-upload'
				listType='picture-card'
				accept='video'
				fileList={fileList}
				onChange={handleOnChange}
				itemRender={(originNode, file, fileList) => {
					if (file.status === 'success') {
						return (
							<div className='io-item-success-mask'>
								<div className='io-item-success-origin-node'>
									<div className='io-upload-success-img'>
										<img src={file.thumbUrl} className='io-upload-img' />
										<a href='#'>
											<div className='io-upload-img-mask'>
												<i
													className='iconfont icon-play-circle io-mask-icon'
													onClick={() => {
														setVideoPlayerVisible(!videoPlayerVisible);
														setVideoPlayerUrl(file.url);
													}}
													title='Play'
													// className=''
												/>
												<i
													className='iconfont icon-delete io-mask-icon'
													title='Remove file'
													onClick={async () => {
														// await handleRemove(file);
													}}
												/>
											</div>
										</a>
									</div>
								</div>
							</div>
						);
						// return originNode
					}
					return (
						<div className='io-item-upload-error'>
							<Tooltip title='上传错误' className='io-upload-error-tooltip'>
								<div className='io-upload-error-content'>
									<i className='iconfont icon-video' />
									<p className='io-upload-error-item-videomp4'>video.mp4</p>
									<a href='#'>
										<div className='io-upload-img-mask'>
											<i
												className='iconfont icon-play-circle io-mask-icon'
												onClick={() => {
													// setCropVisible(!cropVisible);
												}}
												title='Play'
												// className=''
											/>
											<i
												className='iconfont icon-delete io-mask-icon'
												title='Remove file'
												onClick={async () => {
													// await handleRemove(file);
												}}
											/>
											<p className='io-item-error-name'>momo视频</p>
										</div>
									</a>
								</div>
							</Tooltip>
						</div>
					);
					// return originNode;
				}}
			>
				<div>
					<i className='iconfont icon-videocameraadd' />
					<div className='ant-upload-text'>上传视频</div>
				</div>
			</Upload>
			<VideoPlayer
				visible={videoPlayerVisible}
				onCancel={() => setVideoPlayerVisible(false)}
				playing={true}
				url={
					'https://test-videos.co.uk/vids/bigbuckbunny/mp4/h264/360/Big_Buck_Bunny_360_10s_1MB.mp4'
				}
			/>
		</div>
	);
};
