import { rest } from 'msw';

export default [
	rest.post('/module-user/oauth/token', (req, res, ctx) => {
		return res(
			ctx.json({
				code: 200,
				message: '成功',
				data: {
					access_token: '111',
					token_type: 'bearer',
					refresh_token: '111',
					expires_in: 857383,
					scope: '111',
				},
			})
		);
	}),

	rest.get('/module-infra/captcha', (req, res, ctx) => {
		return res(
			ctx.json({
				code: 200,
				message: '成功',
				data: {},
			})
		);
	}),
];
