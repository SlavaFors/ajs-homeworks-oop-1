/* eslint-disable no-unused-vars */
import Swordsman from '../Swordsman';

test('should return normal char', () => {
  const char = new Swordsman('Rojeti');
  const result = {
    name: 'Rojeti',
    type: 'Swordsman',
    attack: 40,
    defence: 10,
    health: 100,
    level: 1,
  };
  expect(char).toEqual(result);
});

test('testing for invalid name', () => {
  const error = 'Допускаются только имена длиной от 2 символов и не более 10';
  expect(() => {
    const char = new Swordsman('J');
  }).toThrow(error);
});

test('testing for invalid type', () => {
  const error = 'Тип класса должен быть строкой';
  expect(() => {
    const char = new Swordsman('Aerin', 13);
  }).toThrow(error);
});
