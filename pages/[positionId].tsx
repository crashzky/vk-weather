import { useEffect } from 'react';
import { useRouter } from 'next/router';
import { useSelector } from 'react-redux';
import { useQuery } from 'react-query';
import { Spin } from 'antd';

import WeatherFutureSection from '@components/WeatherFutureSection';
import WeatherFutureCard from '@components/WeatherFutureCard';
import WeatherStatusSection from '@components/WeatherStatusSection';
import { RootState, useAppDispatch } from '@shared/store';
import { selectHasPositionById, selectInitialPosition, selectOtherPositionById } from '@shared/slices/positionsSlice';
import { setActiveForecast } from '@shared/slices/forecastSlice';
import { getWeather } from '@shared/api/weather';
import getWeatherStatus from '@utils/getWeatherStatus';

import { Center, Main, PreloaderPlug, WeekConainer, WeekTitle } from '@styles/pages/weather.styles';

const WeatherPage: React.FC = () => {
	const router = useRouter();

	const hasPositionById = useSelector((state: RootState) => selectHasPositionById(state, +router.query.positionId!));
	const positionById = useSelector((state: RootState) => selectOtherPositionById(state, +router.query.positionId!));
	const initialPosition = useSelector(selectInitialPosition);

	const dispatch = useAppDispatch();

	const position = router?.query?.positionId === 'initial' ? initialPosition : positionById;

	const { data } = useQuery(['getWeather', position], () => getWeather(position!), {
		enabled: !!position,
	});

	useEffect(() => {
		if(!hasPositionById && router.query.positionId && router.query.positionId !== 'initial')
			router.push('/404');
	}, [hasPositionById, router]);

	if(!data) {
		return (
			<Center>
				<Spin size='large' tip='Загрузка'>
					<PreloaderPlug />
				</Spin>
			</Center>
		);
	}
	else {
		const { temp, feels_like, pressure_mm, humidity, wind_speed, wind_dir, condition } = data.fact;
		const now_dt = data.now_dt;

		return (
			<Main>
				<WeatherStatusSection
					positionName={position!.name}
					lat={position!.lat}
					lon={position!.lon}
					city={data.geo_object.locality?.name || position!.name}
					weatherStatus={getWeatherStatus(condition)}
					temp={temp}
					feelTemp={feels_like}
					pressure={pressure_mm}
					humidity={humidity}
					windSpeed={wind_speed}
					windDirection={wind_dir}
					date={new Date(now_dt.slice(0, now_dt.length - 1))}
					utcHoursOffset={data.info.tzinfo.offset / 3600}
					yandexWeatherUrl={data.info.url} />
				<section>
					<WeekTitle>
						Прогноз на неделю:
					</WeekTitle>
					<WeekConainer>
						{data.forecasts.map((i, num) => {
							const { temp_min, temp_max, temp_avg, feels_like, pressure_mm, wind_dir, wind_speed, humidity }
								= i.parts.day;

							return (
								<WeatherFutureCard
									key={num}
									date={new Date(i.date)}
									minTemp={temp_min}
									maxTemp={temp_max}
									avgTemp={temp_avg}
									feelsTemp={feels_like}
									pressure={pressure_mm}
									humidity={humidity}
									windSpeed={wind_speed}
									windDirection={wind_dir}
									onClick={() => dispatch(setActiveForecast(num))} />
							);
						})}
					</WeekConainer>
				</section>
				<WeatherFutureSection forecasts={data.forecasts} />
			</Main>
		);
	}
};

export default WeatherPage;
