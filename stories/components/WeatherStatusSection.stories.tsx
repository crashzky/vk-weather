import type { Meta, StoryObj } from '@storybook/react';

import WeatherStatusSection from '@components/WeatherStatusSection';

const meta: Meta<typeof WeatherStatusSection> = {
	component: WeatherStatusSection,
	tags: ['autodocs'],
};

export default meta;

type Story = StoryObj<typeof WeatherStatusSection>;

export const Primary: Story = {
	args: {
		city: 'Калининград',
		weatherStatus: 'Облачно, с прояснениями',
		date: new Date(Date.now()),
		utcHoursOffset: 5,
		temp: 12,
		feelTemp: 15,
		pressure: 753,
		humidity: 51,
		windSpeed: 2.0,
		windDirection: 'nw',
	},
};
