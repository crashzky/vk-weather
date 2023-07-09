export type weatherCondition = 'clear' | 'partly-cloudy' | 'cloudy' | 'overcast' | 'light-rain' | 'rain' | 'heavy-rain'
	| 'wet-snow' | 'light-snow' | 'snow' | 'snow-showers' | 'hail' | 'thunderstorm' | 'thunderstorm-with-rain'
	| 'thunderstorm-with-hail' | 'showers';

export type weatherWindDir = 'nw' | 'n' | 'ne' | 'e' | 'se' | 's' | 'sw' | 'w' | 'c';

type weatherDaytime = 'd' | 'n';

type weatherPrecType = 0 | 1 | 2 | 3 | 4;

type weatherPrecStrength = 0 | 0.25 | 0.5 | 0.75 | 1;

type weatherCloudness = 0 | 0.25 | 0.5 | 0.75 | 1;

export interface IWeather {
	feels_like: number;
	icon: string;
	condition: weatherCondition;
	wind_speed: number;
	wind_gust: number;
	wind_dir: weatherWindDir;
	pressure_mm: number;
	pressure_pa: number;
	humidity: number;
	daytime: weatherDaytime;
	polar: boolean;
	prec_type: weatherPrecType;
	prec_strength: weatherPrecStrength;
	cloudness: weatherCloudness;
}
