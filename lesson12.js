//Функция генерации случайного числа
function generate() {
  let password = [];
  let arr = ["0", "1", "2", "3", "4", "5", "6", "7", "8", "9"];
  for (var j = 0; j < 8; j++) {
    for (var i = 0; i < 1; i++) {
      let rand = Math.floor(Math.random() * arr.length);
      let letter = String(rand);
      password.push(letter);
    }
  }
  document.getElementById('generateResult').innerHTML = password[0] + password[1] + password[2] + password[3] + password[4] + password[5] + password[6] + password[7];
}
