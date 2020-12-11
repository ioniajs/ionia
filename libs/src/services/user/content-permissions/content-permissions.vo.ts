export interface ContentItemVO {
	operation: number;
	optional: number;
	selected: number;
}

export type ContentDatas = Record<string, ContentItemVO>;

//#region
export interface RoleContentVO {
	channelId: string;
	channelName: string;
	children: RoleContentVO[];
	datas: ContentItemVO;
	flag: boolean;
	parentId: string;
}
//#endregion

export interface ContentDataVO {
	contents: RoleContentVO[];
	id: string;
}

export interface ContentRoleParamsVO {
	siteId?: string;
	roleId?: string;
}
export interface ContentUserParamsVO {
	siteId?: string;
	userId?: string;
}
export interface ContentOrgParamsVO {
	orgId?: string;
	siteId?: string;
}
