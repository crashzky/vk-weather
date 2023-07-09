import getWeatherStatus from '@utils/getWeatherStatus';

describe('getWeatherStatus util', () => {
	it('getWeatherStatus util', () => {
		expect(getWeatherStatus('clear')).eq('Ясно');
		expect(getWeatherStatus('cloudy')).eq('Облачно с прояснениями');
		expect(getWeatherStatus('partly-cloudy')).eq('Малооблачно');
		expect(getWeatherStatus('hail')).eq('Град');
		expect(getWeatherStatus('rain')).eq('Дождь');
		expect(getWeatherStatus('heavy-rain')).eq('Сильный дождь');
		expect(getWeatherStatus('light-rain')).eq('Небольшой дождь');
		expect(getWeatherStatus('showers')).eq('Ливень');
		expect(getWeatherStatus('overcast')).eq('Пасмурно');
		expect(getWeatherStatus('snow')).eq('Снег');
		expect(getWeatherStatus('light-snow')).eq('Небольшой снег');
		expect(getWeatherStatus('snow-showers')).eq('Снегопад');
		expect(getWeatherStatus('wet-snow')).eq('Дождь со снегом');
		expect(getWeatherStatus('thunderstorm')).eq('Гроза');
		expect(getWeatherStatus('thunderstorm-with-hail')).eq('Гроза с градом');
		expect(getWeatherStatus('thunderstorm-with-rain')).eq('Дождь с грозой');
	});
});
