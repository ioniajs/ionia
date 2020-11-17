//#region
export interface UserDTO {
	phone: string; // 手机号
	username: string; // 用户名
}
//#endregion

//#region
export interface IdsDTO {
	ids?: string[]; // ids集合
}
//#endregion

//#region
export interface PicDTO {
	description: string; // 图片描述
	picId: string; //图片ID
}
//#endregion

//#region
export interface SortDto {
	nextId: string; // 向上排序的id值
	orgId: string; // 阵地ID
	toId: string; // 向下排序的id值
}
//#endregion
