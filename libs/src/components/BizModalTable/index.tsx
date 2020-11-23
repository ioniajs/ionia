import React from 'react';
import { Table, Modal, Button } from 'antd';
import { ModalProps } from 'antd/lib/modal';
import { TableProps } from 'antd/lib/table';
import './index.less';

interface BizModalTableProps extends ModalProps {
	title?: string;
	titleAction?: React.ReactNode;
	visible?: boolean;
	footer?: React.ReactNode;
	onCancle?: () => void;
	columns?: any;
	dataSource?: any[];
	tableProps?: TableProps<any>;
}

export const BizModalTable = ({
	title = '站点回收站',
	titleAction = (
		<>
			<Button type='primary' className='io-libs-bizmodaltable-delete__but'>
				删除
			</Button>
			<Button>恢复</Button>
		</>
	),
	visible = false,
	footer = <Button>取消</Button>,
	tableProps,
	columns = [],
	dataSource = [],
	onCancle,
}: BizModalTableProps) => {
	return (
		<Modal
			title={
				<>
					<p>{title}</p>
					<div>{titleAction}</div>
				</>
			}
			visible={visible}
			footer={footer}
			onCancel={() => onCancle && onCancle()}
		>
			<Table rowKey='id' {...tableProps} columns={columns} dataSource={dataSource} />
		</Modal>
	);
};
