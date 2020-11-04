import {
	UploadOutlined,
	DeleteOutlined,
	PlayCircleOutlined,
	FastBackwardOutlined,
	PaperClipOutlined,
} from '@ant-design/icons';
import { Spin, Upload, Button } from 'antd';
import { UploadChangeParam, UploadProps } from 'antd/lib/upload';
import { UploadFile } from 'antd/lib/upload/interface';
// import { PlayingButton } from 'react-simple-audio';
import ReactAudioPlayer from 'react-audio-player';
// import { PlayButton } from 'react-soundplayer/components';
// import { withSoundCloudAudio } from 'react-soundplayer/addons';
import React, { useState } from 'react';

interface AudioProps extends UploadProps {
	text?: string;
	loadingTip?: string;
	width?: number;
	height?: number;
	action?: string;
	onChange?: (info: UploadChangeParam<UploadFile<any>>) => void;
	onSuccess?: (info: UploadChangeParam<UploadFile<any>>) => void;
	onFail?: (info: UploadChangeParam<UploadFile<any>>) => void;
}

const { Dragger } = Upload;

const clientId = 'YOUR CLIENT ID';
const resolveUrl = 'https://soundcloud.com/ksmtk/chronemics';

// const Player = withSoundCloudAudio((props: any) => {
// 	let { track, currentTime } = props;

// 	return (
// 		<div className='custom-player'>
// 			<PlayButton
// 				className='custom-player-btn'
// 				onPlayClick={() => {
// 					console.log('play button clicked!');
// 				}}
// 				{...props}
// 			/>
// 		</div>
// 	);
// });

export const Audio: React.FC<AudioProps> = props => {
	const [loading, setLoading] = useState<boolean>(false);
	const [played, setPlayed] = useState<boolean>(false); // 音频是否播放
	const showUploadList = {
		showDownloadIcon: true,
		downloadIcon: (
			<PlayCircleOutlined
				onClick={() => {
					setPlayed(!played);
				}}
			/>
		),
		showRemoveIcon: true,
		removeIcon: <DeleteOutlined onClick={e => console.log(e, 'custom removeIcon event')} />,
	};
	const defaultFileList: any[] = [
		{
			uid: '1',
			name: 'xxx.mp3',
			status: 'done',
			response: 'Server Error 500', // custom error message to show
			url: 'http://www.baidu.com/xxx.mp3',
		},
		{
			uid: '2',
			name: 'yyy.mp3',
			status: 'done',
			url: 'http://www.baidu.com/yyy.mp3',
		},
		{
			uid: '3',
			name: 'zzz.mp3',
			status: 'error',
			response: 'Server Error 500', // custom error message to show
			url: 'http://www.baidu.com/zzz.mp3',
		},
	];
	const {
		loadingTip = '正在上传',
		text = '上传音频',
		//   action = config.uploadUrl,
		onSuccess,
		onFail,
		onChange = (info: UploadChangeParam<UploadFile<any>>) => {
			const { status } = info.file;
			if (status === 'uploading') {
				console.log(status, 'statusstatus');
			}
			if (status === 'done') {
				onSuccess && onSuccess(info);
			} else if (status === 'error') {
				onFail && onFail(info);
			}
		},
		...reset
	} = props;
	return (
		<div>
			<ReactAudioPlayer src='my_audio_file.ogg' autoPlay controls />
			{/* <Player
				clientId={clientId}
				resolveUrl={resolveUrl}
				onReady={() => console.log('track is loaded!')}
			/> */}
			<Upload
				showUploadList={showUploadList}
				defaultFileList={defaultFileList}
				iconRender={(file: UploadFile) => {
					// 可以通过是否点击播放来判断使用什么图片，播放时使用动态图，暂停时使用回形针静态图
					if (played) {
						return (
							<>
								<FastBackwardOutlined />
							</>
						);
					}
					return <PaperClipOutlined />;
				}}
				//   action={action}
				onChange={onChange}
				{...reset}
			>
				<Button className='ant-upload-drag-icon' type='primary'>
					<UploadOutlined />
					上传音频
				</Button>
			</Upload>
		</div>
	);
};
