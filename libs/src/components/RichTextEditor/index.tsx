// @ts-nocheck
import {
	ClearOutlined,
	FileTextOutlined,
	OneToOneOutlined,
	SearchOutlined,
} from '@ant-design/icons';
import { Button, Radio, Input, Form, Checkbox } from 'antd';
import React, { useState } from 'react';
import BraftEditor, { ControlType, EditorState, ExtendControlType } from 'braft-editor';
import 'braft-editor/dist/index.css';
import Table from 'braft-extensions/dist/table';
import ColorPicker from 'braft-extensions/dist/color-picker';
import 'braft-extensions/dist/table.css';
import 'braft-extensions/dist/color-picker.css';
import { ContentUtils } from 'braft-utils';
// import Table from './table';
import './index.less';

// const Table = require('braft-extensions/dist/table');

export interface BraftEditorProps {
	onChange?: (editorState: EditorState) => void;
	value?: EditorState;
}

BraftEditor.use(
	Table({
		defaultColumns: 3, // 默认列数
		defaultRows: 3, // 默认行数
		withDropdown: false, // 插入表格前是否弹出下拉菜单
		columnResizable: false, // 是否允许拖动调整列宽，默认false
		exportAttrString: '', // 指定输出HTML时附加到table标签上的属性字符串
		includeEditors: ['editor-id-1'], // 指定该模块对哪些BraftEditor生效，不传此属性则对所有BraftEditor有效
		excludeEditors: ['editor-id-2'], // 指定该模块对哪些BraftEditor无效
	})
);

BraftEditor.use(
	ColorPicker({
		includeEditors: ['editor-id-1'], // 指定该模块对哪些BraftEditor生效，不传此属性则对所有BraftEditor有效
		excludeEditors: ['editor-id-2'], // 指定该模块对哪些BraftEditor无效
		theme: 'light', // 指定取色器样式主题，支持dark和light两种样式
	})
);

export const RichTextEditor: React.FC<BraftEditorProps> = props => {
	const { onChange, value } = props;
	const [stripPastedStyles, setStripPastedStyles] = useState<boolean>(false);
	const [editorState, setEditorState] = useState<any>(BraftEditor.createEditorState());
	const [searchForm] = Form.useForm();
	const [searchVisible, setSearchVisible] = useState<boolean>(false);
	const [searchRadioVal, setSearchRadioVal] = useState<number>(1);
	const [searchWord, setSearchWord] = useState<string>();
	const [exchangeWord, setExchageWord] = useState<string>();
	// const editorInstance = useRef<any>(null);

	// 查词替换上一个
	const handleSearchPreWord = () => {
		console.log(searchWord, editorState, 'eee');
	};

	const copyStyles = ['BOLD', 'ITALIC', 'UNDERLINE', 'FONTSIZE-30', 'COLOR-C0392B'];

	const controls: ControlType[] = [
		'undo',
		'redo',
		'separator',
		'font-size',
		'font-family',
		'line-height',
		'letter-spacing',
		'separator',
		'text-color',
		'bold',
		'italic',
		'underline',
		'strike-through',
		'separator',
		'superscript',
		'subscript',
		'remove-styles',
		'emoji',
		'separator',
		'text-indent',
		'text-align',
		'separator',
		'headings',
		'list-ul',
		'list-ol',
		'blockquote',
		'code',
		'separator',
		'link',
		'separator',
		'hr',
		'separator',
		'media',
		'separator',
		'clear',
		'separator',
		'fullscreen',
		'table',
	];

	const extendControls: ExtendControlType[] = [
		'separator',
		{
			key: 'paste-button', // 控件唯一标识，必传
			type: 'button',
			title: '纯文本粘贴模式', // 指定鼠标悬停提示文案
			className: 'my-button', // 指定按钮的样式名
			html: null, // 指定在按钮中渲染的html字符串
			text: <FileTextOutlined />, // 指定按钮文字，此处可传入jsx，若已指定html，则text不会显示
			onClick: () => {
				setStripPastedStyles(!stripPastedStyles);
			},
		},
		'separator',
		{
			key: 'format-brush',
			type: 'button',
			title: '格式刷',
			className: 'format-brush',
			html: null,
			text: <ClearOutlined />,
			onClick: () => {
				copyStyles.forEach(style => {
					const vals = style.split('-');
					if (style.indexOf('COLOR-') === 0) {
						editorInstance.current?.setValue(
							ContentUtils.toggleSelectionColor(editorState, vals[1])
						);
					} else if (style.indexOf('FONTSIZE-') === 0) {
						editorInstance.current?.setValue(
							ContentUtils.toggleSelectionFontSize(editorState, vals[1])
						);
					}
				});
			},
		},
		'separator',
		{
			key: 'search',
			type: 'modal',
			title: '查词替换',
			className: 'search',
			text: <SearchOutlined />,
			modal: {
				id: 'modal-1',
				title: '查词替换',
				bottomText: (
					<div>
						<Button onClick={handleSearchPreWord}>上一个</Button>
						<Button className='io-rich-text-editor-seabut'>下一个</Button>
						{searchRadioVal === 2 && (
							<Button className='io-rich-text-editor-seabut'>替换</Button>
						)}
						{searchRadioVal === 2 && (
							<Button className='io-rich-text-editor-seabut'>全部替换</Button>
						)}
					</div>
				),
				showConfirm: false,
				showCancel: false,
				children: (
					<Form form={searchForm} style={{ width: 400, padding: '0 10px' }}>
						<Form.Item initialValue={searchRadioVal} name='search'>
							<Radio.Group
								onChange={e => {
									setSearchRadioVal(e.target.value);
								}}
							>
								<Radio value={1}>查找</Radio>
								<Radio value={2}>替换</Radio>
							</Radio.Group>
						</Form.Item>
						<Form.Item label='查找' name='searchWord'>
							<Input
								onChange={e => {
									setSearchWord(e.target.value);
								}}
							/>
						</Form.Item>
						{searchRadioVal === 2 && (
							<Form.Item label='替换' name='exchangeWord'>
								<Input
									onChange={e => {
										setExchageWord(e.target.value);
									}}
								/>
							</Form.Item>
						)}
						<Form.Item label='区分大小写'>
							<Checkbox />
						</Form.Item>
					</Form>
				),
			},
			// onClick: () => {
			// setSearchVisible(true);
			// console.log(editorState, 'editorState');
			// const val = editorState.replace(editorState, 'fffffff');
			// console.log(val, 'vava');
			// setEditorState(val);
			// // setEditorState(editorState.replace(editorState, 'fffffff'));
			// },
		},
		'separator',
		{
			key: 'pagination',
			type: 'button',
			title: '分页',
			className: 'pagination',
			html: null,
			text: <OneToOneOutlined />,
			onClick: () => {
				console.log(editorState.toHTML(), 'editorState');
				console.log(ContentUtils.insertText(editorState, '||||'));

				setEditorState((prevState: EditorState) =>
					ContentUtils.insertText(prevState, '|||||||||||||')
				);
				// setEditorState(editorState.replace(editorState, 'fffffff'));
			},
		},
	];

	const editorProps = {
		stripPastedStyles: stripPastedStyles,
	};

	return (
		<BraftEditor
			className='io-rich-text-editor'
			id='editor-id-1'
			{...editorProps}
			controls={controls}
			extendControls={extendControls}
			onChange={e => {
				setEditorState(e);
			}}
			// ref={editorInstance}
		/>
	);
};
