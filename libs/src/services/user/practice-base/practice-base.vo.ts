import { UserVO, PicVO } from '../../common.vo';
//#region  阵地详情VO
export interface OrgDetailsVO {
	address: string; // 地址
	area: string; // 地区
	code: string; // 阵地编号
	coordinate: string; // 坐标
	fax: string; // 传真
	id: string; // 阵地id, 修改必传
	introduce: string; // 阵地介绍
	linkmanList: UserVO[]; // 日常联系人
	name: string; // 阵地名称
	parentId: string; // 上级阵地ID
	picList: PicVO[]; // 图片展示
	project: string; // 特色活动项目
	tagId: string; // 阵地标识,对应资源ID
	type: string; // 阵地类型
}
//#endregion

//#region  阵地资源详情 VO
export interface OrgResourceVO {
	id: string; // 阵地id
	title: string; // 资源标题
	url: string; //资源URL
}
//#endregion

//#region  阵地列表VO
export interface OrgVO {
	address: string; // 地址
	area: string; // 地区
	children: OrgVO[]; // 子集
	code: string; // 阵地编号
	fax: string; // 传真
	id: string; // 阵地ID
	linkman: string; // 日常联系人
	name: string; // 阵地名称
	parentId: string; // 父级ID
	project: string; // 特色活动项目
	tag: string; // 阵地标识
	type: string; // 阵地类型
}
//#endregion

//#region  阵地下拉列表---采用懒加载
export interface OrgSmallVO {
	id: string; // 阵地id
	name: string; // 阵地名称
	parentId: string; //父级ID
}
//#endregion

//#region 阵地移入用户分页
export interface OrgMoveInVO {
	id: string; // 用户id
	orgName: string; // 阵地名称
	realName: string; // 真实姓名
	username: string; // 用户名
}
//#endregion
