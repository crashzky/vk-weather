export interface IWeatherGeoObject {
	country: IGeoObject;
	district: IGeoObject;
	locality: IGeoObject;
	province: IGeoObject;
}

interface IGeoObject {
	id: number;
	name: string;
}
