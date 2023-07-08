import styled from 'styled-components';

export const Container = styled.button`
	display: grid;

	width: 210px;

	padding: 16px;

	cursor: pointer;

	border: 1px solid var(--grey);

	border-radius: 20px;

	background: white;
	gap: 12px;
`;

export const Title = styled.h3`
	text-align: center;

	font-size: 16px;
	font-weight: 900;
`;

export const Line = styled.div`
	width: 100%;
	height: 1.5px;

	background-color: var(--grey);
`;

export const TempContainer = styled.div`
	display: flex;
	align-items: center;
	justify-content: space-between;
`;

export const AdditionalInfo = styled.p`
	text-align: center;

	color: var(--light-grey);

	font-size: 14px;
	font-weight: 500;
`;
