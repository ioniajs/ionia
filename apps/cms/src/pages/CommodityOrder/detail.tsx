import React, { useEffect, useState } from 'react';
import { BizPage, GobackButton, goodsOrdersInfo, AdminGoodsOrderDetailVO } from '@ionia/libs';
import { Button, Row, Col } from 'antd';
import './index.less';

const orderInfo = {
	cashResult: 0, //兑现结果
	cashTime: 'string', //兑现时间
	code: '', //订单编号
	coverResId: '', //商品主图
	createTime: '', //兑换时间
	deliveryInfo: '', //收货信息(地址,联系人(联系方式))
	fullName: '', //兑换人姓名
	goodsName: '', //商品名称
	id: '', //商品兑换订单ids
	num: 0, //兑换数量
	phone: '', //兑换人电话
	realIntegral: 0, //实际支付积分
	status: 0, //状态(1待兑现, 2兑现成功)
	username: '', //兑换人用户名
};
export default ({ match }: any) => {
	const {
		params: { id },
	} = match;
	console.log('id', id);
	useEffect(() => {
		goodsOrdersInfo(id).then(res => {
			console.log(res);
			setInfo(res.data);
		});
	}, [id]);
	const [info, setInfo] = useState<AdminGoodsOrderDetailVO>(orderInfo);
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
					<div>
						<div className='io-cms-commodity-order-detail_title'>兑换详情</div>
						<div>
							<Row className='io-cms-commodity-order-detail_item'>
								<Col span={12}>
									<span className='io-cms-commodity-order-detail_label'>
										订单编号：
									</span>
									{info.code}
								</Col>
								<Col span={12}>
									<span>状态:</span>
									{info.status == 1 ? '待兑换' : '兑换成功'}
								</Col>
							</Row>
							<Row className='io-cms-commodity-order-detail_item'>
								<Col span={12}>
									<span>兑换用户：</span>尼古拉斯赵四（18612345678）
								</Col>
								<Col span={12}>
									<span>兑换时间：</span>
									{info.createTime}
								</Col>
							</Row>
							<div className='io-cms-commodity-order-detail_item'>
								<span>兑现时间：</span>
								{info.cashTime}
							</div>
							<div className='io-cms-commodity-order-detail_item'>
								<span>收货地址：</span>
								{info.deliveryInfo}
							</div>
							<div className='io-cms-commodity-order-detail_item'>
								<span>兑换结果：</span>
								{info.cashResult}
							</div>
						</div>
					</div>
					<div>
						<div className='io-cms-commodity-order-detail_title'>商品信息</div>
					</div>
				</div>
			</BizPage>
		</>
	);
};
