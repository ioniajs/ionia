import React from 'react';
import { FallbackProps } from 'react-error-boundary';

export const ErrorFallback = ({ error, resetErrorBoundary }: FallbackProps) => {
	return (
		<div>
			<p>发生了一些错误:</p>
			<pre>{error?.message}</pre>
			<button onClick={resetErrorBoundary}>重试</button>
		</div>
	);
};
