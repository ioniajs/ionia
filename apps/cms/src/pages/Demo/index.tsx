import { BizPage, MultiImageUpload } from '@ionia/libs';
import React from 'react';

export default () => {
	return (
		<BizPage>
			<MultiImageUpload
				defaultFileList={[
					{
						uid: '-1',
						name: 'xxx.png',
						status: 'done',
						url:
							'https://zos.alipayobjects.com/rmsportal/jkjgkEfvpUPVyRjUImniVslZfWPnJuuZ.png',
						thumbUrl:
							'https://zos.alipayobjects.com/rmsportal/jkjgkEfvpUPVyRjUImniVslZfWPnJuuZ.png',
						size: 1,
						type: '',
					},
					{
						uid: '-2',
						name: 'yyy.png',
						status: 'error',
						size: 1,
						type: '',
					},
				]}
			/>
		</BizPage>
	);
};
