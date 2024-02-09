const capitalize = (str) => {
  return str.charAt(0).toUpperCase() + str.slice(1);
};

const reverseString = (str) => {
  return str.split('').reverse().join('');
};

module.exports = {
  capitalize,
  reverseString,
};
