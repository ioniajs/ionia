import { DataBaseVO } from '../site-permissions';

//#region
export interface DataChannelVO {
	channelId: string; // 栏目id
	channelName: string; // 栏目名称
	children: DataChannelVO[];
	dataBaseVO: DataBaseVO[];
}
//#endregion

export interface RoleItemVO {
	operation: number;
	optional: number;
	selected: number;
}

export type RoleDatas = Record<string, RoleItemVO>;

// const d: Record<string, RoleDatas> = {
// 	datas: {
// 		key1: {
// 			operation: 1,
// 			optional: 1,
// 			selected: 0,
// 		},
// 		key2: {
// 			operation: 2,
// 			optional: 1,
// 			selected: 0,
// 		},
// 	},
// };

//#region
export interface RoleChannelVO {
	channelId: string;
	channelName: string;
	children: RoleChannelVO[];
	datas: RoleItemVO;
	flag: boolean;
}
//#endregion

export interface RoleDataVO {
	contents: RoleChannelVO[];
	id: string;
}
