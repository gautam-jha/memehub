const path = require('path');

module.exports = {
    images: {
        domains: ['i2.wp.com']
    },
    reactStrictMode: true,
    trailingSlash: true,
    webpackDevMiddleware: config => {
        const newConfig = { ...config };
        newConfig.watchOptions = {
            poll: 1000,
            aggregateTimeout: 300
        };

        return newConfig;
    },
    sassOptions: {
        includePaths: [path.join(__dirname, 'styles')]
    },
    future: {
        webpack5: true
    }
};
