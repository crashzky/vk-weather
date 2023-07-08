import styled from 'styled-components';

export const Main = styled.main`
	padding: 70px 40px;

	@media (max-width: 475px) {
		padding: 20px;
	}
`;

export const WeekTitle = styled.h2`
	margin-top: 100px;

	font-size: 56px;
	font-weight: 900;
`;

export const Underlined = styled.span`
	text-decoration: underline;
	text-decoration-color: #FF6847;
`;

export const WeekConainer = styled.div`
	display: flex;
	flex-wrap: wrap;
	justify-content: space-between;
	gap: 20px;

	margin-top: 57px;
	margin-bottom: 70px;
`;