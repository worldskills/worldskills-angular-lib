import type { StorybookConfig } from '@storybook/angular';
import * as path from 'path';

const config: StorybookConfig = {
  stories: [
    '../projects/worldskills-ng-tester-prime/src/**/*.stories.@(ts|mdx)',
  ],
  addons: [
    '@storybook/addon-essentials',
    '@storybook/addon-interactions',
  ],
  framework: {
    name: '@storybook/angular',
    options: {},
  },
  webpackFinal: async (config) => {
    config.resolve = config.resolve ?? {};
    config.resolve.alias = {
      ...config.resolve.alias,
      'worldskills-ng-auth': path.resolve(process.cwd(), 'dist/worldskills-ng-auth/fesm2022/worldskills-ng-auth.mjs'),
    };
    return config;
  },
};

export default config;
