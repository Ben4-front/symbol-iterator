// src/js/app.js

import Team from './team';

// Создаем экземпляр команды
const myTeam = new Team();

// Теперь мы можем использовать цикл for...of для перебора персонажей в команде,
// потому что мы реализовали Symbol.iterator.
console.log('Персонажи в команде:');
for (const character of myTeam) {
  console.log(character);
}