import { weatherCondition } from '@models/weather.model';

function getWeatherStatus(condition: weatherCondition): string {
	switch(condition) {
		case 'clear':
			return 'Ясно';
		case 'cloudy':
			return 'Облачно с прояснениями';
		case 'partly-cloudy':
			return 'Малооблачно';
		case 'hail':
			return 'Град';
		case 'rain':
			return 'Дождь';
		case 'heavy-rain':
			return 'Сильный дождь';
		case 'light-rain':
			return 'Небольшой дождь';
		case 'showers':
			return 'Ливень';
		case 'overcast':
			return 'Пасмурно';
		case 'snow':
			return 'Снег';
		case 'light-snow':
			return 'Небольшой снег';
		case 'snow-showers':
			return 'Снегопад';
		case 'wet-snow':
			return 'Дождь со снегом';
		case 'thunderstorm':
			return 'Гроза';
		case 'thunderstorm-with-hail':
			return 'Гроза с градом';
		case 'thunderstorm-with-rain':
			return 'Дождь с грозой';
	}
}

export default getWeatherStatus;
