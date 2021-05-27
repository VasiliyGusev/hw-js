let mover = {

  /**
   * получает и отдаёт направление перемещения от игрока.
   * @returns {int} Возвращаем направление, введённое пользователем.
   */
  getDirection () {
    const availableDirections = [1, 2, 3, 4, 6, 7, 8, 9];
    while (true) {
      let direction = +prompt('Введите число(1 2 3 4 6 7 8 или 9), для перемещения. "Отмена" - выход.');
      if (isNaN(direction)) {
        return null;
      } 
      if (!availableDirections.includes(direction)) {
        return null;
      }
      return direction;
    }     
  },


  /**
   * Отдаёт следующую точку в которой будет находиться пользователь после движения.
   * @param {int} direction Направление движения игрока. 
   * @returns {{x: int, y: int}} Слледующая позиция игрока.
   */
  getNextPosition(direction) {
    const nextPosition = {
      x: player.x, 
      y: player.y
    };
    switch (direction) {
      case 1:
        nextPosition.x--;
        nextPosition.y++;
        break;
      case 2:
        nextPosition.y++;
        break;
      case 3:
        nextPosition.x++;
        nextPosition.y++;
        break;
      case 4:
        nextPosition.x--;
        break;
      case 7:
        nextPosition.x--;
        nextPosition.y--;
        break;
      case 6:
        nextPosition.x++;
        break;
      case 8:
        nextPosition.y--;
        break;
      case 9:
        nextPosition.x++;
        nextPosition.y--;
        break;
    }
    return nextPosition;
  }
};