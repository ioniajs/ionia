import { BizPage } from '@ionia/libs';
import React from 'react';
import { Line, Pie } from '@ant-design/charts';

export default () => {
	const lineConfig = {
		data: [
			{ year: '1991', value: 3 },
			{ year: '1992', value: 4 },
			{ year: '1993', value: 3.5 },
			{ year: '1994', value: 5 },
			{ year: '1995', value: 4.9 },
			{ year: '1996', value: 6 },
			{ year: '1997', value: 7 },
			{ year: '1998', value: 9 },
			{ year: '1999', value: 13 },
		],
		height: 400,
		xField: 'year',
		yField: 'value',
		point: {
			size: 5,
			shape: 'diamond',
		},
	};
	const pieConfig = {
		appendPadding: 10,
		data: [
			{
				type: '分类一',
				value: 27,
			},
			{
				type: '分类二',
				value: 25,
			},
			{
				type: '分类三',
				value: 18,
			},
			{
				type: '分类四',
				value: 15,
			},
			{
				type: '分类五',
				value: 10,
			},
			{
				type: '其他',
				value: 5,
			},
		],
		angleField: 'value',
		colorField: 'type',
		radius: 0.9,
		label: {
			type: 'inner',
			offset: '-30%',
			content: function content(_ref: any) {
				const percent = _ref.percent;
				// @ts-ignore
				return ''.concat(percent * 100, '%');
			},
			style: {
				fontSize: 14,
				textAlign: 'center',
			},
		},
		interactions: [{ type: 'element-active' }],
	};
	return (
		<BizPage>
			<Line {...lineConfig} />
			<Pie {...pieConfig} />
		</BizPage>
	);
};
