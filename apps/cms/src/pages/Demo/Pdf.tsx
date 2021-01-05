import { BizPage, PdfReader } from '@ionia/libs';
import React from 'react';

export default () => {
	return (
		<BizPage>
			<PdfReader url='https://projects.wojtekmaj.pl/react-pdf/static/sample.pdf' />
		</BizPage>
	);
};
