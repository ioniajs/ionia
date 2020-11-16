import React, { useEffect, useState } from 'react';
import './index.less';

interface WatermarkProps {
	defaultValue?: number;
	onChange?: (value: number) => void;
}

export const Watermark = ({ onChange, defaultValue = 0 }: WatermarkProps) => {
	const [value, setValue] = useState<number>(defaultValue);
	const list = [0, 1, 2, 3, 4, 5, 6, 7, 8];

	useEffect(() => {
		onChange && onChange(value);
	}, [value]);

	return (
		<div className='io-watermark'>
			{list.map((_, index) => (
				<span
					key={index}
					className={index === value ? 'active' : ''}
					onClick={() => {
						setValue(index);
					}}
				/>
			))}
		</div>
	);
};
