import { DataDictionarySaveDTO, DataDictionaryUpdateDTO, DataDictionaryOperatingDTO } from './content.dto';
import { DataDictionaryListVo, DataDictionaryPageVO, DataDictionaryVO } from './content.vo';
import { IdsDTO } from '../../common.dto';
import request from '../../../utils/request';
import { JcResult, Page } from '../../base';

export interface DataDictionaryPaging {
	beginUpdateTime: string; // 开始更新时间
	endUpdateTime: string; // 结束更新时间
	label: string; // 字典类型/字典名称
	pageNo: number; // 页码，从1开始计数
	pageSize: number; // 页码大小
	pageSort: string; // 排序字段, 格式: name desc,createTime asc
}
/**
 * 数据字典分页
 * @param params
 */
export async function dataDictionaryPaging(
	params: DataDictionaryPaging
): Promise<JcResult<Page<DataDictionaryPageVO>>> {
	return request.get('/module-kernel/cmsmanager/dataDictionary/page', {
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
export async function operatingDataDictionary(data:DataDictionaryOperatingDTO): Promise<JcResult<boolean>> {
	return request.post('/module-kernel/cmsmanager/dataDictionary/operating', {
		data
	})
}