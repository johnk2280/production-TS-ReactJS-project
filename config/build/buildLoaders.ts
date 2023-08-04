import type webpack from 'webpack';
import { type BuildOptions } from './types/config';
import { buildCssLoader } from './loaders/buildCssLoader';
import { buildBabelLoader } from './loaders/buildBabelLoader';

export function buildLoaders (options: BuildOptions): webpack.RuleSetRule[] {
    const { isDev } = options;
    const svgLoader = {
        test: /\.svg$/,
        use: ['@svgr/webpack']
    };

    const cssLoader = buildCssLoader(isDev);

    const fileLoader = {
        test: /\.(png|jpe?g|gif|woff2|woff)$/i,
        use: [
            {
                loader: 'file-loader'
            }
        ]
    };

    const typescriptLoader = {
        test: /\.tsx?$/,
        use: 'ts-loader',
        exclude: /node_modules/
    };

    const babelLoader = buildBabelLoader(options);

    return [
        babelLoader,
        typescriptLoader,
        cssLoader,
        svgLoader,
        fileLoader
    ];
}
