import { JcResult, Page } from '../../base';
import { IdsDTO } from '../../common.dto';
import { DataDictionaryTypeDTO } from './type.dto';
import { DataDictionaryTypePageVO, DataDictionaryTypeVO } from './type.vo';
import request from '../../../utils/request';

/**
 * 数据字典类型新增
 * @param data 
 */
export async function addDictionaryType(data:DataDictionaryTypeDTO): Promise<JcResult<boolean>> {
    return request.post('/module-kernel/cmsmanager/dictionary/type', {
        data
    })
}

/**
 * 数据字典类型删除
 * @param data 
 */
export async function deleteDictionaryType(data:IdsDTO): Promise<JcResult<boolean>> {
    return request.post('/module-kernel/cmsmanager/dictionary/type/delete', {
        data
    })
}

export interface DictionaryTypePaging {
    beginUpdateTime?: string; // 开始更新时间
    endUpdateTime?: string; // 结束更新时间
    name?: string; // 字典类型/字典名称
    pageNo?: number; // 页码，从1开始计数
    pageSize?: number; // 页面大小
    pageSort?: string; // 排序字段, 格式: name desc,createTime asc
}
/**
 * 分页
 * @param params 
 */
export async function dictionaryTypePaing(params:DictionaryTypePaging): Promise<JcResult<Page<DataDictionaryTypePageVO>>> {
    return request.get('/module-kernel/cmsmanager/dictionary/type/page', {
        params
    })
}
/**
 * 修改
 * @param data 
 */
export async function updateDictionaryType(data:DataDictionaryTypeDTO): Promise<JcResult<boolean>> {
    return request.post('/module-kernel/cmsmanager/dictionary/type/update', {
        data
    })
}
/**
 * 详情
 * @param id 
 */
export async function detailDictionaryType(id: number): Promise<JcResult<DataDictionaryTypeVO>>  {
    return request.get(`/module-kernel/cmsmanager/dictionary/type/${id}`)
}