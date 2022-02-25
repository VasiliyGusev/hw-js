(function cessShow() {
  let chess = document.querySelector('.ch-wrap');
  let num = 0;
  for (let i = 0; i < 8; i++) {
    for (let j = 0; j < 8; j++) {
      if (num % 2 == 0) {
        chess.innerHTML += `<div class='ch-item'></div>`;
      } else {
        chess.innerHTML += `<div class='ch-item ch-black'></div>`;
      }
      num++;
    }
    num++;
  }
})();