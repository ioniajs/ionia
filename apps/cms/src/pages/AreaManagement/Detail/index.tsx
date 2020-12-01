import React from 'react';
import { Modal, Form, TreeSelect, Input, Tooltip, Switch } from 'antd';
import { InfoCircleOutlined } from '@ant-design/icons';
import './index.less';

export default (props: any) => {
	const { setVisible, visible } = props;
	return (
		<div>
			<Modal
				className='io-cms-area-management__modal'
				onOk={() => setVisible(false)}
				visible={visible}
				title='新建区域'
			>
				<Form>
					<Form.Item
						name='superiorArea'
						label='上级区域'
						rules={[{ required: true }, { message: '请选择上级区域' }]}
					>
						<TreeSelect placeholder='请选择上级区域' />
					</Form.Item>
					<Form.Item
						name='sreaname'
						label='区域名称'
						rules={[{ required: true }, { message: '请输入区域名称' }]}
					>
						<Input placeholder='请输入区域名称' />
					</Form.Item>
					<Form.Item
						name='number'
						label='编号'
						rules={[{ required: true }, { message: '请输入编号' }]}
					>
						<Input placeholder='请输入编号' />
					</Form.Item>
					<Form.Item
						name='sortNo'
						label='排序值'
						rules={[{ required: true }, { message: '请输入排序值' }]}
					>
						<Input placeholder='请输入排序值' />
					</Form.Item>
					<Form.Item
						name='status'
						label={
							<span>
								状态&nbsp;
								<Tooltip title='再读取行政区划时不显示禁用状态的区域'>
									<InfoCircleOutlined />
								</Tooltip>
							</span>
						}
					>
						<Switch checkedChildren='开启' unCheckedChildren='关闭' />
					</Form.Item>
				</Form>
			</Modal>
		</div>
	);
};
