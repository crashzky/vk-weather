import { DetailedHTMLProps, HTMLAttributes } from 'react';

export type cardPosition = 'vertical' | 'horizontal';

interface Props extends DetailedHTMLProps<HTMLAttributes<HTMLDivElement>, HTMLDivElement> {
	title: string;
	value: string;
	unit?: string;
	position?: cardPosition;
}

export default Props;
