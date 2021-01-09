import request from '../../../../utils/request';
import { JcResult } from '../../../base';
import { IdsDTO } from '../../../common.dto'
import { AdminGoodsCategoryItemVO, AdminGoodsCategoryVO } from './commodity-category.vo';
import { AdminGoodsCategoryDTO, goodsCategoryParamsDTO } from './commodity-category.dto';

/**
 * 删除
 */

export async function goodsCategoryDelete(data: IdsDTO): Promise<JcResult<boolean>> {
	return request.post('/module-user/cmsmanager/goods/category/delete', {
		data,
	});
}

/**
 * 商品类目列表
 */

export async function goodsCategoryList(): Promise<JcResult<AdminGoodsCategoryItemVO[]>> {
	return request.get('/module-user/cmsmanager/goods/category/list');
}

/**
 * 商品类目分页列表
 */

export async function goodsCategoryPage(
	params: goodsCategoryParamsDTO
): Promise<JcResult<AdminGoodsCategoryVO>> {
	return request.get('/module-user/cmsmanager/goods/category/page', {
		params,
	});
}

/**
 * 新增商品类目
 */

export async function goodsCategorySave(data: AdminGoodsCategoryDTO): Promise<JcResult<boolean>> {
	return request.post('/module-user/cmsmanager/goods/category/save', {
		data,
	});
}

/**
 * 新增商品类目
 */

export async function goodsCategoryUpdate(data: AdminGoodsCategoryDTO): Promise<JcResult<boolean>> {
	return request.post('/module-user/cmsmanager/goods/category/update', {
		data,
	});
}

/**
 * 根据id获取商品类目详情
 */

export async function goodsCategoryInfo(id: string): Promise<JcResult<AdminGoodsCategoryItemVO>> {
	return request.get(`/module-user/cmsmanager/goods/category/${id}`);
}
