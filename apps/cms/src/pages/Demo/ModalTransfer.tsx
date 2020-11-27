import { BizModalForm, BizModalFormRef, BizPage } from '@ionia/libs';
import { Transfer, Button } from 'antd';
import React, { useRef, useState } from 'react';

const mockData: any[] = [];
for (let i = 0; i < 20; i++) {
	mockData.push({
		key: i.toString(),
		title: `content${i + 1}`,
		description: `description of content${i + 1}`,
		disabled: i % 3 < 1,
	});
}

const oriTargetKeys = mockData.filter(item => +item.key % 3 > 1).map(item => item.key);

export default () => {
	const [targetKeys, setTargetKeys] = useState<any[]>(oriTargetKeys);
	const [selectedKeys, setSelectedKeys] = useState<any[]>([]);
	const ref = useRef<BizModalFormRef>();

	const handleChange = (nextTargetKeys: any, direction: any, moveKeys: any) => {
		setTargetKeys(nextTargetKeys);
		console.log('targetKeys: ', nextTargetKeys);
		console.log('direction: ', direction);
		console.log('moveKeys: ', moveKeys);
	};

	const handleSelectChange = (sourceSelectedKeys: any[], targetSelectedKeys: any[]) => {
		setSelectedKeys([...sourceSelectedKeys, ...targetSelectedKeys]);

		console.log('sourceSelectedKeys: ', sourceSelectedKeys);
		console.log('targetSelectedKeys: ', targetSelectedKeys);
	};

	return (
		<BizPage>
			<BizModalForm
				ref={ref}
				title='选择'
				triggerRender={() => (
					<Button
						onClick={() => {
							ref.current?.open();
						}}
					>
						选择
					</Button>
				)}
			>
				<Transfer
					dataSource={mockData}
					titles={['Source', 'Target']}
					targetKeys={targetKeys}
					selectedKeys={selectedKeys}
					onChange={handleChange}
					onSelectChange={handleSelectChange}
					render={(item: any) => item.title}
					style={{ marginBottom: 16 }}
				/>
			</BizModalForm>
		</BizPage>
	);
};
