import React, { useRef } from 'react';
import { BizModalForm, BizModalFormRef } from '@ionia/libs';
import { ProFormDateTimeRangePicker } from '@ant-design/pro-form';

interface TopDeadLineProps {
	contentId?: string | number;
}
export default ({ contentId }: TopDeadLineProps) => {
	const ref = useRef<BizModalFormRef>();
	return (
		<BizModalForm
			ref={ref}
			title='置顶'
			triggerRender={() => <a onClick={() => ref.current?.open()}>置顶</a>}
		>
			<ProFormDateTimeRangePicker fieldProps={{ showTime: true }} />
		</BizModalForm>
	);
};
