import { DetailedHTMLProps, HTMLAttributes } from 'react';

import { weatherWindDir } from '@models/weather.model';

interface Props extends DetailedHTMLProps<HTMLAttributes<HTMLDivElement>, HTMLDivElement> {
	city: string;
	weatherStatus: string;
	temp: number;
	feelTemp: number;
	pressure: number;
	humidity: number;
	windSpeed: number;
	windDirection: weatherWindDir;
	date: Date;
	utcHoursOffset: number;
}

export default Props;
