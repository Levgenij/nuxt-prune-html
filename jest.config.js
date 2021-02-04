module.exports = {
    preset: '@nuxt/test-utils',
    setupFilesAfterEnv: [ './jest.setup.js' ],
    testTimeout: 999999,
    collectCoverage: true,
    collectCoverageFrom: [
        'lib/**/*.js',
        '!lib/config.**.js',
        '!lib/logger.js',
    ],
};
