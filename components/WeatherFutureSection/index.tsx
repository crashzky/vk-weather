import { MutableRefObject, useEffect, useRef } from 'react';
import { useSelector } from 'react-redux';
import { format } from 'date-fns';
import { ru } from 'date-fns/locale';

import WeatherValueCard from '@components/WeatherValueCard';
import formatTemp from '@utils/formatTemp';
import getWindDirection from '@utils/getWindDirection';
import getWeatherStatus from '@utils/getWeatherStatus';
import { selectActiveForecast } from '@shared/slices/forecastSlice';

import Props from './WeatherFutureSection.props';
import { Container, Label, Title, ValuesContainer } from './WeatherFutureSection.styles';

const WeatherFutureSection: React.FC<Props> = ({ forecasts, ...props }) => {
	const activeForecast = useSelector(selectActiveForecast);

	const ref = useRef() as MutableRefObject<HTMLElement>;

	useEffect(() => {
		ref.current?.scrollIntoView({
			behavior: 'smooth',
		});
	}, [activeForecast]);

	if(!activeForecast && activeForecast !== 0)
		return null;
	else {
		const { temp_min, temp_max, temp_avg, feels_like, pressure_mm, humidity, wind_speed, wind_dir, condition }
			= forecasts[activeForecast].parts.day;

		return (
			<Container ref={ref} {...props}>
				<Title>
					{format(new Date(forecasts[activeForecast].date), 'dd MMMM yyyy', {
						locale: ru,
					})}
				</Title>
				<Label>
					{getWeatherStatus(condition)}
				</Label>
				<ValuesContainer>
					<WeatherValueCard
						title='Температура от:'
						value={formatTemp(temp_min)}
						unit='°С' />
					<WeatherValueCard
						title='Температура до:'
						value={formatTemp(temp_max)}
						unit='°С' />
					<WeatherValueCard
						title='Температура средняя:'
						value={formatTemp(temp_avg)}
						unit='°С' />
					<WeatherValueCard
						title='Температура ощущается:'
						value={formatTemp(feels_like)}
						unit='°С' />
					<WeatherValueCard
						title='Давление, мм рт. ст.:'
						value={pressure_mm.toString()} />
					<WeatherValueCard
						title='Cкорость ветра, м/с:'
						value={wind_speed.toFixed(1)}
						unit={getWindDirection(wind_dir)} />
					<WeatherValueCard
						title='Влажность воздуха:'
						value={humidity.toFixed(0)}
						unit='%' />
				</ValuesContainer>
			</Container>
		);
	}
};

export default WeatherFutureSection;
