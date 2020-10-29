import React from 'react';

export interface IconProps {
	name: string;
	onClick?: () => void;
}

export const Icon = ({ name, ...reset }: IconProps) => {
	return <i className={`iconfont ${name}`} {...reset} />;
};
