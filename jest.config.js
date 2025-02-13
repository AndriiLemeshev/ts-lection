module.exports = {
    preset: 'ts-jest',
    testEnvironment: 'node',
    moduleDirectories: ["node_modules", "src"], // Important: Add "src" here for module resolution
    moduleNameMapper: {
      "^@/(.*)$": "<rootDir>/src/$1" // Example: Map @/components to src/components
    },
    collectCoverage: false,
};
