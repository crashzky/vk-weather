import { useRouter } from 'next/router';
import { addHours, format } from 'date-fns';

import ActionCard from '@components/ActionCard';
import WeatherValueCard from '@components/WeatherValueCard';
import formatTemp from '@utils/formatTemp';
import getWindDirection from '@utils/getWindDirection';

import Props from './WeatherStatusSection.props';
import { ButtonsContainer, City, Container, Label, StatusLabel, ValuesContainer } from './WeatherStatusSection.styles';

const WeatherStatusSection: React.FC<Props> = ({ city, weatherStatus, date, utcHoursOffset, temp, feelTemp,
	pressure, humidity, windSpeed, windDirection, ...props }) => {
	const router = useRouter();

	return (
		<Container {...props}>
			<div>
				<City>
					{city}
				</City>
				<StatusLabel>
					{weatherStatus}
				</StatusLabel>
				<Label>
					Текущая геопозиция
				</Label>
				<Label>
					55.753448, 37.648232
				</Label>
				<Label>
					{format(addHours(date, utcHoursOffset), 'HH:mm')}
					{' (UTC '}
					{utcHoursOffset >= 0 ? `+ ${utcHoursOffset}` : `- ${Math.abs(utcHoursOffset)}`}
					{')'}
				</Label>
				<ButtonsContainer>
					<ActionCard
						title='Изменить Геопозицию'
						actionButtons={[
							{
								icon: 'arrow-right',
								onClick: () => router.push('/'),
							},
						]} />
					<ActionCard
						title='Посмотреть на Яндекс.Погоде'
						size='l'
						actionButtons={[
							{
								icon: 'arrow-right',
								onClick: () => null,
							},
						]} />
				</ButtonsContainer>
			</div>
			<ValuesContainer>
				<WeatherValueCard 
					title='Температура воздуха:'
					value={formatTemp(temp)}
					unit='°С' /> 
				<WeatherValueCard 
					title='Температура ощущается:'
					value={formatTemp(feelTemp)}
					unit='°С' /> 
				<WeatherValueCard 
					title='Давление, мм рт. ст.:'
					value={pressure.toString()} /> 
				<WeatherValueCard 
					title='Влажность воздуха:'
					value={humidity.toString()}
					unit='%' /> 
				<WeatherValueCard 
					title='Cкорость ветра, м/с:'
					value={windSpeed.toFixed(1)}
					unit={getWindDirection(windDirection)} /> 
			</ValuesContainer>
		</Container>
	);
};

export default WeatherStatusSection;
