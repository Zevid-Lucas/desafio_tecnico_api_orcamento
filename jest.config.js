module.exports = {
  roots: ["<rootDir>/tests"],
  collectCoverageFrom: ["<rootDir>/tests/**/*.js"],
  coverageDirectory: "coverage",
  testEnvironment: "node",
  transform: {
    ".+\\.ts$": "ts-jest",
  },
};
