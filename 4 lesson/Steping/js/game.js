let game = {
  //запускает игру
  run() {
    while (true) {
      //получаем направление от игрока
      const direction = mover.getDirection();
      if (direction === null) {
        alert('Игра окончена! Необходимо было ввести одно из чисел 1 2 3 4 6 7 8 или 9');
        console.log('Игра окончена!');
        return;
      }
      const nextPoint = mover.getNextPosition(direction);
      renderer.clear();
      player.move(nextPoint);
      renderer.render();
    }
  },

  //этот выполняется при открытии страницы.
  init() {
    console.log('Ваше положение на поле в виде О');
    renderer.render();
  }
};

game.init();

let gameStart = document.getElementById('run').onclick = function () {
  game.run();
};
