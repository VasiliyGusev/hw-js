/**
 * Объект игрока, здесь будут храниться все методы и свойства связанные сним.
 * @property {int} x Позиция по X-координате
 * @property {int} y Позиция по Y-координате
 */
const player = {
  x: 0,
  y: 0,

  /**
   * Двигает игрока по переданному направлению.
   * @param {{x: int, y: int}} nextPoint Следующая точка пользователя
   */
  move(nextPoint) {
    if ((nextPoint.x < 0 || nextPoint.y < 0) || (nextPoint.x > 9 || nextPoint.y > 9)) {
      alert('Дальше туда нельзя - обрыв :(')
      return;
    }
    this.x = nextPoint.x;
    this.y = nextPoint.y;
  },
};