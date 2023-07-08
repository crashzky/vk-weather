import type { Meta, StoryObj } from '@storybook/react';

import WeatherValueCard from '@components/WeatherValueCard';

const meta: Meta<typeof WeatherValueCard> = {
	component: WeatherValueCard,
	tags: ['autodocs'],
};

export default meta;

type Story = StoryObj<typeof WeatherValueCard>;

export const Primary: Story = {
	args: {
		title: 'Температура воздуха:',
		value: '+12',
		unit: '°С',
	},
};
