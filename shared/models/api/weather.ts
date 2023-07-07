import { IWeatherInfo } from '@models/weatherInfo.model';
import { IWeatherFact } from '@models/weatherFact.model';
import { IWeatherGeoObject } from '@models/weatherGeoObject.model';

export interface IGetWeatherRequest {
	lat: number;
	lon: number;	
}

export interface IGetWeatherResponse {
	now: number;
	now_dt: string;
	info: IWeatherInfo;
	fact: IWeatherFact;
	forecasts: unknown;
	geo_object: IWeatherGeoObject;
}
