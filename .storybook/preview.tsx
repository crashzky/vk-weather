import React from 'react';
import { Provider } from 'react-redux';
import type { Preview } from '@storybook/react';

import store from '@shared/store';

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
	decorators: [
		(Story) => (
		  <Provider store={store}>
			<Story />
		  </Provider>
		)
	],
};

export default preview;
