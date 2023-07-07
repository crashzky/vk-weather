import type { Preview } from '@storybook/react';

import 'antd/dist/reset.css';
import 'reset.css';
import '@styles/global.css';

const preview: Preview = {
	parameters: {
		actions: { argTypesRegex: '^on[A-Z].*' },
		controls: {
			matchers: {
				color: /(background|color)$/i,
				date: /Date$/,
			},
		},
	},
};

export default preview;
