import { Application, isSlave } from '@ionia/libs';
import * as React from 'react';
import { BrowserRouter as Router } from 'react-router-dom';
import App from './App';

const app = new Application(
	(
		<Router basename={'/cms'}>
			<React.Suspense fallback={<div>loading...</div>}>
				<App />
			</React.Suspense>
		</Router>
	)
);

app.start();

export async function bootstrap() {
	await app.bootstrap();
}

export async function mount(props: any) {
	await app.mount(props);
}

export async function unmount(props: any) {
	await app.unmount(props);
}
