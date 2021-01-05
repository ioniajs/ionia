import request from '../../../utils/request';
import { JcResult } from '../../base';
import { IdsDTO } from '../../common.dto';
import {
	MenuDTO,
	MenuAuthSwitchDTO,
	MenuDataPermissionDTO,
	MenuShowSwitchDTO,
} from './menu-management.dto';
import { MenuListVO, MenuAuthVO, MenuViewVO } from './menu-management.vo';
/**
 * 菜单新增
 */
export async function menuCreate(data: MenuDTO): Promise<JcResult<boolean>> {
	return request.post('/module-user/cmsmanager/menu', {
		data,
	});
}

/**
 * 权限控制开关
 */
export async function rightControlSwitch(data: MenuAuthSwitchDTO): Promise<JcResult<boolean>> {
	return request.post('/module-user/cmsmanager/menu/auth', {
		data,
	});
}

/**
 * 菜单删除
 */
export async function menuDelete(data: IdsDTO): Promise<JcResult<boolean>> {
	return request.post('/module-user/cmsmanager/menu/delete', {
		data,
	});
}

/**
 * 菜单列表
 */
export interface MenuList {
	parentId?: string; // 父栏目id
}
export async function menuList(params: MenuList): Promise<JcResult<MenuListVO[]>> {
	return request.get('/module-user/cmsmanager/menu/list', {
		params,
	});
}

/**
 * 组织下菜单权限显示
 */
export interface OrgMenuParams {
	orgId: string; // 组织id
}
export async function orgMenuShow(params: OrgMenuParams): Promise<JcResult<MenuAuthVO[]>> {
	return request.get('/module-user/cmsmanager/menu/premiss/org/list', {
		params,
	});
}

/**
 * 角色下菜单权限修改
 */
export async function orgMenuMod(data: MenuDataPermissionDTO): Promise<JcResult<boolean>> {
	return request.post('/module-user/cmsmanager/menu/premiss/org', {
		data,
	});
}

/**
 * 角色下菜单权限修改
 */
export async function roleMenuMod(data: MenuDataPermissionDTO): Promise<JcResult<boolean>> {
	return request.post('/module-user/cmsmanager/menu/premiss/role', {
		data,
	});
}

/**
 * 角色下菜单权限显示
 */
export interface RoleMenuShow {
	roleId: string; //角色id
}
export async function roleMenuShow(params: RoleMenuShow): Promise<JcResult<MenuAuthVO[]>> {
	return request.get('/module-user/cmsmanager/menu/premiss/role/list', {
		params,
	});
}

/**
 * 用户下菜单权限显示
 */
export interface UserMenuShow {
	userId: string; // 用户id
}
export async function userMenuShow(params: UserMenuShow): Promise<JcResult<MenuAuthVO[]>> {
	return request.get('/module-user/cmsmanager/menu/premiss/user/list', {
		params,
	});
}

/**
 * 显示开关
 */
export async function showSwitch(data: MenuShowSwitchDTO): Promise<JcResult<boolean>> {
	return request.post('/module-user/cmsmanager/menu/show', {
		data,
	});
}

/**
 * 菜单修改
 */
export async function MenuMod(data: MenuDTO): Promise<JcResult<boolean>> {
	return request.post('/module-user/cmsmanager/menu/update', {
		data,
	});
}

/**
 * 菜单详情
 */
export async function MenuDetail(id: string): Promise<JcResult<MenuViewVO>> {
	return request.get(`/module-user/cmsmanager/menu/${id}`);
}
