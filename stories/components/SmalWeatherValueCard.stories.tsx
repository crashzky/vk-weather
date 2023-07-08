import type { Meta, StoryObj } from '@storybook/react';

import SmalWeatherValueCard from '@components/SmalWeatherValueCard';

const meta: Meta<typeof SmalWeatherValueCard> = {
	component: SmalWeatherValueCard,
	tags: ['autodocs'],
};

export default meta;

type Story = StoryObj<typeof SmalWeatherValueCard>;

export const Primary: Story = {
	args: {
		title: 'Температура воздуха:',
		value: '+12',
		unit: '°С',
	},
};
