function player_f() {
  const number1 = Math.floor(Math.random() * (7 - 1) + 1);
  const number2 = Math.floor(Math.random() * (7 - 1) + 1);
  return { number1, number2 };
}

function dubal(num1, num2) {
  if (num1 === num2) return true;
  else {
    return false;
  }
}

function startGame() {    
  const player = Math.floor(Math.random() * (3 - 1) + 1);
  if (player === 1) {
    play_1(player);
  }
  if (player === 2) {
    play_2(player);
  }
}

function play_1(num1) {
  const obj_player = {
    id_user: num1,
    score: 0,
  };
  role_dice(obj_player);
}

function play_2(num2) {
  const obj_player = {
    id_user: num2,
    score: 0,
  };
  role_dice(obj_player);
}


function role_dice(obj_player) {
  const score_max = 100;
  const { number1, number2 } = player_f();
  const bool = dubal(number1, number2);
  if (!bool) {
    // obj_player.score += number1 + number2;
    console.log(obj_player);
    
    ("continiu");
  } else {
    ("pass");
  }
}
