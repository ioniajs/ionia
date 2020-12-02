import { configs } from '../configs';
import { extend } from 'umi-request';
import { isDev } from '.';

const request = extend({
	prefix: `${isDev ? '' : configs.API_HOST}${configs.API_PREFIX}`,
	timeout: 10000,
	headers: {
		'Accept-Language': 'zh-CN',
		Authorization: '',
	},
	errorHandler: error => {
		console.error('网络错误：', error.response, error.message, error.data);
		throw error;
	},
});

request.use(async (ctx, next) => {
	// try {
	//   const token = await AsyncStorage.getItem("token");
	//   if (!!token) {
	//     ctx.req.options.headers = {
	//       ...ctx.req.options.headers,
	//       Authorization: `Bearer ${token}`,
	//     };
	//   }
	// } catch (err) {}

	// if (isDev) {
	//   console.log("REQUEST --->", ctx.req.url, ctx.req.options);
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
