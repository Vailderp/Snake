var snake_colors = ['green','lime','lightgreen'];
var snake = {
  color: snake_colors[Math.ceil(Math.random() * snake_colors.length - 1)],
  speed: 5 / 1, // cell per 1 sec
}
var steps_snake = [];
