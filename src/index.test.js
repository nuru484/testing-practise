const indexModule = require('./index');

test('Capitalize first character', () => {
  expect(indexModule.capitalize('abc')).toBe('Abc');
});

test('Reverse string', () => {
  expect(indexModule.reverseString('abc')).toBe('cba');
});
