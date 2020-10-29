import React from 'react';

interface IconProps {
	name: string;
}

const Icon = ({ name }: IconProps) => {
	return <i className={`iconfont ${name}`} />;
};

export default Icon;
