import WeatherFutureSection from '@components/WeatherFutureSection';
import WeatherFutureCard from '@components/WeatherFutureCard';
import WeatherStatusSection from '@components/WeatherStatusSection';

import { Main, Underlined, WeekConainer, WeekTitle } from '@styles/pages/weather.styles';

const WeatherPage: React.FC = () => {
	return (
		<Main>
			<WeatherStatusSection
				city='Калининград'
				weatherStatus='Облачно, с прояснениями'
				temp={12}
				feelTemp={15}
				pressure={768}
				humidity={51}
				windSpeed={2.0}
				windDirection='nw'
				date={new Date(Date.now())}
				utcHoursOffset={5} />
			<section>
				<WeekTitle>
					Прогноз на неделю:
					{' '}
					<Underlined>
						18-24 апреля
					</Underlined>
				</WeekTitle>
				<WeekConainer>
					{Array(7).fill(null).map((i, num) => (
						<WeatherFutureCard
							key={num}
							date={new Date(Date.now())}
							minTemp={-5}
							maxTemp={15}
							avgTemp={10}
							feelsTemp={14}
							pressure={768}
							humidity={51}
							windSpeed={2.0}
							windDirection='s' />
					))}
				</WeekConainer>
			</section>
			<WeatherFutureSection />
		</Main>
	);
};

export default WeatherPage;
