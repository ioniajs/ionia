import React, { useRef } from 'react';
import { BizPage, GobackButton } from '@ionia/libs';
import { Button, Row, Col } from 'antd';
import './index.less';
export default function detail() {
	return (
		<>
			<BizPage
				showActions
				breadcrumbs={[{ name: '商品管理' }, { name: '详情页' }]}
				renderActions={() => {
					return (
						<>
							<GobackButton />
						</>
					);
				}}
			>
				<div className='io-cms-commodity-order-detail_list'>
					<p className='io-cms-commodity-order-detail_title'>兑换详情</p>
					<Row className='io-cms-commodity-order-detail_item'>
						<Col span={12}>
							<span className='io-cms-commodity-order-detail_label'>订单编号：</span>
							4532165465154321
						</Col>
						<Col span={12}>
							<span>状态:</span>待兑现
						</Col>
					</Row>
					<Row className='io-cms-commodity-order-detail_item'>
						<Col span={12}>
							<span>兑换用户：</span>尼古拉斯赵四（18612345678）
						</Col>
						<Col span={12}>
							<span>兑换时间：</span>2020-05-01 14:31:45
						</Col>
					</Row>
					<div className='io-cms-commodity-order-detail_item'>
						<span>兑现时间：</span>-
					</div>
					<div className='io-cms-commodity-order-detail_item'>
						<span>收货地址：</span>
						江西省南昌市西湖区力高滨江国际A503，尼古拉斯赵四（18612345678）
					</div>
					<div className='io-cms-commodity-order-detail_item'>
						<span>兑换结果：</span>
						150字的描述，如状态为待发货，此细分不显示，150字的描述，如状态为待发货，此细分不显示，150字的描述，如状态为待发货150字的描述，如状态为待发货，此细分不显示150字的描述，如状态为待发货，此细分不显示
					</div>
				</div>
			</BizPage>
		</>
	);
}
