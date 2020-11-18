var click_W = () => {
  if(div_rnd - 20 > -1){
    document.getElementById(`div${div_rnd - 20}`).style.background = snake.color;
    document.getElementById(`div${div_rnd}`).style.background = 'white';
    apple_claims();
    div_rnd -= 20;
    steps_snake.push(`div${div_rnd}`);
    claim_apple.draw();
    claim_apple.clear();
  } else {
    confirm("Вы проиграли");
    snakediv.remove();
  }
}
var click_S = () => {
  if(div_rnd + 20 < 401){
    document.getElementById(`div${div_rnd + 20}`).style.background = snake.color;
    document.getElementById(`div${div_rnd}`).style.background = 'white';
    apple_claims();
    div_rnd += 20;
    steps_snake.push(`div${div_rnd}`);
    claim_apple.draw();
    claim_apple.clear();
  } else {
    confirm("Вы проиграли");
    snakediv.remove();
  }
}
var click_A = () => {
  if((div_rnd) % 20 != 0){
    document.getElementById(`div${div_rnd - 1}`).style.background = snake.color;
    document.getElementById(`div${div_rnd}`).style.background = 'white';
    apple_claims();
    div_rnd -= 1;
    steps_snake.push(`div${div_rnd}`);
    claim_apple.draw();
    claim_apple.clear();
  } else {
    confirm("Вы проиграли");
    snakediv.remove();
  }
}
var click_D = () => {
  if((div_rnd + 1) % 20 != 0){
    document.getElementById(`div${div_rnd + 1}`).style.background = snake.color;
    document.getElementById(`div${div_rnd}`).style.background = 'white';
    apple_claims();
    div_rnd +=1;
    steps_snake.push(`div${div_rnd}`);
    claim_apple.draw();
    claim_apple.clear();
  } else {
    confirm("Вы проиграли");
    snakediv.remove();
  }
}
