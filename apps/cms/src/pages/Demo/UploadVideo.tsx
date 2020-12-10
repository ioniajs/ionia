import React from 'react';
import { VideoUpload, AudioUpload, AnnexUpload } from '@ionia/libs';

// export default () => {
// 	return <VideoUpload title='主视频' tips='如有帮助信息，在此处展示' />;
// };
export default () => {
	return (
		<>
			<VideoUpload title='主视频' tips='如有帮助信息，在此处展示' />
			<AnnexUpload onChange={(files) => { }} onGetSecret={(secretValues) => { }} />
			{/* <AudioUpload /> */}
		</>
	);
};
