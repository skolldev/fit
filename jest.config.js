/* eslint-disable */
module.exports = {
  preset: "ts-jest/presets/js-with-ts",
  testEnvironment: "jest-environment-jsdom",
  moduleFileExtensions: ["ts", "tsx", "js"],
  transform: {
    "^.+\\.(ts|tsx)$": "ts-jest"
  },
  moduleNameMapper: {
    "\\.css$": require.resolve("./test/style-mock.js")
  },
  testMatch: ["**/__tests__/*.(ts|tsx)"],
  setupFilesAfterEnv: ["./jest.setup.ts"],
  testPathIgnorePatterns: ["./.next/", "./node_modules/"],
  globals: {
    "ts-jest": {
      tsConfig: "tsconfig.jest.json"
    }
  }
};
