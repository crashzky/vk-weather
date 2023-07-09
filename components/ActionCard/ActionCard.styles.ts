import styled from 'styled-components';

import { actionCardSize } from './ActionCard.props';

interface ContainerProps {
	size: actionCardSize;
}

export const Container = styled.div<ContainerProps>`
	display: flex;
	flex-direction: column;
	justify-content: space-between;

	width: ${(props) => props.size === 'm' ? '160px' : '250px'};
	height: 160px;

	border: 0.5px solid var(--grey);

	border-radius: 25px;

	backdrop-filter: blur(4px);
`;

export const Title = styled.p`
	margin-top: 20px;
	margin-left: 22px;

	text-transform: uppercase;

	font-size: 14px;
	font-weight: 900;
`;

export const ButtonsContainer = styled.div`
	display: flex;
	justify-content: right;

	margin-right: 16px;

	margin-bottom: 16px;
	gap: 7px;
`;

export const Button = styled.button`
	display: flex;
	align-items: center;
	justify-content: center;

	width: 40px;
	height: 40px;
	padding: 0;

	cursor: pointer;

	border: 1px solid var(--grey);
	
	border-radius: 100%;
	background-color: transparent;
`;
