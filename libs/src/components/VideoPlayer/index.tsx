import React, { useState, useRef } from 'react';
import ReactPlayer from 'react-player';
import { Button, Modal } from 'antd';
import './index.less';

export interface PlayerProps {
	url?: string;
	visible?: boolean;
	onCancel?: () => void;
	playing?: boolean;
	// loop?: boolean;
	// controls?: boolean;
	// light?: boolean;
	// volume?: any;
	// muted?: boolean;
	// played?: number;
	// onReady?: () => void;
	// onStart?: () => void;
	// onPlay?: () => void;
	// onPause?: () => void;
	// onMouseDown?: () => void;
	// onChange?: (e: any) => void;
	// setPlaying?: () => void;
	// onSeek?: (e: any) => void;
	// onProgress?: (state: any) => void;
}
export const VideoPlayer: React.FC<PlayerProps> = props => {
	const { url, visible, onCancel, playing } = props;

	const player = useRef<any>(null);
	const [play, setPlaying] = useState<boolean | undefined>(playing);
	const [loop, setLoop] = useState<boolean>(true);
	const [played, setPlayed] = useState<number>(0);
	const [seeking, setSeeking] = useState<boolean>(false);
	const [loaded, setLoaded] = useState<any>(0);

	const onMouseDown = () => {
		setSeeking(true);
	};
	const onChange = (e: any) => {
		setPlayed(parseFloat(e.target.value));
	};
	const handleSeekMouseUp = (e: any) => {
		setSeeking(false);
		player.current?.seekTo(parseFloat(e.target.value));
	};

	const setPlayingFun = () => {
		setPlaying(!play);
	};

	const handleOnProgress = (state: any) => {
		if (!seeking) {
			setPlayed(parseFloat(state.played));
			setLoaded(state.loaded);
		}
	};

	const onPause = () => { };

	return (
		<Modal
			className='io-videoplayer-modal'
			visible={visible}
			title='视频播放'
			onCancel={onCancel}
			footer={null}
			width={784}
		>
			<div>
				<ReactPlayer
					url={url}
					ref={player}
					loop={loop}
					width='100%'
					height='100%'
					playing={playing}
					onPause={onPause}
					// onPlay={onPlay}
					onSeek={(e: any) => console.log('onSeek', e)}
					onProgress={handleOnProgress}
				/>
				{/* <Button onClick={setPlayingFun}>{play ? 'Pause' : 'Play'}</Button>
				<div>
					<span>Seek</span>
					<input
						type='range'
						min={0}
						max={0.999999}
						step='any'
						value={played}
						onMouseDown={onMouseDown}
						onChange={onChange}
						onMouseUp={handleSeekMouseUp}
					/>
				</div> */}
			</div>
		</Modal>
	);
};
