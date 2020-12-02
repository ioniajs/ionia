//#region  新增修改站群权限数据---阵地
export interface SiteGroupOrgDTO {
	orgId?: string; // 阵地id
	siteIds?: string[]; // 已勾选站点IDs
}
//#endregion

//#region 新增修改站群权限数据---角色
export interface SiteGroupRoleDTO {
	roleId?: string; // 角色id
	siteIds?: string[]; // 已勾选站点IDs
}
//#endregion

//#region 新增修改站群权限数据---角色
export interface SiteGroupUserDTO {
	userId?: string; // 角色id
	siteIds?: string[]; // 站点数据
}
//#endregion
