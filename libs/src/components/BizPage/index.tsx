import { Alert, Breadcrumb, Tabs } from 'antd';
import { TabPaneProps } from 'antd/lib/tabs';
import React, { ReactNode, useState } from 'react';
import { Link } from 'react-router-dom';
import { GobackButton } from './GobackButton';
import './index.less';
import { SaveButton } from './SaveButton';
export * from './GobackButton';
export * from './SaveButton';

const { TabPane } = Tabs;

interface BreadcrumbItem {
	path?: string;
	name: string;
}
interface LayoutColProps {
	span?: number;
}
interface LayoutProps {
	labelCol?: LayoutColProps;
	wrapperCol?: LayoutColProps;
}

interface BizPageProps {
	children?: ReactNode;
	tips?: string;
	breadcrumbs?: BreadcrumbItem[];
	showActions?: boolean;
	renderActions?: () => ReactNode;
	onGoback?: () => void;
	onSave?: () => void;
	tabList?: TabPaneProps[];
	defaultActiveKey?: string;
	layout?: LayoutProps;
	goBackAction?: boolean; // 当有面包屑但是无tabList，面包屑前面又要有返回按钮
}

export const BizPage = ({
	children,
	breadcrumbs,
	tips,
	tabList,
	renderActions,
	onGoback,
	onSave,
	showActions = false,
	defaultActiveKey = '1',
	goBackAction = false,
}: BizPageProps) => {
	const [activeKey, setActiveKey] = useState<string>();
	const [tipsVisible, setTipsVisible] = useState<boolean>(true);

	const defaultRenderActions = () => (
		<>
			<GobackButton onGoback={onGoback} />
			<SaveButton onSave={onSave} />
		</>
	);

	return (
		<div className='io-biz-page'>
			<div className='io-biz-page__header'>
				<div
					className='io-biz-page__header-container'
					style={{ marginTop: breadcrumbs ? 24 : 0 }}
				>
					{showActions && (tabList || goBackAction) && (
						<GobackButton
							onGoback={onGoback}
							style={{ marginRight: 32, height: 24, width: 60 }}
						/>
					)}
					{breadcrumbs && (
						<Breadcrumb>
							{breadcrumbs.map((item, index) => (
								<Breadcrumb.Item key={index}>
									{item.path ? (
										<Link to={item.path}>{item.name}</Link>
									) : (
											item.name
										)}
								</Breadcrumb.Item>
							))}
						</Breadcrumb>
					)}
				</div>
				{tips && (
					<div className='io-biz-page__tips'>
						<div
							className='io-biz-page__tips-title'
							onClick={() => {
								setTipsVisible(!tipsVisible);
							}}
						>
							操作说明
							<i className='iconfont icon-info-circle' />
						</div>
						{tipsVisible && (
							<Alert
								className='io-biz-page__tips-info'
								message={tips}
								onClick={() => {
									setTipsVisible(!tipsVisible);
								}}
							/>
						)}
					</div>
				)}
				{showActions && !tabList && (
					<div className='io-biz-page__actions'>
						{renderActions ? renderActions() : defaultRenderActions()}
					</div>
				)}
			</div>
			{children && !tabList && <div className='io-biz-page__body'>{children}</div>}
			{tabList && (
				<div className='io-biz-page__body--tabs'>
					<Tabs
						activeKey={activeKey}
						onChange={key => setActiveKey(key)}
						defaultActiveKey={defaultActiveKey}
					>
						{tabList.map(t => (
							<TabPane key={t.tabKey} {...t} />
						))}
					</Tabs>
				</div>
			)}
		</div>
	);
};
