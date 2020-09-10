const greet = require('./greet.js');

test('it returns a greeting and name of the person being greeted', () => {
  expect(greet('Katie')).toBe('Hi, Katie!');
});