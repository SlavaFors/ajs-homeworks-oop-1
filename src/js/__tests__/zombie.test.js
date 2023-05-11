/* eslint-disable no-unused-vars */
import Zombie from '../Zombie';

test('should return normal char', () => {
  const char = new Zombie('Shaun');
  const result = {
    name: 'Shaun',
    type: 'Zombie',
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
    const char = new Zombie('ы');
  }).toThrow(error);
});

test('testing for invalid type', () => {
  const error = 'Тип класса должен быть строкой';
  expect(() => {
    const char = new Zombie('Шон', 13);
  }).toThrow(error);
});
