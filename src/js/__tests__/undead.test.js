/* eslint-disable no-unused-vars */
import Undead from '../Undead';

test('should return normal char', () => {
  const char = new Undead('Ghoul');
  const result = {
    name: 'Ghoul',
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
    const char = new Undead('ы');
  }).toThrow(error);
});

test('testing for invalid type', () => {
  const error = 'Тип класса должен быть строкой';
  expect(() => {
    const char = new Undead('Гуль', 13);
  }).toThrow(error);
});
