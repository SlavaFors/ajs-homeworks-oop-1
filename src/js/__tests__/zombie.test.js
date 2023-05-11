/* eslint-disable no-unused-vars */
import Zombie from '../Zombie';

test('should return normal char', () => {
  const char = new Zombie('Kyrts');
  const result = {
    name: 'Kyrts',
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
    const char = new Zombie('J');
  }).toThrow(error);
});

test('testing for invalid type', () => {
  const error = 'Тип класса должен быть строкой';
  expect(() => {
    const char = new Zombie('Krt', 13);
  }).toThrow(error);
});
