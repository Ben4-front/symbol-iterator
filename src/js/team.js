// src/js/Team.js

export default class Team {
  constructor() {
    this.characters = [
      {
        name: 'Лучник',
        type: 'Bowman',
        health: 50,
        level: 1,
        attack: 40,
        defence: 10,
      },
      {
        name: 'Маг',
        type: 'Magician',
        health: 40,
        level: 1,
        attack: 50,
        defence: 5,
      },
      {
        name: 'Воин',
        type: 'Swordsman',
        health: 60,
        level: 1,
        attack: 30,
        defence: 20,
      },
    ];
  }

  /**
   * Реализация итератора для класса Team.
   * Это генератор, который будет по одному "выдавать" (yield)
   * персонажей из массива this.characters.
   */
  *[Symbol.iterator]() {
    // Перебираем всех персонажей в команде
    for (const character of this.characters) {
      // и "выдаем" их по одному
      yield character;
    }
  }
}