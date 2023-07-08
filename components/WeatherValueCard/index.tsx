import Props from './WeatherValueCard.props';
import { Container, Title, Unit, Value } from './WeatherValueCard.styles';

const WeatherValueCard: React.FC<Props> = ({ title, value, unit, ...props }) => {
	return (
		<Container {...props}>
			<Title>
				{title}
			</Title>
			<Value>
				{value}
			</Value>
			<Unit>
				{unit}
			</Unit>
		</Container>
	);
};

export default WeatherValueCard;
