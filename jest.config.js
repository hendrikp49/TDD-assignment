const nextJest = require("next/jest");
const createJestConfig = nextJest({
  dir: "./",
});
const config = {
  coverageProvider: "v8",
  testEnvironment: "jsdom",
  moduleNameMapper: {
    "^@/components/(.*)$": "<rootDir>/components/$1",
    "^@/pages/(.*)$": "<rootDir>/pages/$1",
  },
  setupFilesAfterEnv: ["<rootDir>/jest.setup.js"],
  collectCoverage: true,
  collectCoverageFrom: [
    "<rootDir>/src/**/*.{js,jsx,ts,tsx}",
    "!<rootDir>/src/pages/api/*.{js,jsx,ts,tsx}",
    "!<rootDir>/src/pages/fonts/*.{js,jsx,ts,tsx}",
    "!<rootDir>/src/pages/*.js",
  ],
};
module.exports = createJestConfig(config);
