'use strict';

// document.addEventListener("DOMContentLoaded", namFunction); вызов функцию после загрузки DOM


// Функция Радном Число
function randomSize(size) {
  return Math.floor(Math.random() * size);
}

// Сохраняем случайные кординаты сундука
var cord = {
  width: randomSize(1400),
  height: randomSize(260)
};

document.getElementById('game').addEventListener('click', startGame, false);

console.log(cord.width, cord.height);

function startGame(e) {
  var x = e.clientX;
  var y = e.clientY;

  if (x > cord.width) {
    console.log(x);
   var resultWidth = x - cord.width;
    console.log("Правильная ширина в районе" + resultWidth + "px");
  } else {
    console.log(y);
    var resultHeight = x - cord.height;
    console.log("Правильная высота в районе" + resultHeight + "px");
  }

}

