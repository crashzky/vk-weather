import styled, { css } from 'styled-components';

export const Container = styled.section`
	display: flex;
	justify-content: space-between;
	flex-wrap: wrap;
	gap: 30px;

	padding: 38px 45px 55px 45px;

	border: 2px solid var(--dark-grey);
	border-radius: 40px;

	@media (max-width: 475px) {
		padding: 30px;
	}
`;

export const City = styled.h1`
	margin-bottom: 10px;

	font-size: 88px;
	font-weight: 900;

	@media (max-width: 820px) {
		font-size: 60px;
	}

	@media (max-width: 600px) {
		font-size: 40px;
	}
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
	flex-wrap: wrap;

	margin-top: 40px;
`;

export const ValuesContainer = styled.div`
	display: grid;
	grid-template-columns: repeat(2, auto);
	column-gap: 45px;
	row-gap: 35px;

	@media (max-width: 425px) {
		grid-template-columns: 1fr;
	}
`;
