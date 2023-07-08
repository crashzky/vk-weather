import { ButtonHTMLAttributes, DetailedHTMLProps } from 'react';

import { weatherWindDir } from '@models/weather.model';

interface Props extends DetailedHTMLProps<ButtonHTMLAttributes<HTMLButtonElement>, HTMLButtonElement> {
	date: Date;
	minTemp: number;
	maxTemp: number;
	avgTemp: number;
	feelsTemp: number;
	pressure: number;
	humidity: number;
	windSpeed: number;
	windDirection: weatherWindDir;
	additionalMessage?: string;
}

export default Props;
