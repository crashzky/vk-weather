import styled, { css } from 'styled-components';

export const Container = styled.section`
	display: flex;
	justify-content: space-between;

	padding: 38px 45px 55px 45px;

	border: 2px solid var(--dark-grey);
	border-radius: 40px;
`;

export const City = styled.h1`
	margin-bottom: 10px;

	font-size: 88px;
	font-weight: 900;
`;

const BaseLabel = css`
	font-size: 20px;
	font-weight: 600;
`;

export const StatusLabel = styled.p`
	margin-top: 5px;
	margin-bottom: 30px;
	
	${BaseLabel}
`;

export const Label = styled.p`
	margin-bottom: 15px;

	${BaseLabel}
`;

export const ButtonsContainer = styled.div`
	display: flex;
	gap: 16px;

	margin-top: 40px;
`;

export const ValuesContainer = styled.div`
	display: grid;
	grid-template-columns: repeat(2, auto);
	column-gap: 45px;
	row-gap: 35px;
`;
