import axios from 'axios';

import { IGetWeatherRequest, IGetWeatherResponse } from '@models/api/weather.model';

export const getWeather = (data: IGetWeatherRequest): Promise<IGetWeatherResponse> => {
	return axios.get('/api/weather', {
		params: {
			...data,
			limit: 7,
		},
	}).then((res) => res.data);
};
