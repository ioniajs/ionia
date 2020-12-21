import { extend } from 'umi-request';
import { configs } from '../configs';
import Qs from 'qs';

const request = extend({
	prefix: `${process.env.NODE_ENV === 'development' ? configs.API_HOST : configs.API_HOST}${
		configs.API_PREFIX
	}`,
	timeout: 10000,
	headers: {
		'Accept-Language': 'zh-CN',
		'Content-Type': 'application/json;charset=UTF-8',
	},
	errorHandler: error => {
		console.error('网络错误：', error.response, error.message, error.data);
		throw error;
	},
});

request.use(async (ctx, next) => {
	try {
		if (ctx.req.url.split('/').pop() == 'token') {
			ctx.req.options.data = Qs.stringify(ctx.req.options.data);
			ctx.req.options.headers = {
				'Accept-Language': 'zh-CN',
				'Content-Type': 'application/x-www-form-urlencoded',
			};
		}
		const token = await localStorage.getItem('token');
		if (!!token) {
			ctx.req.options.headers = {
				...ctx.req.options.headers,
				Authorization: token,
			};
		}
	} catch (err) {}

	// if (isDev) {
	// 	console.log('REQUEST --->', ctx.req.url, ctx.req.options);
	// }

	await next();

	// if (ctx.res.code !== StatusCodes.OK) {
	//   toast(ctx.res.message);
	// }

	// ctx.res.isSuccess = ctx.res.isSuccess ?? ctx.res.issuccess;
	// delete ctx.res.issuccess;
	// console.log("RESPONSE <---", ctx.res);
});

export default request;
