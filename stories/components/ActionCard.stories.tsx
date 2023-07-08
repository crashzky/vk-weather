import type { Meta, StoryObj } from '@storybook/react';

import ActionCard from '@components/ActionCard';

const meta: Meta<typeof ActionCard> = {
	component: ActionCard,
	tags: ['autodocs'],
};

export default meta;

type Story = StoryObj<typeof ActionCard>;

export const Primary: Story = {
	args: {
		title: 'Изменить геопозицию',
		actionButtons: [
			{
				icon: 'plus',
				onClick: () => null,
			},
			{
				icon: 'trash',
				onClick: () => null,
			},
		],
	},
};
