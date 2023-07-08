import { format } from 'date-fns';
import { ru } from 'date-fns/locale';

import WeatherValueCard from '@components/WeatherValueCard';
import formatTemp from '@utils/formatTemp';
import getWindDirection from '@utils/getWindDirection';

import Props from './WeatherFutureSection.props';
import { Container, Label, Title, ValuesContainer } from './WeatherFutureSection.styles';

const WeatherFutureSection: React.FC<Props> = ({ ...props }) => {
	return (
		<Container {...props}>
			<Title>
				{format(new Date(Date.now()), 'dd MMMM yyyy', {
					locale: ru,
				})}
			</Title>
			<Label>
				Облачно, с прояснениями
			</Label>
			<ValuesContainer>
				<WeatherValueCard
					title='Температура от:'
					value={formatTemp(12)}
					unit='°С' />
				<WeatherValueCard
					title='Температура до:'
					value={formatTemp(12)}
					unit='°С' />
				<WeatherValueCard
					title='Температура воздуха:'
					value={formatTemp(12)}
					unit='°С' />
				<WeatherValueCard
					title='Температура ощущается:'
					value={formatTemp(12)}
					unit='°С' />
				<WeatherValueCard
					title='Давление, мм рт. ст.:'
					value='733' />
				<WeatherValueCard
					title='Cкорость ветра, м/с:'
					value='2.0'
					unit={getWindDirection('ne')} />
				<WeatherValueCard
					title='Влажность воздуха:'
					value='51'
					unit='%' />
			</ValuesContainer>
		</Container>
	);
};

export default WeatherFutureSection;
