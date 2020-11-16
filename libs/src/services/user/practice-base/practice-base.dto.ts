import { UserDTO, PicDTO } from '../../reuse.dto';

//#region
export interface OrgBatchChildDTO {
	area: string; // 地区
	children: OrgBatchChildDTO[]; //子结点
	code: string; // 阵地编号
	name: string; // 阵地名称
	type: string; // 阵地类型
}
//#endregion

//#region 批量新建阵地
export interface OrgBatchDTO {
	children: OrgBatchChildDTO[]; //子结点
	parentId: string; // 上级阵地id
}
//#endregion

//#region  新建阵地 | 修改阵地
export interface OrgDTO {
	address: string; // 地址
	area: string; // 地区
	code: string; // 阵地编号
	coordinate: string; // 坐标
	fax: string; // 传真
	id: string; // 阵地id, 修改必传
	introduce: string; // 阵地介绍
	linkmanList: UserDTO[]; // 日常联系人
	name: string; // 阵地名称
	parentId: string; // 上级阵地ID
	picList: PicDTO[]; // 图片展示
	project: string; // 特色活动项目
	tagId: string; // 阵地标识,对应资源ID
	type: string; // 阵地类型
}
//#endregion

//#region 新增阵地资源 | 修改阵地资源
export interface OrgResourceDTO {
	id?: string; // 阵地资源ID, 修改必传
	introduce: string; // 资源介绍
	picId: string; // 图片id
	title: string; // 标题
	orgId: string; // 阵地id
}
//#endregion

//#region 移入用户DTO
export interface OrgUserDTO {
	id: string; //阵地ID
	userIds: string[]; //用户ids
}
//#endregion

//#region 阵地排序
export interface SortDTO {
	nextId: string; // 向上排序的id值
	orgId: string; // 阵地ID
	toId: string; // 向下排序的id值
}
//#endregion
