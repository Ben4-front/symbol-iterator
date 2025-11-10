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
   * Метод должен вернуть объект с методом next().
   */
  [Symbol.iterator]() {
    let currentIndex = 0;
    const characters = this.characters; // Сохраняем ссылку на массив

    // Возвращаем объект итератора
    return {
      // Метод next(), который будет вызываться на каждой итерации
      next() {
        // Проверяем, есть ли еще элементы для перебора
        if (currentIndex < characters.length) {
          // Если есть, возвращаем следующий элемент
          return {
            value: characters[currentIndex++], // Возвращаем значение и увеличиваем индекс
            done: false, // Итерация не закончена
          };
        }
        
        // Если элементов больше нет
        return {
          value: undefined, // Значения больше нет
          done: true, // Итерация закончена
        };
      },
    };
  }
}