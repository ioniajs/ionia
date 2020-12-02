import { DataBaseDTO } from '../site-permissions';

//#region
export interface DataChannelDTO {
	channelId: string; // 栏目id
	children?: DataChannelDTO[]; // 栏目层级结构
	dataBase: DataBaseDTO[]; // DataBaseDTO
}
//#endregion

//#region
export interface DataOrgChannelDTO {
	list?: DataChannelDTO[]; // 栏目权限
	orgId: string; // 组织id
	siteId: string; // 站点id
}
//#endregion
