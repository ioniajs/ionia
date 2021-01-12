import request from '../../../../utils/request';
import { JcResult } from '../../../base';
import { IdsDTO } from '../../../common.dto';
import { AdminGoodsPageItemVO, AdminGoodsPageVO } from './commodity-management.vo';
import { GoodsDTO, goodsParamsDTO } from './commodity-management.dto';

/**
 * 下架
 */

export async function goodsOffShelf(data: IdsDTO): Promise<JcResult<boolean>> {
	return request.post('/module-user/cmsmanager/goods/OffShelf', {
		data,
	});
}

/**
 * 上架
 */

export async function goodsShelf(data: IdsDTO): Promise<JcResult<boolean>> {
	return request.post('/module-user/cmsmanager/goods/shelf', {
		data,
	});
}

/**
 * 删除
 */

export async function goodsDelete(data: IdsDTO): Promise<JcResult<boolean>> {
	return request.post('/module-user/cmsmanager/goods/delete', {
		data,
	});
}

/**
 * 商品类目分页列表
 */

export async function goodsPage(params: goodsParamsDTO): Promise<JcResult<AdminGoodsPageVO>> {
	return request.get('/module-user/cmsmanager/goods/page', {
		params,
	});
}

/**
 * 重置兑换限制
 */

export async function goodsResetStint(data: IdsDTO): Promise<JcResult<boolean>> {
	return request.post(' /module-user/cmsmanager/goods/resetStint', {
		data,
	});
}

/**
 * 新增商品类目
 */

export async function goodsSave(data: GoodsDTO): Promise<JcResult<boolean>> {
	return request.post('/module-user/cmsmanager/goods/save', {
		data,
	});
}

/**
 * 修改商品类目
 */

export async function goodsUpdate(data: GoodsDTO): Promise<JcResult<boolean>> {
	return request.post('/module-user/cmsmanager/goods/update', {
		data,
	});
}

/**
 * 根据id获取商品类目详情
 */

export async function goodsInfo(id: string): Promise<JcResult<AdminGoodsPageItemVO>> {
	return request.get(`/module-user/cmsmanager/goods/${id}`);
}
