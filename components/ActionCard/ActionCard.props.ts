import { HTMLAttributes, DetailedHTMLProps } from 'react';

export type actionCardSize = 'm' | 'l';

export type buttonIconType = 'settings' | 'trash' | 'arrow-right' | 'plus';

interface Props extends DetailedHTMLProps<HTMLAttributes<HTMLDivElement>, HTMLDivElement> {
	title: string;
	size?: actionCardSize;
	actionButtons?: IActionButton[];
};

interface IActionButton {
	icon: buttonIconType;
	onClick: () => void;
}

export default Props;
