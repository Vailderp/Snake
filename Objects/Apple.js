var apple = {
  colors: ['LightCoral', 'Salmon', 'DarkSalmon', 'LightSalmon', 'Crimson', 'Red', 'IndianRed', 'FireBrick', 'Brown', 'DarkRed', 'Maroon', 'OrangeRed'],
  spawn_rate: 1 / 5, /* 1 apple per 5 sec */
  eats: 0,
}
var apple_div_rnd = 0;
var spawn_apple = () => {
  document.getElementById(`div${apple_div_rnd}`).style.background = 'white';
  apple_div_rnd = Math.ceil(Math.random() * 399);
  document.getElementById(`div${apple_div_rnd}`).style.background = apple.colors[Math.ceil(Math.random() * apple.colors.length)];
}
var claim_apple = {
  draw: () => {
    if(steps_snake[steps_snake.length - (apple.eats + 1)] != undefined){
      for (var i = 0 ; i < apple.eats + 1 ; i++) {
        document.getElementById(steps_snake[steps_snake.length - (i + 1)]).style.background = snake.color;
        if (document.getElementById(steps_snake[steps_snake.length - (i + 1)]).id != `div${div_rnd}`) {
          document.getElementById(steps_snake[steps_snake.length - (i + 1)]).className = 'div_snake';
        }
        if (i != 0 && document.getElementById(steps_snake[steps_snake.length - (i + 1)]).className == document.getElementById(`div${div_rnd}`).className) {
        all_div.style.display = "none";
        alert(`Game over`);
        }
      }
    }
  },
  clear: () => {
    if(steps_snake[steps_snake.length - (apple.eats + 2)] != undefined){
      document.getElementById(steps_snake[steps_snake.length - (apple.eats + 2)]).style.background = 'white';
      document.getElementById(steps_snake[steps_snake.length - (apple.eats + 2)]).className = 'div';
    }
  },
}

var apple_claims = () => {
  if (document.getElementById(`div${div_rnd}`).id == document.getElementById(`div${apple_div_rnd}`).id) {
    apple.eats += 1;
  }
}
