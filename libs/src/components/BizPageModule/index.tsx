import React from 'react';
import './index.less';

interface BizPageModuleProps {
	title?: string;
	children: React.ReactNode;
}

export const BizPageModule: React.FC<BizPageModuleProps> = props => {
	const { title = '系统风格设置', children } = props;
	return (
		<div className='io-libs-bizpagemodule_div'>
			<div className='io-libs-bizpagemodule-title_div'>
				<span className='io-libs-bizpagemodule-symbol_span' />
				<span className='io-libs-bizpagemodule-title_span'>{title}</span>
			</div>
			{children}
		</div>
	);
};
