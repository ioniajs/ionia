import React from 'react';
import './index.less';

import { Viewer } from '@react-pdf-viewer/core';

// Plugins
// import { defaultLayoutPlugin } from '@react-pdf-viewer/default-layout';

// Import styles
import '@react-pdf-viewer/core/lib/styles/index.css';
// import '@react-pdf-viewer/default-layout/lib/styles/index.css';

// const defaultLayoutPluginInstance = defaultLayoutPlugin();

interface PdfReaderProps {
	url: string;
}

export const PdfReader = ({ url }: PdfReaderProps) => {
	return (
		<div className='io-pdf-reader'>
			<Viewer fileUrl={url} plugins={[]} />
		</div>
	);
};
