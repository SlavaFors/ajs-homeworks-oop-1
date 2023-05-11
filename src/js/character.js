export default class Character {
  constructor(name, type) {
    if (typeof name !== 'string' || (name.length < 2 || name.lenght > 10)) {
      throw new Error(
        'Допускаются только имена длиной от 2 символов и не более 10',
      );
    }
    if (typeof type !== 'string') {
      throw new Error('Тип класса должен быть строкой');
    }

    this.name = name;
    this.type = type;
    this.health = 100;
    this.level = 1;
    this.attack = undefined;
    this.defence = undefined;
  }
}
