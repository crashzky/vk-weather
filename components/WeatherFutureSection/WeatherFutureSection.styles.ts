import styled from 'styled-components';

export const Container = styled.section`
	padding: 40px 45px 60px;

	border: 2px solid var(--dark-grey);
	border-radius: 40px;
`;

export const Title = styled.h2`
	margin-bottom: 15px;

	font-size: 88px;
	font-weight: 900;
`;

export const Label = styled.p`
	margin-bottom: 45px;

	font-size: 20px;
	font-weight: 600;
`;

export const ValuesContainer = styled.div`
	display: flex;
	flex-wrap: wrap;
	row-gap: 35px;
	column-gap: 90px;
`;
