import type { Meta, StoryObj } from '@storybook/react';

import SettingsGeoModal from '@modals/SettingsGeoModal';

const meta: Meta<typeof SettingsGeoModal> = {
	component: SettingsGeoModal,
};

export default meta;

type Story = StoryObj<typeof SettingsGeoModal>;

export const Primary: Story = {
	args: {
		open: true,
	},
};
