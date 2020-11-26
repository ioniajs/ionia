//#region
export interface SiteGroupBaseVO {
	optional: boolean; // 是否可选，true可选，false不可选
	selected: boolean; // 是否选中，true选中，false未选中
	siteId: string; // 站点id
}
//#endregion

//#region
export interface AdminSiteGroupVO {
	id: string; //id
	vos: SiteGroupBaseVO[]; // 阵地树形结构
}
//#endregion
