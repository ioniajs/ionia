export interface AdminGoodsOrderItemVO {
	cashResult: number; //兑现结果
	cashTime: string; //兑现时间
	code: string; //订单编号
	coverResId: string; //商品主图
	createTime: string; //兑换时间
	fullName: string; //兑换人姓名
	goodsName: string; //商品名称
	id: string; //商品兑换订单ids
	num: number; //兑换数量
	realIntegral: number; //实际支付积分
	status: number; //状态(1待兑现, 2兑现成功)
	username: string; //兑换人用户名
}

export interface AdminGoodsOrderPageVO {
	content: AdminGoodsOrderItemVO[];
	pageNo: number;
	pageSize: number;
	pages: number;
	total: number;
}

export interface AdminGoodsOrderDetailVO {
	cashResult: number; //兑现结果
	cashTime: string; //兑现时间
	code: string; //订单编号
	coverResId: string; //商品主图
	createTime: string; //兑换时间
	deliveryInfo: string; //收货信息(地址,联系人(联系方式))
	fullName: string; //兑换人姓名
	goodsName: string; //商品名称
	id: string; //商品兑换订单ids
	num: number; //兑换数量
	phone: string; //兑换人电话
	realIntegral: number; //实际支付积分
	status: number; //状态(1待兑现, 2兑现成功)
	username: string; //兑换人用户名
}
