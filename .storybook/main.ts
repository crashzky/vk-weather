import type { StorybookConfig } from '@storybook/nextjs';
import path from 'path';
import fs from 'fs';

interface IPath {
	[index: string]: string[];
}

const config: StorybookConfig = {
	stories: ['../stories/**/*.mdx', '../stories/**/*.stories.@(js|jsx|ts|tsx)'],
	addons: [
		'@storybook/addon-links',
		'@storybook/addon-essentials',
		'@storybook/addon-interactions',
	],
	framework: {
		name: '@storybook/nextjs',
		options: {},
	},
	docs: {
		autodocs: 'tag',
	},
	webpackFinal: (config) => {
		const tsconfigRaw = fs.readFileSync(path.resolve(__dirname, '../tsconfig.json')).toString();
		const paths: IPath = JSON.parse(tsconfigRaw).compilerOptions.paths;

		for(let [alias, resolves] of Object.entries(paths)) {

			alias = alias.slice(0, alias.length - 2);

			let resolve = resolves[0];
			resolve = resolve.slice(2, resolve.length - 2);

			config.resolve!.alias![alias] = path.resolve(__dirname, `../${resolve}`);
		}
	  
		return config;
	},			
};

export default config;
