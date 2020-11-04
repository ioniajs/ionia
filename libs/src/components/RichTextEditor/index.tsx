import React from 'react';
import BraftEditor, { ControlType } from 'braft-editor';
import 'braft-editor/dist/index.css';

export interface BraftEditorProps {}

export const RichTextEditor: React.FC<BraftEditorProps> = props => {
	const controls: ControlType[] = [
		'undo',
		'redo',
		'separator',
		'font-size',
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
	];
	return <BraftEditor controls={controls} />;
};
