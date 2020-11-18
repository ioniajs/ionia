import React from 'react';
import './index.less';

interface BizSectionProps {
	title: string;
	children: React.ReactNode;
}

export const BizSection = ({ title, children }: BizSectionProps) => {
	return (
		<div className='io-biz-section'>
			<span className='io-biz-section__title'>{title}</span>
			{children}
		</div>
	);
};
