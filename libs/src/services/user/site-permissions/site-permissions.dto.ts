//#region
export interface DataBaseDTO {
	operation: number; // 操作权限：站点类权限 0.查看 1.新建 2.编辑 3.删除 4.复制 5.权限分配 6.发布静态页
	selected: number; // 是否勾选：1勾选 0未勾选
}

//#endregion

//#region
export interface DataSiteBaseDTO {
	children?: DataSiteBaseDTO[]; // 站点层级结构
	datas: DataBaseDTO; // 站点权限数据,格式为 map
	siteId: string; // 站点ID
}
//#endregion

//#region 新增修改站点权限数据---角色DTO
export interface DataRoleDTO {
	roleId: string; //角色ID
	sites: DataSiteBaseDTO[]; // 站点权限集合
}
//#endregion

//#region  新增修改站点权限数据---阵地
export interface DataOrgDTO {
	orgId: string; // 组织ID
	sites: DataSiteBaseDTO[]; // 站点权限集合
}

//#endregion

//#region 新增修改站点权限数据---用户
export interface DataUserDTO {
	sites: DataSiteBaseDTO[]; // 站点权限集合
	userId: string; // 用户id
}
//#endregion

///module-user/cmsmanager/siteperm/group/page
export interface PageSitePermUserDTO {
	siteId: string;
	pageNo?: string;
	pageSize?: string;
}
//保存站群权限---用户
export interface SiteGroupSiteUserDTO {
	siteId: string;
	users: SiteGroupUserChildDTO[];
}

export interface SiteGroupUserChildDTO {
	selected: string;
	userId: string;
}

export interface SiteGroupOrgChildDTO {
	orgId: string;
	selected: number;
}
export interface SiteGroupRoleChildDTO {
	roleId: string;
	selected: number;
}

export interface SiteGroupOrgAndRoleDTO {
	orgs: SiteGroupOrgChildDTO[];
	roles: SiteGroupRoleChildDTO[];
	siteId: string;
}

export interface SiteOrgChildDTO {
	datas: DataBaseDTO;
	orgId: string;
}

export interface SiteRoleChildDTO {
	datas: DataBaseDTO;
	roleId: string;
}

export interface SiteOrgAndRoleDTO {
	orgs: SiteOrgChildDTO[];
	roles: SiteRoleChildDTO[];
	siteId: string;
}

export interface SiteUserChildDTO {
	userId: string;
	selected: number;
	datas: DataBaseDTO;
}

export interface SiteUserDTO {
	siteId: string;
	users: SiteUserChildDTO[];
}
