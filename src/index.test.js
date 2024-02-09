import indexModule from './index';

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

test('Shift each character (positive shift)', () => {
  const str = 'Some string to test caesarCipher Function';
  const positiveShiftFactor = 3;

  expect(indexModule.caesarCipher(str, positiveShiftFactor)).toBe(
    'Vrph vwulqj wr whvw fdhvduFlskhu Ixqfwlrq'
  );
});
