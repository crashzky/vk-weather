import type { Meta, StoryObj } from '@storybook/react';

import WeatherFutureSection from '@components/WeatherFutureSection';

const meta: Meta<typeof WeatherFutureSection> = {
	component: WeatherFutureSection,
	tags: ['autodocs'],
};

export default meta;

type Story = StoryObj<typeof WeatherFutureSection>;

export const Primary: Story = {
	args: {
		forecasts: [],
	},
};
