const pengendaraMalam = require('./pengendaraMalam');

test('adds n = 120 to equal 2', () => {
  expect(pengendaraMalam(120)).toBe(2);
});

test('adds n = 312 to equal 8', () => {
  expect(pengendaraMalam(312)).toBe(8);
});