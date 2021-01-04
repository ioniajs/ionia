//#region
export interface DataBaseVO {
	operation: number; // 操作权限：站点类权限 0.查看 1.新建 2.编辑 3.删除 4.复制 5.权限分配 6.发布静态页
	optional: number; // 是否可选：1可选 0不可选
	selected: number; // 是否勾选：1勾选 0未勾选
}
//#endregion

//#region
export interface AdminChildDataVO {
	children: AdminChildDataVO[]; // 站点层级结构
	datas: DataBaseVO; // 站点权限集合
	parentId: string; // 站点父级ID
	siteId: string; // 站点ID
	siteName: string; // 站点名称
	flag: boolean;
}
//#endregion

//#region   根据阵地id获取站点权限数据
export interface AdminDataVO {
	id: string; // ID
	sites: AdminChildDataVO[]; // 站点权限集合
}
//#endregion

export interface SitePermVO {
	children?: SitePermVO[];
	optional: number;
	orgId: string;
	orgName: string;
	parentId: string;
	roleId: string;
	roleName: string;
	selected: number;
}

export interface PageSitePermUserVO {
	content: SitePermUserVO[];
	pageNo: number;
	pageSize: number;
	pages: number;
	total: number;
}

export interface SitePermUserVO {
	orgName: string;
	roleName: string;
	selected: number;
	userId: string;
	userName: string;
	realName: string;
}
export interface SitePermOrgVO {
	siteId: string;
}

export interface SiteAuthVO {
	children: SiteAuthVO[];
	datas: DataBaseVO;
	orgId: string; //组织id
	orgName: string; //组织名称
	parentId: string; //父级id
	roleId: string; //角色ID
	roleName: string; //角色名称
}

export interface PageSiteAuthUserVO {
	content: SiteAuthUserVO[];
	pageNo: number;
	pageSize: number;
	pages: number;
	total: number;
}

export interface SiteAuthUserVO {
	datas: DataBaseVO;
	orgId: string; //组织id
	orgName: string; //组织名称
	parentId: string; //父级id
	roleId: string; //角色ID
	roleName: string; //角色名称
	realName: string;
}
