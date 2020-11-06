// @ts-nocheck
import {
	ClearOutlined,
	FileTextOutlined,
	OneToOneOutlined,
	SearchOutlined,
} from '@ant-design/icons';
import BraftEditor, { ControlType, EditorState, ExtendControlType } from 'braft-editor';
import 'braft-editor/dist/index.css';
import Table from 'braft-extensions/dist/table';
import ColorPicker from 'braft-extensions/dist/color-picker';
import 'braft-extensions/dist/table.css';
import 'braft-extensions/dist/color-picker.css';
import { ContentUtils } from 'braft-utils';
import React, { useState } from 'react';

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
	const [editorState, setEditorState] = useState<any>(null);
	// const editorInstance = useRef<any>(null);

	// const copyStyles = ['BOLD', 'ITALIC', 'UNDERLINE', 'FONTSIZE-30', 'COLOR-C0392B'];

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
			type: 'button',
			title: '查词替换',
			className: 'search',
			html: null,
			text: <SearchOutlined />,
			onClick: () => {
				console.log(editorState, 'editorState');
				const val = editorState.replace(editorState, 'fffffff');
				console.log(val, 'vava');
				setEditorState(val);
				// setEditorState(editorState.replace(editorState, 'fffffff'));
			},
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
					ContentUtils.insertText(prevState, '|||||')
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
