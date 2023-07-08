import type { Meta, StoryObj } from '@storybook/react';

import NewGeoModal from '@modals/NewGeoModal';

const meta: Meta<typeof NewGeoModal> = {
	component: NewGeoModal,
};

export default meta;

type Story = StoryObj<typeof NewGeoModal>;

export const Primary: Story = {
	args: {
		open: true,
	},
};
