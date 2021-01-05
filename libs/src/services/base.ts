export interface JcResult<T> {
	code: number;
	data: T;
	message: string;
}

export interface Page<T> {
	content: T[];
	pageNo: number;
	pageSize: number;
	pages: number;
	total: number;
}
export interface List<T> {
	data: T[];
}
