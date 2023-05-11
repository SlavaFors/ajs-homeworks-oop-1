/* eslint-disable no-unused-vars */
import Bowman from '../Bowman';

test('should return normal char', () => {
  const char = new Bowman('Teliomir');
  const result = {
    name: 'Teliomir',
    type: 'Bowman',
    attack: 25,
    defence: 25,
    health: 100,
    level: 1,
  };
  expect(char).toEqual(result);
});

test('testing for invalid name', () => {
  const error = 'Допускаются только имена длиной от 2 символов и не более 10';
  expect(() => {
    const char = new Bowman('J');
  }).toThrow(error);
});

test('testing for invalid type', () => {
  const error = 'Тип класса должен быть строкой';
  expect(() => {
    const char = new Bowman('Длинноухий', 13);
  }).toThrow(error);
});
