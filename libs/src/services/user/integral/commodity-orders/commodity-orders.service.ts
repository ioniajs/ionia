import request from '../../../../utils/request';
import { JcResult } from '../../../base';
import { IdsDTO } from '../../../common.dto';
import {
	AdminGoodsOrderItemVO,
	AdminGoodsOrderPageVO,
	AdminGoodsOrderDetailVO,
} from './commodity-orders.vo';
import { AdminGoodsOrderCashDTO, AdminGoodsOrderParamsDTO } from './commodity-orders.dto';

/**
 * 删除
 */

export async function goodsOrdersDelete(data: IdsDTO): Promise<JcResult<boolean>> {
	return request.post('/module-user/cmsmanager/goods/orders/delete', {
		data,
	});
}

/**
 * 兑现
 */

export async function goodsOrdersCash(data: AdminGoodsOrderCashDTO): Promise<JcResult<boolean>> {
	return request.post('/module-user/cmsmanager/goods/orders/cash', {
		data,
	});
}

/**
 * 商品兑换订单分页列表
 */

export async function goodsOrdersPage(
	params: AdminGoodsOrderParamsDTO
): Promise<JcResult<AdminGoodsOrderPageVO>> {
	return request.get('/module-user/cmsmanager/goods/orders/page', {
		params,
	});
}

/**
 * 根据id获取商品兑换订单详情
 */

export async function goodsOrdersInfo(id: string): Promise<JcResult<AdminGoodsOrderDetailVO>> {
	return request.get(`/module-user/cmsmanager/goods/orders/${id}`);
}
