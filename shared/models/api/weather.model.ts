import { IWeatherInfo } from '@models/weatherInfo.model';
import { IWeatherFact } from '@models/weatherFact.model';
import { IWeatherGeoObject } from '@models/weatherGeoObject.model';
import { IWeatherForecast } from '@models/weatherForecast.model';

export interface IGetWeatherRequest {
	lat: number;
	lon: number;	
}

export interface IGetWeatherResponse {
	now: number;
	now_dt: string;
	info: IWeatherInfo;
	fact: IWeatherFact;
	forecasts: IWeatherForecast[];
	geo_object: IWeatherGeoObject;
}
