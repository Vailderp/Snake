/******************************************************************************/
var code_keyW = setInterval(()=>{},1);
var code_keyS = setInterval(()=>{},1);
var code_keyA = setInterval(()=>{},1);
var code_keyD = setInterval(()=>{},1);
var div_rnd = Math.ceil(Math.random() * 400);
var kw = 0;
var ks = 0;
var ka = 0;
var kd = 0;
document.getElementById(`div${div_rnd}`).style.background = snake.color;
document.onkeydown = e =>{
  if(e.code == 'KeyW' || e.code == 'ArrowUp'){
    if (ks == 0) {
      code_keyS = clearInterval(code_keyS);
      code_keyA = clearInterval(code_keyA);
      code_keyD = clearInterval(code_keyD);
      kw +=1;
      ks = 0;
      ka = 0;
      kd = 0;
      if (kw < 2){
        click_W();
        code_keyW = setInterval (()=>{
          click_W();
        }, 1000 / snake.speed);
      }
    }
  }
  if(e.code == 'KeyS' || e.code == 'ArrowDown'){
    if (kw == 0) {
      code_keyW = clearInterval(code_keyW);
      code_keyA = clearInterval(code_keyA);
      code_keyD = clearInterval(code_keyD);
      kw = 0;
      ks += 1;
      ka = 0;
      kd = 0;
      if (ks < 2){
        click_S();
        code_keyS = setInterval (()=>{
          click_S();
        }, 1000 / snake.speed);
      }
    }
  }
  if(e.code == 'KeyA' || e.code == 'ArrowLeft'){
    if (kd == 0) {
      code_keyW = clearInterval(code_keyW);
      code_keyS = clearInterval(code_keyS);
      code_keyD = clearInterval(code_keyD);
      kw = 0;
      ks = 0;
      ka += 1;
      kd = 0;
      if (ka < 2){
        click_A();
        code_keyA = setInterval (()=>{
          click_A();
        }, 1000 / snake.speed);
      }
    }
  }
  if(e.code == 'KeyD' || e.code == 'ArrowRight'){
    if (ka == 0) {
      code_keyW = clearInterval(code_keyW);
      code_keyA = clearInterval(code_keyA);
      code_keyS = clearInterval(code_keyS);
      kw = 0;
      ks = 0;
      ka = 0;
      kd += 1;
      if (kd < 2){
        click_D();
        code_keyD = setInterval (()=>{
          click_D();
        }, 1000 / snake.speed);
      }
    }
  }
}
/******************************************************************************/
var spawn_apple_interval = setInterval(()=>{
  spawn_apple();
}, 1000 / apple.spawn_rate);
