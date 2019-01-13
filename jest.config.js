module.exports = {
  collectCoverage: true,
  collectCoverageFrom: ["src/**/*.ts"],
  coverageThreshold: {
    global: {
      statements: 100,
    },
  },
  preset: "ts-jest",
  testEnvironment: "node",
};
