/* eslint-disable no-unused-vars */
import Undead from '../Undead';

test('should return normal char', () => {
  const char = new Undead('Kejli');
  const result = {
    name: 'Kejli',
    type: 'Undead',
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
    const char = new Undead('J');
  }).toThrow(error);
});

test('testing for invalid type', () => {
  const error = 'Тип класса должен быть строкой';
  expect(() => {
    const char = new Undead('Koni', 13);
  }).toThrow(error);
});
