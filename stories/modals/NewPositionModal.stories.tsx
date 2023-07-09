import type { Meta, StoryObj } from '@storybook/react';

import NewPositionModal from '@modals/NewPositionModal';

const meta: Meta<typeof NewPositionModal> = {
	component: NewPositionModal,
};

export default meta;

type Story = StoryObj<typeof NewPositionModal>;

export const Primary: Story = {
	args: {
		open: true,
	},
};
