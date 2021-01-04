import { useMount } from 'ahooks';
import { ConfigProvider, Layout } from 'antd';
import zhCN from 'antd/lib/locale/zh_CN';
import { MicroAppStateActions } from 'qiankun';
import React from 'react';
import { ErrorBoundary } from 'react-error-boundary';
import { Auth, ErrorFallback } from '../../components';
import { useGlobalStore } from '../../hooks';
import './index.less';
import { Worker } from '@react-pdf-viewer/core';

const { AccessProvider } = Auth;

interface GlobalLayoutProps {
	globalProps?: MicroAppStateActions;
}

export const GlobalLayout: React.FC<GlobalLayoutProps> = ({ children, globalProps }) => {
	const globalStore = useGlobalStore();
	useMount(() => {
		if (globalProps) {
			globalStore.setActions(globalProps);
			globalProps.onGlobalStateChange(
				(globalState: any) => globalStore.setState(globalState),
				true
			);
		}
	});

	return (
		<ErrorBoundary FallbackComponent={ErrorFallback} onReset={() => {}} resetKeys={[]}>
			<ConfigProvider locale={zhCN}>
				<AccessProvider>
					<Worker workerUrl='https://unpkg.com/pdfjs-dist@2.5.207/build/pdf.worker.min.js'>
						<Layout className='io-layout__global'>{children}</Layout>
					</Worker>
				</AccessProvider>
			</ConfigProvider>
		</ErrorBoundary>
	);
};
