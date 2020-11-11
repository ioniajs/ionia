import { rest } from 'msw';

export default [
	rest.get('/module-infra/cmsmanager/sysConfig', (req, res, ctx) => {
		return res(
			ctx.json({
				code: 200,
				data: {
					allowAudioTypes: [],
					allowDocTypes: [],
					allowPicTypes: [],
					allowVideoTypes: [],
					attachCtlType: 0,
					attachCtlTypes: [],
					defaultStyle: '',
					loginLogo: 'https://img.gujiwuqing.top/JEECMS.png',
					loginPoster: 'https://img.gujiwuqing.top/banner.jpg',
					maxAttachSize: 0,
					maxAudioSize: 0,
					maxDocSize: 0,
					maxPicSize: 0,
					maxVideoSize: 0,
					sysFavicon: '',
					sysHeaderLogo: '',
				},
				message: '',
			})
		);
	}),
];
