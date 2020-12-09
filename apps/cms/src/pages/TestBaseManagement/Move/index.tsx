import React, { useState } from 'react';
import { Modal, Radio } from 'antd';
import './index.less';

export default (props: any) => {
	const { move, setMove } = props;
	const [value, setValue] = useState(1);
	const onChange = (e: any) => {
		// console.log('radio checked', e.target.value);
		setValue(e.target.value);
	};
	return (
		<Modal
			className='io-cms-test-base-mangement-move__modal'
			title='移动'
			visible={move}
			onOk={() => setMove(false)}
		>
			<p>移动到分类:</p>
			<div className='io-cms-test-mangement-move__div'>
				<Radio.Group onChange={onChange} value={value}>
					<Radio style={{ display: 'block', margin: '16px 0' }} value={1}>
						分类一
					</Radio>
					<Radio style={{ display: 'block', margin: '16px 0' }} value={2}>
						分类一
					</Radio>
					<Radio style={{ display: 'block', margin: '16px 0' }} value={3}>
						分类一
					</Radio>
				</Radio.Group>
			</div>
		</Modal>
	);
};
