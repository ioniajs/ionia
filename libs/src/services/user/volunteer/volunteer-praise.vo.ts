//#region 志愿者表彰分页
export interface PraisePageVO {
	createTime: string; // 创建时间
	id: number;
	memberNum: number; // 表彰人数
	number: string; // 期数
	publicityFlag: number; // 公示标识(0未公示 1公示)
	publicityTime: string; // 计划公示时间
	publicityTimeStatus: number; // 计划公示生效情况 0计划生效中 1已生效
}
//#endregion

//#region  获取志愿者表彰设置详情
export interface PraiseConfigVO {
	cancelRefundFlag: number; // 取消表彰退还积分标识（0关闭 1开启）
	id: number; // 志愿者表彰设置id
	rewardIntegral: number; // 每次表彰奖励积分
	rewardIntegralFlag: number; // 奖励积分标识（0关闭 1开启）
}
//#endregion
