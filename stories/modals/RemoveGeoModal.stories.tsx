import type { Meta, StoryObj } from '@storybook/react';

import RemoveGeoModal from '@modals/RemoveGeoModal';

const meta: Meta<typeof RemoveGeoModal> = {
	component: RemoveGeoModal,
};

export default meta;

type Story = StoryObj<typeof RemoveGeoModal>;

export const Primary: Story = {
	args: {
		open: true,
	},
};
