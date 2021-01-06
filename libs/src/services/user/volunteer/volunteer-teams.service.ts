import request from '../../../utils/request';
import { JcResult, Page, List } from '../../base';
import {
	AdminVolunteerTeamTreeVO,
	VolunteerTeamCheckPageVO,
	AdminVolunteerTeamDetailVO,
} from './volunteer-teams.vo';
import { VolunteerCheckDTO } from './volunteer-manage.dto';
import { AdminVolunteerTeamDTO } from './volunteer-teams.dto';
import { IdsDTO } from '../../common.dto';

export interface AdminVolunteerTeamTreeVOProps {
	address: string; // 地址
	beginCheckTime: string; // 开始成立时间
	code: string; // 队伍编号
	endCheckTime: string; // 结束成立时间
	name: string; // 队伍名称
	orderBy: number; // 排序 : 1队伍规模升序 2队伍规模降序 3成立时间升序 4成立时间降序
	orgIds: number[]; // 所属阵地
	principal: string; // 负责人
	userInfo: string; // 账号信息
}
/**
 * 志愿队伍树列表
 * @param params
 */
export async function allTreeTeamsVolunteer(
	params: AdminVolunteerTeamTreeVOProps
): Promise<JcResult<List<AdminVolunteerTeamTreeVO>>> {
	return request.get('/module-user/cmsmanager/volunteer/teams/allTree', {
		params,
	});
}
/**
 * 志愿队伍审核
 * @param data
 */
export async function checkVolunteerTeams(data: VolunteerCheckDTO): Promise<JcResult<boolean>> {
	return request.post('/module-user/cmsmanager/volunteer/teams/check', {
		data,
	});
}

export interface VolunteerTeamCheckPageVOProps {
	address: string; // 地址
	beginCreateTime: string; // 开始申请时间
	checkStatus: number[]; // 审核状态 2待审核 3审核未通过
	endCreateTime: string; // 结束申请时间
	name: string; // 队伍名称
	orgIds: number[]; // 所属阵地
	pageNo: number; // 页码，从1开始计数
	pageSize: number; // 页面大小
	pageSort: string; // 排序字段, 格式: status asc/desc,createTime asc/desc
	principal: string; // 负责人
	userInfo: string; // 账号信息
}
/**
 * 志愿队伍审核分页列表
 * @param params
 */
export async function volunteerTeamsCheckPaging(
	params: VolunteerTeamCheckPageVOProps
): Promise<JcResult<Page<VolunteerTeamCheckPageVO>>> {
	return request.get('/module-user/cmsmanager/volunteer/teams/check/page', {
		params,
	});
}
/**
 * 志愿队伍审核编辑
 * @param data
 */
export async function name(data: AdminVolunteerTeamDTO): Promise<JcResult<boolean>> {
	return request.post('/module-user/cmsmanager/volunteer/teams/check/update', {
		data,
	});
}
/**
 * 删除志愿队伍
 * @param data
 */
export async function deleteVolunteerTeams(data: IdsDTO): Promise<JcResult<boolean>> {
	return request.post('/module-user/cmsmanager/volunteer/teams/delete', {
		data,
	});
}
export interface VolunteersTeamsEmail {
	email: string; // 邮箱
	id?: number;
}
/**
 * 校验志愿队伍邮箱
 * @param params
 */
export async function uniqueEmailVolunteersTeams(
	params: VolunteersTeamsEmail
): Promise<JcResult<boolean>> {
	return request.get('/module-user/cmsmanager/volunteer/teams/email/unique', {
		params,
	});
}
export interface VolunteersTeamsEmail {
	username: string; // 邮箱
	id?: number;
}
/**
 * 校验志愿队伍用户名，true通过，false不通过
 * @param params
 */
export async function uniqueUserNameVolunteersTeams(
	params: VolunteersTeamsEmail
): Promise<JcResult<boolean>> {
	return request.get('/module-user/cmsmanager/volunteer/teams/username/unique', {
		params,
	});
}
/**
 * 新建志愿队伍
 * @param data
 */
export async function saveVolunteerTeams(data: AdminVolunteerTeamDTO): Promise<JcResult<boolean>> {
	return request.post('/module-user/cmsmanager/volunteer/teams/save', {
		data,
	});
}
/**
 * 志愿队伍编辑
 * @param data
 */
export async function updateVolunteerTeams(
	data: AdminVolunteerTeamDTO
): Promise<JcResult<boolean>> {
	return request.post('/module-user/cmsmanager/volunteer/teams/update', {
		data,
	});
}
/**
 * 根据id获取志愿者详情
 * @param id
 */
export async function volunteersDetail(id: number): Promise<JcResult<AdminVolunteerTeamDetailVO>> {
	return request.get(`/module-user/cmsmanager/volunteer/teams/${id}`);
}
