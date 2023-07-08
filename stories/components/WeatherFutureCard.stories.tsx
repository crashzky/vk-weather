import type { Meta, StoryObj } from '@storybook/react';

import WeatherFutureCard from '@components/WeatherFutureCard';

const meta: Meta<typeof WeatherFutureCard> = {
	component: WeatherFutureCard,
	tags: ['autodocs'],
};

export default meta;

type Story = StoryObj<typeof WeatherFutureCard>;

export const Primary: Story = {
	args: {
		date: new Date(2023, 0, 18),
		minTemp: -18,
		maxTemp: 27,
		avgTemp: 12,
		feelsTemp: 15,
		pressure: 760,
		humidity: 50,
		windSpeed: 20,
		windDirection: 'nw',
		additionalMessage: 'Снегопад',
	},
};
