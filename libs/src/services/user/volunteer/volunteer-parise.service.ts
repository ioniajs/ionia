import request from '../../../utils/request';
import { JcResult, Page } from '../../base';
import { PraiseConfigVO, PraisePageVO } from './volunteer-praise.vo';
import { PraiseDTO, PraiseConfigDTO } from './volunteer-parise.dto';
import { IdsDTO } from '../../common.dto';

export interface VolunteerPraisePagingProps {
	beginCreateTime?: string; // 开始创建时间
	endCreateTime?: string; // 结束创建时间
	number?: string; // 期数
	pageNo?: number; // 页码, 从1开始计数
	pageSize?: number; // 页面大小
	pageSort?: string; // 排序字段格式: name desc,createTime asc
	publicityFlag?: number[]; // 公示标识(0未公示 1公示)
	publicityTimeStatus?: number[]; // 计划公示时间状态 0计划生效中 1已生效
}
/**
 * 志愿者表彰分页列表
 * @param params
 */
export async function volunteerPraisePaging(
	params: VolunteerPraisePagingProps
): Promise<JcResult<Page<PraisePageVO>>> {
	return request.get('/module-user/cmsmanager/volunteer/praise/page', {
		params,
	});
}
/**
 * 根据id删除志愿者表彰
 * @param data
 */
export async function deleteVolunteerPraise(data: IdsDTO): Promise<JcResult<boolean>> {
	return request.post('/module-user/cmsmanager/volunteer/praise/delete', {
		data,
	});
}
/**
 * 新增志愿者表彰
 * @param data
 */
export async function saveVolunteerPraise(data: PraiseDTO): Promise<JcResult<object>> {
	return request.post('/module-user/cmsmanager/volunteer/praise/save', {
		data,
	});
}

/**
 * 获取志愿者表彰设置详情
 */
export async function detailVolunteerPraiseConfig(): Promise<JcResult<PraiseConfigVO>> {
	return request.get('/module-user/cmsmanager/volunteer/praiseConfig/detail');
}
/**
 * 修改志愿者表彰设置
 * @param data
 */
export async function updateVolunteerPraiseConfig(
	data: PraiseConfigDTO
): Promise<JcResult<object>> {
	return request.post('/module-user/cmsmanager/volunteer/praiseConfig/update', {
		data,
	});
}
