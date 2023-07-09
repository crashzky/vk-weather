import type { Meta, StoryObj } from '@storybook/react';

import RemovePositionModal from '@modals/RemovePositionModal';

const meta: Meta<typeof RemovePositionModal> = {
	component: RemovePositionModal,
};

export default meta;

type Story = StoryObj<typeof RemovePositionModal>;

export const Primary: Story = {
	args: {
		open: true,
	},
};
