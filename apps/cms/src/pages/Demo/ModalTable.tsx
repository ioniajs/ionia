import { BizModalForm, ModalFormRef, BizPage } from '@ionia/libs';
import { Button } from 'antd';
import React, { useRef } from 'react';
import SelectUser from './SelectUser';

export default () => {
	const ref = useRef<ModalFormRef>();
	return (
		<BizPage>
			<BizModalForm
				ref={ref}
				title='选择负责人'
				triggerRender={() => (
					<Button
						onClick={() => {
							ref.current?.open();
						}}
					>
						选择负责人
					</Button>
				)}
				width={1200}
			>
				<SelectUser />
			</BizModalForm>
		</BizPage>
	);
};
