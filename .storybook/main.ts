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
      '@worldskills/ng-auth': path.resolve(process.cwd(), 'projects/worldskills-ng-auth/src/public-api.ts'),
      '@worldskills/ng-ui': path.resolve(process.cwd(), 'projects/worldskills-ng-ui/src/public-api.ts'),
    };
    return config;
  },
};

export default config;
