import {
	DataDictionarySaveDTO,
	DataDictionaryUpdateDTO,
	DataDictionaryOperatingDTO,
} from './content.dto';
import { DataDictionaryListVo, DataDictionaryTreeVO, DataDictionaryVO } from './content.vo';
import { IdsDTO } from '../../common.dto';
import request from '../../../utils/request';
import { JcResult, Page } from '../../base';

export interface ListProps {
	typeId: number;
	status?: number; // 状态(1启用0禁用)
}
/**
 * 列表
 * @param params
 */
export async function dataDictionaryList(
	params: ListProps
): Promise<JcResult<DataDictionaryListVo[]>> {
	return request.get('/module-kernel/cmsmanager/dataDictionary', {
		params,
	});
}
export interface DataDictionaryTree {
	typeId: number; // 字典数据类型id
}
/**
 * 数据字典树结构
 * @param params
 */
export async function dataDictionaryTree(
	params: DataDictionaryTree
): Promise<JcResult<DataDictionaryTreeVO[]>> {
	return request.get('/module-kernel/cmsmanager/dataDictionary/tree', {
		params,
	});
}
/**
 * 数据字典新增
 * @param data
 */
export async function saveDataDiactionary(data: DataDictionarySaveDTO): Promise<JcResult<boolean>> {
	return request.post('/module-kernel/cmsmanager/dataDictionary', {
		data,
	});
}
/**
 * 数据字典删除
 * @param data
 */
export async function deleteDataDiactionary(data: IdsDTO): Promise<JcResult<boolean>> {
	return request.post('/module-kernel/cmsmanager/dataDictionary/delete', {
		data,
	});
}

/**
 * 数据字典修改
 * @param data
 */
export async function updateDataDictionary(
	data: DataDictionaryUpdateDTO
): Promise<JcResult<boolean>> {
	return request.post('/module-kernel/cmsmanager/dataDictionary/update', {
		data,
	});
}

/**
 * 数据字典详情
 * @param id
 */
export async function detailDataDictionary(id: number): Promise<JcResult<DataDictionaryVO>> {
	return request.get(`/module-kernel/cmsmanager/dataDictionary/${id}`);
}
/**
 * 启用/禁用
 * @param data
 */
export async function operatingDataDictionary(
	data: DataDictionaryOperatingDTO
): Promise<JcResult<boolean>> {
	return request.post('/module-kernel/cmsmanager/dataDictionary/operating', {
		data,
	});
}
