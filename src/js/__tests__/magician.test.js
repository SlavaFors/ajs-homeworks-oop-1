/* eslint-disable no-unused-vars */
import Magician from '../Magician';

test('should return normal char', () => {
  const char = new Magician('Merlin');
  const result = {
    name: 'Merlin',
    type: 'Magician',
    attack: 10,
    defence: 40,
    health: 100,
    level: 1,
  };
  expect(char).toEqual(result);
});

test('testing for invalid name', () => {
  const error = 'Допускаются только имена длиной от 2 символов и не более 10';
  expect(() => {
    const char = new Magician('ы');
  }).toThrow(error);
});

test('testing for invalid type', () => {
  const error = 'Тип класса должен быть строкой';
  expect(() => {
    const char = new Magician('Гарри', 13);
  }).toThrow(error);
});
