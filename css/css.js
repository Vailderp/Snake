window.innerWidth > window.innerHeight ? all_div_width = Math.ceil(window.innerHeight / 1.5 /*+ 20 * 2*/) : all_div_width = Math.ceil(window.innerWidth / 1.5 /*+ 20 * 2*/);
all_div.style.width  = all_div_width;
all_div.style.height = all_div_width;
all_div.style.marginLeft = `${window.innerWidth / 2 - all_div_width / 2}px`
for (var i = 0 ; i < 400 ; i ++ ) {
  document.getElementById('all_div').innerHTML += `<div id="div${i}" class="div" style="
    width:  ${all_div_width / 20 /*- 2*/}px;
    height: ${all_div_width / 20 /*- 2*/}px;
  "></div>`
}
