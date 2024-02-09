const indexModule = require('./index');

test('Capitalize first character', () => {
  expect(indexModule.capitalize('abc')).toBe('Abc');
});
