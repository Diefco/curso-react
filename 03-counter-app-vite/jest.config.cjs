import { Config } from '@jest/types';

module.exports = {
	testEnvironment: 'jest-environment-jsdom',
	setupFiles: ['./jest.setup.js'],
};
