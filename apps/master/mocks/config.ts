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
	rest.post('/module-infra/cmsmanager/sysConfig', (req, res, ctx) => {
		return res(
			ctx.json({
				code: 200,
				data: {
					allowAudioTypes: ['test1','test2'],
					allowDocTypes: ['test1','test2'],
					allowPicTypes: ['test1','test2'],
					allowVideoTypes: ['test1','test2'],
					attachCtlType: 0,
					attachCtlTypes: ['test1','test2'],
					defaultStyle: '',
					loginLogo: 'https://img.gujiwuqing.top/JEECMS.png',
					loginPoster: 'https://img.gujiwuqing.top/banner.jpg',
					maxAttachSize: 1024,
					maxAudioSize: 1024,
					maxDocSize: 1024,
					maxPicSize: 1024,
					maxVideoSize: 1024,
					sysFavicon: 1024,
					sysHeaderLogo: 1024
				},
				message: '',
			})
		);
	}),
];
