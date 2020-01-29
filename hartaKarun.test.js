const hartaKarun = require('./hartaKarun');

test('adds value1 = 7, weight1 = 4, value2 = 12, weight2 = 6 and maxKeranjang = 8 to equal 12', () => {
  expect(hartaKarun(7, 4, 12, 6, 8)).toBe(12);
});

test('adds value1 = 8, weight1 = 8, value2 = 1, weight2 = 1 and maxKeranjang = 9 to equal 9', () => {
  expect(hartaKarun(8, 8, 1, 1, 9)).toBe(9);
});