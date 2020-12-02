//#region  菜单新增
export interface MenuDTO {
	apiIds?: string[]; // 接口id数组
	authFlag: number; // 是否参与权限分配 0-否 1-是
	component?: string; // 路由标识(需base64加密)
	icon?: string; // 菜单图标
	id?: string; // id 新建必不填， 修改必填
	menuName: string; // 菜单名称
	menuType: number; // 菜单类型 1、菜单 2、权限
	name?: string; // 权限标识
	parentId?: string;
	path?: string; // 页面路径
	redirect?: string; // 重定向路由标识
	showFlag: number; // 是否可见 0-否 1-是
	sortNum: number; // 排序值
}
//#endregion

//#region  权限控制开关
export interface MenuAuthSwitchDTO {
	id: string; // id
	showFlag: number; // 1显示 0不显示
}
//#endregion

//#region 角色下菜单权限修改
export interface MenuDataPermissionDTO {
	dataId?: string[]; // 权限
	id: string; // id
}
//#endregion

//#region  显示开关
export interface MenuShowSwitchDTO {
	authFlag: number; // 1 控制权限 0不控制权限
	id: string; // id
}
//#endregion
