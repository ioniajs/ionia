//#region
export interface DataRoleContentDTO {
	contents: DataContentItemDTO[];
	roleId: string;
	siteId: string;
}
//#endregion

export interface DataUserContentDTO {
	contents: DataContentItemDTO[];
	userId: string;
	siteId: string;
}

export interface DataOrgContentDTO {
	contents: DataContentItemDTO[];
	orgId: string;
	siteId: string;
}

export interface DataContentItemDTO {
	channelId: string;
	channelName: string;
	flag: boolean;
	datas: ContentDTO;
	children: DataContentItemDTO[];
	parentId: string;
}

export interface ContentDTO {
	operation: number; // 操作权限：站点类权限 0.查看 1.新建 2.编辑 3.删除 4.复制 5.权限分配 6.发布静态页
	optional: number; // 是否可选：1可选 0不可选
	selected: number; // 是否勾选：1勾选 0未勾选
}
