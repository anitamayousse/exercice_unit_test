const isEven = require('./utils/isEven');
const formatDate = require('./utils/formatDate')

test('if the number is even', () => {
  expect(isEven(2)).toBe(true);
});

test('if the number is not even', () => {
  expect(isEven(1)).toBe(false);
});

test('if the parameter is a string', () => {
  expect(isEven("abc")).toBe(false);
});

test('if the parameter is a string and containts a number', () => {
  expect(isEven("12")).toBe(true);
});

test('if the parameter is in yyyy-mm-dd format', () => {
  expect(formatDate("yyyy-mm-dd")).toBe("dd/mm/yyyy");
});

test('if the parameter is in yyyy-mm-dd format', () => {
  expect(formatDate(2)).toBe(null);
});