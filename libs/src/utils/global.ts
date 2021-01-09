import { getTimeProps } from 'antd/lib/date-picker/generatePicker';

export const getTime = (value: string) => {
	return new Date(value).getTime();
};
