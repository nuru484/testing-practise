const indexModule = require('./index');

test('Capitalize first character', () => {
  expect(indexModule.capitalize('abc')).toBe('Abc');
});

test('Reverse string', () => {
  expect(indexModule.reverseString('abc')).toBe('cba');
});

test('Return calculation', () => {
  const a = 1;
  const b = 1;
  expect(indexModule.calculator.add(a, b)).toBe(a + b);
});
