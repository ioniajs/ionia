import { DataBaseDTO } from '../site-permissions';

//#region
export interface DataChannelDTO {
	list: DataChannelItemDTO[];
	id: string;
	siteId: string;
}
//#endregion

export interface DataChannelItemDTO {
	channelId: string;
	channelName: string;
	flag: boolean;
	datas: ChannelDTO;
	children: DataChannelItemDTO[];
}

export interface ChannelDTO {
	operation: number; // 操作权限：站点类权限 0.查看 1.新建 2.编辑 3.删除 4.复制 5.权限分配 6.发布静态页
	optional: number; // 是否可选：1可选 0不可选
	selected: number; // 是否勾选：1勾选 0未勾选
}

//#region
export interface DataOrgChannelDTO {
	list?: DataChannelDTO[]; // 栏目权限
	orgId: string; // 组织id
	siteId: string; // 站点id
}
//#endregion
