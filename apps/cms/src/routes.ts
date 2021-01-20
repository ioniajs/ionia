import AreaManagement from '@/pages/AreaManagement';
import Comment from '@/pages/Comment';
import CommentsBanned from '@/pages/Comment/Banned';
import CommentsReport from '@/pages/Comment/Report';
import CommentsSingleContent from '@/pages/Comment/SingleContent';
import CommentsSingleIp from '@/pages/Comment/SingleIp';
import CommentsSingleUser from '@/pages/Comment/SingleUser';
import CommodityCategory from '@/pages/CommodityCategory';
import CommodityManagement from '@/pages/CommodityManagement';
import CommodityManagementAdd from '@/pages/CommodityManagement/add';
import CommodityManagementDetail from '@/pages/CommodityManagement/detail';
import Content from '@/pages/Content';
import ContentType from '@/pages/ContentType';
import DataDictionaryContent from '@/pages/DataDictionary/Content';
import DataDictionaryType from '@/pages/DataDictionary/Type';
import CommodityOrder from '@/pages/CommodityOrder';
import MailServe from '@/pages/MailServe';
import Interface from '@/pages/MenuManagement/Interface';
import Menu from '@/pages/MenuManagement/Menu';
import MenuAdd from '@/pages/MenuManagement/Menu/add';
import MenuDeatil from '@/pages/MenuManagement/Menu/detail';
import PracticeBase from '@/pages/PracticeBase';
import PracticeBaseBatchCreate from '@/pages/PracticeBase/BatchCreate';
import PracticeBaseCreate from '@/pages/PracticeBase/Create';
import PracticeBaseDetail from '@/pages/PracticeBase/Detail';
import Role from '@/pages/Role';
import RoleBatchAdd from '@/pages/Role/BatchAdd';
import RoleDetail from '@/pages/Role/Detail';
import Setting from '@/pages/Setting';
import Site from '@/pages/Site';
import SiteBatchCreate from '@/pages/Site/BatchCreate';
import SiteCreate from '@/pages/Site/Create';
import SiteDetail from '@/pages/Site/Detail';
import SiteDetailAuthority from '@/pages/Site/Detail/Authority';
import SitePublishStatics from '@/pages/Site/PublishStatics';
import Source from '@/pages/Source';
import StorageManagementFTP from '@/pages/StorageManagementFTP';
import StorageManagementOSS from '@/pages/StorageManagementOSS';
import SystemMessages from '@/pages/SystemMessages';
import TestBaseManagement from '@/pages/TestBaseManagement';
import User from '@/pages/User';
import UserBatchCreate from '@/pages/User/BatchCreate';
import UserDetail from '@/pages/User/Detail';
import VolunteerCheck from '@/pages/Volunteer/Check';
import VolunteerManage from '@/pages/Volunteer/Manage';
import VolunteerManageCreate from '@/pages/Volunteer/Manage/Create';
import VolunteerManageDetail from '@/pages/Volunteer/Manage/Detail';
import { ExceptionPage } from '@ionia/libs';
import { lazy } from 'react';

export default [
	{
		path: '/',
		// @ts-ignore
		component: lazy(() => import('@/pages/Home')),
	},
	{
		path: '/content-operation/blogroll',
		// @ts-ignore
		component: lazy(() => import('@/pages/Blogroll')),
	},
	{
		path: '/content-operation/content',
		component: Content,
	},
	{
		path: '/system-management/site',
		component: Site,
	},
	{
		path: '/system-management/site/create',
		component: SiteCreate,
	},
	{
		path: '/system-management/site/detail/:id',
		component: SiteDetail,
	},
	{
		path: '/system-management/site/detail/authority/:id',
		component: SiteDetailAuthority,
	},
	{
		path: '/system-management/site/batch-create',
		component: SiteBatchCreate,
	},
	{
		path: '/system-management/site/publish-statics',
		component: SitePublishStatics,
	},
	{
		path: '/system-management/practice-base',
		component: PracticeBase,
	},
	{
		path: '/system-management/practice-base/create',
		component: PracticeBaseCreate,
	},
	{
		path: '/system-management/practice-base/detail/:id',
		component: PracticeBaseDetail,
	},
	{
		path: '/system-management/practice-base/batch-create',
		component: PracticeBaseBatchCreate,
	},
	{
		path: '/system-management/role',
		component: Role,
	},
	{
		path: '/system-management/role/batch-add',
		component: RoleBatchAdd,
	},
	{
		path: '/system-management/role/detail/:id',
		component: RoleDetail,
	},
	{
		path: '/system-management/user',
		component: User,
	},
	{
		path: '/system-management/user/batch-create',
		component: UserBatchCreate,
	},
	{
		path: '/system-management/user/detail/:id',
		component: UserDetail,
	},
	{
		path: '/system-management/model-management/source',
		component: Source,
	},
	{
		path: '/system-management/model-management/content-type',
		component: ContentType,
	},
	{
		path: '/system-management/mail-serve',
		component: MailServe,
	},
	{
		path: '/system-management/area-management',
		component: AreaManagement,
	},
	{
		path: '/system-management/memory-management/oss',
		component: StorageManagementOSS,
	},
	{
		path: '/system-management/memory-management/ftp',
		component: StorageManagementFTP,
	},
	{
		path: '/system-management/menu-management/interface',
		component: Interface,
	},
	{
		path: '/system-management/menu-management/menu',
		component: Menu,
	},
	{
		path: '/system-management/menu-management/menu/add',
		component: MenuAdd,
	},
	{
		path: '/system-management/menu-management/menu/detail/:id',
		component: MenuDeatil,
	},
	{
		path: '/system-management/setting',
		component: Setting,
	},
	{
		path: '/examination-management/test-base-management',
		component: TestBaseManagement,
	},
	{
		path: '/system-messages',
		component: SystemMessages,
	},
	{
		path: '/content-operation/comment',
		component: Comment,
	},
	{
		path: '/content-operation/comment/single-content',
		component: CommentsSingleContent,
	},
	{
		path: '/content-operation/comment/single-user',
		component: CommentsSingleUser,
	},
	{
		path: '/content-operation/comment/single-ip',
		component: CommentsSingleIp,
	},
	{
		path: '/content-operation/comment/banned',
		component: CommentsBanned,
	},
	{
		path: '/content-operation/comment/report',
		component: CommentsReport,
	},
	{
		path: '/volunteer/manage',
		component: VolunteerManage,
	},
	{
		path: '/volunteer/manage/add',
		component: VolunteerManageCreate,
	},
	{
		path: '/volunteer/manage/detail/:id',
		component: VolunteerManageDetail,
	},
	{
		path: '/volunteer/check',
		component: VolunteerCheck,
	},
	{
		path: '/point-mall/commodity-category',
		component: CommodityCategory,
	},
	{
		path: '/point-mall/commodity-management',
		component: CommodityManagement,
	},
	{
		path: '/point-mall/commodity-management/add',
		component: CommodityManagementAdd,
	},
	{
		path: '/point-mall/commodity-management/detail/:id',
		component: CommodityManagementDetail,
	},
	{
		path: '/point-mall/commodity-order',
		component: CommodityOrder,
	},
	{
		path: '/system-management/data-dictionary/type',
		component: DataDictionaryType,
	},
	{
		path: '/system-management/data-dictionary/content',
		component: DataDictionaryContent,
	},
	{
		path: '/500',
		component: ExceptionPage,
	},
	{
		path: '/403',
		component: ExceptionPage,
	},
	{
		path: '*',
		component: ExceptionPage,
	},
];
