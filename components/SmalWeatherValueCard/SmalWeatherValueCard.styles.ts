import styled from 'styled-components';

import { cardPosition } from './SmalWeatherValueCard.props';

interface Props {
	position: cardPosition;
}

export const Container = styled.div<Props>`
	display: flex;

	flex-direction: ${(props) => props.position === 'horizontal' ? 'row' : 'column'};
	justify-content: space-between;
	align-items: ${(props) => props.position === 'horizontal' ? 'center' : 'start'};

	width: ${(props) => props.position === 'horizontal' ? '100%' : 'fit-content'};
	gap: ${(props) => props.position === 'vertical' ? '2px' : 'auto'};
`;

export const ValueContainer = styled.div`
	display: flex;

	align-items: start;
	gap: 2px;
`;

export const Title = styled.p`
	font-size: 16px;
	font-weight: 600;
`;

export const Value = styled.p`
	font-size: 26px;
	font-weight: 700;
`;

export const Unit = styled.p`
	font-size: 12px;
	font-weight: 700;
`;
