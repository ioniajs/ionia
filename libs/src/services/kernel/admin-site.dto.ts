//#region
export interface TreeSiteDTO {
	children: TreeSiteDTO[]; // 子集站点列表
	dir: string; // 站点目录
	domain: string[]; // 站点域名
	name: string; // 站点名称
	status: number; // 状态(0关 1开)
	modalPath: string; // 模板路径
	sort: number; // 排序
}
//#endregion

//#region  批量新建站点DTO
export interface AdminSiteBatchSaveDTO {
	children: TreeSiteDTO[]; // 子集站点列表
	parentId: string; // 上级站点id
}
//#endregion

//#region 新建站点 | 修改站点DTO
export interface AdminSiteDTO {
	desc: string; // 站点描述
	dir: string; // 站点目录
	domain: string[]; // 站点域名
	favicon: string; // 站点标志资源id
	id?: number; // 站点id(新建不传,修改必传)
	modelPath: string; // 模板路径
	name: string; // 站点名称
	orgId: string; // 数所阵地id
	parentId: string; // 上级站点id
	seoDesc: string; // seo描述
	seoKeyWord: string; // seo关键字
	seoTitle: string; // seo标题
	status: number; // 状态(0关 1开)
}
//#endregion

export interface SortsDTO {
	id: string;
	sortNum: number;
}
//#region 站点排序 DTO
export interface AdminSiteSortDTO {
	// parentId: string; // 父站点id
	sorts: SortsDTO[]; // 站点id集合(按此集合的id的顺序排序)
}
//#endregion

//#region 保存修改站点扩展配置DTO
export interface SiteCfgDTO {
	// channelContribute: string; // 栏目投稿
	channelNameRep: string; // 栏目名称允许重复
	channelPage: string; // 列表每页默认显示内容数
	commentAudit: string; // 评论需要审核
	commentCycle: string; // 评论周期（秒）
	commentLink: string; // 允许输入链接
	commentSet: string; // 评论设置
	contentDefinition: string; // 新内容定义
	contentDefinitionType: string; // 新内容定义类型1.分钟2.小时3.天
	contentLikeLogin: string; // 点赞需要登录
	contentNotUpdate: string; // 已发布内容禁止编辑
	contentSign: string; // 新内容标记
	contentSignColor: string; // 文字颜色
	contentSignPic: string; // 标记图片
	contentSignType: string; // 新内容标记方式1.图片2.文字
	contentSignWord: string; // 标记文字
	contentTitleCopy: string; // 内容标题重复设置
	siteGray: string; // 网站公祭日灰色风格
	siteId: string; // 站点id
	siteLogin: string; // 登录后才能访问站点
	sitePush: string; // 网站群推送
	sitePushCryp: string; // 密钥
	siteRelativePath: string; // 使用相对路径
	smtpCryp: string; // 邮箱密码
	smtpSend: string; // 发件账号
	smtpServer: string; // SMTP服务器
	smtpSsl: string; // 使用SSL协议
	staticChannel: string; // 发布内容时自动生成栏目静态页
	staticContent: string; // 发布内容时自动生成首页静态页
	staticFtp: string; // 选择FTP
	staticMemory: string; // 静态文件存储服务器1.本地2.FTP3.OSS
	staticOss: string; // 选择OSS
	staticPlatform: string[]; // 静态页发布平台1.PC2.WAP
	staticServer: string; // 静态化服务
	staticSize: string; // 生成静态内容列表页数
	watermarkColor: string; // 文字颜色
	watermarkLocation: string; // 水印位置
	watermarkPic: string; // 水印图片
	watermarkType: string; // 水印类型1.图片2.文字
	watermarkWord: string; // 水印文字
	watermarkWordSize: string; // 文字大小(px)
}
//#endregion

//#region 复制站点DTO
export interface SiteCopyDTO {
	copyType: number[]; // 复制数据类型, 1.站点配置 2.模板文件 3.消息模板 4.栏目
	dir: string; // 站点目录
	domain: string[]; // 站点域名
	name: string; // 站点名称
	parentId: string; // 父级id
	siteId: string; // 站点id
}
//#endregion

export interface SiteRevertDTO {
	siteIds: number[];
	type: number;
	parentId?: number;
}
