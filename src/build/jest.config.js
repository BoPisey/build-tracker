module.exports = {
  displayName: 'build',
  testEnvironment: 'node',
  rootDir: './',
  roots: ['<rootDir>/src'],
  transform: {
    '^.+\\.ts$': 'babel-jest'
  }
};
