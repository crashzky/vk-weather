import styled from 'styled-components';

export const Main = styled.main`
	padding: 70px 80px;

	@media (max-width: 475px) {
		padding: 30px;
	}
`;

export const Title = styled.h1`
	margin-bottom: 40px;

	font-size: 50px;
	font-weight: 900;
`;

export const CardsContainer = styled.div`
	display: flex;
	flex-wrap: wrap;
	gap: 22px;
`;

export const ErrorMessage = styled.p`
	margin-top: 40px;
	margin-bottom: 20px;

	font-size: 20px;
	font-weight: 600;
`;
