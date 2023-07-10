import { format } from 'date-fns';
import { ru } from 'date-fns/locale';

import SmalWeatherValueCard from '@components/SmalWeatherValueCard';
import formatTemp from '@utils/formatTemp';
import getWindDirection from '@utils/getWindDirection';

import Props from './WeatherFutureCard.props';
import { AdditionalInfo, Container, Line, TempContainer, Title } from './WeatherFutureCard.styles';

const WeatherFutureCard: React.FC<Props> = ({ date, minTemp, maxTemp, avgTemp, feelsTemp, pressure, humidity, windSpeed,
	windDirection, additionalMessage, className = '', ...props }) => {	
	return (
		<Container className={`${className} weatherFutureCard`} {...props}>
			<Title>
				{format(date, 'dd MMMM yyyy', {
					locale: ru,
				})}
			</Title>
			<Line />
			<TempContainer>
				<SmalWeatherValueCard
					position='vertical'
					title='от:'
					unit='°С'
					value={formatTemp(minTemp)} />
				<SmalWeatherValueCard
					position='vertical'
					title='до:'
					unit='°С'
					value={formatTemp(maxTemp)} />
			</TempContainer>
			<SmalWeatherValueCard
				title='средняя:'
				unit='°С'
				value={formatTemp(avgTemp)} />
			<SmalWeatherValueCard
				title='ощущается:'
				unit='°С'
				value={formatTemp(feelsTemp)} />
			<SmalWeatherValueCard
				title='давление:'
				value={pressure.toString()} />
			<SmalWeatherValueCard
				title='влажность:'
				unit='%'
				value={humidity.toString()} />
			<SmalWeatherValueCard
				title='ветер, м/с:'
				unit={getWindDirection(windDirection)}
				value={windSpeed.toString()} />
			<AdditionalInfo>
				{additionalMessage}
			</AdditionalInfo>
		</Container>
	);
};

export default WeatherFutureCard;
