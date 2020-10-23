import { IsInt, Min } from 'class-validator';
import { StatusCodes } from 'http-status-codes';

export interface ApiResponse<T> {
	code: StatusCodes;
	message: string;
	data: T;
}

export class PaginatedResponse<T> {
	pageIndex!: number;
	pageCount!: number;
	dataCount!: number;
	pageSize!: number;
	record: T[] = [];
}

export type ApiPaginatedResponse<T> = ApiResponse<PaginatedResponse<T>>;

export class SearchReq {
	keyword?: string;

	@IsInt({
		message: '页面必须是整数',
	})
	@Min(0, { message: '页码必须从0开始' })
	pageIndex?: number = 0;

	@IsInt({
		message: '每页数必须是整数',
	})
	@Min(1, { message: '每页数量不能少于1' })
	pageSize?: number = 10;
}
