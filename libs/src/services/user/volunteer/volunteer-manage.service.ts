import request from '../../../utils/request';
import { JcResult, Page } from '../../base';
import { VolunteerPageVO, VolunteerDetailVO, VolunteerListVO } from './volunteer-manage.vo';
import { VolunteerCheckDTO, VolunteerDTO } from './volunteer-manage.dto';
import { IdsDTO } from '../../common.dto';

export interface VolunteerPaging {
	beginBirthdayTime?: string; // 开始出生日期时间
	beginCheckTime?: string; // 开始审核时间
	beginCreateTime?: string; // 开始申请时间
	checkStatus?: number[]; // 审核状态
	clan?: number[]; // 民族
	code?: string; // 队伍名称
	education?: number[]; // 学历
	email?: string; // 邮箱
	endBirthdayTime?: string; // 结束出生日期时间
	endCheckTime?: string; // 结束审核时间
	endCreateTime?: string; // 结束申请时间
	fullName?: string; // 姓名
	gender?: number[]; // 性别
	idCard?: string; // 证件号码
	occupation?: number[]; // 职业
	pageNo?: number; // 页码, 从1开始计数
	pageSize?: number; // 页面大小
	pageSort?: string; // 排序字段
	politicalLook?: number[]; // 政治面貌
	teamId?: number; // 所属队伍
	userInfo?: string; // 志愿者用户名/手机号
	workUnit?: string; // 工作单位
}

/**
 * 全部志愿者分页列表
 * @param params
 */
export async function volunteerPaging(
	params: VolunteerPaging
): Promise<JcResult<Page<VolunteerPageVO>>> {
	return request.post('/module-user/cmsmanager/volunteers/page', {
		params,
	});
}

/**
 * 志愿者审核
 * @param data
 */
export async function checkVolunteers(data: VolunteerCheckDTO[]): Promise<JcResult<boolean>> {
	return request.post('/module-user/cmsmanager/volunteers/check', {
		data,
	});
}

/**
 * 志愿者审核分页列表
 * @param params
 */
export async function checkVolunteerPaging(
	params: VolunteerPaging
): Promise<JcResult<Page<VolunteerPageVO>>> {
	return request.post('/module-user/cmsmanager/volunteers/check/page', {
		params,
	});
}

/**
 * 志愿者审核编辑
 * @param data
 */
export async function updateCheckVolunteers(data: VolunteerDTO): Promise<JcResult<object>> {
	return request.post('/module-user/cmsmanager/volunteers/check/update', {
		data,
	});
}

/**
 * 志愿者删除
 * @param data
 */
export async function deleteVolunteers(data: IdsDTO): Promise<JcResult<boolean>> {
	return request.post('/module-user/cmsmanager/volunteers/delete', {
		data,
	});
}

export interface VolunteersEmail {
	email: string; // 邮箱
	id?: number;
}
/**
 * 校验志愿者邮箱
 * @param params
 */
export async function uniqueEmailVolunteers(params: VolunteersEmail): Promise<JcResult<boolean>> {
	return request.get('/module-user/cmsmanager/volunteers/email/unique', {
		params,
	});
}

export interface VolunteersPhone {
	phone: string; // 手机号
	id?: number; // 志愿者ID
}
/**
 * 校验志愿者手机号
 * @param params
 */
export async function uniquePhoneVolunteers(params: VolunteersPhone): Promise<JcResult<boolean>> {
	return request.get('/module-user/cmsmanager/volunteers/phone/unique', {
		params,
	});
}
export interface VolunteersUserName {
	username: string; // 手机号
	id?: number; // 志愿者ID
}
/**
 * 校验志愿者用户名
 * @param params
 */
export async function uniqueUserNameVolunteers(
	params: VolunteersUserName
): Promise<JcResult<boolean>> {
	return request.get('/module-user/cmsmanager/volunteers/username/unique', {
		params,
	});
}

export interface VolunteerPraiseSelect {
	codeOrFullName?: string;
	praiseId?: number;
}
/**
 * 志愿者表彰选择列表
 * @param params
 */
export async function VolunteerPraiseSelectList(
	params: VolunteerPraiseSelect
): Promise<JcResult<VolunteerListVO>> {
	return request.post('/module-user/cmsmanager/volunteers/praise/select/list', {
		params,
	});
}
/**
 * 重置密码
 * @param id
 */
export async function resetCipherVolunteers(id: string): Promise<JcResult<object>> {
	return request.post(`/module-user/cmsmanager/volunteers/resetCipher/${id}`);
}
/**
 * 新增志愿者
 * @param data
 */
export async function saveVolunteers(data: VolunteerDTO): Promise<JcResult<object>> {
	return request.post('/module-user/cmsmanager/volunteers/save', {
		data,
	});
}
/**
 * 志愿者编辑
 * @param data
 */
export async function updateVolunteers(data: VolunteerDTO): Promise<JcResult<object>> {
	return request.post('/module-user/cmsmanager/volunteers/update', {
		data,
	});
}
/**
 * 根据id获取志愿者详情
 * @param id
 */
export async function volunteersDetail(id: string): Promise<JcResult<VolunteerDetailVO>> {
	return request.get(`/module-user/cmsmanager/volunteers/${id}`);
}
