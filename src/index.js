const capitalize = (str) => {
  return str.charAt(0).toUpperCase() + str.slice(1);
};

const reverseString = (str) => {
  return str.split('').reverse().join('');
};

const calculator = {
  add: (a, b) => {
    return a + b;
  },
  subtract: (a, b) => {
    return a - b;
  },
  multiply: (a, b) => {
    return a * b;
  },
  divide: (a, b) => {
    if (b === 0) {
      throw new Error('Division by zero');
    }
    return a / b;
  },
};

const alphabet = 'abcdefghijklmnopqrstuvwxyz'.split('');

const caesarCipher = (str, shiftFactor) => {
  let result = '';

  for (const char of str) {
    let position;
    if (/[a-z]/.test(char)) {
      position = alphabet.indexOf(char.toLowerCase());
    } else if (/[A-Z]/.test(char)) {
      position = alphabet.indexOf(char.toLowerCase());
    } else {
      result += char;
      continue;
    }

    let newPosition = (position + shiftFactor) % 26;

    if (char === char.toUpperCase()) {
      result += alphabet[newPosition].toUpperCase();
    } else {
      result += alphabet[newPosition];
    }
  }

  return result;
};

console.log(caesarCipher('Some string to test caesarCipher Function@', 3));

module.exports = {
  capitalize,
  reverseString,
  calculator,
  caesarCipher,
};
