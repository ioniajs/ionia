import React, { useState, useEffect } from 'react';
import { Card, Dropdown, Avatar } from 'antd';
import { Icon } from '@ionia/libs';
import './index.less';

const ThemeColor = () => {
	const [color, setColor] = useState('#ffffff');
	const colorsTop = [
		{ name: '经典白', color: '#ffffff' },
		{ name: '科技蓝', color: '#2593fc' },
		{ name: '极客蓝', color: '#206fee' },
		{ name: '希望青', color: '#2cc5bd' },
		{ name: '经典白', color: '#31af70' },
	];

	const colorsBottom = [
		{ name: '优质紫', color: '#5150a4' },
		{ name: '阳光黄', color: '#fa8c16' },
		{ name: '活力橙', color: '#fa541c' },
		{ name: '中国红', color: '#c60918' },
		{ name: '酷炫黑', color: '#2c343f' },
	];
	const card = (
		<Card className='io-theme-color-card' title='主题色'>
			<div className='io-prev--colors'>
				<div className='row'>
					{colorsTop.map((c, index) => {
						return (
							<div
								key={c.color}
								className={`item ${index === 0 ? 'white' : ''}`}
								onClick={() => setColor(c.color)}
							>
								<div style={{ background: c.color }}>
									{color === c.color && (
										<i
											style={{ color: index === 0 ? '#1C6CD8' : '#ffffff' }}
											className='iconfont icon-select'
										/>
									)}
								</div>
								<p>{c.name}</p>
							</div>
						);
					})}
				</div>
				<div className='row'>
					{colorsBottom.map(c => {
						return (
							<div key={c.color} className='item' onClick={() => setColor(c.color)}>
								<div style={{ background: c.color }}>
									{color === c.color && <i className='iconfont icon-select' />}
								</div>
								<p>{c.name}</p>
							</div>
						);
					})}
				</div>
			</div>
		</Card>
	);

	return (
		<Dropdown overlay={card}>
			<i className='iconfont icon-Themecolor' />
		</Dropdown>
	);
};

export default ThemeColor;
