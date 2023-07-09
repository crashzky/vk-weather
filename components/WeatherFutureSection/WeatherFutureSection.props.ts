import { DetailedHTMLProps, HTMLAttributes } from 'react';

import { IWeatherForecast } from '@models/weatherForecast.model';

interface Props extends DetailedHTMLProps<HTMLAttributes<HTMLDivElement>, HTMLDivElement> {
	forecasts: IWeatherForecast[];
}

export default Props;
