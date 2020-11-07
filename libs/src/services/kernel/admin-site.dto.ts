//#region
export interface TreeSiteDTO {
	children: TreeSiteDTO[]; // 子集站点列表
	dir: string; // 站点目录
	domain: string[]; // 站点域名
	name: string; // 站点名称
	status: string; // 状态(0关 1开)
}
//#endregion

//#region  批量新建站点DTO
export interface AdminSiteBatchSaveDTO {
	children: TreeSiteDTO[]; // 子集站点列表
	parentId: string; // 上级站点id
}
//#endregion

//#region 新建站点DTO
export interface AdminSiteDTO {
	desc: string; // 站点描述
	dir: string; // 站点目录
	domain: string[]; // 站点域名
	favicon: string; // 站点标志资源id
	id?: string; // 站点id(新建不传,修改必传)
	name: string; // 站点名称
	parentId: string; // 上级站点id
	seoDesc: string; // seo描述
	seoKeyWord: string; // seo关键字
	seoTitle: string; // seo标题
	status: string; // 状态(0关 1开)
}
//#endregion

//#region 站点排序 DTO
export interface AdminSiteSortDTO {
	parentId: string; // 父站点id
	siteIds: string[]; // 站点id集合(按此集合的id的顺序排序)
}
//#endregion
