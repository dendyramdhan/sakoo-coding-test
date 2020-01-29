const lingkaranBulat = require('./lingkaranBulat');

test('adds n = 12 and thisNumber = 11 to equal 5', () => {
  expect(lingkaranBulat(12, 11)).toBe(5);
});

test('adds n = 10 and thisNumber = 4 to equal 9', () => {
  expect(lingkaranBulat(10, 4)).toBe(9);
});