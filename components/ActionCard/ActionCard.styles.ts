import styled from 'styled-components';

import { actionCardSize } from './ActionCard.props';

interface ContainerProps {
	size: actionCardSize;
}

export const Container = styled.div<ContainerProps>`
	width: ${(props) => props.size === 'm' ? '160px' : '250px'};
	height: 160px;

	display: flex;
	flex-direction: column;
	justify-content: space-between;

	border-radius: 25px;
	border: 0.5px solid var(--grey);

	backdrop-filter: blur(4px);
`;

export const Title = styled.p`
	font-size: 14px;
	font-weight: 900;
	text-transform: uppercase;

	margin-top: 20px;
	margin-left: 22px;
`;

export const ButtonsContainer = styled.div`
	display: flex;
	justify-content: right;
	gap: 7px;

	margin-bottom: 16px;
	margin-right: 16px;
`;

export const Button = styled.button`
	width: 40px;
	height: 40px;

	display: flex;
	justify-content: center;
	align-items: center;

	cursor: pointer;
	background-color: transparent;
	
	border-radius: 100%;
	border: 1px solid var(--grey)
`;
