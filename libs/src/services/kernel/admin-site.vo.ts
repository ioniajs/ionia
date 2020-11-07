//#region  站点详情VO
export interface AdminSiteDetailVO {
	desc: string; // 站点描述
	dir: string; // 站点目录
	domain: string[]; // 站点域名
	faviconUrl: string; // 站点标志
	id: string; // 站点id
	name: string; // 站点名称
	parentId: string; // 父站点id
	seoDesc: string; // 站点SEO描述
	seoKeyWord: string; // 站点SEO关键字
	seoTitle: string; // 站点SEO标题
	status: string; // 站点状态
}
//#endregion

//#region  回收站列表VO
export interface AdminSiteRecycleSummaryVo {
	id: string; // 站点id
	name: string; // 站点名称
	operatTime: string; // 删除时间
	operator: string; // 删除人
}
//#endregion

//#region  获取站点树VO
export interface AdminSiteTreeVO {
	children: AdminSiteTreeVO[]; // 子级站点
	dir: string; // 站点目录
	domian: string[]; // 站点域名
	id: string; // 站点id
	name: string; // 站点名称
	status: string; // 状态 (0关 1开)
}
//#endregion
