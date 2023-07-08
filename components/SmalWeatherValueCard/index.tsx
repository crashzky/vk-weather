import Props from './SmalWeatherValueCard.props';
import { Container, Title, Unit, Value, ValueContainer } from './SmalWeatherValueCard.styles';

const SmalWeatherValueCard: React.FC<Props> = ({ position = 'horizontal', title, value, unit, ...props }) => {
	return (
		<Container position={position} {...props}>
			<Title>
				{title}
			</Title>
			<ValueContainer>
				<Value>
					{value}
				</Value>
				<Unit>
					{unit}
				</Unit>
			</ValueContainer>
		</Container>
	);
};

export default SmalWeatherValueCard;
