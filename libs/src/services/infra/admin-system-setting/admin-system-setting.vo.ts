//#region  获取系统设置VO
export interface SysConfigVO {
	allowAudioTypes: string[]; // 允许上传的音频类型
	allowDocTypes: string[]; // 允许上传的文档类型
	allowPicTypes: string[]; // 允许上传的图片类型
	allowVideoTypes: string[]; // 允许上传的视频类型
	attachCtlType: string; // 附件控制类型(0 不限制 1 设置禁止类型，2 设置允许类型)
	attachCtlTypes: string[]; // 文件类型
	defaultStyle: string; // 默认风格
	loginLogo: string; // 登录页logo
	loginPoster: string; // 登录页海报
	maxAttachSize: string; // 单个附件最大大小(KB)
	maxAudioSize: string; // 单个音频最大大小(KB)
	maxDocSize: string; // 单个文档最大大小(KB)
	maxPicSize: string; // 单张图片最大大小(KB)
	maxVideoSize: string; // 单个视频最大大小(KB)
	sysFavicon: string; // 系统标志
	sysHeaderLogo: string; // 页面头部logo
}
//#endregion
