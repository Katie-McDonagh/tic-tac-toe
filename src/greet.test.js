import greet from './greet'

test('it returns a greeting and name of the person being greeted', () => {
  expect(greet('Katie')).toEqual('Hi Katie!');
});