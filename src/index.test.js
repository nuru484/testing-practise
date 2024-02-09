const indexModule = require('./index');

test('Capitalize first character', () => {
  expect(indexModule.capitalize('abc')).toBe('Abc');
});

test('Reverse string', () => {
  expect(indexModule.reverseString('abc')).toBe('cba');
});

test('Return calculation', () => {
  const a = 4;
  const b = 2;
  expect(indexModule.calculator.add(a, b)).toBe(a + b);
  expect(indexModule.calculator.subtract(a, b)).toBe(a - b);
  expect(indexModule.calculator.multiply(a, b)).toBe(a * b);
  expect(indexModule.calculator.divide(a, b)).toBe(a / b);
});
