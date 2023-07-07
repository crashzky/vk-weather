import { IWeather } from '@models/weather.model';

type weatherSeason = 'summer' | 'autumn' | 'winter' | 'spring';

type weatherPhenomCondition = 'fog' | 'mist' | 'smoke' | 'dust' | 'dust-suspension' | 'duststorm' | 'thunderstorm-with-duststorm'
	| 'drifting-snow' | 'blowing-snow' | 'ice-pellets' | 'freezing-rain' | 'tornado' | 'volcanic-ash';

export interface IWeatherFact extends IWeather {
	temp: number;
	temp_water?: number;
	phenom_icon: string;
	phenom_condition: weatherPhenomCondition;
	obs_time: number;
	is_thunder: boolean;
	season: weatherSeason;
}
