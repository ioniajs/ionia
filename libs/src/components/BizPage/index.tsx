import { Alert, Breadcrumb } from 'antd';
import React, { ReactNode, useState } from 'react';
import { Link } from 'react-router-dom';
import { GobackButton } from './GobackButton';
import './index.less';
import { SaveButton } from './SaveButton';

interface BreadcrumbItem {
	path?: string;
	name: string;
}

interface BizPageProps {
	children?: ReactNode;
	tips?: string;
	breadcrumbs?: BreadcrumbItem[];
	showActions?: boolean;
	renderActions?: () => ReactNode;
	onGoback?: () => void;
	onSave?: () => void;
}

export const BizPage = ({
	children,
	breadcrumbs,
	tips,
	renderActions,
	onGoback,
	onSave,
	showActions = true,
}: BizPageProps) => {
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
				{breadcrumbs && (
					<Breadcrumb className='io-biz-page__breadcrumb'>
						{breadcrumbs.map((item, index) => (
							<Breadcrumb.Item key={index}>
								{item.path ? <Link to={item.path}>{item.name}</Link> : item.name}
							</Breadcrumb.Item>
						))}
					</Breadcrumb>
				)}
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
						{tipsVisible && <Alert className='io-biz-page__tips-info' message={tips} />}
					</div>
				)}
				{showActions && (
					<div className='io-biz-page__actions'>
						{renderActions ? renderActions() : defaultRenderActions()}
					</div>
				)}
			</div>
			<div className='io-biz-page__body'>{children}</div>
		</div>
	);
};
