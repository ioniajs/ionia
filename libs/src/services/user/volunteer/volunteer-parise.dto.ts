// 新增志愿者表彰
export interface PraiseDTO {
	id?: number; // 志愿者表彰id
	number: string; // 期数
	publicityTime: string; // 计划公示时间
}

// 修改志愿者表彰设置
export interface PraiseConfigDTO {
	cancelRefundFlag?: number; // 取消表彰退还积分标识(0关闭 1开启)
	id?: number; // 志愿者表彰设置id
	rewardIntegral?: number; // 每次表彰奖励积分
	rewardIntegralFlag?: number; // 奖励积分标识（0关闭 1开启）
}
