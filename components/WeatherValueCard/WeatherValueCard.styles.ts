import styled from 'styled-components';

export const Container = styled.div`
	display: grid;

	width: fit-content;

	grid-template-columns: repeat(2, auto);
	column-gap: 7px;
	row-gap: 11px;
`;

export const Title = styled.p`
	font-size: 14px;
	font-weight: 900;

	grid-column: 1 / 3;
`;

export const Value = styled.p`
	font-size: 66px;
	font-weight: 900;
`;

export const Unit = styled.p`
	font-size: 24px;
	font-weight: 700;
`;
