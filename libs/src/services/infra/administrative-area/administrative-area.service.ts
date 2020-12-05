import request from '../../../utils/request';
import { JcResult } from '../../base';
import { IdsDTO } from '../../common.dto';
import { AreaDTO, AreaSortDTO } from './administrative-area.dto';
import { AreaVO } from './administrative.vo';

/**
 * 保存区域
 */
export async function saveArea(data: AreaDTO): Promise<JcResult<boolean>> {
	return request.post('/module-infra/cmsmanager/area', {
		data,
	});
}

/**
 * 删除区域
 */
export async function deleteArea(data: IdsDTO): Promise<JcResult<boolean>> {
	return request.post('/module-infra/cmsmanager/area/delete', {
		data,
	});
}

/**
 * 禁用区域
 */
export async function disabledArea(id?: string): Promise<JcResult<boolean>> {
	return request.post(`/module-infra/cmsmanager/area/disable/${id}`);
}

/**
 * 启用区域
 */
export async function enableArea(id?: string): Promise<JcResult<boolean>> {
	return request.post(`/module-infra/cmsmanager/area/enable/${id}`);
}

/**
 * 区域列表
 */
interface Area {
	crux?: string; // 区域名称或编号
	parentId?: string; // 父级id
}
export async function areaList(params: Area): Promise<JcResult<AreaVO[]>> {
	return request.get('/module-infra/cmsmanager/area/list', {
		params,
	});
}

/**
 * 排序
 */
export async function sortArea(data: AreaSortDTO): Promise<JcResult<boolean>> {
	return request.post('/module-infra/cmsmanager/area/sort', {
		data,
	});
}

/**
 * 验证AreaCode是否通过, true通过，false不通过
 */
interface UniqueArea {
	areaCode?: string; // 区域编号
	id?: string; // 区域id
}
export async function uniqueArea(params: UniqueArea): Promise<JcResult<boolean>> {
	return request.get('/module-infra/cmsmanager/area/unique', {
		params,
	});
}

/**
 * 修改区域
 */
export async function updateArea(data: AreaDTO): Promise<JcResult<boolean>> {
	return request.post('/module-infra/cmsmanager/area/update', {
		data,
	});
}

/**
 * 区域详情
 */

export async function areaDetail(id?: string): Promise<JcResult<AreaVO>> {
	return request.get(`/module-infra/cmsmanager/area/${id}`);
}
