import { DataBaseVO } from '../site-permissions';

//#region
export interface DataChannelVO {
	channelId: string; // 栏目id
	channelName: string; // 栏目名称
	children: DataChannelVO[];
	dataBaseVO: DataBaseVO[];
}
//#endregion
