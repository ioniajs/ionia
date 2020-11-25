// @ts-nocheck
import {
	ClearOutlined,
	FileTextOutlined,
	OneToOneOutlined,
	SearchOutlined,
	FileWordOutlined,
} from '@ant-design/icons';
import { Button, Radio, Input, Form, Checkbox, Upload } from 'antd';
import React, { useState, useRef } from 'react';
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
	const [searchRadioVal, setSearchRadioVal] = useState<number>(1);
	const [searchWord, setSearchWord] = useState<string>();
	const [exchangeWord, setExchageWord] = useState<string>();
	const editorInstance = useRef<any>(null);

	// 查词: 上一个
	const handleSearchPreWord = () => {
		console.log(searchWord, '查找的字');
		const editorValue = editorState.toHTML(); // 编辑器内容
		const indexs = [];
		for (var i = 0; i < editorValue.length; i++) {
			if (editorValue[i] === searchWord) {
				indexs.push(i);
			}
		}
		console.log(indexs, 'injni');
		const a = ContentUtils.insertHTML('<span color="#1890ff;">fsfsdfdsgfsdf</span>');
		console.log(a, 'aaaa');
		editorInstance.current.setValue(BraftEditor.createEditorState(a));
		// const tempEditorState = editorValue
		// 	.toString()
		// 	.replace(searchWord, `<span color="#1890ff;">${searchWord}</span>`);
		// console.log(tempEditorState, '替换后的');
		// editorInstance.current.setValue(BraftEditor.createEditorState(tempEditorState));
		// 更新editorState
		// setEditorState(BraftEditor.createEditorState(tempEditorState));
		// setEditorState(
		// 	ContentUtils.insertHTML('<p><span color="#ff0000;">Hello World!</span></p>')
		// );
	};
	// 查词: 下一个
	const handleSerchNextWord = () => {};

	// 全部替换
	const handleAllExchange = async () => {
		const editorValue = editorState.toHTML(); // 文本内容
		const tempEditorState = editorValue.toString().replaceAll(searchWord, exchangeWord);
		// 更新编辑器内容
		editorInstance.current.setValue(BraftEditor.createEditorState(tempEditorState));
		// 更新editorState
		setEditorState(BraftEditor.createEditorState(tempEditorState));
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
		'table',
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
				const nextEditorState = copyStyles.reduce((ediorState, style) => {
					const splitedStyle = style.split('-');
					return ContentUtils.toggleSelectionInlineStyle(
						editorState,
						splitedStyle[1],
						splitedStyle[0]
					);
				}, editorState);
				editorInstance.setValue(nextEditorState);
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
						<Button
							className='io-rich-text-editor-seabut'
							onClick={handleSerchNextWord}
						>
							下一个
						</Button>
						{searchRadioVal === 2 && (
							<Button className='io-rich-text-editor-seabut'>替换</Button>
						)}
						{searchRadioVal === 2 && (
							<Button
								className='io-rich-text-editor-seabut'
								onClick={handleAllExchange}
							>
								全部替换
							</Button>
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
						{/* <Form.Item label='区分大小写'>
							<Checkbox />
						</Form.Item> */}
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
		'separator',
		{
			key: 'upload-file',
			type: 'component',
			component: (
				<span>
					<Upload
						type='file'
						accept='.doc,.docx'
						showUploadList={false}
						//   action={config.uploadUrl}
						onChange={(info: UploadChangeParam<UploadFile<any>>) => {
							const { status } = info.file;
							if (status === 'done') {
								console.log(info.file.response.data.url, 'sssss');
							}
						}}
					>
						<button
							type='button'
							style={{ paddingTop: '12px' }}
							className='upload-file'
							data-title='上传文件'
						>
							<FileWordOutlined />
						</button>
					</Upload>
				</span>
			),
		},
		'fullscreen',
	];

	// const extendControls: ExtendControlType[] = [
	// 	'separator',
	// 	{
	// 		key: 'paste-button', // 控件唯一标识，必传
	// 		type: 'button',
	// 		title: '纯文本粘贴模式', // 指定鼠标悬停提示文案
	// 		className: 'my-button', // 指定按钮的样式名
	// 		html: null, // 指定在按钮中渲染的html字符串
	// 		text: <FileTextOutlined />, // 指定按钮文字，此处可传入jsx，若已指定html，则text不会显示
	// 		onClick: () => {
	// 			setStripPastedStyles(!stripPastedStyles);
	// 		},
	// 	},
	// 	'separator',
	// 	{
	// 		key: 'format-brush',
	// 		type: 'button',
	// 		title: '格式刷',
	// 		className: 'format-brush',
	// 		html: null,
	// 		text: <ClearOutlined />,
	// 		onClick: () => {
	// 			const nextEditorState = copyStyles.reduce((ediorState, style) => {
	// 				const splitedStyle = style.split('-');
	// 				return ContentUtils.toggleSelectionInlineStyle(
	// 					editorState,
	// 					splitedStyle[1],
	// 					splitedStyle[0]
	// 				);
	// 			}, editorState);
	// 			editorInstance.setValue(nextEditorState);
	// 		},
	// 	},
	// 	'separator',
	// 	{
	// 		key: 'search',
	// 		type: 'modal',
	// 		title: '查词替换',
	// 		className: 'search',
	// 		text: <SearchOutlined />,
	// 		modal: {
	// 			id: 'modal-1',
	// 			title: '查词替换',
	// 			bottomText: (
	// 				<div>
	// 					<Button onClick={handleSearchPreWord}>上一个</Button>
	// 					<Button
	// 						className='io-rich-text-editor-seabut'
	// 						onClick={handleSerchNextWord}
	// 					>
	// 						下一个
	// 					</Button>
	// 					{searchRadioVal === 2 && (
	// 						<Button className='io-rich-text-editor-seabut'>替换</Button>
	// 					)}
	// 					{searchRadioVal === 2 && (
	// 						<Button
	// 							className='io-rich-text-editor-seabut'
	// 							onClick={handleAllExchange}
	// 						>
	// 							全部替换
	// 						</Button>
	// 					)}
	// 				</div>
	// 			),
	// 			showConfirm: false,
	// 			showCancel: false,
	// 			children: (
	// 				<Form form={searchForm} style={{ width: 400, padding: '0 10px' }}>
	// 					<Form.Item initialValue={searchRadioVal} name='search'>
	// 						<Radio.Group
	// 							onChange={e => {
	// 								setSearchRadioVal(e.target.value);
	// 							}}
	// 						>
	// 							<Radio value={1}>查找</Radio>
	// 							<Radio value={2}>替换</Radio>
	// 						</Radio.Group>
	// 					</Form.Item>
	// 					<Form.Item label='查找' name='searchWord'>
	// 						<Input
	// 							onChange={e => {
	// 								setSearchWord(e.target.value);
	// 							}}
	// 						/>
	// 					</Form.Item>
	// 					{searchRadioVal === 2 && (
	// 						<Form.Item label='替换' name='exchangeWord'>
	// 							<Input
	// 								onChange={e => {
	// 									setExchageWord(e.target.value);
	// 								}}
	// 							/>
	// 						</Form.Item>
	// 					)}
	// 					{/* <Form.Item label='区分大小写'>
	// 						<Checkbox />
	// 					</Form.Item> */}
	// 				</Form>
	// 			),
	// 		},
	// 		// onClick: () => {
	// 		// setSearchVisible(true);
	// 		// console.log(editorState, 'editorState');
	// 		// const val = editorState.replace(editorState, 'fffffff');
	// 		// console.log(val, 'vava');
	// 		// setEditorState(val);
	// 		// // setEditorState(editorState.replace(editorState, 'fffffff'));
	// 		// },
	// 	},
	// 	'separator',
	// 	{
	// 		key: 'pagination',
	// 		type: 'button',
	// 		title: '分页',
	// 		className: 'pagination',
	// 		html: null,
	// 		text: <OneToOneOutlined />,
	// 		onClick: () => {
	// 			console.log(editorState.toHTML(), 'editorState');
	// 			console.log(ContentUtils.insertText(editorState, '||||'));

	// 			setEditorState((prevState: EditorState) =>
	// 				ContentUtils.insertText(prevState, '|||||||||||||')
	// 			);
	// 			// setEditorState(editorState.replace(editorState, 'fffffff'));
	// 		},
	// 	},
	// 	'separator',
	// 	{
	// 		key: 'upload-file',
	// 		type: 'component',
	// 		component: (
	// 			<Upload
	// 				type='file'
	// 				accept='.doc,.docx'
	// 				showUploadList={false}
	// 				//   action={config.uploadUrl}
	// 				onChange={(info: UploadChangeParam<UploadFile<any>>) => {
	// 					const { status } = info.file;
	// 					if (status === 'done') {
	// 						console.log(info.file.response.data.url, 'sssss');
	// 					}
	// 				}}
	// 			>
	// 				<button
	// 					type='button'
	// 					style={{ paddingTop: '12px' }}
	// 					className='upload-file'
	// 					data-title='上传文件'
	// 				>
	// 					<FileWordOutlined />
	// 				</button>
	// 			</Upload>
	// 		),
	// 	},
	// ];

	const editorProps = {
		stripPastedStyles: stripPastedStyles,
	};

	return (
		<div className='io-libs-rich-text-editor'>
			<BraftEditor
				className='io-rich-text-editor'
				id='editor-id-1'
				{...editorProps}
				controls={controls}
				// extendControls={extendControls}
				onChange={e => {
					setEditorState(e);
				}}
				ref={editorInstance}
			/>
		</div>
	);
};
