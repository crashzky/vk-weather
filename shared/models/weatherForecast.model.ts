import { IWeather } from '@models/weather.model';

type weatherMoonCode = 0 | 1 | 2 | 3 | 4 | 5 | 6 | 7 | 8 | 9 | 10 | 11 | 12 | 13 | 14 | 15;

type weatherMoonText = 'moon-code-0' | 'moon-code-1' | 'moon-code-2' | 'moon-code-3' | 'moon-code-4' | 'moon-code-5'
	| 'moon-code-6' | 'moon-code-7' | 'moon-code-8' | 'moon-code-9' | 'moon-code-10' | 'moon-code-11' | 'moon-code-12'
	| 'moon-code-13' | 'moon-code-14' | 'moon-code-15';

type weatherForecastHour = '0' | '1' | '2' | '3' | '4' | '5' | '6' | '7' | '8' | '9' | '10' | '11' | '12' | '13' | '14' | '15'
	| '16' | '17' | '18' | '19' | '20' | '21' | '22' | '23';

export interface IWeatherForecast {
	date: string;
	date_ts: number;
	week: number;
	rise_begin: string;
	sunrise: string;
	sunset: string;
	set_end: string;
	moon_code: weatherMoonCode;
	moon_text: weatherMoonText;
	parts: {
		night: IWeatherForecastPart;
		morning: IWeatherForecastPart;
		day: IWeatherForecastPart;
		evening: IWeatherForecastPart;
		day_short: IWeatherShortForecastPart;
		night_short: IWeatherShortForecastPart;
	};
	hours: IWeatherForecastHour[];
}

interface IWeatherForecastPart extends IWeather {
	temp_min: number;
	temp_max: number;
	temp_avg: number;
	soil_temp: number;
	soil_moisture: number;
	prec_mm: number;
	prec_period: number;
	prec_prob: number;
	fresh_snow_mm: number;
	uv_index: number;
}

interface IWeatherShortForecastPart extends IWeather {
	temp: number;
	temp_min: number;
}

interface IWeatherForecastHour extends IWeather {
	hour: weatherForecastHour;
	hour_ts: number;
}
