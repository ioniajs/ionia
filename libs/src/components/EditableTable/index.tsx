import { Table } from 'antd';
import { TableProps } from 'antd/lib/table';
import React, { ReactNode, useEffect, useMemo, useState } from 'react';
import EditableCell from './EditableCell';
import EditableRow from './EditableRow';
import './index.less';

interface HandleDataSourceParams {
	dataSource: any[];
	setDataSource: React.Dispatch<React.SetStateAction<any[]>>;
	changeData: (source: any[], key: string, data: any, isAddChild?: boolean) => any;
	deleteData: (source: any[], key: string) => any;
}
interface EditableTableProps<RecordType extends object = any> extends TableProps<RecordType> {
	footerRender?: (params: HandleDataSourceParams) => ReactNode;
	operationRender: (params: HandleDataSourceParams) => any;
	onChange: (data: any) => any;
}

const changeData = (source: any[], key: string, data: any, isAddChild = false) => {
	return source.map((item: any) => {
		if (item.key === key) {
			if (isAddChild) {
				item.children = item.children ? [...item.children, data] : [data];
				return item;
			}
			return data;
		}
		if (item.children && Array.isArray(item.children)) {
			item.children = changeData(item.children, key, data, isAddChild);
		}
		return item;
	});
};

const deleteData = (source: any[], key: string) => {
	return source
		.map((item: any) => {
			if (item.key === key) {
				return null;
			}
			if (item.children && Array.isArray(item.children)) {
				item.children = deleteData(item.children, key);
				if (item.children.length <= 0) {
					delete item.children;
				}
			}
			return item;
		})
		.filter(s => !!s);
};

export const EditableTable = ({
	footerRender,
	operationRender,
	columns: defaultColumns = [],
	dataSource: defaultDataSource = [],
	onChange,
	...reset
}: EditableTableProps) => {
	const [dataSource, setDataSource] = useState(defaultDataSource);

	useEffect(() => {
		onChange && onChange(dataSource);
	}, [dataSource]);

	const handleSave = (row: any) => {
		setDataSource([...changeData(dataSource, row.key, row)]);
	};

	const columns = useMemo(() => {
		defaultColumns = [
			...defaultColumns,
			operationRender({
				dataSource,
				setDataSource,
				changeData,
				deleteData,
			}),
		];

		return defaultColumns.map((col: any) => {
			if (!col.editable) {
				return col;
			}
			return {
				...col,
				onCell: (record: any) => ({
					record,
					editable: col.editable,
					dataIndex: col.dataIndex,
					title: col.title,
					formItemRender: col.formItemRender,
					onCellEditing: col.onCellEditing,
					handleSave,
				}),
			};
		});
	}, [defaultColumns, dataSource]);

	return (
		<Table
			className='io-editable-table'
			rowClassName={() => 'io-editable-row'}
			components={{
				body: {
					row: EditableRow,
					cell: EditableCell,
				},
			}}
			pagination={false}
			{...reset}
			columns={columns}
			dataSource={dataSource}
			footer={() =>
				footerRender &&
				footerRender({
					dataSource,
					setDataSource,
					changeData,
					deleteData,
				})
			}
		/>
	);
};
