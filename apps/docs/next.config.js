const withTM = require('next-transpile-modules')(['design-system']);

/** @type {import('next').NextConfig} */
const config = {
    reactStrictMode: true,
};

module.exports = withTM(config);
