module.exports = {
    setupFilesAfterEnv: ['<rootDir>setupTests.js'],
    moduleNameMapper: {
        '\\.(css|less|pcss)$': 'identity-obj-proxy',
        '\\.(svg)$': '<rootDir>/mock/svgMock.js',
    },
};
