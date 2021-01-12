//#region
export interface GoodsDTO {
	atlas?: string[]; //商品相册(资源id)
	categoryId?: string; //商品分类id
	content?: string; //商品详情
	convertMode?: string; //兑换方式
	id?: string; //商品id
	integral?: number; //所需积分
	inventory?: number; //库存
	name?: string; //商品名称
	stint?: string; //兑换限制 0不限 1单人限兑
	stintNum?: number; //限制数量
	totalConvertNum?: number; //累计兑换数量
	virtualFlag?: number; //虚拟商品标识(0否 1是)
}

//#endregion

export interface goodsParamsDTO {
	categoryId?: string[];
	beginUpdateTime?: string;
	endUpdateTime?: string;
	name?: string;
	pageNo?: number;
	pageSize?: number;
	pageSort?: string;
	status?: number[];
	stint?: number[];
}
