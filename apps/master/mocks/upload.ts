import { rest } from 'msw';

export default [
	rest.post('/module-infra/res/upload', (req, res, ctx) => {
		return res(
			ctx.json({
				code: 200,
				data: {
					filename: 'test',
					id: 1,
					// url: 'http://192.168.0.200:29000/doc.html',
					url: 'https://pic.tolvyo.com/zQRoPeX3W-a9796e687f38322f53261bc38d24e0eb.jpg',
				},
			})
		);
	}),
];
