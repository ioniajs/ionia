import Content from '@/pages/Content';
import DemoAMap from '@/pages/Demo/AMap';
import DemoDetail from '@/pages/Demo/Detail';
import DemoDynamicFormItem from '@/pages/Demo/DynamicFormItem';
import DemoETable from '@/pages/Demo/ETable';
import DemoModalTable from '@/pages/Demo/ModalTable';
import DemoModalTransfer from '@/pages/Demo/ModalTransfer';
import DemoVideoUpload from '@/pages/Demo/UploadVideo';
import DemoPdf from '@/pages/Demo/Pdf';
import Home from '@/pages/Home';
import PracticeBase from '@/pages/PracticeBase';
import PracticeBaseBatchCreate from '@/pages/PracticeBase/BatchCreate';
import PracticeBaseCreate from '@/pages/PracticeBase/Create';
import PracticeBaseDetail from '@/pages/PracticeBase/Detail';
import Role from '@/pages/Role';
import RoleDetail from '@/pages/Role/Detail';
import Setting from '@/pages/Setting';
import Site from '@/pages/Site';
import SiteBatchCreate from '@/pages/Site/BatchCreate';
import SiteCreate from '@/pages/Site/Create';
import SiteDetail from '@/pages/Site/Detail';
import SiteDetailAuthority from '@/pages/Site/Detail/Authority';
import SitePublishStatics from '@/pages/Site/PublishStatics';
import User from '@/pages/User';
import UserBatchCreate from '@/pages/User/BatchCreate';
import UserDetail from '@/pages/User/Detail';
import { ExceptionPage } from '@ionia/libs';
import SystemMessages from '@/pages/SystemMessages';
import MailServe from '@/pages/MailServe';
import AreaManagement from '@/pages/AreaManagement';
import Blogroll from '@/pages/Blogroll';
import Source from '@/pages/Source';
import ContentType from '@/pages/ContentType';
import StorageManagementOSS from '@/pages/StorageManagementOSS';
import StorageManagementFTP from '@/pages/StorageManagementFTP';
import TestBaseManagement from '@/pages/TestBaseManagement';
import Comment from '@/pages/Comment';
import CommentsSingleContent from '@/pages/Comment/SingleContent';
import CommentsSingleUser from '@/pages/Comment/SingleUser';
import CommentsSingleIp from '@/pages/Comment/SingleIp';
import CommentsBanned from '@/pages/Comment/Banned';
import CommentsReport from '@/pages/Comment/Report';
import Interface from '@/pages/MenuManagement/Interface';
import Menu from '@/pages/MenuManagement/Menu';
import Volunteer from '@/pages/Volunteer/Manage';
import MenuAdd from '@/pages/MenuManagement/Menu/add';
import MenuDeatil from '@/pages/MenuManagement/Menu/detail';
export default [
	{
		path: '/',
		component: Home,
	},
	{
		path: '/demo/detail',
		component: DemoDetail,
	},
	{
		path: '/demo/amap',
		component: DemoAMap,
	},
	{
		path: '/demo/etable',
		component: DemoETable,
	},
	{
		path: '/demo/modal-table',
		component: DemoModalTable,
	},
	{
		path: '/demo/modal-transfer',
		component: DemoModalTransfer,
	},
	{
		path: '/demo/dynamic-from-item',
		component: DemoDynamicFormItem,
	},
	{
		path: '/demo/video-upload',
		component: DemoVideoUpload,
	},
	{
		path: '/demo/pdf',
		component: DemoPdf,
	},
	{
		path: '/content-operation/blogroll',
		component: Blogroll,
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
		path: '/content-operation/volunteer/manage',
		component: Volunteer,
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
