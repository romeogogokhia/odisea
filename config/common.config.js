const Path = require('path');
const Webpack = require('webpack');
const CopyWebpackPlugin = require('copy-webpack-plugin');
const HtmlWebpackPlugin = require('html-webpack-plugin');
const MiniCssExtractPlugin = require('mini-css-extract-plugin');
const CleanWebpackPlugin = require('clean-webpack-plugin');
const ImageminPlugin = require('imagemin-webpack-plugin').default;
const autoprefixer = require('autoprefixer');

const opts = {
    rootDir: process.cwd(),
    devBuild: process.env.NODE_ENV !== 'production',
};

module.exports = {
    entry: {
        app: './src/js/app.js',
        noUiSlider: './src/js/noUiSlider.js',
        slickCustom: './src/js/slick-custom.js',
        slickTabs: './src/js/slick-tabs.js',
        productListTabs: './src/js/product-list-tabs',
        registerTab: './src/js/register-tab',

        fonts: './src/styles/fonts.scss',
        styles: './src/styles/main.scss',
    },
    output: {
        path: Path.join(opts.rootDir, 'public'),
        pathinfo: opts.devBuild,
        //filename:  opts.devBuild ? 'js/[name].bundle.js' : 'js/[name].[contenthash].bundle.js'
        filename: 'js/[name].bundle.js',
    },

    optimization: {
        splitChunks: {
            cacheGroups: {
                styles: {
                    name: 'styles',
                    test: /\.css$/,
                    chunks: 'all',
                    enforce: true
                },
                commons: {
                    chunks: 'all',
                    minChunks: 2,
                    maxInitialRequests: 5, // The default limit is too small to showcase the effect
                    minSize: 0 // This is example is too small to create commons chunks
                },
                vendor: {
                    test: /node_modules/,
                    chunks: 'all',
                    name: 'vendor',
                    priority: 10,
                    enforce: true
                }
            }
        },
    },
    plugins: [
        new CleanWebpackPlugin(['public'], {
            root: Path.join(__dirname, '..')
        }),
        new MiniCssExtractPlugin({
            //filename: opts.devBuild ? 'styles/[name].bundle.css' : 'styles/[name].[contenthash].bundle.css',
            filename: 'styles/[name].bundle.css',
        }),
        new CopyWebpackPlugin([
            {from: 'src/assets', to: 'assets'},
        ]),
        new ImageminPlugin({test: /\.(jpe?g|png|gif|svg)$/i}),

        new Webpack.ProvidePlugin({
            $: 'jquery',
            jQuery: 'jquery',
            'window.jQuery': 'jquery',
            noUiSlider: 'nouislider',
        }),

        new Webpack.ContextReplacementPlugin(
            /moment[\/\\]locale$/,
              /ru|ka/
        ),

        new HtmlWebpackPlugin({
            filename: './index.html',
            template: './src/index.html',
            chunks: ['fonts', 'styles', 'vendor', 'app', 'slickCustom', 'slickTabs']
        }),
        new HtmlWebpackPlugin({
            filename: './cart.html',
            template: './src/cart.html',
            chunks: ['fonts', 'styles', 'vendor', 'app']
        }),
        new HtmlWebpackPlugin({
            filename: './about-us.html',
            template: './src/about-us.html',
            chunks: ['fonts', 'styles', 'vendor', 'app']
        }),
        new HtmlWebpackPlugin({
            filename: './service.html',
            template: './src/service.html',
            chunks: ['fonts', 'styles', 'vendor', 'app']
        }),
        new HtmlWebpackPlugin({
            filename: './vacancies.html',
            template: './src/vacancies.html',
            chunks: ['fonts', 'styles', 'vendor', 'app']
        }),
        new HtmlWebpackPlugin({
            filename: './vacancies-detailed.html',
            template: './src/vacancies-detailed.html',
            chunks: ['fonts', 'styles', 'vendor', 'app']
        }),
        new HtmlWebpackPlugin({
            filename: './product-list.html',
            template: './src/product-list.html',
            chunks: ['fonts', 'styles', 'vendor', 'app', 'noUiSlider', 'productListTabs']
        }),
        new HtmlWebpackPlugin({
            filename: './product-details.html',
            template: './src/product-details.html',
            chunks: ['fonts', 'styles', 'vendor', 'app', 'slickCustom']
        }),
        new HtmlWebpackPlugin({
            filename: './contact.html',
            template: './src/contact.html',
            chunks: ['fonts', 'styles', 'vendor', 'app']
        }),
        new HtmlWebpackPlugin({
            filename: './login.html',
            template: './src/login.html',
            chunks: ['fonts', 'styles', 'vendor', 'app']
        }),
        new HtmlWebpackPlugin({
            filename: './register.html',
            template: './src/register.html',
            chunks: ['fonts', 'styles', 'vendor', 'app', 'registerTab']
        }),
        new HtmlWebpackPlugin({
            filename: './checkout-step-1.html',
            template: './src/checkout-step-1.html',
            chunks: ['fonts', 'styles', 'vendor', 'app']
        }),
        new HtmlWebpackPlugin({
            filename: './checkout-step-2.html',
            template: './src/checkout-step-2.html',
            chunks: ['fonts', 'styles', 'vendor', 'app']
        }),
        new HtmlWebpackPlugin({
            filename: './checkout-step-3.html',
            template: './src/checkout-step-3.html',
            chunks: ['fonts', 'styles', 'vendor', 'app']
        }),
        new HtmlWebpackPlugin({
            filename: './checkout-step-4.html',
            template: './src/checkout-step-4.html',
            chunks: ['fonts', 'styles', 'vendor', 'app']
        }),
        new HtmlWebpackPlugin({
            filename: './profile-personal-data.html',
            template: './src/profile-personal-data.html',
            chunks: ['fonts', 'styles', 'vendor', 'app']
        }),
        new HtmlWebpackPlugin({
            filename: './profile-pass-change.html',
            template: './src/profile-pass-change.html',
            chunks: ['fonts', 'styles', 'vendor', 'app']
        }),
        new HtmlWebpackPlugin({
            filename: './profile-order-history.html',
            template: './src/profile-order-history.html',
            chunks: ['fonts', 'styles', 'vendor', 'app']
        }),
        new HtmlWebpackPlugin({
            filename: './profile-order-history-details.html',
            template: './src/profile-order-history-details.html',
            chunks: ['fonts', 'styles', 'vendor', 'app']
        }),
        new HtmlWebpackPlugin({
            filename: './profile-my-addresses.html',
            template: './src/profile-my-addresses.html',
            chunks: ['fonts', 'styles', 'vendor', 'app']
        }),

    ],
    module: {
        rules: [
            {
                test: /\.js$/,
                exclude: /(node_modules)/,
                loader: ['babel-loader']
            },

            {
                test: require.resolve('jquery'),
                use: [{
                    loader: 'expose-loader',
                    options: 'jQuery'
                }, {
                    loader: 'expose-loader',
                    options: '$'
                }]
            },

            {
                test: /\.(css|scss|sass)$/,
                use: [
                    {
                        loader: MiniCssExtractPlugin.loader,
                    },
                    {
                        loader: 'css-loader',
                        options: {
                            minimize: opts.devBuild ? false : true,
                            url: false,
                            sourceMap: true,
                        }
                    },
                    {
                        loader: 'postcss-loader',
                        options: {
                            url: true,
                            plugins: () => [autoprefixer({
                                add: opts.devBuild ? false : true,
                            })],
                            sourceMap: true,
                        }
                    },
                    'resolve-url-loader',
                    'sass-loader?sourceMap' // sass-loader?sourceMap  when 'resolve-url-loader' enabled
                ]
            },

            // Load fonts
            {
                test: /\.(ttf|eot|svg|woff(2)?)(\?[a-z0-9=&.]+)?$/,
                loader: 'url-loader',
                options: {
                    limit: 100000
                }
            },
            // Load images
            {
                test: /\.(svg|png|jpg|jpeg|gif?)(\?[a-z0-9=&.]+)?$/,
                loader: 'url-loader',
                options: {
                    limit: 100000
                }
            }

        ]
    },
    resolve: {
        extensions: ['.js', '.scss'],
        modules: ['node_modules'],
        alias: {
            request$: 'xhr'
        }
    }
};
