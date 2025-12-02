module.exports = {
  transform: {
    "^.+\\.[jt]sx?$": "babel-jest",
  },
  testEnvironment: "node",
  roots: ["<rootDir>/src/__tests__"],
  moduleFileExtensions: ["js", "jsx", "json"],
};
