module.exports = {
    stories: ['../components/**/*.stories.tsx'],
    staticDirs: ['../components'],
    addons: [
        '@storybook/addon-a11y',
        '@storybook/addon-actions',
        '@storybook/addon-controls',
        '@storybook/addon-docs',
        '@storybook/addon-essentials',
        '@storybook/addon-interactions',
        '@storybook/addon-links',
        {
            name: '@storybook/addon-postcss',
            options: {
                postcssLoaderOptions: {
                    implementation: require('postcss'),
                },
            },
        },
    ],
    framework: '@storybook/react',
    core: {
        builder: '@storybook/builder-webpack5',
    },
    features: {
        interactionsDebugger: true,
    },
};
