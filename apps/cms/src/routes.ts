// @ts-nocheck
import { ExceptionPage } from '@ionia/libs';
import { lazy } from 'react';

export default [
	{
		path: '/',
		component: lazy(() => import('@/pages/Home')),
	},
	{
		path: '/content-operation/blogroll',
		component: lazy(() => import('@/pages/Blogroll')),
	},
	{
		path: '/content-operation/content',
		component: lazy(() => import('@/pages/Content')),
	},
	{
		path: '/system-management/site',
		component: lazy(() => import('@/pages/Site')),
	},
	{
		path: '/system-management/site/create',
		component: lazy(() => import('@/pages/Site/Create')),
	},
	{
		path: '/system-management/site/detail/:id',
		component: lazy(() => import('@/pages/Site/Detail')),
	},
	{
		path: '/system-management/site/detail/authority/:id',
		component: lazy(() => import('@/pages/Site/Detail/Authority')),
	},
	{
		path: '/system-management/site/batch-create',
		component: lazy(() => import('@/pages/Site/BatchCreate')),
	},
	{
		path: '/system-management/site/publish-statics',
		component: lazy(() => import('@/pages/Site/PublishStatics')),
	},
	{
		path: '/system-management/practice-base',
		component: lazy(() => import('@/pages/PracticeBase')),
	},
	{
		path: '/system-management/practice-base/create',
		component: lazy(() => import('@/pages/PracticeBase/Create')),
	},
	{
		path: '/system-management/practice-base/detail/:id',
		component: lazy(() => import('@/pages/PracticeBase/Detail')),
	},
	{
		path: '/system-management/practice-base/batch-create',
		component: lazy(() => import('@/pages/PracticeBase/BatchCreate')),
	},
	{
		path: '/system-management/role',
		component: lazy(() => import('@/pages/Role')),
	},
	{
		path: '/system-management/role/batch-add',
		component: lazy(() => import('@/pages/Role/BatchAdd')),
	},
	{
		path: '/system-management/role/detail/:id',
		component: lazy(() => import('@/pages/Role/Detail')),
	},
	{
		path: '/system-management/user',
		component: lazy(() => import('@/pages/User')),
	},
	{
		path: '/system-management/user/batch-create',
		component: lazy(() => import('@/pages/User/BatchCreate')),
	},
	{
		path: '/system-management/user/detail/:id',
		component: lazy(() => import('@/pages/User/Detail')),
	},
	{
		path: '/system-management/model-management/source',
		component: lazy(() => import('@/pages/Source')),
	},
	{
		path: '/system-management/model-management/content-type',
		component: lazy(() => import('@/pages/ContentType')),
	},
	{
		path: '/system-management/mail-serve',
		component: lazy(() => import('@/pages/MailServe')),
	},
	{
		path: '/system-management/area-management',
		component: lazy(() => import('@/pages/AreaManagement')),
	},
	{
		path: '/system-management/memory-management/oss',
		component: lazy(() => import('@/pages/StorageManagementOSS')),
	},
	{
		path: '/system-management/memory-management/ftp',
		component: lazy(() => import('@/pages/StorageManagementFTP')),
	},
	{
		path: '/system-management/menu-management/interface',
		component: lazy(() => import('@/pages/MenuManagement/Interface')),
	},
	{
		path: '/system-management/menu-management/menu',
		component: lazy(() => import('@/pages/MenuManagement/Menu')),
	},
	{
		path: '/system-management/menu-management/menu/add',
		component: lazy(() => import('@/pages/MenuManagement/Menu/add')),
	},
	{
		path: '/system-management/menu-management/menu/detail/:id',
		component: lazy(() => import('@/pages/MenuManagement/Menu/detail')),
	},
	{
		path: '/system-management/setting',
		component: lazy(() => import('@/pages/Setting')),
	},
	{
		path: '/examination-management/test-base-management',
		component: lazy(() => import('@/pages/TestBaseManagement')),
	},
	{
		path: '/system-messages',
		component: lazy(() => import('@/pages/SystemMessages')),
	},
	{
		path: '/content-operation/comment',
		component: lazy(() => import('@/pages/Comment')),
	},
	{
		path: '/content-operation/comment/single-content',
		component: lazy(() => import('@/pages/Comment/SingleContent')),
	},
	{
		path: '/content-operation/comment/single-user',
		component: lazy(() => import('@/pages/Comment/SingleUser')),
	},
	{
		path: '/content-operation/comment/single-ip',

		component: lazy(() => import('@/pages/Comment/SingleIp')),
	},
	{
		path: '/content-operation/comment/banned',

		component: lazy(() => import('@/pages/Comment/Banned')),
	},
	{
		path: '/content-operation/comment/report',

		component: lazy(() => import('@/pages/Comment/Report')),
	},
	{
		path: '/volunteer/manage',

		component: lazy(() => import('@/pages/Volunteer/Manage')),
	},
	{
		path: '/volunteer/manage/add',

		component: lazy(() => import('@/pages/Volunteer/Manage/Create')),
	},
	{
		path: '/volunteer/manage/detail/:id',

		component: lazy(() => import('@/pages/Volunteer/Manage/Detail')),
	},
	{
		path: '/volunteer/manage-check',

		component: lazy(() => import('@/pages/Volunteer/Check')),
	},
	{
		path: '/volunteer/teams',

		component: lazy(() => import('@/pages/Volunteer/Teams')),
	},
	{
		path: '/volunteer/teams/add',
		component: lazy(() => import('@/pages/Volunteer/Teams/Create')),
	},
	{
		path: '/point-mall/commodity-category',

		component: lazy(() => import('@/pages/CommodityCategory')),
	},
	{
		path: '/point-mall/commodity-management',

		component: lazy(() => import('@/pages/CommodityManagement')),
	},
	{
		path: '/point-mall/commodity-management/add',

		component: lazy(() => import('@/pages/CommodityManagement/add')),
	},
	{
		path: '/point-mall/commodity-management/detail/:id',

		component: lazy(() => import('@/pages/CommodityManagement/detail')),
	},
	{
		path: '/point-mall/commodity-order',
		component: lazy(() => import('@/pages/CommodityOrder')),
	},
	{
		path: '/point-mall/commodity-order/detail/:id',
		component: lazy(() => import('@/pages/CommodityOrder/detail')),
	},
	{
		path: '/system-management/data-dictionary/type',

		component: lazy(() => import('@/pages/DataDictionary/Type')),
	},
	{
		path: '/system-management/data-dictionary/content',

		component: lazy(() => import('@/pages/DataDictionary/Content')),
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
