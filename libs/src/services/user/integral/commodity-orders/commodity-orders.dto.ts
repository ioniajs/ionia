//#region
export interface AdminGoodsOrderCashDTO {
	cashResult?: string;
	id?: string;
}

//#endregion

export interface AdminGoodsOrderParamsDTO {
	beginUpdateTime?: string;
	endUpdateTime?: string;
	code?: string;
	endCashTime?: string;
	endCreateTime?: string;
	goodsInfo: string;
	status?: string[];
	pageNo?: number;
	pageSize?: number;
	pageSort?: string;
	userInfo: string;
}
