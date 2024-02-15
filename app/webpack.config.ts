import type { Configuration } from 'webpack';
import { merge } from 'webpack-merge';
import grafanaConfig from './.config/webpack/webpack.config';
import path from 'path';
const config = async (env): Promise<Configuration> => {
  const baseConfig = await grafanaConfig(env);

  return merge(baseConfig, {
    resolve: {
      alias: {
        ioc: path.resolve(__dirname, path.join('src', 'ioc', process.env.IOC ?? 'default', 'index')),
      },
    },
    module: {
      rules: [
        {
          test: /\.[tj]sx?$/,
          use: {
            loader: 'swc-loader',
            options: {
              jsc: {
                parser: {
                  syntax: 'typescript',
                  tsx: true,
                  decorators: true,
                  dynamicImport: true,
                  orators: true,
                },
              },
            },
          },
        },
      ],
    },
  });
};

export default config;
