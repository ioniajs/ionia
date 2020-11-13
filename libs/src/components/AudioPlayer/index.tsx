//@ts-nocheck
import ReactAudioPlayer from 'react-audio-player';
import { PlayButton } from 'react-soundplayer/components';
import { withSoundCloudAudio, withCustomAudio } from 'react-soundplayer/addons';
import React, { useState } from 'react';

interface AudioPlayerProps {
	ref?: any;
	src?: string;
	playing?: boolean;
}

const clientId = 'YOUR CLIENT ID';

export const AudioPlayer: React.FC<AudioPlayerProps> = props => {
	const { src, playing } = props;
	const [played, setPlayed] = useState<boolean>(false); // 音频是否播放

	const AWSSoundPlayer = withCustomAudio(() => {
		return (
			<PlayButton
				playing={playing}
				onTogglePlay={() => {
					setPlayed(!played);
					console.log('点击没');
				}}
			/>
		);
	});

	return (
		<div>
			<AWSSoundPlayer clientId={clientId} resolveUrl={src} />
			{/* <ReactAudioPlayer
				ref={ref}
				// src={'https://storage.googleapis.com/media-session/elephants-dream/the-wires.mp3'}
				src={src}
				// autoPlay
				controls
				onPlay={e => {
					console.log(e, '点击play');
				}}
				onPause={e => {
					console.log(e, '点击暂停');
				}}
			/>
			 */}
		</div>
	);
};
