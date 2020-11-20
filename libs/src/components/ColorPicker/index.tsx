// @ts-nocheck
import React from 'react';
import 'rc-color-picker/assets/index.css';
import ColorPicker from 'rc-color-picker';

interface ColorPickerProps {
	color?: string;
	onChange?: (colors) => void;
}

export const ColorsPicker = ({ color = '#F10', onChange }: ColorPickerProps) => {
	return <ColorPicker color={color} onChange={colors => onChange && onChange(colors)} />;
};
