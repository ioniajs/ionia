//#region  获取系统设置VO
export interface SysConfigVO {
	allowAudioTypes: string[]; // 允许上传的音频类型
	allowDocTypes: string[]; // 允许上传的文档类型
	allowPicTypes: string[]; // 允许上传的图片类型
	allowVideoTypes: string[]; // 允许上传的视频类型
	attachCtlType: number; // 附件控制类型(0 不限制 1 设置禁止类型，2 设置允许类型)
	attachCtlTypes: string[]; // 文件类型
	blockSensitiveWord: boolean; // 禁止输入敏感词
	intranetMode: boolean; //  内网模式
	defaultStyle: string; // 默认风格
	loginLogo: string; // 登录页logo
	loginPoster: string; // 登录页海报
	maxAttachSize: number; // 单个附件最大大小(KB)
	maxAudioSize: number; // 单个音频最大大小(KB)
	maxDocSize: number; // 单个文档最大大小(KB)
	maxPicSize: number; // 单张图片最大大小(KB)
	maxVideoSize: number; // 单个视频最大大小(KB)
	sysFavicon: string; // 系统标志
	sysHeaderLogo: string; // 页面头部logo
	showMode: boolean; // 演示模式
}
//#endregion
