import type { Meta, StoryObj } from '@storybook/react';

import SettingsPositionModal from '@modals/SettingsPositionModal';

const meta: Meta<typeof SettingsPositionModal> = {
	component: SettingsPositionModal,
};

export default meta;

type Story = StoryObj<typeof SettingsPositionModal>;

export const Primary: Story = {
	args: {
		open: true,
	},
};
