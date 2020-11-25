import React from 'react';
import './index.less';

interface BizSectionProps {
	title: string;
	children: React.ReactNode;
	id?: string;
}

export const BizSection = ({ title, children, id }: BizSectionProps) => {
	return (
		<div className='io-biz-section' id={id}>
			<span className='io-biz-section__title'>{title}</span>
			{children}
		</div>
	);
};
