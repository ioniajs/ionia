import { AMap, BizModalForm, BizPage, ModalFormRef } from '@ionia/libs';
import { Button } from 'antd';
import React, { useRef } from 'react';

export default () => {
	const ref = useRef<ModalFormRef>();
	return (
		<BizPage>
			<BizModalForm
				ref={ref}
				title='选择地点'
				triggerRender={() => (
					<Button
						type='primary'
						onClick={() => {
							ref.current?.open();
						}}
					>
						选择地点
					</Button>
				)}
				width={1000}
			>
				<AMap />
			</BizModalForm>
		</BizPage>
	);
};
